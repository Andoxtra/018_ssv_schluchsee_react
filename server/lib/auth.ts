import {randomBytes, scryptSync, timingSafeEqual, createHash} from "node:crypto";
import {MAX_PASSWORD_LENGTH} from "./constants.ts";
import type {PasswordRecord} from "../types.ts";

export const hash = (value: string): string => createHash("sha256").update(value).digest("hex");

export const passwordRecord = (password: string): PasswordRecord => {
    const salt = randomBytes(16).toString("hex");
    return {salt, hash: scryptSync(password, salt, 64).toString("hex")};
};

export const verify = (password: unknown, record: PasswordRecord): boolean =>
    typeof password === "string" && password.length <= MAX_PASSWORD_LENGTH && timingSafeEqual(scryptSync(password, record.salt, 64), Buffer.from(record.hash, "hex"));
