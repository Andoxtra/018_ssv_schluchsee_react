import {Link} from "react-router-dom";
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
    const internal = linkTo?.startsWith("/") && !linkTo.startsWith("//");
    return (
        <ConfigProvider theme={SecondaryButtonTheme}>
            {internal ? <Link to={linkTo!} className="site-button secondarybutton" style={getDynamicStyle(SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE)}>{text}</Link> : (
            <Button style={getDynamicStyle(SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE)} href={linkTo} type="default">
                {text}
            </Button>
            )}
        </ConfigProvider>
    );
};

export default SecondaryButton;