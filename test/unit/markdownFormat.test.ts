import {describe, expect, test} from "vitest";
import {applyMarkdownFormat} from "../../src/logic/admin/markdownFormat.ts";

describe("applyMarkdownFormat", () => {
    test("wraps a selection with bold markers and keeps the caret inside", () => {
        const result = applyMarkdownFormat("Hallo Welt", {start: 6, end: 10}, "**", "**");
        expect(result.content).toBe("Hallo **Welt**");
        expect(result.selectionStart).toBe(8);
        expect(result.selectionEnd).toBe(12);
    });

    test("inserts the placeholder when nothing is selected", () => {
        const result = applyMarkdownFormat("", {start: 0, end: 0}, "**", "**");
        expect(result.content).toBe("**Text**");
        expect(result.selectionStart).toBe(2);
        expect(result.selectionEnd).toBe(6);
    });

    test("prefixes a heading without a trailing marker", () => {
        const result = applyMarkdownFormat("Inhalt", {start: 0, end: 0}, "\n\n## ");
        expect(result.content).toBe("\n\n## TextInhalt");
    });

    test("prefixes a list item", () => {
        const result = applyMarkdownFormat("Punkt", {start: 0, end: 0}, "\n- ");
        expect(result.content).toBe("\n- TextPunkt");
    });

    test("wraps a link with the opening and closing bracket", () => {
        const result = applyMarkdownFormat("Beispiel", {start: 0, end: 8}, "[", "](https://)");
        expect(result.content).toBe("[Beispiel](https://)");
        expect(result.selectionStart).toBe(1);
        expect(result.selectionEnd).toBe(9);
    });

    test("preserves text before and after the selection", () => {
        const result = applyMarkdownFormat("abc def ghi", {start: 4, end: 7}, "*", "*");
        expect(result.content).toBe("abc *def* ghi");
    });
});
