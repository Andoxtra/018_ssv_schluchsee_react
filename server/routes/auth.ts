import {randomBytes} from "node:crypto";
import {hash, verify} from "../lib/auth.ts";
import {LOGIN_RATE_LIMIT, MAX_LOGIN_JSON_BYTES, SESSION_COOKIE, SESSION_MAX_AGE_SECONDS, SESSION_TTL_MS} from "../lib/constants.ts";
import {HttpError, jsonBody} from "../lib/http.ts";
import type {Handler} from "../types.ts";

const setCookie = (res: {setHeader: (name: string, value: string) => void}, value: string, secureCookies: boolean): void => {
    res.setHeader("Set-Cookie", `${SESSION_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_MAX_AGE_SECONDS}${secureCookies ? "; Secure" : ""}`);
};

export const login: Handler = async ({req, res, db, clientAddress, rateLimit, send, credentials, secureCookies}) => {
    rateLimit(`login:${clientAddress}`, LOGIN_RATE_LIMIT.count, LOGIN_RATE_LIMIT.windowMs);
    const body = await jsonBody(req, MAX_LOGIN_JSON_BYTES);
    if (!credentials) throw new HttpError(503, "Die Vereinsverwaltung ist noch nicht eingerichtet.");
    if (!verify(body.password, credentials) || body.username !== credentials.username) throw new HttpError(401, "Benutzername oder Passwort ist falsch.");
    const token = randomBytes(32).toString("hex");
    db.deleteExpiredSessions(Date.now());
    db.createSession(hash(token), Date.now() + SESSION_TTL_MS);
    setCookie(res, token, secureCookies);
    send(200, {authenticated: true});
};

export const logout: Handler = ({res, db, session, send, secureCookies}) => {
    const current = session();
    if (current) db.deleteSession(current.token);
    setCookie(res, "", secureCookies);
    send(200, {authenticated: false});
};
