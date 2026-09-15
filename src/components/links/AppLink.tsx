import type {AnchorHTMLAttributes} from "react";
import {Link} from "react-router-dom";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {href: string};
const AppLink = ({href, children, ...props}: AppLinkProps) => {
    if (href.startsWith("/") && !href.startsWith("//")) {
        return <Link to={href} {...props}>{children}</Link>;
    }
    return <a href={href} {...props} rel={props.target === "_blank" ? "noopener noreferrer" : props.rel}>{children}</a>;
};
export default AppLink;
