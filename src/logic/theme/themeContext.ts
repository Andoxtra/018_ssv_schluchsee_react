import {createContext, useContext} from "react";
import {lightPalette} from "../../config/palette.ts";
import type {Palette, ThemeMode} from "../../config/palette.ts";
import type {ThemePreference} from "./themePreference.ts";

export type ThemeState = {
    preference: ThemePreference;
    mode: ThemeMode;
    palette: Palette;
    cycle: () => void;
};

export const ThemeContext = createContext<ThemeState>({
    preference: "system",
    mode: "light",
    palette: lightPalette,
    cycle: () => undefined,
});

export const useTheme = (): ThemeState => useContext(ThemeContext);
