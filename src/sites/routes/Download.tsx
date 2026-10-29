import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {documents} from "../../data/clubData.ts";
const Download = () => <div className="page-stack"><BigBox><Heading level={1}>Downloads</Heading><p>Formulare und weiterführende Informationen.</p></BigBox>
    <MediumBox><Heading level={2}>Vereinsdokumente</Heading><ul>{Object.values(documents).map(document => <li key={document.url}><ArrowLink href={document.url} target="_blank">{document.title}</ArrowLink></li>)}</ul><p><ArrowLink to="/kontakt">Hinweise zur Gastanmeldung</ArrowLink></p></MediumBox>
    <MediumBox><Heading level={2}>Sportordnung & Wettkampfklassen</Heading><p><ArrowLink href="https://www.dsb.de/der-verband/ueber-uns/statuten/sportordnung-national" target="_blank">Sportordnung des Deutschen Schützenbundes</ArrowLink></p><ArrowLink to="/gesetz">Offizielle Informationen zum Waffenrecht</ArrowLink></MediumBox>
</div>;
export default Download;
