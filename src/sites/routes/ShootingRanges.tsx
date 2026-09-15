import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import TrainingTimes from "../../elements/club/TrainingTimes.tsx";
import {shootingRanges, totalLanes} from "../../data/clubData.ts";
const ShootingRanges = () => <div className="page-stack">
    <BigBox><Heading level={1}>Training & Schießstände</Heading><p>{totalLanes} Bahnen von 10 bis 100 Metern.</p></BigBox>
    <div className="card-grid"><MediumBox><Heading level={2}>Unsere Stände</Heading><dl className="fact-list">{shootingRanges.map(range => <div key={range.name}><dt>{range.name}{range.location && ` (${range.location})`}</dt><dd>{range.lanes} Bahnen · {range.distance}</dd></div>)}</dl></MediumBox><MediumBox><TrainingTimes/></MediumBox></div>
    <MediumBox><Heading level={2}>Besuch planen</Heading><p><Link to="/kontakt">Anmeldung für Gastschützen →</Link></p><p><Link to="/standort">Adresse, Karte & Anfahrt →</Link></p><Link to="/jugend">Unsere Jugendabteilung →</Link></MediumBox>
</div>;
export default ShootingRanges;
