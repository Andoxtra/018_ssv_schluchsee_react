import {describe, expect, test} from 'vitest';
import {hash, passwordRecord, verify} from '../../server/lib/auth.ts';

describe('password hashing', () => {
    test('creates a salted scrypt record with hex salt and hash', () => {
        const record = passwordRecord('secret');
        expect(record.salt).toMatch(/^[0-9a-f]{32}$/);
        expect(record.hash).toMatch(/^[0-9a-f]{128}$/);
    });

    test('produces distinct salts for the same password', () => {
        expect(passwordRecord('secret').salt).not.toBe(passwordRecord('secret').salt);
    });

    test('verifies the correct password and rejects a wrong one', () => {
        const record = passwordRecord('correct horse');
        expect(verify('correct horse', record)).toBe(true);
        expect(verify('wrong', record)).toBe(false);
    });

    test('rejects non-string and over-long passwords', () => {
        const record = passwordRecord('secret');
        expect(verify(123, record)).toBe(false);
        expect(verify('x'.repeat(1025), record)).toBe(false);
    });
});

describe('hash', () => {
    test('returns a stable sha256 hex digest', () => {
        expect(hash('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
    });
});
