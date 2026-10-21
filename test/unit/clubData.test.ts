import {describe, expect, test} from 'vitest';
import {club, documents, shootingRanges, totalLanes, trainingTimes} from '../../src/data/clubData.ts';

describe('club data', () => {
    test('totalLanes matches the documented range count', () => {
        expect(totalLanes).toBe(27);
    });

    test('documents expose a non-empty title and a local PDF path', () => {
        for (const document of Object.values(documents)) {
            expect(document.title.length).toBeGreaterThan(0);
            expect(document.url).toMatch(/^\/documents\/.+\.pdf$/);
        }
    });

    test('training times are complete', () => {
        expect(trainingTimes.length).toBeGreaterThan(0);
        for (const entry of trainingTimes) {
            expect(entry.label.length).toBeGreaterThan(0);
            expect(entry.day.length).toBeGreaterThan(0);
            expect(entry.time.length).toBeGreaterThan(0);
        }
    });

    test('shooting ranges have a name, positive lanes and a distance', () => {
        expect(shootingRanges.length).toBeGreaterThan(0);
        for (const range of shootingRanges) {
            expect(range.name.length).toBeGreaterThan(0);
            expect(range.lanes).toBeGreaterThan(0);
            expect(range.distance.length).toBeGreaterThan(0);
        }
    });

    test('club address carries the expected fields', () => {
        expect(club.name).toContain('SSV Schluchsee');
        expect(club.street.length).toBeGreaterThan(0);
        expect(club.city).toMatch(/^\d{5} /);
    });
});
