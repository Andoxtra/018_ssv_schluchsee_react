import { Image } from 'antd';
import type {CSSProperties} from "react";

type BaseImageProps = {
    style: CSSProperties;
    linkToImage: string;
    alternativeText? : string;
}

const BaseImage = ({style, linkToImage, alternativeText}: BaseImageProps) => {

    return (
        <Image style={style} src={linkToImage} alt={alternativeText}/>
    );
};

export default BaseImage;
