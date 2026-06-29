import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";
import {Link} from "react-router-dom";
import webPaths from "../../config/webPaths.ts";

const NewsItemPreview = ({title, creationDate, author, previewText, uuid}: NewsItemProps) => {
    return (
        <MediumBox>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8}}>
                <Heading level={3}>{title}</Heading>
                <Link
                    to={`${webPaths.newsSite}/${uuid}`}
                    style={{
                        color: "#143620",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        padding: "4px 12px",
                        border: "1px solid #D5D2C8",
                        borderRadius: 4,
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                    }}
                >
                    Weiterlesen →
                </Link>
            </div>
            <div style={{display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12, fontSize: "0.875rem", color: "#5a5a5a"}}>
                <span>{creationDate.getGermanDate()}</span>
                <span>von {author}</span>
            </div>
            <NormalText>{previewText}</NormalText>
        </MediumBox>
    )
}

export default NewsItemPreview;