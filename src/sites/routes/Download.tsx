import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {documents} from "../../data/clubData.ts";
const Download = () => <div className="page-stack"><BigBox><Heading level={1}>Downloads</Heading><p>Formulare und weiterführende Informationen.</p></BigBox>
    <MediumBox><Heading level={2}>Vereinsdokumente</Heading><ul>{Object.values(documents).map(document => <li key={document.url}><a href={document.url} target="_blank" rel="noopener noreferrer">{document.title} →</a></li>)}</ul><p><Link to="/kontakt">Hinweise zur Gastanmeldung →</Link></p></MediumBox>
    <MediumBox><Heading level={2}>Sportordnung & Wettkampfklassen</Heading><p><a href="https://www.dsb.de/der-verband/ueber-uns/statuten/sportordnung-national" target="_blank" rel="noopener noreferrer">Sportordnung des Deutschen Schützenbundes →</a></p><Link to="/gesetz">Offizielle Informationen zum Waffenrecht →</Link></MediumBox>
</div>;
export default Download;
