import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import {mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {loadConfig, loadCredentials} from '../../server/config.ts';

describe('loadConfig', () => {
    test('applies development defaults', () => {
        const config = loadConfig({});
        expect(config.origin).toBe('http://localhost:5173');
        expect(config.port).toBe(3001);
        expect(config.host).toBe('127.0.0.1');
        expect(config.secureCookies).toBe(false);
        expect(config.trustProxy).toBe(false);
        expect(config.localDevelopment).toBe(true);
    });

    test('honours environment overrides', () => {
        const config = loadConfig({PORT: '4000', HOST: '0.0.0.0', SITE_ORIGIN: 'https://club.example.org', TRUST_PROXY: '1', NODE_ENV: 'production'});
        expect(config.port).toBe(4000);
        expect(config.host).toBe('0.0.0.0');
        expect(config.origin).toBe('https://club.example.org');
        expect(config.secureCookies).toBe(true);
        expect(config.trustProxy).toBe(true);
        expect(config.localDevelopment).toBe(false);
    });
});

describe('loadCredentials', () => {
    let dataDir: string;
    beforeEach(() => {
        dataDir = mkdtempSync(join(tmpdir(), 'ssv-config-'));
    });
    afterEach(() => rmSync(dataDir, {recursive: true, force: true}));

    test('returns undefined when no admin file exists', () => {
        expect(loadCredentials(dataDir)).toBeUndefined();
    });

    test('reads the configured credentials', () => {
        writeFileSync(join(dataDir, 'admin.json'), JSON.stringify({username: 'admin', salt: 's', hash: 'h'}));
        expect(loadCredentials(dataDir)).toEqual({username: 'admin', salt: 's', hash: 'h'});
    });
});
