import {mkdirSync, readFileSync, readdirSync} from "node:fs";
import {resolve} from "node:path";
import {DatabaseSync} from "node:sqlite";
import {parseNewsFile} from "../../src/logic/news/newsSource.ts";
import type {Article} from "../../src/logic/news/newsSource.ts";
import type {Database, Message, SessionRecord} from "../types.ts";

type StoredRow = Record<string, unknown>;

const parseRow = <T,>(row: StoredRow): T => JSON.parse(String(row.data)) as T;

export const createDatabase = (dataDir: string, seedDir?: string): Database => {
    mkdirSync(dataDir, {recursive: true, mode: 0o700});
    const db = new DatabaseSync(resolve(dataDir, "club.sqlite"));
    db.exec(`PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS articles(id TEXT PRIMARY KEY, data TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, expires INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS messages(id TEXT PRIMARY KEY, data TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
    if (seedDir && !db.prepare("SELECT value FROM metadata WHERE key='seeded'").get()) {
        const insert = db.prepare("INSERT OR IGNORE INTO articles VALUES (?, ?)");
        db.exec("BEGIN");
        try {
            for (const name of readdirSync(seedDir).filter(name => name.endsWith(".md"))) {
                const article = parseNewsFile(name, readFileSync(resolve(seedDir, name), "utf8"));
                insert.run(article.id, JSON.stringify(article));
            }
            db.prepare("INSERT INTO metadata VALUES ('seeded', '1')").run();
            db.exec("COMMIT");
        } catch (error) {
            db.exec("ROLLBACK");
            throw error;
        }
    }
    return {
        listArticles: () => db.prepare("SELECT data FROM articles").all().map(row => parseRow<Article>(row)),
        getArticle: id => {
            const row = db.prepare("SELECT data FROM articles WHERE id=?").get(id);
            return row ? parseRow<Article>(row) : undefined;
        },
        createArticle: article => db.prepare("INSERT INTO articles VALUES (?, ?)").run(article.id, JSON.stringify(article)),
        updateArticle: article => db.prepare("UPDATE articles SET data=? WHERE id=?").run(JSON.stringify(article), article.id),
        deleteArticle: id => Number(db.prepare("DELETE FROM articles WHERE id=?").run(id).changes) > 0,
        listMessages: () => db.prepare("SELECT data FROM messages").all().map(row => parseRow<Message>(row)),
        getMessage: id => {
            const row = db.prepare("SELECT data FROM messages WHERE id=?").get(id);
            return row ? parseRow<Message>(row) : undefined;
        },
        createMessage: message => db.prepare("INSERT INTO messages VALUES (?, ?)").run(message.id, JSON.stringify(message)),
        updateMessage: message => db.prepare("UPDATE messages SET data=? WHERE id=?").run(JSON.stringify(message), message.id),
        deleteMessage: id => Number(db.prepare("DELETE FROM messages WHERE id=?").run(id).changes) > 0,
        findSession: (hashedToken, now) => db.prepare("SELECT token FROM sessions WHERE token=? AND expires>?").get(hashedToken, now) as SessionRecord | undefined,
        createSession: (hashedToken, expires) => db.prepare("INSERT INTO sessions VALUES (?, ?)").run(hashedToken, expires),
        deleteSession: hashedToken => db.prepare("DELETE FROM sessions WHERE token=?").run(hashedToken),
        deleteExpiredSessions: now => db.prepare("DELETE FROM sessions WHERE expires<=?").run(now),
        revokeAllSessions: () => db.exec("DELETE FROM sessions"),
        close: () => db.close(),
    };
};
