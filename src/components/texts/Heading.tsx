import type {JSX, ReactNode} from "react";
import HeadingStyle from "../../style/components/texts/HeadingStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
};

const {
    H1Style,
    H2Style,
    H3Style,
    H4Style,
    H5Style,
    H6Style
} = HeadingStyle;

const Heading = ({level, children, className}: HeadingProps): ReactNode => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    //Todo: Overhaul Heading to use dynamic styling get rid of the weird creation
    const getStyleForLevel = (lvl: number) => {
        switch(lvl) {
            case 1: return getDynamicStyle(H1Style, H1Style, H1Style, H1Style);
            case 2: return getDynamicStyle(H2Style, H2Style, H2Style, H2Style);
            case 3: return getDynamicStyle(H3Style, H3Style, H3Style, H3Style);
            case 4: return getDynamicStyle(H4Style, H4Style, H4Style, H4Style);
            case 5: return getDynamicStyle(H5Style, H5Style, H5Style, H5Style);
            case 6: return getDynamicStyle(H6Style, H6Style, H6Style, H6Style);
            default: return H1Style;
        }
    };

    return (
        <HeadingTag className={className} style={getStyleForLevel(level)}>
            {children}
        </HeadingTag>
    );
};

export default Heading;


