import {Button, ConfigProvider} from 'antd'
import SecondaryButtonTheme from "../../style/components/buttons/SecondaryButtonTheme.ts";
import SecondaryButtonStyle from "../../style/components/buttons/SecondaryButtonStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type SecondaryButtonProps = {
    linkTo?: string;
    text: string;
};

const {
    SecondaryButtonStyleS,
    SecondaryButtonStyleM,
    SecondaryButtonStyleL,
    SecondaryButtonStyleE
} = SecondaryButtonStyle;


const SecondaryButton = ({linkTo, text}: SecondaryButtonProps) => {
    return (
        <ConfigProvider theme={SecondaryButtonTheme}>
            <Button style={getDynamicStyle(SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE)} href={linkTo} type="default">
                {text}
            </Button>
        </ConfigProvider>
    );
};

export default SecondaryButton;