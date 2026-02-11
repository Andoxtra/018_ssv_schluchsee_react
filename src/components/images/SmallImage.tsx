import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseImage from "./BaseImage.tsx";
import SmallImageStyle from "../../style/components/images/SmallImageStyle.ts";

type SmallImageProps = {
    linkToImage: string;
    alternativeText?: string;
}

const {
    SmallImageS,
    SmallImageM,
    SmallImageL,
    SmallImageE
} = SmallImageStyle;

const SmallImage = ({linkToImage, alternativeText}: SmallImageProps) => {
    return (
        <BaseImage
            style={getDynamicStyle(SmallImageS, SmallImageM, SmallImageL, SmallImageE)}
            linkToImage={linkToImage}
            alternativeText={alternativeText}
        />
    );
};

export default SmallImage;
