import type {ReactNode} from "react";

import Toolbar from "../components/boxes/Toolbar.tsx";
import SmallLinkButton from "../components/buttons/SmallLinkButton.tsx";
import LargeIcon from "../components/icons/LargeIcon.tsx";

import imagePaths from "../config/imagePaths.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/textList.ts";


const Header = (): ReactNode => {
    return (
        <>
            <Toolbar>
                <LargeIcon linkToIcon={imagePaths.ssvLogo} linkTo={webPaths.homeSite}></LargeIcon>
                <SmallLinkButton textContent={textList.about} linkTo={webPaths.aboutSite} ></SmallLinkButton>
                <SmallLinkButton textContent={textList.faq} linkTo={webPaths.faqSite} ></SmallLinkButton>
            </Toolbar>
        </>
    );
};

export default Header;
