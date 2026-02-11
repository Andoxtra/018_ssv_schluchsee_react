import {Button, ConfigProvider} from "antd";
import PrimaryButtonStyle from "../../style/components/buttons/PrimaryButtonStyle.ts";
import PrimaryButtonTheme from "../../style/components/buttons/PrimaryButtonTheme.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type PrimaryButtonProps = {
    linkTo?: string;
    text: string;
};

const {
    PrimaryButtonStyleS,
    PrimaryButtonStyleM,
    PrimaryButtonStyleL,
    PrimaryButtonStyleE
} = PrimaryButtonStyle;

const PrimaryButton = ({linkTo, text}: PrimaryButtonProps) => {
    return (
        <ConfigProvider theme={PrimaryButtonTheme}>
            <Button style={getDynamicStyle(PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE)} href={linkTo}>
                {text}
            </Button>
        </ConfigProvider>
    );
};

export default PrimaryButton;