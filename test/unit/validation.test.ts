import {describe, expect, test} from 'vitest';
import {articleInput, text, validDate, LIMITS} from '../../server/lib/validation.ts';

const valid = {title: 'Titel', date: '2026-01-01', author: 'Autor', preview: 'Vorschau', content: 'Inhalt', published: false, reviewNote: '', eventDates: []};

describe('text', () => {
    test('trims strings within the limit', () => {
        expect(text('  hallo  ', 100)).toBe('hallo');
    });

    test('rejects missing, non-string and over-long values', () => {
        expect(() => text('', 100)).toThrow();
        expect(() => text(undefined, 100)).toThrow();
        expect(() => text(42, 100)).toThrow();
        expect(() => text('x'.repeat(101), 100)).toThrow();
    });

    test('allows empty optional values', () => {
        expect(text('', 100, false)).toBe('');
    });
});

describe('validDate', () => {
    test('accepts real ISO dates and rejects impossible ones', () => {
        expect(validDate('2026-01-01')).toBe(true);
        expect(validDate('2024-02-29')).toBe(true);
        expect(validDate('2026-02-30')).toBe(false);
        expect(validDate('2026-13-01')).toBe(false);
        expect(validDate('01-01-2026')).toBe(false);
    });
});

describe('articleInput', () => {
    test('returns a trimmed article for valid input', () => {
        expect(articleInput({...valid, title: '  Titel  '})).toMatchObject({title: 'Titel', date: '2026-01-01'});
    });

    test('defaults the optional reviewNote to an empty string', () => {
        expect(articleInput({...valid, reviewNote: undefined}).reviewNote).toBe('');
    });

    test('rejects a bad date or a non-boolean published flag', () => {
        expect(() => articleInput({...valid, date: '2026-02-30'})).toThrow();
        expect(() => articleInput({...valid, published: 'yes'})).toThrow();
    });

    test('rejects invalid or too many event dates', () => {
        expect(() => articleInput({...valid, eventDates: ['2026-02-30']})).toThrow();
        expect(() => articleInput({...valid, eventDates: Array(LIMITS.maxEventDates + 1).fill('2026-01-01')})).toThrow();
    });

    test('rejects over-long fields', () => {
        expect(() => articleInput({...valid, title: 'x'.repeat(LIMITS.title + 1)})).toThrow();
        expect(() => articleInput({...valid, content: 'x'.repeat(LIMITS.content + 1)})).toThrow();
    });
});
