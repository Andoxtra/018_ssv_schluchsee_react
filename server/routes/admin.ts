import {randomUUID} from "node:crypto";
import {writeFileSync} from "node:fs";
import {resolve} from "node:path";
import {MAX_UPLOAD_BASE64_LENGTH, MAX_UPLOAD_BYTES, MAX_UPLOAD_JSON_BYTES} from "../lib/constants.ts";
import {HttpError, jsonBody} from "../lib/http.ts";
import {articleInput, text} from "../lib/validation.ts";
import type {Handler} from "../types.ts";

const detectImageExtension = (buffer: Buffer): string => {
    if (buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return ".png";
    if (buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) return ".jpg";
    if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return ".webp";
    throw new HttpError(415, "Bitte verwenden Sie PNG, JPEG oder WebP.");
};

export const listArticles: Handler = ({db, send}) => {
    send(200, db.listArticles());
};

export const createArticle: Handler = async ({req, db, send}) => {
    const input = articleInput(await jsonBody(req));
    const article = {...input, id: randomUUID(), version: 1};
    db.createArticle(article);
    send(201, article);
};

export const updateArticle: Handler = async ({req, db, send, params}) => {
    const id = params.id;
    const body = await jsonBody(req);
    const current = db.getArticle(id);
    if (!current) throw new HttpError(404, "Beitrag nicht gefunden.");
    if (body.version !== current.version) throw new HttpError(409, "Der Beitrag wurde inzwischen geändert. Bitte neu laden.");
    const article = {...articleInput(body), id, version: current.version + 1};
    db.updateArticle(article);
    send(200, article);
};

export const listMessages: Handler = ({db, send}) => {
    send(200, db.listMessages().sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
};

export const setMessageRead: Handler = async ({req, db, send, params}) => {
    const current = db.getMessage(params.id);
    if (!current) throw new HttpError(404, "Nachricht nicht gefunden.");
    const body = await jsonBody(req);
    if (typeof body.read !== "boolean") throw new HttpError(400, "Ungültiger Status.");
    const message = {...current, read: body.read};
    db.updateMessage(message);
    send(200, message);
};

export const deleteMessage: Handler = ({db, send, params}) => {
    if (!db.deleteMessage(params.id)) throw new HttpError(404, "Nachricht nicht gefunden.");
    send(200, {deleted: true});
};

export const uploadImage: Handler = async ({req, send, uploads}) => {
    const body = await jsonBody(req, MAX_UPLOAD_JSON_BYTES);
    const data = text(body.data, MAX_UPLOAD_BASE64_LENGTH);
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(data)) throw new HttpError(400, "Ungültige Bilddatei.");
    const buffer = Buffer.from(data, "base64");
    if (buffer.length > MAX_UPLOAD_BYTES) throw new HttpError(413, "Bilder dürfen höchstens 5 MB groß sein.");
    const name = randomUUID() + detectImageExtension(buffer);
    writeFileSync(resolve(uploads, name), buffer, {flag: "wx", mode: 0o600});
    send(201, {url: `/uploads/${name}`});
};
