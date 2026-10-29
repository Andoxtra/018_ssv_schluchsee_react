import {useState} from "react";
import {Link} from "react-router-dom";
import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {club} from "../../data/clubData.ts";
const Location = () => {
    const [showMap, setShowMap] = useState(false);
    return <div className="page-stack"><BigBox><Heading level={1}>Anfahrt</Heading><p>Ihr Weg zum Vereinsheim am Faulenfürster Eck.</p></BigBox>
        <MediumBox><Heading level={2}>Adresse</Heading><address>{club.name}<br/>{club.street}<br/>{club.city}</address><p>GPS: {club.coordinates}</p><ArrowLink href={club.mapUrl} target="_blank">Route mit OpenStreetMap planen</ArrowLink></MediumBox>
        <MediumBox><Heading level={2}>Karte</Heading>{showMap ? <iframe title="Standort des SSV Schluchsee" src={club.mapEmbed} width="100%" height="400" loading="lazy" referrerPolicy="no-referrer"/> : <><p>Beim Laden der Karte wird eine Verbindung zu OpenStreetMap hergestellt.</p><button onClick={() => setShowMap(true)}>Karte laden</button></>}<p><Link to="/datenschutz">Hinweise zum Datenschutz</Link></p></MediumBox>
        <MediumBox><Heading level={2}>Vor dem Besuch</Heading><p><ArrowLink to="/schiessstaende">Trainingszeiten prüfen</ArrowLink></p><ArrowLink to="/kontakt">Besuch mit dem Verein abstimmen</ArrowLink></MediumBox>
    </div>;
};
export default Location;
