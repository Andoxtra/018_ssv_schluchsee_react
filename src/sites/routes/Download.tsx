import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import TextLink from "../../components/links/TextLink.tsx";

const downloads = [
    { name: "Satzung des Vereins", file: "satzung.pdf" },
    { name: "Beitragsordnung", file: "beitragsordnung.pdf" },
    { name: "Trainingsplan", file: "trainingsplan.pdf" },
    { name: "Anmeldeformular", file: "anmeldeformular.pdf" },
    { name: "Vereinskalender 2026", file: "kalender_2026.pdf" }
];

const Download = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Downloads</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Wichtige Dokumente</Heading>
                <Paragraph>
                    Hier können Sie wichtige Dokumente und Formulare herunterladen:
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={3}>Vereinsdokumente</Heading>
                {downloads.map((item, index) => (
                    <Paragraph key={index}>
                        📄 <TextLink href={`/downloads/${item.file}`}>{item.name}</TextLink>
                    </Paragraph>
                ))}
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Trainingsmaterialien</Heading>
                <Paragraph>
                    Weitere Trainingsmaterialien und Richtlinien finden Sie auf der Webseite 
                    des Deutschen Schützenverbandes.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Download;

