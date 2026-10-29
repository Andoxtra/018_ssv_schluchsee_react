import type {AnchorHTMLAttributes} from "react";
import {Link} from "react-router-dom";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {href: string; state?: unknown};
const AppLink = ({href, children, state, ...props}: AppLinkProps) => {
    if (href.startsWith("/") && !href.startsWith("//")) {
        return <Link to={href} state={state} {...props}>{children}</Link>;
    }
    return <a href={href} {...props} rel={props.target === "_blank" ? "noopener noreferrer" : props.rel}>{children}</a>;
};
export default AppLink;
