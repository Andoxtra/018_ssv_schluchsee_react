import type {ReactNode} from "react";
import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
const questions: {question: string; answer: ReactNode}[] = [
    {question: "Wie kann ich Mitglied werden?", answer: <>Lernen Sie den Verein bei einem abgestimmten Besuch kennen. Wir besprechen mit Ihnen den Einstieg, die Aufnahme und die passende Trainingsgruppe. <Link to="/kontaktformular">Mitgliedschaft anfragen →</Link></>},
    {question: "Wie können Gastschützen teilnehmen?", answer: <>Eine Anmeldung und die Bestätigung des Vereins sind vor dem Besuch erforderlich. <Link to="/kontakt">Anmeldung und Formular für Gastschützen →</Link></>},
    {question: "Wann findet das Training statt?", answer: <Link to="/schiessstaende">Trainingszeiten und Hinweise zum Besuch →</Link>},
    {question: "Was bietet der Verein für Jugendliche?", answer: <>Unsere Jugendabteilung begleitet den Einstieg ins Training. <Link to="/jugend">Mehr über das Jugendtraining →</Link></>},
    {question: "Welche Verpflichtungen habe ich als Mitglied?", answer: <>Das Vereinsleben lebt von ehrenamtlicher Mithilfe, etwa bei Arbeitseinsätzen und Veranstaltungen. Aufgaben und Voraussetzungen besprechen wir gemeinsam. <Link to="/kontaktformular">Fragen zur Mitgliedschaft stellen →</Link></>},
    {question: "Welche Disziplinen können trainiert werden?", answer: <Link to="/schiessstaende">Ausstattung und Schießstände ansehen →</Link>},
    {question: "Wo finde ich Informationen zu Waffenrecht und Sachkunde?", answer: <Link to="/gesetz">Offizielle Informationen zu Waffenrecht und Sachkunde →</Link>},
    {question: "Welche Wettkampfklassen gibt es?", answer: <Link to="/download">Sportordnung und Verbandsinformationen →</Link>},
];
const FAQ = () => <div className="page-stack"><BigBox><Heading level={1}>Mitglied werden & häufige Fragen</Heading><p>Die wichtigsten Wege zu Training, Anmeldung und Vereinsleben.</p></BigBox>
    {questions.map(item => <details className="faq-item" key={item.question}><summary>{item.question}</summary><div>{item.answer}</div></details>)}
</div>;
export default FAQ;
