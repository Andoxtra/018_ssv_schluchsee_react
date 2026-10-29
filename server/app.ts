import {createServer} from "node:http";
import {mkdirSync} from "node:fs";
import {resolve} from "node:path";
import {hash} from "./lib/auth.ts";
import {SESSION_COOKIE} from "./lib/constants.ts";
import {createDatabase} from "./lib/db.ts";
import {applySecurityHeaders, HttpError, sendJson} from "./lib/http.ts";
import {serveStatic} from "./lib/static.ts";
import {matchRoute} from "./router.ts";
import type {Route} from "./router.ts";
import type {CreateAppOptions, RequestContext, SessionRecord} from "./types.ts";
import {listArticles, createArticle, updateArticle, deleteArticle, listMessages, setMessageRead, deleteMessage, uploadImage} from "./routes/admin.ts";
import {login, logout} from "./routes/auth.ts";
import {submitContact} from "./routes/contact.ts";
import {getPublicNews} from "./routes/news.ts";
import {getSession} from "./routes/session.ts";
import {createMailer} from "./lib/mail.ts";
import {sitemap} from "./routes/sitemap.ts";
import {robots} from "./routes/robots.ts";
import {injectHead} from "./lib/meta.ts";
import {articleMeta} from "../src/config/seo.ts";

const routes: Route[] = [
    {method: "GET", pattern: "/api/news", handler: getPublicNews},
    {method: "GET", pattern: "/api/session", handler: getSession},
    {method: "POST", pattern: "/api/login", handler: login},
    {method: "POST", pattern: "/api/logout", handler: logout},
    {method: "POST", pattern: "/api/contact", handler: submitContact},
    {method: "GET", pattern: "/sitemap.xml", handler: sitemap},
    {method: "GET", pattern: "/robots.txt", handler: robots},
    {method: "GET", pattern: "/api/admin/news", handler: listArticles},
    {method: "POST", pattern: "/api/admin/news", handler: createArticle},
    {method: "PUT", pattern: "/api/admin/news/:id", handler: updateArticle},
    {method: "DELETE", pattern: "/api/admin/news/:id", handler: deleteArticle},
    {method: "GET", pattern: "/api/admin/messages", handler: listMessages},
    {method: "PATCH", pattern: "/api/admin/messages/:id", handler: setMessageRead},
    {method: "DELETE", pattern: "/api/admin/messages/:id", handler: deleteMessage},
    {method: "POST", pattern: "/api/admin/uploads", handler: uploadImage},
];

export function createApp(options: CreateAppOptions) {
    const {dataDir, origin = "http://localhost:3001", distDir, seedDir, credentials, secureCookies = false, trustProxy = false, localDevelopment = false, mail} = options;
    mkdirSync(dataDir, {recursive: true, mode: 0o700});
    const uploads = resolve(dataDir, "uploads");
    mkdirSync(uploads, {recursive: true, mode: 0o700});
    const db = createDatabase(dataDir, seedDir);
    const mailer = createMailer(mail);

    const canonicalOrigin = new URL(origin).origin;
    const localHosts = ["localhost", "127.0.0.1", "[::1]"];
    const configuredUrl = new URL(canonicalOrigin);
    const allowLocalAliases = localDevelopment && configuredUrl.protocol === "http:" && localHosts.includes(configuredUrl.hostname);
    const isTrustedOrigin = (requestOrigin: string | undefined, localPort: number | undefined): boolean => {
        if (requestOrigin === canonicalOrigin) return true;
        if (!allowLocalAliases) return false;
        try {
            const candidate = new URL(requestOrigin ?? "");
            return candidate.origin === requestOrigin && candidate.protocol === "http:" &&
                localHosts.includes(candidate.hostname) &&
                [configuredUrl.port || "80", String(localPort)].includes(candidate.port || "80");
        } catch {
            return false;
        }
    };

    const attempts = new Map<string, {count: number; until: number}>();
    const rateLimit = (key: string, count: number, duration: number): void => {
        const now = Date.now();
        for (const [entry, value] of attempts) if (value.until < now) attempts.delete(entry);
        const value = attempts.get(key) ?? {count: 0, until: now + duration};
        value.count++;
        attempts.set(key, value);
        if (value.count > count) throw new HttpError(429, "Zu viele Versuche. Bitte später erneut versuchen.");
    };

    const session = (req: {headers: {cookie?: string}}): SessionRecord | undefined => {
        const token = req.headers.cookie?.split(";").map(value => value.trim()).find(value => value.startsWith(`${SESSION_COOKIE}=`))?.slice(SESSION_COOKIE.length + 1);
        return token ? db.findSession(hash(token), Date.now()) : undefined;
    };

    const server = createServer(async (req, res) => {
        applySecurityHeaders(res);
        const send = (status: number, body: unknown): void => sendJson(res, status, body);
        try {
            const url = new URL(req.url ?? "/", origin);
            const path = url.pathname;
            const clientAddress = trustProxy && typeof req.headers["x-forwarded-for"] === "string" ? req.headers["x-forwarded-for"].split(",").at(-1)!.trim() : req.socket.remoteAddress;

            if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method ?? "")) {
                let requestOrigin = req.headers.origin;
                if (requestOrigin === undefined && typeof req.headers.referer === "string") {
                    try {
                        requestOrigin = new URL(req.headers.referer).origin;
                    } catch {
                        /* Reject below. */
                    }
                }
                if (!isTrustedOrigin(requestOrigin, req.socket.localPort)) {
                    throw new HttpError(403, `Diese Website-Adresse ist nicht freigegeben. Öffnen Sie ${canonicalOrigin} und versuchen Sie es erneut.`);
                }
            }
            if (path.startsWith("/api/admin/") && !session(req)) throw new HttpError(401, "Bitte melden Sie sich an.");

            const matched = matchRoute(routes, req.method ?? "GET", path);
            if (matched) {
                const context: RequestContext = {
                    req,
                    res,
                    path,
                    params: matched.params,
                    clientAddress,
                    db,
                    session: () => session(req),
                    rateLimit,
                    send,
                    credentials,
                    secureCookies,
                    uploads,
                    mail: mailer,
                    origin: canonicalOrigin,
                };
                await matched.handler(context);
                return;
            }

            if (path.startsWith("/api/")) throw new HttpError(404, "Endpunkt nicht gefunden.");
            if (!["GET", "HEAD"].includes(req.method ?? "")) throw new HttpError(405, "Methode nicht erlaubt.");
            const resolvedMeta = (() => {
                const match = /^\/neuigkeiten\/([\w-]+)$/.exec(path);
                if (!match) return undefined;
                const article = db.getArticle(match[1]);
                return article?.published ? articleMeta(article.title, article.preview) : undefined;
            })();
            serveStatic(req, res, path, {distDir, uploads, injectHead: html => injectHead(html, path, canonicalOrigin, resolvedMeta)});
        } catch (error) {
            if (!res.headersSent) send(error instanceof HttpError ? error.status : 500, {error: error instanceof HttpError ? error.message : "Die Anfrage konnte nicht verarbeitet werden."});
            else res.end();
        }
    });
    server.on("close", () => db.close());
    return server;
}
