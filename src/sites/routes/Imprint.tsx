import ArrowLink from "../../components/links/ArrowLink.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {club} from "../../data/clubData.ts";
const Imprint = () => <div className="page-stack"><BigBox><Heading level={1}>Impressum</Heading></BigBox>
    <MediumBox><Heading level={2}>Angaben zum Verein</Heading><address>{club.name}<br/>{club.street}<br/>{club.city}</address><p>Vertreten durch: Der Vorstand des SSV Schluchsee e. V.</p><p>Kontakt: <a href={`mailto:${club.email}`}>{club.email}</a></p><ArrowLink to="/kontaktformular">Kontaktformular öffnen</ArrowLink></MediumBox>
    <MediumBox><Heading level={2}>Haftung für Inhalte</Heading><p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p><Heading level={2}>Haftung für Links</Heading><p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Wir distanzieren uns ausdrücklich von allen Inhalten aller verlinkten Seiten.</p><Heading level={2}>Urheberrecht</Heading><p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des SSV Schluchsee e. V. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p></MediumBox>
    <MediumBox><Heading level={2}>Weitere Informationen</Heading><p><a href="https://www.gesetze-im-internet.de/ddg/__5.html" target="_blank" rel="noopener noreferrer">§ 5 Digitale-Dienste-Gesetz</a></p><ArrowLink to="/datenschutz">Datenschutzinformationen</ArrowLink></MediumBox>
</div>;
export default Imprint;
