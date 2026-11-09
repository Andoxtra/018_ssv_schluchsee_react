import colorConfig from "../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";


const TableTheme : ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary,
        colorInfo: colorConfig.primary,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        borderRadius: 8,
        fontSize: 14,

        colorLink: colorConfig.secondary,
        colorLinkHover: colorConfig.secondaryHover,
        colorLinkActive: colorConfig.secondaryActive,

        controlOutline: colorConfig.primary,
        // Selected items in filters, selects and menus keep dark text, so they need a light background.
        controlItemBgActive: colorConfig.primaryTint,
        controlItemBgActiveHover: colorConfig.primaryTintHover,
        // antd's default placeholder grey (25% black) is only 1.8:1 on white.
        colorTextPlaceholder: colorConfig.textMuted,
    },

    components: {
        Table: {
            headerColor: colorConfig.primary,
            headerBg: colorConfig.backgroundAlt,
            rowHoverBg: colorConfig.backgroundAlt,
            borderColor: colorConfig.border,
            headerSplitColor: colorConfig.border,
            colorIcon: colorConfig.primary,
            colorIconHover: colorConfig.primaryActive,
            colorTextSecondary: colorConfig.textSecondary,
            borderRadius: 8,
            fontSize: 14,
        },

        Dropdown: {
            colorBgElevated: colorConfig.white,
            controlItemBgHover: colorConfig.backgroundAlt,
            colorText: colorConfig.textPrimary,
        },
        Select: {
            colorPrimaryBorder: colorConfig.primary,
        },
        Checkbox: {
            colorPrimary: colorConfig.primary,
        },
        Radio: {
            colorPrimary: colorConfig.primary,
        },
        Input: {
            colorPrimaryBorder: colorConfig.primary,
        },
        Button: {
            colorPrimary: colorConfig.primary,
            primaryColor: colorConfig.white,
            defaultBg: colorConfig.white,
            defaultColor: colorConfig.primary,
            borderRadius: 6,
        }
    }
};

export default TableTheme;