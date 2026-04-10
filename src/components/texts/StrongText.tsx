import type {ReactNode} from "react";
import {Typography} from "antd";
import TextStyle from "../../style/components/texts/TextStyle";

type ParagraphProps = {
    children: string | ReactNode;
};

const {
    TextGeneralStyle
} = TextStyle;

const StrongText = ({children}: ParagraphProps): ReactNode => {
    return (
        <>
            <Typography.Text style={TextGeneralStyle} strong>
                {children}
            </Typography.Text>
            <br/>
        </>
    );
};

export default StrongText;


