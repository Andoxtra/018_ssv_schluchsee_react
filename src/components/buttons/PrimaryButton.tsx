import {Button} from 'antd'
import PrimaryButtonStyle from "../../style/components/buttons/PrimaryButtonStyle.ts";

type PrimaryButtonProps = {
    linkTo?: string;
    text: string;
};

const PrimaryButton = ({linkTo, text}: PrimaryButtonProps) => {
    return (
        <Button style={PrimaryButtonStyle} href={linkTo} type="primary">
            {text}
        </Button>
    );
};

export default PrimaryButton;