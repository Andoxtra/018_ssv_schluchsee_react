import type {ReactNode} from "react";

import Toolbar from "../components/boxes/Toolbar.tsx";
import LargeIcon from "../components/icons/LargeIcon.tsx";
import SecondaryButton from "../components/buttons/SecondaryButton.tsx";

import imagePaths from "../config/imagePaths.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/translations/textList.ts";


const Header = (): ReactNode => {
    return (
        <Toolbar>
            <LargeIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.homeSite}></LargeIcon>
            <SecondaryButton linkTo={webPaths.aboutSite} text={textList.about}></SecondaryButton>
            <SecondaryButton linkTo={webPaths.faqSite} text={textList.faq}></SecondaryButton>
            <SecondaryButton linkTo={webPaths.testingSite} text={textList.testingSite}></SecondaryButton>
            <SecondaryButton text={textList.contact} linkTo={webPaths.contactSite}></SecondaryButton>
            <SecondaryButton text={textList.news} linkTo={webPaths.newsSite}></SecondaryButton>
            <SecondaryButton text={textList.download} linkTo={webPaths.downloadSite}></SecondaryButton>
            <SecondaryButton text={textList.location} linkTo={webPaths.shootingLocation}></SecondaryButton>
        </Toolbar>
    );
};

export default Header;
