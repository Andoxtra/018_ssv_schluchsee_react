import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const shootingRanges = [
    { name: "10m Luftgewehr/Luftpistole Range", stations: 15, features: "Elektronische Zielscheiben, klimatisiert" },
    { name: "25m Pistolen Range", stations: 12, features: "Elektronische Anlagen, Sicherheitsbereich" },
    { name: "300m Gewehr Range", stations: 10, features: "Outdoor, professionelle Anlagen" },
    { name: "50m Freipistolen Range", stations: 8, features: "Spezielle Ausrüstung, trainiert" }
];

const ShootingRanges = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Schießstände</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Unsere Schießstände</Heading>
                <NormalText>
                    Der SSV Schluchsee verfügt über modern ausgestattete Schießstände für verschiedene Disziplinen:
                </NormalText>
            </MediumBox>

            {shootingRanges.map((range, index) => (
                <MediumBox key={index}>
                    <Heading level={3}>{range.name}</Heading>
                    <NormalText>
                        <strong>Anzahl der Stationen:</strong> {range.stations}<br/>
                        <strong>Ausstattung:</strong> {range.features}
                    </NormalText>
                </MediumBox>
            ))}

            <MediumBox>
                <Heading level={2}>Sicherheitsstandards</Heading>
                <NormalText>
                    Alle unsere Schießstände entsprechen den höchsten internationalen Sicherheitsstandards.
                    Geschultes Personal überwacht den Betrieb und es gelten strenge Sicherheitsrichtlinien.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Zugang zu den Schießständen</Heading>
                <NormalText>
                    Nur Vereinsmitglieder haben Zugang zu den Schießständen.
                    Schießstunden werden von lizenzierten Trainern geleitet.
                    Kontaktieren Sie uns für Trainingsstunden und Reservierungen.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default ShootingRanges;

