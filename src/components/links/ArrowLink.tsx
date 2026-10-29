import type {AnchorHTMLAttributes, ReactNode} from "react";
import AppLink from "./AppLink.tsx";

type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: string;
    state?: unknown;
    children: ReactNode;
};

const ArrowLink = ({to, href, children, className, ...props}: ArrowLinkProps): ReactNode => {
    return (
        <AppLink href={(to ?? href)!} className={className ? `arrow-link ${className}` : "arrow-link"} {...props}>
            {children}
            <span className="arrow-link-icon" aria-hidden="true">
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="M14 6l6 6-6 6"/></svg>
            </span>
        </AppLink>
    );
};

export default ArrowLink;
