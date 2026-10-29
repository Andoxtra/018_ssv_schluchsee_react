import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ImagePlaceholder from "../../components/images/ImagePlaceholder.tsx";
import {totalLanes} from "../../data/clubData.ts";
const Home = () => <div className="page-stack">
    <BigBox><div className="hero-grid"><div><p className="eyebrow">Seit 1926 im Schwarzwald</p><Heading level={1}>Willkommen beim SSV Schluchsee</Heading><p>Schießsport entdecken, gemeinsam trainieren und Vereinsleben erleben.</p><ArrowLink className="site-button secondarybutton" to="/kontaktformular">Besuch anfragen</ArrowLink></div><div className="hero-image"><ImagePlaceholder alt="Schützen des SSV Schluchsee beim Training" aspectRatio="4 / 3"/></div></div></BigBox>
    <div className="card-grid home-grid">
        <MediumBox><Heading level={2}>Zum ersten Mal hier?</Heading><p>Informationen zur Mitgliedschaft und zum Einstieg in den Schießsport.</p><ArrowLink to="/faq">Mitgliedschaft & häufige Fragen</ArrowLink></MediumBox>
        <MediumBox><Heading level={2}>Training & Schießstände</Heading><p>{totalLanes} Bahnen von 10 bis 100 Metern. Hier finden Sie unsere Trainingszeiten und die Ausstattung.</p><ArrowLink to="/schiessstaende">Training planen</ArrowLink></MediumBox>
        <MediumBox><Heading level={2}>Als Gast teilnehmen</Heading><p>Bitte melden Sie Ihren Besuch vorher an und warten Sie die Bestätigung des Vereins ab.</p><ArrowLink to="/kontakt" state={{focusId: "gast-training"}}>Informationen für Gastschützen</ArrowLink></MediumBox>
        <MediumBox><Heading level={2}>Vereinsleben</Heading><p>Neuigkeiten, Veranstaltungen und Berichte aus dem Verein.</p><ArrowLink to="/neuigkeiten">Neuigkeiten lesen</ArrowLink><p><ArrowLink to="/veranstaltungen">Veranstaltungen ansehen</ArrowLink></p></MediumBox>
    </div>
    <MediumBox><Heading level={2}>Ihr Weg zu uns</Heading><ImagePlaceholder alt="Das Vereinsheim des SSV Schluchsee am Faulenfürster Eck" aspectRatio="16 / 9"/><p>Unser Vereinsheim liegt am Faulenfürster Eck in Schluchsee.</p><ArrowLink to="/standort">Adresse & Anfahrt</ArrowLink></MediumBox>
</div>;
export default Home;
