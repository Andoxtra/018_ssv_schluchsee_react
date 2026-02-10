import {Button, ConfigProvider} from "antd";
import PrimaryButtonStyle from "../../style/components/buttons/PrimaryButtonStyle.ts";
import PrimaryButtonTheme from "../../style/components/buttons/PrimaryButtonTheme.ts";

type PrimaryButtonProps = {
    linkTo?: string;
    text: string;
};

const PrimaryButton = ({linkTo, text}: PrimaryButtonProps) => {
    return (
        <ConfigProvider theme={PrimaryButtonTheme}>
            <Button style={PrimaryButtonStyle} href={linkTo} type="primary">
                {text}
            </Button>
        </ConfigProvider>
    );
};

export default PrimaryButton;