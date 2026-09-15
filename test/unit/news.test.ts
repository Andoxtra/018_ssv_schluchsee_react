import {describe, expect, test} from 'vitest';
import {renderMarkdown} from './/src/logic/news/renderMarkdown.ts';
import {parseNewsFile, isPastEvent} from './/src/logic/news/newsSource.ts';

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
});
