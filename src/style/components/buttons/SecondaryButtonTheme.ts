import colorConfig from "../../../config/colorConfig.ts";
import type {ThemeConfig} from "antd";

const SecondaryButtonTheme: ThemeConfig = {
    token : {
        colorPrimary : colorConfig.secondary,
    },
    components: {
        Button: {
            colorPrimary: colorConfig.secondary,
            primaryColor: colorConfig.white,
            defaultBg: colorConfig.secondary,
            defaultColor: colorConfig.white,
            defaultBorderColor: colorConfig.secondary,
            defaultHoverBg: colorConfig.secondaryActive,
            defaultHoverColor: colorConfig.white,
            defaultHoverBorderColor: colorConfig.secondaryActive,
            defaultActiveBg: colorConfig.primary,
            defaultActiveColor: colorConfig.white,
            borderRadius: 6,
        }
    }
};


export default SecondaryButtonTheme;