import {Button} from 'antd'
 import SecondaryButtonStyle from "../../style/components/buttons/SecondaryButtonStyle.ts";

type SecondaryButtonProps = {
    linkTo?: string;
    text: string;
};

const SecondaryButton = ({linkTo, text}: SecondaryButtonProps) => {
    return (
        <Button style={SecondaryButtonStyle} href={linkTo} type="default">
            {text}
        </Button>
    );
};

export default SecondaryButton;