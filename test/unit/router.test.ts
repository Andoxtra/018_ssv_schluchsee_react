import {describe, expect, test} from 'vitest';
import {matchRoute} from '../../server/router.ts';
import type {Route} from '../../server/router.ts';
import type {Handler} from '../../server/types.ts';

const handler: Handler = () => undefined;

describe('matchRoute', () => {
    test('matches an exact path without parameters', () => {
        const result = matchRoute([{method: 'GET', pattern: '/api/news', handler}], 'GET', '/api/news');
        expect(result?.handler).toBe(handler);
        expect(result?.params).toEqual({});
    });

    test('extracts :id path parameters', () => {
        const result = matchRoute([{method: 'PUT', pattern: '/api/admin/news/:id', handler}], 'PUT', '/api/admin/news/abc');
        expect(result?.params).toEqual({id: 'abc'});
    });

    test('returns undefined for method or path mismatches', () => {
        const routes: Route[] = [{method: 'GET', pattern: '/api/news', handler}];
        expect(matchRoute(routes, 'POST', '/api/news')).toBeUndefined();
        expect(matchRoute(routes, 'GET', '/api/other')).toBeUndefined();
        expect(matchRoute(routes, 'GET', '/api/news/extra')).toBeUndefined();
    });
});
