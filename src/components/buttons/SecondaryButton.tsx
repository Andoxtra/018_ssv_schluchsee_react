import {Button, ConfigProvider} from 'antd'
 import SecondaryButtonStyle from "../../style/components/buttons/SecondaryButtonStyle.ts";
import SecondaryButtonTheme from "../../style/components/buttons/SecondaryButtonTheme.ts";

type SecondaryButtonProps = {
    linkTo?: string;
    text: string;
};

const SecondaryButton = ({linkTo, text}: SecondaryButtonProps) => {
    return (
        <ConfigProvider theme={SecondaryButtonTheme}>
            <Button style={SecondaryButtonStyle} href={linkTo} type="default">
                {text}
            </Button>
        </ConfigProvider>
    );
};

export default SecondaryButton;