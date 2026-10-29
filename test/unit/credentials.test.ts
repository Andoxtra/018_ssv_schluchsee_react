import {afterEach, beforeEach, describe, expect, test} from "vitest";
import {mkdtempSync, writeFileSync, rmSync, readdirSync} from "node:fs";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {readCredentials, resetCredentials} from "../../server/lib/credentials.ts";
import {verify} from "../../server/lib/auth.ts";

describe("credentials", () => {
    let dataDir: string;
    beforeEach(() => {
        dataDir = mkdtempSync(join(tmpdir(), "ssv-credentials-"));
    });
    afterEach(() => rmSync(dataDir, {recursive: true, force: true}));

    test("readCredentials returns undefined when no admin file exists", () => {
        expect(readCredentials(dataDir)).toBeUndefined();
    });

    test("resetCredentials keeps the username, updates the password and writes a backup", () => {
        writeFileSync(join(dataDir, "admin.json"), JSON.stringify({username: "admin", salt: "old", hash: "old"}));
        const updated = resetCredentials(dataDir, "new-password-123");
        expect(updated.username).toBe("admin");
        expect(verify("new-password-123", updated)).toBe(true);
        const stored = readCredentials(dataDir)!;
        expect(stored.username).toBe("admin");
        expect(verify("new-password-123", stored)).toBe(true);
        expect(verify("wrong-password-000", stored)).toBe(false);
        const backups = readdirSync(dataDir).filter(name => name.startsWith("admin.json.bak-"));
        expect(backups.length).toBe(1);
    });

    test("resetCredentials throws when no administrator is configured", () => {
        expect(() => resetCredentials(dataDir, "new-password-123")).toThrow();
    });
});
