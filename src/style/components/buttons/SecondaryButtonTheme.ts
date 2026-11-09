import type {ThemeConfig} from "antd";
import type {Palette} from "../../../config/palette.ts";

export const createSecondaryButtonTheme = (palette: Palette): ThemeConfig => ({
    token: {
        colorPrimary: palette.secondary,
    },
    components: {
        Button: {
            colorPrimary: palette.secondary,
            primaryColor: palette.onPrimary,
            defaultBg: palette.secondary,
            defaultColor: palette.onPrimary,
            defaultBorderColor: palette.secondary,
            defaultHoverBg: palette.secondaryHover,
            defaultHoverColor: palette.onPrimary,
            defaultHoverBorderColor: palette.secondaryHover,
            defaultActiveBg: palette.primary,
            defaultActiveColor: palette.onPrimary,
            borderRadius: 6,
        }
    }
});
