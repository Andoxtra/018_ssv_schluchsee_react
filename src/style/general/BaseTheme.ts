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
        controlItemBgActive: colorConfig.primaryHover,
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