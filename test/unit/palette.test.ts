import {describe, expect, test} from "vitest";
import {cssVariableName, darkPalette, lightPalette, palettes, themeStylesheet} from "../../src/config/palette.ts";
import type {Palette} from "../../src/config/palette.ts";

const channels = (hex: string): number[] => {
    const value = hex.replace("#", "");
    const full = value.length === 3 ? [...value].map(digit => digit + digit).join("") : value;
    return [0, 2, 4].map(index => parseInt(full.slice(index, index + 2), 16) / 255);
};
const luminance = (hex: string): number => {
    const [r, g, b] = channels(hex).map(value => value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string): number => {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (light + 0.05) / (dark + 0.05);
};

type Pair = [foreground: keyof Palette, background: keyof Palette, minimum: number];
const textPairs: Pair[] = [
    ...(["text", "textSecondary", "textMuted", "primaryText", "link"] as const).flatMap(foreground =>
        (["page", "surface", "surfaceAlt"] as const).map(background => [foreground, background, 4.5] as Pair)),
    ["linkHover", "page", 4.5], ["linkHover", "surface", 4.5],
    ["onPrimary", "primary", 4.5], ["onPrimary", "primaryHover", 4.5],
    ["onPrimary", "secondary", 4.5], ["onPrimary", "secondaryHover", 4.5],
    ["text", "primaryTint", 4.5], ["text", "primaryTintHover", 4.5],
    ["noteText", "noteBg", 4.5], ["codeText", "codeBg", 4.5],
    ["footerText", "footerBg", 4.5], ["footerMuted", "footerBg", 4.5], ["accent", "footerBg", 4.5],
    ["onPrimary", "heroStart", 4.5], ["onPrimary", "heroEnd", 4.5],
    ["focus", "page", 3], ["focus", "surface", 3],
];

describe("colour palette", () => {
    test("defines the same roles in light and dark mode", () => {
        expect(Object.keys(darkPalette).sort()).toEqual(Object.keys(lightPalette).sort());
    });

    for (const [mode, palette] of Object.entries(palettes)) {
        test.each(textPairs)(`${mode}: %s on %s reaches %d:1`, (foreground, background, minimum) => {
            expect(contrast(palette[foreground], palette[background])).toBeGreaterThanOrEqual(minimum);
        });
    }

    test("exposes every role as a CSS custom property for both modes", () => {
        expect(cssVariableName("primaryTintHover")).toBe("--color-primary-tint-hover");
        const css = themeStylesheet();
        expect(css).toContain(`--color-page: ${lightPalette.page};`);
        expect(css).toContain(`:root[data-theme="dark"] {`);
        expect(css).toContain(`--color-page: ${darkPalette.page};`);
    });
});
