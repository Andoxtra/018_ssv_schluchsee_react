import type {ReactNode} from "react";
import SmallIcon from "../components/icons/SmallIcon.tsx";
import Toolbar from "../components/boxes/Toolbar.tsx";
import SmallLinkButton from "../components/buttons/SmallLinkButton.tsx";

import imagePaths from "../config/imagePaths.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/textList.ts";


const Header = (): ReactNode => {
    return (
        <>
            <Toolbar>
                <SmallIcon linkToIcon={imagePaths.ssvLogo} linkTo={webPaths.homeSite}></SmallIcon>
                <SmallLinkButton textContent={textList.about} linkTo={webPaths.aboutSite} ></SmallLinkButton>
                <SmallLinkButton textContent={textList.faq} linkTo={webPaths.faqSite} ></SmallLinkButton>
            </Toolbar>
        </>
    );
};

export default Header;
