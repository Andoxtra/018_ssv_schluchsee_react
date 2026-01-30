import type {ReactNode} from "react";
import {Link} from "react-router-dom";

type SmallLinkButtonProps = {
    textContent: string;
    linkTo: string;
};

const SmallLinkButton = ({textContent, linkTo}: SmallLinkButtonProps): ReactNode => {
    return (
        <button className="smallLinkButton">
            <Link to={linkTo}>
                {textContent}
            </Link>
        </button>

    );
};

export default SmallLinkButton;