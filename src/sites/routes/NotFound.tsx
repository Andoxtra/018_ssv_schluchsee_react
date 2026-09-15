import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
const NotFound = ({article = false}: {article?: boolean}) => <>
    <BigBox><Heading level={1}>{article ? "Beitrag nicht gefunden" : "Seite nicht gefunden"}</Heading><p>Der gewünschte Inhalt ist unter dieser Adresse nicht verfügbar.</p></BigBox>
    <p><Link to={article ? "/neuigkeiten" : "/"}>{article ? "Zu allen Neuigkeiten" : "Zur Startseite"} →</Link></p>
    <p><Link to="/kontakt">Kontakt zum Verein</Link></p>
</>;
export default NotFound;
