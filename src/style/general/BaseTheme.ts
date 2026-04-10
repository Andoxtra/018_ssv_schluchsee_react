import colorConfig from "../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";


const TableTheme : ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary,
        colorInfo: colorConfig.primary,

        colorLink: colorConfig.primary,
        colorLinkHover: colorConfig.primaryHover,
        colorLinkActive: colorConfig.primaryActive,

        controlOutline: colorConfig.primary,
        controlItemBgActive: colorConfig.primaryHover,
    },

    components: {
        Table: {
            headerColor: colorConfig.primary,
            headerBg: colorConfig.quaternaryHover,
            rowHoverBg: colorConfig.quaternary,
            borderColor: colorConfig.primaryHover,
            headerSplitColor: colorConfig.primaryHover,
            colorIcon: colorConfig.primary,
            colorIconHover: colorConfig.primaryActive,
            colorTextSecondary: colorConfig.primary,
        },

        Dropdown: {
            colorBgElevated: colorConfig.backgroundLight,
            controlItemBgHover: colorConfig.quaternaryHover,
            colorText: colorConfig.primary,
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
        }
    }
};

export default TableTheme;
