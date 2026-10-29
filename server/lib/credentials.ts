import {copyFileSync, existsSync, readFileSync, writeFileSync} from "node:fs";
import {resolve} from "node:path";
import {passwordRecord} from "./auth.ts";
import type {Credentials} from "../types.ts";

export const adminFile = (dataDir: string): string => resolve(dataDir, "admin.json");

export const readCredentials = (dataDir: string): Credentials | undefined => {
    const file = adminFile(dataDir);
    if (!existsSync(file)) return undefined;
    return JSON.parse(readFileSync(file, "utf8")) as Credentials;
};

export const resetCredentials = (dataDir: string, password: string): Credentials => {
    const current = readCredentials(dataDir);
    if (!current) throw new Error("Kein Administrator konfiguriert. Legen Sie zuerst einen Administrator an.");
    const file = adminFile(dataDir);
    copyFileSync(file, `${file}.bak-${Date.now()}`);
    const credentials: Credentials = {username: current.username, ...passwordRecord(password)};
    writeFileSync(file, JSON.stringify(credentials), {mode: 0o600});
    return credentials;
};
