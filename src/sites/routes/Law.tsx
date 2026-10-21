import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
const Law = () => <div className="page-stack"><BigBox><Heading level={1}>Waffenrecht & Sachkunde</Heading><p>Weiterführende Informationen aus offiziellen Quellen.</p></BigBox>
    <MediumBox><Heading level={2}>Gesetzliche Grundlagen</Heading><p>Die Voraussetzungen hängen unter anderem von Alter, Sportgerät und Vorhaben ab. Bitte klären Sie Ihre persönliche Situation mit der zuständigen Waffenbehörde.</p><ul>
        <li><a href="https://www.gesetze-im-internet.de/waffg_2002/" target="_blank" rel="noopener noreferrer">Waffengesetz – vollständiger Gesetzestext</a></li>
        <li><a href="https://www.gesetze-im-internet.de/waffg_2002/__7.html" target="_blank" rel="noopener noreferrer">§ 7 WaffG – Sachkunde</a></li>
        <li><a href="https://www.gesetze-im-internet.de/waffg_2002/__14.html" target="_blank" rel="noopener noreferrer">§ 14 WaffG – Erwerb und Besitz durch Sportschützen</a></li>
        <li><a href="https://www.gesetze-im-internet.de/waffg_2002/__27.html" target="_blank" rel="noopener noreferrer">§ 27 WaffG – Schießstätten</a></li>
    </ul></MediumBox><MediumBox><Heading level={2}>Einstieg im Verein</Heading><p>Fragen zum Training und zu möglichen Sachkundeangeboten beantwortet die Vereinsverwaltung.</p><Link to="/kontaktformular">Frage an den Verein senden →</Link></MediumBox></div>;
export default Law;
