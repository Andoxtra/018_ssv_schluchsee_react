import type {ReactNode} from "react";
import TextLinkStyle from "../../style/components/links/TextLinkStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type TextLinkProps = {
    href: string;
    children: ReactNode;
    target?: "_blank" | "_self" | "_parent" | "_top";
    title?: string;
    className?: string;
};

const {
    TextLinkStyleS,
    TextLinkStyleM,
    TextLinkStyleL,
    TextLinkStyleE
} = TextLinkStyle;

const TextLink = ({href, children, target = "_self", title, className}: TextLinkProps): ReactNode => {
    return (
        <a
            href={href}
            target={target}
            title={title}
            className={className}
            style={getDynamicStyle(TextLinkStyleS, TextLinkStyleM, TextLinkStyleL, TextLinkStyleE)}
            onMouseOver={(e) => {
                e.currentTarget.style.color = "rgba(233,220,104,0.75)";
                e.currentTarget.style.borderBottomColor = "rgba(233,220,104,0.75)";
            }}
            onMouseOut={(e) => {
                const style = getDynamicStyle(TextLinkStyleS, TextLinkStyleM, TextLinkStyleL, TextLinkStyleE);
                e.currentTarget.style.color = style.color as string;
                e.currentTarget.style.borderBottomColor = "transparent";
            }}
        >
            {children}
        </a>
    );
};

export default TextLink;


