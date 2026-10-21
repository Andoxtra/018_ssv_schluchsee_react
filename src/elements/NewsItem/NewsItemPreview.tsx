import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";
import {Link} from "react-router-dom";
import webPaths from "../../config/webPaths.ts";

const NewsItemPreview = ({title, creationDate, author, previewText, uuid, reviewNote}: NewsItemProps) => {
    return (
        <Link to={`${webPaths.newsSite}/${uuid}`} className="news-preview-link">
            <MediumBox>
                <Heading level={3}>{title}</Heading>
                <div style={{display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12, fontSize: "0.875rem", color: "#5a5a5a"}}>
                    <span>{creationDate.getGermanDate()}</span>
                    <span>von {author}</span>
                </div>
                <NormalText>{previewText}</NormalText>
                {reviewNote && <p className="review-note">Redaktioneller Hinweis: {reviewNote}</p>}
            </MediumBox>
        </Link>
    )
}

export default NewsItemPreview;
