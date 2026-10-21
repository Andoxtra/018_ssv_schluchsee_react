import {createServer} from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {randomBytes, randomUUID, scryptSync, timingSafeEqual, createHash} from 'node:crypto';
import {mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync, statSync} from 'node:fs';
import {resolve, extname, basename, sep} from 'node:path';
import {parseNewsFile} from '../src/logic/news/newsSource.ts';

const hash = value => createHash('sha256').update(value).digest('hex');
export const passwordRecord = password => {
    const salt = randomBytes(16).toString('hex');
    return {salt, hash: scryptSync(password, salt, 64).toString('hex')};
};
const verify = (password, record) => typeof password === 'string' && password.length <= 1024 && timingSafeEqual(scryptSync(password, record.salt, 64), Buffer.from(record.hash, 'hex'));
const fail = (status, message) => Object.assign(new Error(message), {status});
const text = (value, max, required = true) => {
    if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw fail(400, 'Bitte prüfen Sie die Eingaben.');
    return value.trim();
};
const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
const articleInput = body => {
    const date = text(body.date, 10);
    if (!validDate(date) || typeof body.published !== 'boolean' || !Array.isArray(body.eventDates) || body.eventDates.length > 20 || !body.eventDates.every(d => typeof d === 'string' && validDate(d))) throw fail(400, 'Datum oder Veröffentlichungsstatus ist ungültig.');
    return {title: text(body.title, 200), date, author: text(body.author, 100), preview: text(body.preview, 600), content: text(body.content, 100000), published: body.published, reviewNote: text(body.reviewNote ?? '', 600, false), eventDates: body.eventDates};
};
const jsonBody = async (req, max = 150000) => {
    if (!req.headers['content-type']?.startsWith('application/json')) throw fail(415, 'JSON erwartet.');
    let size = 0; const chunks = [];
    for await (const chunk of req) {size += chunk.length; if (size > max) throw fail(413, 'Die Datei oder Nachricht ist zu groß.'); chunks.push(chunk);}
    try {const value = JSON.parse(Buffer.concat(chunks).toString()); if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(); return value;} catch {throw fail(400, 'Ungültige Anfrage.');}
};

