import {localDate} from "../../logic/news/newsSource.ts";
import {Link} from "react-router-dom";
import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Markdown from "../../components/boxes/Markdown.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";
const NewsItemFullView = ({title, creationDate, author, contentAsMarkdown, reviewNote, eventDates = []}: NewsItemProps) => {
    const archived = eventDates.length > 0 && eventDates.every(date => date < localDate());
    return <><BigBox><Heading level={1}>{title}</Heading><p>{creationDate.getGermanDate()} · {author}</p>{archived && <p>Veranstaltungsarchiv · Dieser Termin liegt in der Vergangenheit.</p>}</BigBox>
        <MediumBox>{reviewNote && <p className="review-note">Redaktioneller Hinweis: {reviewNote}</p>}<Markdown>{contentAsMarkdown}</Markdown></MediumBox>
        <Link to="/neuigkeiten">← Zu allen Neuigkeiten</Link></>;
};
export default NewsItemFullView;
