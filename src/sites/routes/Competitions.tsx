import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const competitionsData = [
    { name: "Frühjahrspokal 2026", date: "12. April 2026", location: "SSV Schluchsee" },
    { name: "Sommermeisterschaften", date: "15. Juni 2026", location: "SSV Schluchsee" },
    { name: "Landesmeisterschaften", date: "28. Juli 2026", location: "SSV Schluchsee" },
    { name: "Herbstpokal", date: "20. September 2026", location: "SSV Schluchsee" }
];

const Competitions = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Rundenwettkämpfe</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Anstehende Wettkämpfe</Heading>
                <NormalText>
                    Hier finden Sie eine Übersicht der geplanten Rundenwettkämpfe für das Jahr 2026:
                </NormalText>
            </MediumBox>

            {competitionsData.map((comp, index) => (
                <MediumBox key={index}>
                    <Heading level={3}>{comp.name}</Heading>
                    <NormalText>
                        <strong>Datum:</strong> {comp.date}<br/>
                        <strong>Ort:</strong> {comp.location}<br/>
                        <br/>
                        Weitere Informationen und Anmeldung: Kontaktieren Sie uns via E-Mail oder Telefon.
                    </NormalText>
                </MediumBox>
            ))}

            <MediumBox>
                <Heading level={2}>Registrierung</Heading>
                <NormalText>
                    Interessiert an der Teilnahme? Kontaktieren Sie unser Vorstandsteam für 
                    Anmeldung und weitere Details.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Competitions;

