import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import Markdown from "../../components/boxes/Markdown.tsx";
import {club} from "../../data/clubData.ts";
const sections = [
    {title: "Kontaktanfragen", content: "Wenn Sie das Kontaktformular verwenden, speichern wir Name, E-Mail-Adresse, Betreff, Nachricht und Eingangszeit zur Bearbeitung Ihrer Anfrage. Nur die angemeldete Vereinsverwaltung kann diese Nachrichten lesen. Es erfolgt kein automatischer E-Mail-Versand. Erledigte Nachrichten können von der Verwaltung gelöscht werden. Bitte übermitteln Sie keine Angaben, die für Ihre Anfrage nicht benötigt werden."},
    {title: "Anmeldung zur Vereinsverwaltung", content: "Für die Anmeldung verwenden wir ein technisch erforderliches Sitzungscookie. Es dient der Zugriffskontrolle, läuft nach acht Stunden ab und wird beim Abmelden entfernt. Auf den öffentlichen Seiten setzt die Anwendung keine Analyse- oder Werbecookies ein."},
    {title: "Karten und externe Links", content: "Die Karte auf der Anfahrtsseite wird erst nach Ihrer Auswahl geladen. Dabei stellt Ihr Browser eine Verbindung zu OpenStreetMap her; insbesondere wird Ihre IP-Adresse an diesen Anbieter übermittelt. Auch beim Öffnen externer Links oder Dokumente gelten die Datenschutzinformationen des jeweiligen Anbieters. [Datenschutz bei OpenStreetMap](https://osmfoundation.org/wiki/Privacy_Policy)"},
    {title: "Ihre Anliegen zum Datenschutz", content: "Sie können sich mit Fragen zur Verarbeitung Ihrer Daten sowie Anliegen zu Auskunft, Berichtigung oder Löschung an den Verein wenden. Die Bearbeitung erfolgt nach den geltenden Datenschutzvorschriften."},
];
const Privacy = () => <div className="page-stack"><BigBox><Heading level={1}>Datenschutz</Heading><p>Informationen zur Verarbeitung von Daten auf dieser Website.</p></BigBox>
    <MediumBox><Heading level={2}>Verantwortlicher Verein</Heading><address>{club.name}<br/>{club.street}<br/>{club.city}</address><Link to="/kontaktformular">Datenschutzanfrage senden →</Link><p className="review-note">Die Datenschutzinformationen befinden sich in redaktioneller Prüfung. Kontaktangaben, Hosting-Anbieter, Rechtsgrundlagen und Aufbewahrungsfristen werden vor der Veröffentlichung ergänzt.</p></MediumBox>
    {sections.map(section => <MediumBox key={section.title}><Heading level={2}>{section.title}</Heading><Markdown>{section.content}</Markdown></MediumBox>)}
</div>;
export default Privacy;
