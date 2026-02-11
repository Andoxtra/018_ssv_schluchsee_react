import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseImage from "./BaseImage.tsx";
import LargeImageStyle from "../../style/components/images/LargeImageStyle.ts";

type LargeImageProps = {
    linkToImage: string;
    alternativeText?: string;
}

const {
    LargeImageS,
    LargeImageM,
    LargeImageL,
    LargeImageE
} = LargeImageStyle;

const LargeImage = ({linkToImage, alternativeText}: LargeImageProps) => {
    return (
        <BaseImage
            style={getDynamicStyle(LargeImageS, LargeImageM, LargeImageL, LargeImageE)}
            linkToImage={linkToImage}
            alternativeText={alternativeText}
        />
    );
};

export default LargeImage;
