import type {ReactNode} from "react";
import ParagraphStyle from "../../style/components/texts/ParagraphStyle.ts";
import { Typography } from "antd";

type ParagraphProps = {
    children: string | ReactNode;
};

const {
    ParagraphGeneralStyle
} = ParagraphStyle;

const NormalText = ({children}: ParagraphProps): ReactNode => {
    return (
        <Typography.Text style={ParagraphGeneralStyle}>
            {children}
        </Typography.Text>
    );
};

export default NormalText;


