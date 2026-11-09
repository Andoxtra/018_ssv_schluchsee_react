import AppLink from "./AppLink.tsx";
import type {ReactNode} from "react";
import TextLinkStyle from "../../style/components/links/TextLinkStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import ColorConfig from "../../config/colorConfig.ts";

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
        <AppLink
            href={href}
            target={target}
            title={title}
            className={className}
            style={getDynamicStyle(TextLinkStyleS, TextLinkStyleM, TextLinkStyleL, TextLinkStyleE)}
            onMouseOver={(e) => {
                e.currentTarget.style.color = ColorConfig.linkHover;
                e.currentTarget.style.borderBottomColor = ColorConfig.linkHover;
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.color = ColorConfig.link;
                e.currentTarget.style.borderBottomColor = "transparent";
            }}
        >
            {children}
        </AppLink>
    );
};

export default TextLink;


