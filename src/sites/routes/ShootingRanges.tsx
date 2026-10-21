import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ImagePlaceholder from "../../components/images/ImagePlaceholder.tsx";
import TrainingTimes from "../../elements/club/TrainingTimes.tsx";
import {shootingRanges, totalLanes} from "../../data/clubData.ts";
const ShootingRanges = () => <div className="page-stack">
    <BigBox><Heading level={1}>Training & Schießstände</Heading><p>{totalLanes} Bahnen von 10 bis 100 Metern.</p></BigBox>
    <MediumBox><Heading level={2}>Unsere Stände</Heading>
        <div className="range-grid">
            {shootingRanges.map(range => (
                <figure className="range-card" key={range.name}>
                    <ImagePlaceholder alt={`Schießstand: ${range.name}`}/>
                    <figcaption>
                        <div className="range-name">{range.name}{range.location && ` (${range.location})`}</div>
                        <div className="range-meta">{range.lanes} Bahnen · {range.distance}</div>
                    </figcaption>
                </figure>
            ))}
        </div>
    </MediumBox>
    <div className="card-grid"><MediumBox><TrainingTimes/></MediumBox><MediumBox><Heading level={2}>Besuch planen</Heading><p><Link to="/kontakt">Anmeldung für Gastschützen →</Link></p><p><Link to="/standort">Adresse, Karte & Anfahrt →</Link></p><Link to="/jugend">Unsere Jugendabteilung →</Link></MediumBox></div>
</div>;
export default ShootingRanges;
