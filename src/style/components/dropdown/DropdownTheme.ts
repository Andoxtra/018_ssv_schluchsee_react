import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const DropdownTheme: ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary,
        colorBorder: colorConfig.primary,
        borderRadius: 6,
    },
    components: {
        Select: {
            colorPrimaryBorder: colorConfig.primary,
            controlHeight: 36,
            fontSize: 14,
        }
    }
};

export default DropdownTheme;

