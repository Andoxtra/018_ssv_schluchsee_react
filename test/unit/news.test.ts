import {describe, expect, test} from 'vitest';
import {renderMarkdown} from './/src/logic/news/renderMarkdown.ts';
import {parseNewsFile, isPastEvent, sortArticles} from './/src/logic/news/newsSource.ts';
import type {Article} from './/src/logic/news/newsSource.ts';

const makeArticle = (id: string, date: string, eventDates: string[] = []): Article => ({
    id, title: `Titel ${id}`, date, author: 'Verein', preview: 'Vorschau', content: 'Inhalt',
    published: true, reviewNote: '', eventDates, version: 1,
});

describe('news content', () => {
    test('preserves Markdown content and required metadata during import', () => {
        const article=parseNewsFile('174-test.md','# Test\n\n---\nauthor: Verein\ndate: 2026-01-01\npreview: A: B\n---\n\n## Inhalt\n\n**Text**');
        expect(article).toMatchObject({id:'174',preview:'A: B',content:'## Inhalt\n\n**Text**'});
        expect(()=>parseNewsFile('broken.md','no metadata')).toThrow();
    });
    test('keeps current events upcoming through the final event day', () => {
        const article=parseNewsFile('173-test.md','# Test\n---\nauthor: Verein\ndate: 2026-01-01\npreview: Fest\neventDates: 2026-07-03, 2026-07-04\n---\nFest');
        expect(isPastEvent(article,'2026-07-04')).toBe(false);
        expect(isPastEvent(article,'2026-07-05')).toBe(true);
    });
    test('renders tables without invalid whitespace and keeps inline spacing', () => {
        const html=renderMarkdown('| A | B |\n|---|---|\n| 1 | 2 |\n\n[Ein Link](/kontakt) und **Text**');
        expect(html).toContain('<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody>');
        expect(html).toContain('</a> und <strong>Text</strong>');
    });
    test('does not execute raw HTML or JavaScript URLs', () => {
        const html=renderMarkdown('<script>alert(1)</script>\n\n[x](javascript:alert(1))');
        expect(html).not.toContain('<script>'); expect(html).not.toContain('href="javascript:');
    });
    test('normalizes CRLF line endings during import', () => {
        const article=parseNewsFile('166-test.md', '# Titel\r\n\r\n---\r\nauthor: Verein\r\ndate: 2026-01-01\r\npreview: Vorschau\r\n---\r\n\r\n## Inhalt\r\n\r\nText');
        expect(article.content).toBe('## Inhalt\n\nText');
        expect(article.title).toBe('Titel');
    });
    test('parses comma-separated event dates, trimming whitespace', () => {
        const article=parseNewsFile('173-test.md', '# Test\n---\nauthor: Verein\ndate: 2026-01-01\npreview: Fest\neventDates: 2026-07-03, 2026-07-04\n---\nFest');
        expect(article.eventDates).toEqual(['2026-07-03', '2026-07-04']);
    });
    test('defaults reviewNote to empty and version to one', () => {
        const article=parseNewsFile('170-test.md', '# Test\n---\nauthor: Verein\ndate: 2026-01-01\npreview: Vorschau\n---\nInhalt');
        expect(article.reviewNote).toBe('');
        expect(article.version).toBe(1);
    });
    test('rejects files without a numeric ID prefix', () => {
        expect(() => parseNewsFile('ohne-id.md', '# Test\n---\nauthor: Verein\ndate: 2026-01-01\npreview: Vorschau\n---\nInhalt')).toThrow();
    });
    test('rejects missing author, preview or invalid dates', () => {
        expect(() => parseNewsFile('1-test.md', '# Test\n---\ndate: 2026-01-01\npreview: Vorschau\n---\nInhalt')).toThrow();
        expect(() => parseNewsFile('1-test.md', '# Test\n---\nauthor: Verein\ndate: 2026-01-01\n---\nInhalt')).toThrow();
        expect(() => parseNewsFile('1-test.md', '# Test\n---\nauthor: Verein\ndate: 2026-13-01\npreview: Vorschau\n---\nInhalt')).toThrow();
    });
    test('keeps articles without event dates as upcoming', () => {
        const article=makeArticle('1', '2026-01-01');
        expect(isPastEvent(article, '2030-01-01')).toBe(false);
    });
    test('treats mixed event dates as upcoming until every date has passed', () => {
        const article=makeArticle('1', '2026-01-01', ['2026-07-03', '2026-07-05']);
        expect(isPastEvent(article, '2026-07-04')).toBe(false);
        expect(isPastEvent(article, '2026-07-05')).toBe(false);
        expect(isPastEvent(article, '2026-07-06')).toBe(true);
    });
    test('sorts by date descending and breaks ties by numeric id descending', () => {
        const articles=[makeArticle('9','2026-01-01'), makeArticle('10','2026-01-01'), makeArticle('2','2026-02-01')];
        expect(sortArticles(articles).map(item => item.id)).toEqual(['2','10','9']);
    });
    test('falls back to localeCompare for non-numeric ids', () => {
        const articles=[makeArticle('uuid-b','2026-01-01'), makeArticle('uuid-a','2026-01-01')];
        expect(sortArticles(articles).map(item => item.id)).toEqual(['uuid-b','uuid-a']);
    });
    test('does not mutate the input array', () => {
        const articles=[makeArticle('2','2026-01-02'), makeArticle('1','2026-01-01')];
        const before=articles.map(item => item.id);
        sortArticles(articles);
        expect(articles.map(item => item.id)).toEqual(before);
    });
});
