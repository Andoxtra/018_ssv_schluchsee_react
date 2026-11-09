import {Link} from "react-router-dom";
import {Button, ConfigProvider} from "antd";
import PrimaryButtonStyle from "../../style/components/buttons/PrimaryButtonStyle.ts";
import {createPrimaryButtonTheme} from "../../style/components/buttons/PrimaryButtonTheme.ts";
import {useTheme} from "../../logic/theme/themeContext.ts";
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
    const {palette} = useTheme();
    const internal = linkTo?.startsWith("/") && !linkTo.startsWith("//");
    return (
        <ConfigProvider theme={createPrimaryButtonTheme(palette)}>
            {internal ? <Link to={linkTo!} className="site-button primarybutton" style={getDynamicStyle(PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE)}>{text}</Link> : (
            <Button style={getDynamicStyle(PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE)} href={linkTo}>
                {text}
            </Button>
            )}
        </ConfigProvider>
    );
};

export default PrimaryButton;