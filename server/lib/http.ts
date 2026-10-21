import type {IncomingMessage, ServerResponse} from "node:http";
import {MAX_JSON_BYTES} from "./constants.ts";

export class HttpError extends Error {
    readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export const applySecurityHeaders = (res: ServerResponse): void => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Cache-Control", "no-store");
};

export const sendJson = (res: ServerResponse, status: number, body: unknown): void => {
    res.writeHead(status, {"Content-Type": "application/json; charset=utf-8"});
    res.end(JSON.stringify(body));
};

export const jsonBody = async (req: IncomingMessage, max: number = MAX_JSON_BYTES): Promise<Record<string, unknown>> => {
    if (!req.headers["content-type"]?.startsWith("application/json")) throw new HttpError(415, "JSON erwartet.");
    let size = 0;
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as string);
        size += buffer.length;
        if (size > max) throw new HttpError(413, "Die Datei oder Nachricht ist zu groß.");
        chunks.push(buffer);
    }
    try {
        const value: unknown = JSON.parse(Buffer.concat(chunks).toString());
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
        return value as Record<string, unknown>;
    } catch {
        throw new HttpError(400, "Ungültige Anfrage.");
    }
};
