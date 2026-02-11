import type {ReactNode} from "react";

import SmallIcon from "../../components/icons/SmallIcon.tsx";
import MediumIcon from "../../components/icons/MediumIcon.tsx";
import LargeIcon from "../../components/icons/LargeIcon.tsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.tsx";
import SecondaryButton from "../../components/buttons/SecondaryButton.tsx";

import imagePaths from "../../config/imagePaths.ts";
import webPaths from "../../config/webPaths.ts";
import SmallImage from "../../components/images/SmallImage.tsx";
import MediumImage from "../../components/images/MediumImage.tsx";
import LargeImage from "../../components/images/LargeImage.tsx";

const Test = (): ReactNode => {
    return (
        <>
            <SmallIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite} ></SmallIcon>
            <MediumIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite}></MediumIcon>
            <LargeIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite}></LargeIcon>
            <PrimaryButton text="Primary Button" linkTo={webPaths.testingSite}></PrimaryButton>
            <SecondaryButton text="Secondary Button" linkTo={webPaths.testingSite}></SecondaryButton>
            <SmallImage linkToImage={imagePaths.ssvLogoFull}></SmallImage>
            <MediumImage linkToImage={imagePaths.ssvLogoFull}></MediumImage>
            <LargeImage linkToImage={imagePaths.ssvLogoFull}></LargeImage>
        </>
    )
};

export default Test;