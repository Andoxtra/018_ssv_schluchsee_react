import AppLink from "../links/AppLink.tsx";
import type {CSSProperties, ReactNode} from "react";

type LinkIconProps = {
    children: ReactNode;
    style?: CSSProperties;
    linkTo: string;
}

const LinkBox = ({children, style, linkTo}: LinkIconProps) => {

    return (
        <AppLink href={linkTo} style={style}>
            {children}
        </AppLink>
    );
};

export default LinkBox;
