import {existsSync, readFileSync, statSync} from "node:fs";
import {resolve, extname, basename, sep} from "node:path";
import type {IncomingMessage, ServerResponse} from "node:http";
import {HttpError} from "./http.ts";

const MIME: Record<string, string> = {
    ".pdf": "application/pdf",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
};

export const serveStatic = (req: IncomingMessage, res: ServerResponse, path: string, options: {distDir?: string; uploads: string; injectHead?: (html: string) => string}): void => {
    const {distDir, uploads, injectHead} = options;
    let file: string;
    if (path.startsWith("/uploads/")) {
        const name = path.slice(9);
        if (name !== basename(name) || !/^[\w-]+\.(png|jpg|webp)$/.test(name)) throw new HttpError(404, "Datei nicht gefunden.");
        file = resolve(uploads, name);
    } else {
        if (!distDir) throw new HttpError(404, "Seite nicht gefunden.");
        file = resolve(distDir, "." + decodeURIComponent(path));
        if (!file.startsWith(resolve(distDir) + sep) && file !== resolve(distDir)) throw new HttpError(404, "Datei nicht gefunden.");
        if (!existsSync(file) || !statSync(file).isFile()) {
            if (extname(path)) throw new HttpError(404, "Datei nicht gefunden.");
            file = resolve(distDir, "index.html");
        }
    }
    if (!existsSync(file)) throw new HttpError(404, "Datei nicht gefunden.");
    let body: Buffer | undefined;
    if (req.method !== "HEAD") {
        body = injectHead && file.endsWith(`${sep}index.html`) ? Buffer.from(injectHead(readFileSync(file, "utf8"))) : readFileSync(file);
    }
    res.writeHead(200, {"Content-Type": MIME[extname(file)] ?? "application/octet-stream"});
    res.end(body);
};
