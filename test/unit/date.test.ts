import {describe, expect, test} from 'vitest';
import {DateClass} from '../../src/logic/date/DateClass.ts';
import {localDate} from '../../src/logic/news/newsSource.ts';

describe('DateClass', () => {
    test('formats a German date with zero-padded day and month', () => {
        expect(new DateClass('2026-01-05').getGermanDate()).toBe('05.01.2026');
        expect(new DateClass('2026-03-07').getGermanDate()).toBe('07.03.2026');
        expect(new DateClass('2026-12-31').getGermanDate()).toBe('31.12.2026');
    });

    test('adds one to the zero-based month index', () => {
        expect(new DateClass('2026-11-15').getGermanDate()).toBe('15.11.2026');
    });

    test('returns the epoch milliseconds for the parsed date', () => {
        expect(new DateClass('2026-01-01').getUnixTimestamp()).toBe(new Date('2026-01-01').getTime());
    });
});

describe('localDate', () => {
    test('formats an explicit date as YYYY-MM-DD', () => {
        expect(localDate(new Date(2026, 0, 5))).toBe('2026-01-05');
    });

    test('zero-pads single-digit months and days', () => {
        expect(localDate(new Date(2026, 2, 7))).toBe('2026-03-07');
        expect(localDate(new Date(2026, 10, 3))).toBe('2026-11-03');
    });

    test('handles year and leap-day boundaries', () => {
        expect(localDate(new Date(2026, 11, 31))).toBe('2026-12-31');
        expect(localDate(new Date(2024, 1, 29))).toBe('2024-02-29');
    });
});
