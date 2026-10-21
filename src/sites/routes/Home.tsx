import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {totalLanes} from "../../data/clubData.ts";
const Home = () => <div className="page-stack">
    <BigBox><p className="eyebrow">Seit 1926 im Schwarzwald</p><Heading level={1}>Willkommen beim SSV Schluchsee</Heading><p>Schießsport entdecken, gemeinsam trainieren und Vereinsleben erleben.</p><Link className="site-button secondarybutton" to="/kontaktformular">Besuch anfragen →</Link></BigBox>
    <div className="card-grid home-grid">
        <MediumBox><Heading level={2}>Zum ersten Mal hier?</Heading><p>Informationen zur Mitgliedschaft und zum Einstieg in den Schießsport.</p><Link to="/faq">Mitgliedschaft & häufige Fragen →</Link></MediumBox>
        <MediumBox><Heading level={2}>Training & Schießstände</Heading><p>{totalLanes} Bahnen von 10 bis 100 Metern. Hier finden Sie unsere Trainingszeiten und die Ausstattung.</p><Link to="/schiessstaende">Training planen →</Link></MediumBox>
        <MediumBox><Heading level={2}>Als Gast teilnehmen</Heading><p>Bitte melden Sie Ihren Besuch vorher an und warten Sie die Bestätigung des Vereins ab.</p><Link to="/kontakt">Informationen für Gastschützen →</Link></MediumBox>
        <MediumBox><Heading level={2}>Vereinsleben</Heading><p>Neuigkeiten, Veranstaltungen und Berichte aus dem Verein.</p><Link to="/neuigkeiten">Neuigkeiten lesen →</Link><p><Link to="/veranstaltungen">Veranstaltungen ansehen →</Link></p></MediumBox>
    </div>
    <MediumBox><Heading level={2}>Ihr Weg zu uns</Heading><p>Unser Vereinsheim liegt am Faulenfürster Eck in Schluchsee.</p><Link to="/standort">Adresse & Anfahrt →</Link></MediumBox>
</div>;
export default Home;
