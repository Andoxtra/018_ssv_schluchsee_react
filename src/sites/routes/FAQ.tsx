import type {ReactNode} from "react";
import {useState} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const faqData = [
    {
        question: "Wie kann ich Mitglied werden?",
        answer: "Kontaktieren Sie uns über das Kontaktformular oder besuchen Sie uns direkt im Vereinsheim. Der Aufnahmeprozess ist einfach und unkompliziert."
    },
    {
        question: "Welche Altersgruppen können trainieren?",
        answer: "Wir bieten Training für alle Altersgruppen an - von Kindern bis zu Senioren. Jede Gruppe hat ihren eigenen Trainingsplan."
    },
    {
        question: "Wie hoch sind die Mitgliedsbeiträge?",
        answer: "Die Beitragssätze richten sich nach Alter und Trainingsintensität. Details finden Sie in unserer Beitragsordnung oder fragen Sie unser Vorstandsteam."
    },
    {
        question: "Brauche ich vorherige Erfahrung?",
        answer: "Nein! Wir nehmen auch Anfänger an. Unsere erfahrenen Trainer werden Sie durch alle Schritte führen."
    },
    {
        question: "Welche Disziplinen können trainiert werden?",
        answer: "Wir bieten verschiedene Disziplinen an: 10m Luftgewehr, 25m Standardpistole, 300m Gewehr und 50m Freipistole."
    }
];

const FAQ = (): ReactNode => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <>
            <BigBox>
                <Heading level={1}>Häufig gestellte Fragen</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>FAQ</Heading>
                <Paragraph>
                    Hier finden Sie Antworten auf häufig gestellte Fragen zum SSV Schluchsee:
                </Paragraph>
            </MediumBox>

            {faqData.map((item, index) => (
                <MediumBox key={index}>
                    <div 
                        onClick={() => setExpanded(expanded === index ? null : index)}
                        style={{cursor: "pointer", padding: "8px", backgroundColor: expanded === index ? "rgba(233,220,104,0.1)" : "transparent", borderRadius: "4px"}}
                    >
                        <Heading level={3}>{item.question}</Heading>
                    </div>
                    {expanded === index && (
                        <Paragraph>
                            {item.answer}
                        </Paragraph>
                    )}
                </MediumBox>
            ))}
        </>
    )
};

export default FAQ;

