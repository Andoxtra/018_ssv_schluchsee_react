import type {CSSProperties} from "react";

type ImagePlaceholderProps = {
    src?: string;
    alt: string;
    label?: string;
    aspectRatio?: string;
};

const ImagePlaceholder = ({src, alt, label = "Bild folgt", aspectRatio = "4 / 3"}: ImagePlaceholderProps) => {
    const base: CSSProperties = {width: "100%", aspectRatio, borderRadius: 8, display: "block"};
    if (src) return <img src={src} alt={alt} style={{...base, objectFit: "cover"}}/>;
    return (
        <div role="img" aria-label={`${alt} (${label})`} style={{
            ...base,
            background: "#EDECE4",
            border: "1px dashed #c8c5bb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7a7a75",
            fontSize: "0.875rem",
            fontWeight: 500,
        }}>
            {label}
        </div>
    );
};

export default ImagePlaceholder;
