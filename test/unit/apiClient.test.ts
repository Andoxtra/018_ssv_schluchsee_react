import {afterEach, describe, expect, test, vi} from 'vitest';
import {api} from '../../src/logic/api/client.ts';

const ok = (body: unknown) => ({ok: true, json: async () => body});
const fail = (body: unknown) => ({ok: false, json: async () => body});
const brokenJson = () => ({ok: false, json: async () => { throw new Error('no json'); }});

afterEach(() => vi.unstubAllGlobals());

describe('api client', () => {
    test('returns parsed JSON on success', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(ok({a: 1})));
        await expect(api('/api/news')).resolves.toEqual({a: 1});
    });

    test('sets a JSON content type when a body is sent', async () => {
        const fetchMock = vi.fn().mockResolvedValue(ok({}));
        vi.stubGlobal('fetch', fetchMock);
        await api('/api/login', {method: 'POST', body: JSON.stringify({username: 'a'})});
        const [, options] = fetchMock.mock.calls[0] as [string, RequestInit];
        expect(options.headers['Content-Type']).toBe('application/json');
    });

    test('throws the server error message on a non-ok response', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(fail({error: 'Boom'})));
        await expect(api('/api/x')).rejects.toThrow('Boom');
    });

    test('falls back to a German message when the response body is not JSON', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(brokenJson()));
        await expect(api('/api/x')).rejects.toThrow('Der Server ist nicht erreichbar.');
    });

    test('propagates network failures', async () => {
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')));
        await expect(api('/api/x')).rejects.toThrow('network down');
    });
});
