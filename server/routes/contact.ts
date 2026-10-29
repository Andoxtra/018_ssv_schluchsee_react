import {randomUUID} from "node:crypto";
import {CONTACT_RATE_LIMIT, MAX_CONTACT_JSON_BYTES} from "../lib/constants.ts";
import {HttpError, jsonBody} from "../lib/http.ts";
import {text, LIMITS} from "../lib/validation.ts";
import type {Handler} from "../types.ts";

export const submitContact: Handler = async ({req, db, clientAddress, rateLimit, send, mail}) => {
    rateLimit(`contact:${clientAddress}`, CONTACT_RATE_LIMIT.count, CONTACT_RATE_LIMIT.windowMs);
    const body = await jsonBody(req, MAX_CONTACT_JSON_BYTES);
    const email = text(body.email, LIMITS.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.consent !== true) throw new HttpError(400, "Bitte prüfen Sie E-Mail-Adresse und Datenschutzhinweis.");
    const message = {
        id: randomUUID(),
        name: text(body.name, LIMITS.name),
        email,
        subject: text(body.subject, LIMITS.subject),
        message: text(body.message, LIMITS.message),
        createdAt: new Date().toISOString(),
        read: false,
    };
    db.createMessage(message);
    if (mail) void mail.notify(message).catch(error => console.error("E-Mail-Benachrichtigung fehlgeschlagen:", error));
    send(201, {id: message.id});
};
