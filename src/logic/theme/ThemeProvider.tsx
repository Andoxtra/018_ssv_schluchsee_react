import {useMemo} from "react";
import type {ReactNode} from "react";
import {ConfigProvider} from "antd";
import type {ConfigProviderProps} from "antd";
import {palettes} from "../../config/palette.ts";
import {createBaseTheme} from "../../style/general/BaseTheme.ts";
import {ThemeContext} from "./themeContext.ts";
import {useThemePreference} from "./useThemePreference.ts";

type ThemeProviderProps = {
    locale: ConfigProviderProps["locale"];
    children: ReactNode;
};

const ThemeProvider = ({locale, children}: ThemeProviderProps) => {
    const {preference, mode, cycle} = useThemePreference();
    const palette = palettes[mode];
    const state = useMemo(() => ({preference, mode, palette, cycle}), [preference, mode, palette, cycle]);
    const antdTheme = useMemo(() => createBaseTheme(palette, mode), [palette, mode]);
    return (
        <ThemeContext.Provider value={state}>
            <ConfigProvider theme={antdTheme} locale={locale}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
