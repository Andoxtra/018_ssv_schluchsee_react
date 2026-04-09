import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";

const NewsItemPreview = ({title, creationDate, author, previewText}: NewsItemProps) => {
    return (
        <MediumBox>
            <Heading level={2}>{title}</Heading>
            <Heading level={3}>{creationDate}</Heading>
            <Heading level={3}>{author}</Heading>
            <Paragraph>{previewText}</Paragraph>
        </MediumBox>
    )
}

export default NewsItemPreview;