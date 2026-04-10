import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

interface Achievement {
    title: string;
    description: string;
}

const achievementsData: Achievement[] = [
    {
        title: "Deutsche Meisterschaft 2024",
        description: "Max Schütze gewinnt die Deutsche Meisterschaft im 10m Luftgewehr"
    },
    {
        title: "Landesmeisterschaft 2024",
        description: "Anna Müller und Klaus Weber gewinnen jeweils Medaillen bei der Landesmeisterschaft"
    },
    {
        title: "Internationale Teilnahme 2023",
        description: "Mehrere Mitglieder nehmen an internationalen Wettkämpfen teil"
    },
    {
        title: "Jugendförderung 2023",
        description: "Unsere Jugendgruppe wird mit dem Förderpreis des Schützenverbandes ausgezeichnet"
    }
];

export const Achievements = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Erfolge</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Unsere Erfolge</Heading>
                <NormalText>
                    Der SSV Schluchsee kann auf eine beeindruckende Bilanz von Erfolgen und Auszeichnungen verweisen.
                    Unsere Schützen haben zahlreiche Titel und Medaillen auf regionaler, überregionaler und
                    internationaler Ebene gewonnen.
                </NormalText>
            </MediumBox>

            {achievementsData.map((achievement: Achievement, index: number) => (
                <MediumBox key={index}>
                    <Heading level={3}>{achievement.title}</Heading>
                    <NormalText>{achievement.description}</NormalText>
                </MediumBox>
            ))}

            <MediumBox>
                <Heading level={2}>Stolz auf unsere Mitglieder</Heading>
                <NormalText>
                    Wir sind unglaublich stolz auf die Leistungen unserer Mitglieder.
                    Ihre Disziplin, ihr Einsatz und ihre Leidenschaft für den Sport sind inspirierend
                    und machen unser Training und unsere Wettkämpfe zu etwas Besonderem.
                </NormalText>
            </MediumBox>
        </>
    );
};
