import {describe, expect, test} from "vitest";
import {nextPreference, parsePreference, resolveTheme, toggleLabel} from "../../src/logic/theme/themePreference.ts";

describe("theme preference", () => {
    test("falls back to the system setting for missing or unknown stored values", () => {
        expect(parsePreference(null)).toBe("system");
        expect(parsePreference(undefined)).toBe("system");
        expect(parsePreference("purple")).toBe("system");
        expect(parsePreference("dark")).toBe("dark");
        expect(parsePreference("light")).toBe("light");
    });

    test("follows the system only while the preference is automatic", () => {
        expect(resolveTheme("system", true)).toBe("dark");
        expect(resolveTheme("system", false)).toBe("light");
        expect(resolveTheme("light", true)).toBe("light");
        expect(resolveTheme("dark", false)).toBe("dark");
    });

    test("cycles Automatisch, Hell, Dunkel and names the next step", () => {
        expect(nextPreference("system")).toBe("light");
        expect(nextPreference("light")).toBe("dark");
        expect(nextPreference("dark")).toBe("system");
        expect(toggleLabel("system")).toBe("Darstellung: Automatisch – wechseln zu Hell");
    });
});
