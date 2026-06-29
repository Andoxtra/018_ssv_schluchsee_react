import type {ReactNode} from "react";
import {useState} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const faqData = [
    {
        question: "Wie kann ich Mitglied werden?",
        answer: `Prinzipiell können alle Mitglied werden, die das 12. Lebensjahr vollendet haben. Für Kinder unter 12 Jahren steht ein Lasergewehr zur Verfügung. Üblicherweise wird mit dem Luftgewehr begonnen, um den Umgang mit einer Waffe zu erlernen.`
    },
    {
        question: "Welche Altersklassen gibt es?",
        answer: `Schüler: bis 14 Jahre
Jugend: 15–17 Jahre
Junior: 18–20 Jahre
Schützenklasse: 21–44 Jahre
Altersklasse: 45–55 Jahre
Seniorenklasse 1: 56–66 Jahre
Seniorenklasse 2: ab 67 Jahre`
    },
    {
        question: "Welche Verpflichtungen habe ich als Mitglied?",
        answer: `All diese Einrichtungen wurden von unseren Vorgängern in ehrenamtlicher Eigenarbeit aufgebaut. Bei Eintritt in den Verein verpflichtest du dich zu folgenden Arbeiten:

• Arbeitseinsätze dienstags abends je nach Aushang
• Helfen bei Veranstaltungen
• Standaufsicht
• Regelmäßiges Training und Teilnahme an Meisterschaften`
    },
    {
        question: "Wie sicher ist der Schießsport?",
        answer: `Die Schützen sind dankbar dafür, dass bei dem Umgang mit Sportwaffen noch niemals ein Unfall zu verzeichnen war. Dies ist ein Verdienst unserer umsichtigen Übungsleiter und Standaufsichten, die streng auf Einhaltung der Regeln am Schießstand achten.

Jedes neue Mitglied muss zunächst beim Schießen mit der Luftdruckwaffe zeigen, ob er verantwortungsvoll damit umgehen kann. Die spätere Anschaffung von klein- und großkalibrigen Sportwaffen braucht die Genehmigung der Vorstandschaft.`
    },
    {
        question: "Brauche ich eine Waffenbesitzkarte (WBK)?",
        answer: `Eine WBK ist Voraussetzung für den Erwerb einer Kleinkaliber- oder Großkaliber-Waffe. Dafür müssen mehrere Hürden bewältigt werden: Mindestalter (18 Jahre, Ausnahmen auf Antrag), körperliche Eignung, Zuverlässigkeit, Sachkunde und ein Bedürfnisnachweis durch ernsthaftes Training im Verein.`
    },
    {
        question: "Was ist der Sachkundenachweis?",
        answer: `Der Nachweis der Sachkunde gemäß § 31 des Waffengesetzes wird im SSV mittels einer Prüfung erbracht. Inhalte sind: Waffengesetz, Umgang mit Schusswaffen, Ballistik, Notwehrparagraphen und Notstand. Weitere Informationen erhalten Sie auf Anfrage in unserem Verein.`
    },
    {
        question: "Wie können Gastschützen teilnehmen?",
        answer: `Gastschützen können nur nach vorheriger Anmeldung und deren Bestätigung durch den SSV Schluchsee (per E-Mail oder telefonisch) am Schießtraining teilnehmen. Das Anmeldeformular steht auf der Download-Seite bereit.`
    },
    {
        question: "Welche Disziplinen können trainiert werden?",
        answer: `Zum Ausüben unseres Schießsports stehen folgende Einrichtungen zur Verfügung:
• 10 Meter Luft-Gewehr-Pistolenstand
• 25 Meter Großkaliberstände
• 50 Meter Stände
• 100 Meter Stände
• Vereinsheim mit Küche und Getränkekeller`
    },
];

const FAQ = (): ReactNode => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Häufig gestellte Fragen</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Mitglied im SSV – Aufnahmekriterien und mehr
                    </p>
                </div>
            </BigBox>

            {faqData.map((item, index) => (
                <MediumBox key={index}>
                    <div
                        onClick={() => setExpanded(expanded === index ? null : index)}
                        style={{
                            cursor: "pointer",
                            padding: "8px",
                            borderRadius: 4,
                        }}
                    >
                        <Heading level={3}>{item.question}</Heading>
                    </div>
                    {expanded === index && (
                        <div style={{
                            padding: "12px 8px",
                            lineHeight: 1.8,
                            whiteSpace: "pre-line",
                        }}>
                            {item.answer}
                        </div>
                    )}
                </MediumBox>
            ))}
        </div>
    );
};

export default FAQ;