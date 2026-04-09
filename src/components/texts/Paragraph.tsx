import type {ReactNode} from "react";
import ParagraphStyle from "../../style/components/texts/ParagraphStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type ParagraphProps = {
    children: string | ReactNode;
};

const {
    ParagraphStyleS,
    ParagraphStyleM,
    ParagraphStyleL,
    ParagraphStyleE
} = ParagraphStyle;

const Paragraph = ({children}: ParagraphProps): ReactNode => {
    return (
        <p style={getDynamicStyle(ParagraphStyleS, ParagraphStyleM, ParagraphStyleL, ParagraphStyleE)}>
            {children}
        </p>
    );
};

export default Paragraph;


