import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
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
                <NormalText>
                    <strong>SSV Schluchsee e.V.</strong><br />
                    Faulenfürster Eck<br />
                    Schluchsee<br />
                    Deutschland<br />
                    <br />
                    <strong>GPS Koordinaten:</strong><br />
                    Breitengrad: 47.8242°<br />
                    Längengrad: 8.2085°
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Parkmöglichkeiten</Heading>
                <NormalText>
                    Direkt neben unserem Vereinsheim stehen kostenlose Parkplätze zur Verfügung.
                    Bei Großveranstaltungen stehen zusätzliche Parkflächen auf dem benachbarten
                    Gelände zur Verfügung.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Location;