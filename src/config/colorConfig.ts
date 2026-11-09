import {cssVariableName, lightPalette} from "./palette.ts";
import type {Palette} from "./palette.ts";

// CSS custom-property references for inline style objects: they follow the active
// light/dark mode automatically. Raw values for Ant Design live in palette.ts.
const colorConfig = Object.fromEntries(
    (Object.keys(lightPalette) as (keyof Palette)[]).map(role => [role, `var(${cssVariableName(role)})`]),
) as Record<keyof Palette, string>;

export default colorConfig;
