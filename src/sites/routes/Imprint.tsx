import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {club} from "../../data/clubData.ts";
const Imprint = () => <div className="page-stack"><BigBox><Heading level={1}>Impressum</Heading></BigBox>
    <MediumBox><Heading level={2}>Angaben zum Verein</Heading><address>{club.name}<br/>{club.street}<br/>{club.city}</address><p>Vertretungsberechtigter laut vorliegenden Vereinsangaben: Volker Matthews.</p><p className="review-note">Redaktionelle Prüfung ausstehend: Die freigegebenen Kontakt- und Registerangaben werden vor der Veröffentlichung ergänzt.</p><Link to="/kontaktformular">Kontaktformular öffnen →</Link></MediumBox>
    <MediumBox><Heading level={2}>Weitere Informationen</Heading><p><a href="https://www.gesetze-im-internet.de/ddg/__5.html" target="_blank" rel="noopener noreferrer">§ 5 Digitale-Dienste-Gesetz</a></p><Link to="/datenschutz">Datenschutzinformationen →</Link></MediumBox>
</div>;
export default Imprint;
