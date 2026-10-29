import {Link} from "react-router-dom";
import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {SITE_NAME} from "../../config/seo.ts";
import {usePageMeta} from "../../logic/seo/usePageMeta.ts";

const NotFound = ({article = false}: {article?: boolean}) => {
    usePageMeta({
        title: `${article ? "Beitrag nicht gefunden" : "Seite nicht gefunden"} – ${SITE_NAME}`,
        description: "Der gewünschte Inhalt ist unter dieser Adresse nicht verfügbar.",
        noindex: true,
    });
    return <>
        <BigBox><Heading level={1}>{article ? "Beitrag nicht gefunden" : "Seite nicht gefunden"}</Heading><p>Der gewünschte Inhalt ist unter dieser Adresse nicht verfügbar.</p></BigBox>
        <p><ArrowLink to={article ? "/neuigkeiten" : "/"}>{article ? "Zu allen Neuigkeiten" : "Zur Startseite"}</ArrowLink></p>
        <p><Link to="/kontakt">Kontakt zum Verein</Link></p>
    </>;
};
export default NotFound;
