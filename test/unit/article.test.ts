import {describe, expect, test} from 'vitest';
import {emptyArticle} from '../../src/logic/admin/article.ts';

describe('emptyArticle', () => {
    test('returns a blank draft with a valid local date', () => {
        const article = emptyArticle();
        expect(article.id).toBe('');
        expect(article.title).toBe('');
        expect(article.published).toBe(false);
        expect(article.reviewNote).toBe('');
        expect(article.eventDates).toEqual([]);
        expect(article.version).toBe(0);
        expect(article.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
});
