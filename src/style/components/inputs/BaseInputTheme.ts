import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const BaseInputTheme: ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary,
        colorBorder: colorConfig.primary,
        borderRadius: 6,
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

