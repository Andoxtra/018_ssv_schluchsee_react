import type {ReactNode} from "react";
import ParagraphStyle from "../../style/components/texts/ParagraphStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type ParagraphProps = {
    children: ReactNode;
    className?: string;
};

const {
    ParagraphStyleS,
    ParagraphStyleM,
    ParagraphStyleL,
    ParagraphStyleE
} = ParagraphStyle;

const Paragraph = ({children, className}: ParagraphProps): ReactNode => {
    return (
        <p className={className} style={getDynamicStyle(ParagraphStyleS, ParagraphStyleM, ParagraphStyleL, ParagraphStyleE)}>
            {children}
        </p>
    );
};

export default Paragraph;


