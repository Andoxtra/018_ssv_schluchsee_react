import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const CheckBoxTheme: ThemeConfig = {
    token: {
        colorPrimary: colorConfig.primary
    },
    components: {
        Checkbox: {
            colorPrimary: colorConfig.primary,
            fontSize: 14,
        }
    }
};

export default CheckBoxTheme;

