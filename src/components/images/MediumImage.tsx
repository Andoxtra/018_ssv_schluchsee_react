import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseImage from "./BaseImage.tsx";
import MediumImageStyle from "../../style/components/images/MediumImageStyle.ts";

type MediumImageProps = {
    linkToImage: string;
    alternativeText?: string;
}

const {
    MediumImageS,
    MediumImageM,
    MediumImageL,
    MediumImageE
} = MediumImageStyle;

const MediumImage = ({linkToImage, alternativeText}: MediumImageProps) => {
    return (
        <BaseImage
            style={getDynamicStyle(MediumImageS, MediumImageM, MediumImageL, MediumImageE)}
            linkToImage={linkToImage}
            alternativeText={alternativeText}
        />
    );
};

export default MediumImage;
