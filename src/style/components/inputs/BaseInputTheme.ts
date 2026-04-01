import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const BaseInputTheme: ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary,
        colorBorder: colorConfig.tertiary,
        borderRadius: 6,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    components: {
        Input: {
            colorPrimaryBorder: colorConfig.primary,
            controlHeight: 36,
            fontSize: 14,
        }
    }
};

export default BaseInputTheme;

