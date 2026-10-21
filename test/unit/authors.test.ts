import {describe, expect, test} from 'vitest';
import {uniqueAuthors} from '../../src/logic/admin/authors.ts';
import type {Article} from '../../src/logic/news/newsSource.ts';

const makeArticle = (author: string): Article => ({
    id: "1", title: "Titel", date: "2026-01-01", author, preview: "Vorschau",
    content: "Inhalt", published: true, reviewNote: "", eventDates: [], version: 1,
});

describe('uniqueAuthors', () => {
    test('deduplicates and sorts authors', () => {
        const authors = uniqueAuthors([makeArticle("Zeta"), makeArticle("Alpha"), makeArticle("Alpha"), makeArticle("Beta")]);
        expect(authors).toEqual(["Alpha", "Beta", "Zeta"]);
    });

    test('trims whitespace and ignores empty authors', () => {
        const authors = uniqueAuthors([makeArticle("  Alpha  "), makeArticle("   "), makeArticle("Beta")]);
        expect(authors).toEqual(["Alpha", "Beta"]);
    });

    test('returns an empty list for no articles', () => {
        expect(uniqueAuthors([])).toEqual([]);
    });
});
