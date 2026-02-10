import type {CSSProperties, ReactNode} from "react";

type LinkIconProps = {
    children: ReactNode;
    style?: CSSProperties;
    linkTo: string;
}

const LinkBox = ({children, style, linkTo}: LinkIconProps) => {

    return (
        <a  href={linkTo} style={style}>
            {children}
        </a>
    );
};

export default LinkBox;
