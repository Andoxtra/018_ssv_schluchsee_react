import {useCallback, useEffect, useState} from "react";
import {palettes} from "../../config/palette.ts";
import type {ThemeMode} from "../../config/palette.ts";
import {nextPreference, parsePreference, resolveTheme, THEME_STORAGE_KEY} from "./themePreference.ts";
import type {ThemePreference} from "./themePreference.ts";

const DARK_QUERY = "(prefers-color-scheme: dark)";

const readStored = (): ThemePreference => {
    try {
        return parsePreference(window.localStorage.getItem(THEME_STORAGE_KEY));
    } catch {
        return "system";
    }
};

const store = (preference: ThemePreference): void => {
    try {
        if (preference === "system") window.localStorage.removeItem(THEME_STORAGE_KEY);
        else window.localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
        /* Storage blocked: the choice lasts for this page view only. */
    }
};

const systemPrefersDark = (): boolean => window.matchMedia(DARK_QUERY).matches;

/** Holds the visitor's choice, follows the OS while it is "system", and applies it to <html>. */
export const useThemePreference = (): {preference: ThemePreference; mode: ThemeMode; cycle: () => void} => {
    const [preference, setPreference] = useState<ThemePreference>(readStored);
    const [systemDark, setSystemDark] = useState<boolean>(systemPrefersDark);

    useEffect(() => {
        const query = window.matchMedia(DARK_QUERY);
        const update = (): void => setSystemDark(query.matches);
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    const mode = resolveTheme(preference, systemDark);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = mode;
        root.style.colorScheme = mode;
        // Browser UI colour (mobile address bar) follows the mode as well.
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", mode === "dark" ? palettes.dark.page : palettes.light.primary);
    }, [mode]);

    const cycle = useCallback(() => {
        setPreference(current => {
            const next = nextPreference(current);
            store(next);
            return next;
        });
    }, []);

    return {preference, mode, cycle};
};
