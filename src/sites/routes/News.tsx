import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const newsItems = [
    {
        id: 1,
        title: "Landesmeisterschaften 2026",
        date: "28. März 2026",
        content: "Die Landesmeisterschaften finden in diesem Jahr in unserem Vereinsheim statt. Wir freuen uns auf Teilnehmer aus der ganzen Region."
    },
    {
        id: 2,
        title: "Neue Mitglieder willkommen",
        date: "15. März 2026",
        content: "Wir freuen uns, viele neue Mitglieder in unserem Verein willkommen zu heißen. Das Trainingsangebot wurde erweitert."
    },
    {
        id: 3,
        title: "Erfolg bei Bundesmeisterschaften",
        date: "01. März 2026",
        content: "Unsere Wettkämpfer haben bei den Bundesmeisterschaften großartige Erfolge erzielt und mehrere Medaillen gewonnen."
    },
    {
        id: 4,
        title: "Vereinsfest 2026",
        date: "15. Februar 2026",
        content: "Unser jährliches Vereinsfest findet am 15. Juli 2026 statt. Alle Mitglieder und Freunde sind herzlich eingeladen!"
    }
];

const News = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Neuigkeiten</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Aktuelle Meldungen</Heading>
            </MediumBox>

            {newsItems.map((item) => (
                <MediumBox key={item.id}>
                    <Heading level={3}>{item.title}</Heading>
                    <Paragraph>
                        <em>{item.date}</em><br/>
                        <br/>
                        {item.content}
                    </Paragraph>
                </MediumBox>
            ))}
        </>
    )
};

export default News;

