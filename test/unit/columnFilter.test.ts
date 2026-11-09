import {describe, expect, test} from "vitest";
import {searchableFilter, uniqueValues} from "../../src/components/table/columnFilter.ts";

type Row = {shooter: string};
const rows: Row[] = [{shooter: "Rainer Neubronner"}, {shooter: "Klaus Strübe"}, {shooter: "Rainer Neubronner"}];

describe("searchable column filter", () => {
    test("lists each value once in first-seen order", () => {
        expect(uniqueValues(rows, row => row.shooter)).toEqual(["Rainer Neubronner", "Klaus Strübe"]);
        expect(searchableFilter(rows, row => row.shooter).filters).toEqual([
            {text: "Rainer Neubronner", value: "Rainer Neubronner"},
            {text: "Klaus Strübe", value: "Klaus Strübe"},
        ]);
    });

    test("matches rows exactly and keeps the default menu mode that hides non-matching entries", () => {
        const filter = searchableFilter(rows, row => row.shooter);
        expect(filter.filterSearch).toBe(true);
        expect("filterMode" in filter).toBe(false);
        expect(filter.onFilter?.("Klaus Strübe", rows[1])).toBe(true);
        expect(filter.onFilter?.("Klaus", rows[1])).toBe(false);
    });
});
