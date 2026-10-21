import {describe, expect, test} from 'vitest';
import type {IncomingMessage} from 'node:http';
import {HttpError, jsonBody} from '../../server/lib/http.ts';

const fakeRequest = (chunks: Buffer[], contentType = 'application/json'): IncomingMessage => ({
    headers: {'content-type': contentType},
    async *[Symbol.asyncIterator]() {
        for (const chunk of chunks) yield chunk;
    },
} as unknown as IncomingMessage);

describe('jsonBody', () => {
    test('parses a JSON object body', async () => {
        await expect(jsonBody(fakeRequest([Buffer.from('{"a":1}')]), 10000)).resolves.toEqual({a: 1});
    });

    test('rejects a missing JSON content type', async () => {
        await expect(jsonBody(fakeRequest([Buffer.from('{}')], 'text/plain'), 10000)).rejects.toMatchObject({status: 415});
    });

    test('rejects oversized bodies', async () => {
        await expect(jsonBody(fakeRequest([Buffer.from('{"a":1}')]), 5)).rejects.toMatchObject({status: 413});
    });

    test('rejects non-object bodies', async () => {
        await expect(jsonBody(fakeRequest([Buffer.from('[1,2]')]), 10000)).rejects.toMatchObject({status: 400});
    });
});

describe('HttpError', () => {
    test('carries its HTTP status and message', () => {
        const error = new HttpError(404, 'nicht gefunden');
        expect(error.status).toBe(404);
        expect(error.message).toBe('nicht gefunden');
        expect(error).toBeInstanceOf(Error);
    });
});
