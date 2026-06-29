import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const sections = [
    {
        title: "Allgemeiner Hinweis und Pflichtinformationen",
        content: `Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

**SSV Schluchsee e. V.**
Wolfgang Faller
Faulenfürster Eck
D-79859 Schluchsee

Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, Kontaktdaten etc.).`
    },
    {
        title: "Widerruf der Einwilligung zur Datenverarbeitung",
        content: `Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.`
    },
    {
        title: "Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde",
        content: `Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Vereins befindet.

Eine Liste der Datenschutzbeauftragten finden Sie unter: [https://www.bfdi.bund.de/](https://www.bfdi.bund.de/)`
    },
    {
        title: "Recht auf Datenübertragbarkeit",
        content: `Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.`
    },
    {
        title: "Recht auf Auskunft, Berichtigung, Sperrung, Löschung",
        content: `Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.

Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.`
    },
    {
        title: "SSL- bzw. TLS-Verschlüsselung",
        content: `Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte nutzt unsere Website eine SSL- bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht lesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://" Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.`
    },
    {
        title: "Cookies",
        content: `Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.

Einige Cookies sind "Session-Cookies". Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.

Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.`
    },
    {
        title: "Kontaktformular",
        content: `Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.

Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail.`
    },
    {
        title: "Speicherdauer von Beiträgen und Kommentaren",
        content: `Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie beispielsweise IP-Adressen, werden gespeichert. Der Inhalt verbleibt auf unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen Gründen gelöscht werden musste.`
    }
];

const renderContent = (text: string): ReactNode => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return (
        <div style={{ lineHeight: 1.8 }}>
            {parts.map((part, i) => {
                const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    return (
                        <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: "#9a6508", fontWeight: 600 }}>
                            {linkMatch[1]}
                        </a>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </div>
    );
};

const Privacy = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Datenschutzerklärung</Heading>
                </div>
            </BigBox>

            {sections.map((section, i) => (
                <MediumBox key={i}>
                    <Heading level={2}>
                        {section.title}
                    </Heading>
                    {renderContent(section.content)}
                </MediumBox>
            ))}
        </div>
    );
};

export default Privacy;