import {theme} from "antd";
import type {ThemeConfig} from "antd";
import type {Palette, ThemeMode} from "../../config/palette.ts";

export const createBaseTheme = (palette: Palette, mode: ThemeMode): ThemeConfig => ({
    algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
        colorPrimary: palette.primary,
        colorInfo: palette.primary,
        colorError: palette.error,
        colorSuccess: palette.success,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        borderRadius: 8,
        fontSize: 14,

        colorText: palette.text,
        colorTextSecondary: palette.textSecondary,
        colorBgBase: palette.page,
        colorBgLayout: palette.page,
        colorBgContainer: palette.surface,
        colorBgElevated: palette.surface,
        colorBorder: palette.border,
        colorBorderSecondary: palette.borderSoft,

        colorLink: palette.link,
        colorLinkHover: palette.linkHover,
        colorLinkActive: palette.link,

        controlOutline: palette.focusGlow,
        // Selected items in filters, selects and menus keep dark text, so they need a light background.
        controlItemBgActive: palette.primaryTint,
        controlItemBgActiveHover: palette.primaryTintHover,
        // antd's default placeholder grey (25% black) is only 1.8:1 on white.
        colorTextPlaceholder: palette.textMuted,
    },

    components: {
        Table: {
            headerColor: palette.primaryText,
            headerBg: palette.surfaceAlt,
            rowHoverBg: palette.surfaceAlt,
            borderColor: palette.border,
            headerSplitColor: palette.border,
            colorIcon: palette.primaryText,
            colorIconHover: palette.linkHover,
            colorTextSecondary: palette.textSecondary,
            borderRadius: 8,
            fontSize: 14,
        },

        // Tabs colour their active label with colorPrimary, a fill colour; use the text role instead.
        Tabs: {
            itemSelectedColor: palette.primaryText,
            itemHoverColor: palette.linkHover,
            itemActiveColor: palette.primaryText,
            inkBarColor: palette.primaryText,
        },

        Dropdown: {
            colorBgElevated: palette.surface,
            controlItemBgHover: palette.surfaceAlt,
            colorText: palette.text,
        },
        Select: {
            colorPrimaryBorder: palette.primary,
        },
        Checkbox: {
            colorPrimary: palette.primary,
        },
        Radio: {
            colorPrimary: palette.primary,
        },
        Input: {
            colorPrimaryBorder: palette.primary,
        },
        Button: {
            colorPrimary: palette.primary,
            primaryColor: palette.onPrimary,
            defaultBg: palette.surface,
            defaultColor: palette.primaryText,
            borderRadius: 6,
        }
    }
});
