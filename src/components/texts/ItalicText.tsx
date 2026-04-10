import type {ReactNode} from "react";
import { Typography } from "antd";
import TextStyle from "../../style/components/texts/TextStyle";

type ParagraphProps = {
    children: string | ReactNode;
};

const {
    TextGeneralStyle
} = TextStyle;

const ItalicText = ({children}: ParagraphProps): ReactNode => {
    return (
        <Typography.Text style={TextGeneralStyle} italic>
            {children}
        </Typography.Text>
    );
};

export default ItalicText;


