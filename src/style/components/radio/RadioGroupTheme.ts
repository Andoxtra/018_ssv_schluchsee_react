import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const RadioGroupTheme: ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary
    },
    components: {
        Radio: {
            colorPrimary: colorConfig.primary,
            fontSize: 14,
        }
    }
};

export default RadioGroupTheme;

