import type {ThemeConfig} from "antd";
import type {Palette} from "../../../config/palette.ts";

export const createPrimaryButtonTheme = (palette: Palette): ThemeConfig => ({
    token: {
        colorPrimary: palette.primary,
    }
});
