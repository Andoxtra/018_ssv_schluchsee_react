import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const Location = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Standort</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Anfahrt zum Vereinsheim</Heading>
                <Paragraph>
                    <strong>SSV Schluchsee</strong><br/>
                    Schluchseeweg 25<br/>
                    78136 Schonachbach<br/>
                    Deutschland<br/>
                    <br/>
                    <strong>GPS Koordinaten:</strong><br/>
                    Breitengrad: 47.8234°<br/>
                    Längengrad: 8.0567°
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Öffentliche Verkehrsmittel</Heading>
                <Paragraph>
                    Das Vereinsheim ist gut mit öffentlichen Verkehrsmitteln erreichbar:<br/>
                    <br/>
                    <strong>Bahn:</strong> Bahnhof Schonachbach, ca. 15 Minuten Fußweg<br/>
                    <strong>Bus:</strong> Buslinien 35 und 42, Haltestelle "Schützenheim"<br/>
                    <br/>
                    Für detaillierte Fahrplananschlüsse nutzen Sie bitte die ÖPNV-Webseite.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Parkmöglichkeiten</Heading>
                <Paragraph>
                    Direkt neben unserem Vereinsheim stehen kostenlose Parkplätze zur Verfügung. 
                    Bei Großveranstaltungen stehen zusätzliche Parkflächen auf dem benachbarten 
                    Gelände zur Verfügung.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Barrierefreiheit</Heading>
                <Paragraph>
                    Unser Vereinsheim ist teilweise barrierefrei zugänglich. Aufzüge befinden sich 
                    im Hauptgebäude. Bei Fragen zur Barrierefreiheit kontaktieren Sie uns bitte vorab.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Location;

