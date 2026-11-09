import type {ThemeMode} from "../../config/palette.ts";

export type ThemePreference = "system" | ThemeMode;

/** Shared with public/theme-init.js, which applies the stored choice before the first paint. */
export const THEME_STORAGE_KEY = "ssv-theme";

export const THEME_CYCLE: readonly ThemePreference[] = ["system", "light", "dark"];

export const THEME_LABELS: Record<ThemePreference, string> = {
    system: "Automatisch",
    light: "Hell",
    dark: "Dunkel",
};

export const parsePreference = (stored: string | null | undefined): ThemePreference =>
    THEME_CYCLE.includes(stored as ThemePreference) ? stored as ThemePreference : "system";

export const resolveTheme = (preference: ThemePreference, systemPrefersDark: boolean): ThemeMode =>
    preference === "system" ? (systemPrefersDark ? "dark" : "light") : preference;

export const nextPreference = (preference: ThemePreference): ThemePreference =>
    THEME_CYCLE[(THEME_CYCLE.indexOf(preference) + 1) % THEME_CYCLE.length];

export const toggleLabel = (preference: ThemePreference): string =>
    `Darstellung: ${THEME_LABELS[preference]} – wechseln zu ${THEME_LABELS[nextPreference(preference)]}`;