export function createApp({dataDir, distDir, seedDir, origin = 'http://localhost:3001', credentials, secureCookies = false, trustProxy = false, localDevelopment = false}) {
    mkdirSync(dataDir, {recursive: true, mode: 0o700});
    const uploads = resolve(dataDir, 'uploads'); mkdirSync(uploads, {recursive: true, mode: 0o700});
    const db = new DatabaseSync(resolve(dataDir, 'club.sqlite'));
    db.exec(`PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS articles(id TEXT PRIMARY KEY, data TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, expires INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS messages(id TEXT PRIMARY KEY, data TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
    if (seedDir && !db.prepare("SELECT value FROM metadata WHERE key='seeded'").get()) {
        const insert = db.prepare('INSERT OR IGNORE INTO articles VALUES (?, ?)');
        db.exec('BEGIN');
        try {
            for (const name of readdirSync(seedDir).filter(name => name.endsWith('.md'))) {
                const article = parseNewsFile(name, readFileSync(resolve(seedDir, name), 'utf8'));
                insert.run(article.id, JSON.stringify(article));
            }
            db.prepare("INSERT INTO metadata VALUES ('seeded', '1')").run(); db.exec('COMMIT');
        } catch (error) {db.exec('ROLLBACK'); throw error;}
    }
    const canonicalOrigin = new URL(origin).origin;
    const localHosts = ['localhost', '127.0.0.1', '[::1]'];
    const configuredUrl = new URL(canonicalOrigin);
    const allowLocalAliases = localDevelopment && configuredUrl.protocol === 'http:' && localHosts.includes(configuredUrl.hostname);
    const isTrustedOrigin = (requestOrigin, localPort) => {
        if (requestOrigin === canonicalOrigin) return true;
        if (!allowLocalAliases) return false;
        try {
            const candidate = new URL(requestOrigin);
            return candidate.origin === requestOrigin && candidate.protocol === 'http:' &&
                localHosts.includes(candidate.hostname) &&
                [configuredUrl.port || '80', String(localPort)].includes(candidate.port || '80');
        } catch {return false;}
    };
    const attempts = new Map();
    const rateLimit = (key, count, duration) => {
        const now = Date.now();
        for (const [entry, value] of attempts) if (value.until < now) attempts.delete(entry);
        const value = attempts.get(key) ?? {count: 0, until: now + duration};
        value.count++; attempts.set(key, value);
        if (value.count > count) throw fail(429, 'Zu viele Versuche. Bitte später erneut versuchen.');
    };
    const session = req => {
        const token = req.headers.cookie?.split(';').map(v => v.trim()).find(v => v.startsWith('ssv_session='))?.slice(12);
        return token && db.prepare('SELECT token FROM sessions WHERE token=? AND expires>?').get(hash(token), Date.now());
    };
    const articles = () => db.prepare('SELECT data FROM articles').all().map(row => JSON.parse(row.data)).sort((a,b) => b.date.localeCompare(a.date));
    const getArticle = id => {const row = db.prepare('SELECT data FROM articles WHERE id=?').get(id); return row && JSON.parse(row.data);};
    const server = createServer(async (req, res) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        res.setHeader('Cache-Control', 'no-store');
        const send = (status, body) => {res.writeHead(status, {'Content-Type':'application/json; charset=utf-8'}); res.end(JSON.stringify(body));};
        try {
            const url = new URL(req.url, origin); const path = url.pathname;
            const clientAddress = trustProxy && typeof req.headers['x-forwarded-for'] === 'string' ? req.headers['x-forwarded-for'].split(',').at(-1).trim() : req.socket.remoteAddress;
            if (['POST','PUT','PATCH','DELETE'].includes(req.method)) {
                let requestOrigin = req.headers.origin;
                // Some browsers omit Origin; only use a trusted Referer when Origin is absent.
                // An explicit foreign or null Origin must never be overridden by Referer.
                if (requestOrigin === undefined && typeof req.headers.referer === 'string') {
                    try {requestOrigin = new URL(req.headers.referer).origin;} catch { /* Reject below. */ }
                }
                if (!isTrustedOrigin(requestOrigin, req.socket.localPort)) {
                    throw fail(403, `Diese Website-Adresse ist nicht freigegeben. Öffnen Sie ${canonicalOrigin} und versuchen Sie es erneut.`);
                }
            }
            if (path === '/api/news' && req.method === 'GET') return send(200, articles().filter(article => article.published));
            if (path === '/api/session' && req.method === 'GET') return send(200, {authenticated: Boolean(session(req)), configured: Boolean(credentials)});
            if (path === '/api/login' && req.method === 'POST') {
                rateLimit(`login:${clientAddress}`, 10, 15 * 60 * 1000);
                const body = await jsonBody(req, 3000);
                if (!credentials) throw fail(503, 'Die Vereinsverwaltung ist noch nicht eingerichtet.');
                if (!verify(body.password, credentials) || body.username !== credentials.username) throw fail(401, 'Benutzername oder Passwort ist falsch.');
                const token = randomBytes(32).toString('hex');
                db.prepare('DELETE FROM sessions WHERE expires<=?').run(Date.now());
                db.prepare('INSERT INTO sessions VALUES (?, ?)').run(hash(token), Date.now() + 8 * 60 * 60 * 1000);
                res.setHeader('Set-Cookie', `ssv_session=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=28800${secureCookies ? '; Secure' : ''}`);
                return send(200, {authenticated:true});
            }
            if (path === '/api/logout' && req.method === 'POST') {
                const current = session(req); if(current) db.prepare('DELETE FROM sessions WHERE token=?').run(current.token);
                res.setHeader('Set-Cookie', `ssv_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secureCookies ? '; Secure' : ''}`);
                return send(200, {authenticated:false});
            }
            if (path === '/api/contact' && req.method === 'POST') {
                rateLimit(`contact:${clientAddress}`, 5, 60 * 60 * 1000);
                const body = await jsonBody(req, 20000);
                const email = text(body.email, 254); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.consent !== true) throw fail(400, 'Bitte prüfen Sie E-Mail-Adresse und Datenschutzhinweis.');
                const message = {id:randomUUID(), name:text(body.name,100), email, subject:text(body.subject,200), message:text(body.message,10000), createdAt:new Date().toISOString(), read:false};
                db.prepare('INSERT INTO messages VALUES (?, ?)').run(message.id, JSON.stringify(message));
                return send(201, {id:message.id});
            }
            if (path.startsWith('/api/admin/')) {
                if (!session(req)) throw fail(401, 'Bitte melden Sie sich an.');
                if (path === '/api/admin/news' && req.method === 'GET') return send(200, articles());
                if (path === '/api/admin/news' && req.method === 'POST') {
                    const input = articleInput(await jsonBody(req));
                    const article = {...input, id:randomUUID(), version:1};
                    db.prepare('INSERT INTO articles VALUES (?, ?)').run(article.id, JSON.stringify(article));
                    return send(201, article);
                }
                if (path.startsWith('/api/admin/news/') && req.method === 'PUT') {
                    const id = path.slice('/api/admin/news/'.length); const body = await jsonBody(req); const current = getArticle(id);
                    if (!current) throw fail(404, 'Beitrag nicht gefunden.');
                    if (body.version !== current.version) throw fail(409, 'Der Beitrag wurde inzwischen geändert. Bitte neu laden.');
                    const article = {...articleInput(body), id, version:current.version+1};
                    db.prepare('UPDATE articles SET data=? WHERE id=?').run(JSON.stringify(article), id);
                    return send(200, article);
                }
                if (path === '/api/admin/messages' && req.method === 'GET') return send(200, db.prepare('SELECT data FROM messages').all().map(row => JSON.parse(row.data)).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)));
                if (path.startsWith('/api/admin/messages/') && req.method === 'PATCH') {
                    const id = path.slice('/api/admin/messages/'.length); const row = db.prepare('SELECT data FROM messages WHERE id=?').get(id);
                    if (!row) throw fail(404, 'Nachricht nicht gefunden.');
                    const body = await jsonBody(req); if (typeof body.read !== 'boolean') throw fail(400, 'Ungültiger Status.');
                    const message = {...JSON.parse(row.data), read:body.read};
                    db.prepare('UPDATE messages SET data=? WHERE id=?').run(JSON.stringify(message), id); return send(200, message);
                }
                if (path === '/api/admin/uploads' && req.method === 'POST') {
                    const body = await jsonBody(req, 7200000);
                    const data = text(body.data, 7000000); if (!/^[A-Za-z0-9+/]+={0,2}$/.test(data)) throw fail(400, 'Ungültige Bilddatei.');
                    const buffer = Buffer.from(data,'base64'); if (buffer.length > 5 * 1024 * 1024) throw fail(413, 'Bilder dürfen höchstens 5 MB groß sein.');
                    let extension;
                    if (buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) extension='.png';
                    else if (buffer[0]===255 && buffer[1]===216 && buffer[2]===255) extension='.jpg';
                    else if (buffer.toString('ascii',0,4)==='RIFF' && buffer.toString('ascii',8,12)==='WEBP') extension='.webp';
                    else throw fail(415, 'Bitte verwenden Sie PNG, JPEG oder WebP.');
                    const name = randomUUID()+extension; writeFileSync(resolve(uploads,name),buffer,{flag:'wx',mode:0o600});
                    return send(201,{url:`/uploads/${name}`});
                }
                if (path.startsWith('/api/admin/messages/') && req.method === 'DELETE') {
                    const result = db.prepare('DELETE FROM messages WHERE id=?').run(path.slice('/api/admin/messages/'.length));
                    if (!result.changes) throw fail(404, 'Nachricht nicht gefunden.');
                    return send(200, {deleted: true});
                }
            }
            if (path.startsWith('/api/')) throw fail(404, 'Endpunkt nicht gefunden.');
            if (!['GET','HEAD'].includes(req.method)) throw fail(405, 'Methode nicht erlaubt.');
            let file;
            if(path.startsWith('/uploads/')) {
                const name = path.slice(9); if(name !== basename(name) || !/^[\w-]+\.(png|jpg|webp)$/.test(name)) throw fail(404,'Datei nicht gefunden.');
                file = resolve(uploads,name);
            } else {
                if (!distDir) throw fail(404,'Seite nicht gefunden.');
                file = resolve(distDir, '.'+decodeURIComponent(path));
                if (!file.startsWith(resolve(distDir)+sep) && file !== resolve(distDir)) throw fail(404,'Datei nicht gefunden.');
                if (!existsSync(file) || !statSync(file).isFile()) {
                    if (extname(path)) throw fail(404, 'Datei nicht gefunden.');
                    file=resolve(distDir,'index.html');
                }
            }
            if(!existsSync(file)) throw fail(404,'Datei nicht gefunden.');
            const mime={'.pdf':'application/pdf','.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2'};
            res.writeHead(200,{'Content-Type':mime[extname(file)]??'application/octet-stream'});
            res.end(req.method === 'HEAD' ? undefined : readFileSync(file));
        } catch(error) {
            if (!res.headersSent) send(error.status ?? 500,{error:error.status ? error.message : 'Die Anfrage konnte nicht verarbeitet werden.'});
            else res.end();
        }
    });
    server.on('close',()=>db.close());
    return server;
}
