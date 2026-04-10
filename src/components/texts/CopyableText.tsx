import type {ReactNode} from "react";
import { Typography } from "antd";
import TextStyle from "../../style/components/texts/TextStyle";

type ParagraphProps = {
    children: string | ReactNode;
};

const {
    TextGeneralStyle
} = TextStyle;

const CopyableText = ({children}: ParagraphProps): ReactNode => {
    return (
        <>
            <Typography.Text copyable={true} style={TextGeneralStyle}>
                {children}
            </Typography.Text>
            <br/>
        </>
    );
};

export default CopyableText;


