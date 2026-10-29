import type {ReactNode} from "react";
import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
const questions: {question: string; answer: ReactNode}[] = [
    {question: "Wie kann ich Mitglied werden?", answer: <>Lernen Sie den Verein bei einem abgestimmten Besuch kennen. Wir besprechen mit Ihnen den Einstieg, die Aufnahme und die passende Trainingsgruppe. <ArrowLink to="/kontaktformular">Mitgliedschaft anfragen</ArrowLink></>},
    {question: "Wie können Gastschützen teilnehmen?", answer: <>Eine Anmeldung und die Bestätigung des Vereins sind vor dem Besuch erforderlich. <ArrowLink to="/kontakt">Anmeldung und Formular für Gastschützen</ArrowLink></>},
    {question: "Wann findet das Training statt?", answer: <ArrowLink to="/schiessstaende">Trainingszeiten und Hinweise zum Besuch</ArrowLink>},
    {question: "Was bietet der Verein für Jugendliche?", answer: <>Unsere Jugendabteilung begleitet den Einstieg ins Training. <ArrowLink to="/jugend">Mehr über das Jugendtraining</ArrowLink></>},
    {question: "Welche Verpflichtungen habe ich als Mitglied?", answer: <>Das Vereinsleben lebt von ehrenamtlicher Mithilfe, etwa bei Arbeitseinsätzen und Veranstaltungen. Aufgaben und Voraussetzungen besprechen wir gemeinsam. <ArrowLink to="/kontaktformular">Fragen zur Mitgliedschaft stellen</ArrowLink></>},
    {question: "Welche Disziplinen können trainiert werden?", answer: <ArrowLink to="/schiessstaende">Ausstattung und Schießstände ansehen</ArrowLink>},
    {question: "Wo finde ich Informationen zu Waffenrecht und Sachkunde?", answer: <ArrowLink to="/gesetz">Offizielle Informationen zu Waffenrecht und Sachkunde</ArrowLink>},
    {question: "Welche Wettkampfklassen gibt es?", answer: <ArrowLink to="/download">Sportordnung und Verbandsinformationen</ArrowLink>},
];
const FAQ = () => <div className="page-stack"><BigBox><Heading level={1}>Mitglied werden & häufige Fragen</Heading><p>Die wichtigsten Wege zu Training, Anmeldung und Vereinsleben.</p></BigBox>
    {questions.map(item => <details className="faq-item" key={item.question}><summary>{item.question}</summary><div>{item.answer}</div></details>)}
</div>;
export default FAQ;
