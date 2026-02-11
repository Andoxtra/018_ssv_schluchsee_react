import type {ReactNode} from "react";

import Toolbar from "../components/boxes/Toolbar.tsx";
import LargeIcon from "../components/icons/LargeIcon.tsx";

import imagePaths from "../config/imagePaths.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/textList.ts";
import SecondaryButton from "../components/buttons/SecondaryButton.tsx";


const Header = (): ReactNode => {
    return (
        <>
            <Toolbar>
                <LargeIcon linkToIcon={imagePaths.ssvLogo} linkTo={webPaths.homeSite}></LargeIcon>
                <SecondaryButton linkTo={webPaths.aboutSite} text={textList.about}></SecondaryButton>
                <SecondaryButton linkTo={webPaths.faqSite} text={textList.faq}></SecondaryButton>
                <SecondaryButton linkTo={webPaths.testingSite} text={textList.testingSite}></SecondaryButton>
            </Toolbar>
        </>
    );
};

export default Header;
