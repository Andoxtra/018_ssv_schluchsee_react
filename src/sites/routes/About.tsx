import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const historySections = [
    {
        title: "Bis zum Jahr 1945",
        content: `Im Jahr 1926 wurde in Schluchsee während des Aufschwungs nach dem 1. Weltkrieg von sportbegeisterten Schützen ein Kleinkaliber-Schützenverein gegründet. Die Gründungsversammlung fand im Hotel Sternen statt, Oberforstrat Walli übernahm die Führung und der junge Verein zählte bereits im ersten Jahr 90 Mitglieder.

Kurz darauf begannen viele freiwillige Helfer, besonders Holzhauer, einen KK-Stand auf dem Gelände des heutigen Sportplatzes zu errichten. Im Juni 1927 wurde die Schießanlage (acht Stände) mit einem Preisschießen eingeweiht. Die Anlage wurde danach kontinuierlich ausgebaut. Förster Büche war treibende Kraft im Verein und sorgte dafür, dass die Anlage nach der Inflation schuldenfrei wurde.

Die Machtergreifung der Nationalsozialisten 1933 nahm dem Verein seine Unabhängigkeit und integrierte ihn in die NS-Sportorganisation.

Das 10-jährige Jubiläum 1936 im Olympiajahr wurde in Schluchsee mit einem großen Fest gefeiert. Viele Schützen beteiligten sich am Mannschaftspreisschießen und am Schießen um den begehrten Schluchseetaler auf 12 Bahnen.

Der Kriegsausbruch 1939 unterbrach die Aufwärtsentwicklung des Vereines jäh. Die meisten Schützen mussten in den Krieg ziehen.

Nach 1945 riss die Besatzungsmacht Stände und Hütte ab. Der Besitz von Jagd- und Sportwaffen war zunächst verboten.`
    },
    {
        title: "Neugründung 1969",
        content: `Nach dem Ende des KK-Schützenvereins 1945 beschlossen am 18. Januar 1969 im Gasthaus zum "Schwörer" 13 Personen die Neugründung des Sportschützenvereins Schluchsee e. V.:

1. Hermann Booz
2. Oskar Booz
3. Paul Braun
4. Klaus Dilger
5. Otto Eckert
6. Egon Härtenstein
7. Arnold Keller
8. Paul Keller
9. August Kiefer
10. Rudolf Kiefer
11. Peter Schwörer
12. Bertold Siegel
13. Hans Wolf

Die durchgeführten Wahlen ergaben:
- **OSM:** Klaus Dilger
- **SM:** Hermann Booz
- **Schriftführer:** Paul Keller
- **Kassierer:** August Kiefer

Zunächst wurde das Training im Winter in den leeren Sälen des Gasthauses Schwörer und des Hotels Sternen durchgeführt, später im Speicher des Rathauses. Im Frühjahr 1969 kaufte die Bundespost in Donaueschingen gut erhaltene RAD-Baracken an. Der Standort hinter dem Fußballplatz wurde mit der Gemeinde festgelegt. Nach Begutachtung der Baracke wurde ein Angebot von 1000 DM (ca. 500 Euro) abgegeben.

Der Verein erhielt den Zuschlag. Am 12. Juli rollte ein Lastzug der Brauerei Rothaus nach Donaueschingen. Zimmerleute, unterstützt von vielen Helfern, zerlegten die Baracke und transportierten sie nach Schluchsee. Der Zusammenbau dauerte viele Monate, bis im November der Schießstand und im Januar 1970 der Aufenthaltsraum in Betrieb genommen werden konnten.

Damit hatten die Sportschützen bereits 1 Jahr nach der Wiedergründung ihr ersehntes, geregeltes Zuhause.`
    },
    {
        title: "Neubau am Faulenfürster Eck",
        content: `Schon beim Einzug in das alte Schützenhaus am Waldsportplatz war der Vorstandschaft bewusst, dass ein Neubau notwendig würde. Die Zahl der aktiven Schützen stieg kontinuierlich an, und KK-Disziplinen mussten auf fremden Ständen geschossen werden.

Erste Neubaupläne stellte der Bauausschuss schon im Jubiläumsjahr vor. Trotzdem dauerte es noch weitere 5 Jahre, bis im Frühjahr 1981 mit dem Bau begonnen werden konnte. Nach der Schneeschmelze begannen die Mitglieder und Helfer mit großem Schwung die Arbeiten. Obwohl die meisten Bauaktivitäten nur am Wochenende stattfanden, konnte das neue Schützenhaus nach einjähriger Bauzeit bezogen werden.

In den Jahren 1982/1983 bauten Helfer den Aufenthaltsraum und die LG/LP-Stände aus und schützten die Außenwände mit einem Schindelmantel.`
    },
    {
        title: "Einrichtung der Schießanlage",
        content: `Nach Genehmigung der Toto-Lotto-Mittel für den 2. Bauabschnitt im Frühjahr 1983 errichteten die Helfer in der Verlängerung zum Schützenhaus die beiden Pistolenstände. Im Frühjahr 1984 machte der Ausbau Fortschritte: Tiefbau Wehrle baggerte die beiden langen Schießbahnen aus und formte die seitlichen Schutzwälle. Die stabile Trennwand zwischen Pistolen- und KK-Stand wurde aufgemauert, Träger und Schutzblenden aus Beton wurden in Eigenarbeit gegossen und mithilfe eines Krans zusammengefügt.

1985 wurden die Sicherheitsvorkehrungen abgenommen und der Sportpistolenstand vom Sicherheitsbeauftragten freigegeben. Weitere 2 Jahre vergingen, bis auch die KK-Stände fertiggestellt und sicherheitstechnisch abgenommen wurden. Ein Schallmessgutachten gab die Schießstände für KK-Waffen frei.

Im Juni 1988 veranstalteten die Schützen ein großes Fest mit Preisschießen, um die Anlagen offiziell einzuweihen.`
    },
    {
        title: "Erhalt der Anlage",
        content: `Auf diese beispiellose Leistung können die Helfer, Spender und Mitglieder mit Recht stolz sein. Sie haben in der Gemeinde Schluchsee eine Wettkampf- und Freizeitanlage im Wert von über einer Viertelmillion Euro geschaffen.

Auch in den folgenden Jahren waren ständig Arbeitseinsätze notwendig, um Haus und Anlagen zu verbessern und funktionstüchtig zu erhalten. Das Schützenhaus erhielt an der Ostseite einen kleinen Anbau und eine effektivere Gasheizung ersetzte die teure Elektroheizung. Weitere Investitionen standen an, um die Böden vor Geschossemissionen zu schützen.

*"Was du ererbt hast von deinen Vätern, erwirb es, um es zu erhalten!"* Es ist zu hoffen, dass dieser Wahlspruch von den Sportschützen, die künftig den Schießsport am Faulenfürster Eck ausüben, ernst genommen wird, damit diese einzigartige gemeinschaftsfördernde Einrichtung in unserer Gemeinde erhalten bleibt.`
    }
];

const ehrenmitglieder = [
    { name: "Reiner Booz", note: "langjähriges Mitglied seit 01.10.1972" },
    { name: "Siegfried Knödler", note: "Mitglied seit 01.06.1989" },
    { name: "Klaus Dilger", note: "langjähriges Mitglied im Verein" },
    { name: "Daniel Khan-Leonhard", note: "Ehrenmitglied seit 1996 – herausragende sportliche Leistungen mit der olympischen Schnellfeuerpistole" },
    { name: "Gerhard Brugger", note: "Ehrenmitgliedschaft 1987 – besondere Verdienste beim Bau des Schützenhauses († 26.08.2021)" },
    { name: "Hermann Booz", note: "Mitglied seit 1969 († 2023)" },
    { name: "Paul Braun", note: "Mitglied seit 1969 († 2023)" },
    { name: "Karl Roski", note: "Langjähriger 1. Vorsitzender († Mai 2015)" },
];

const renderMarkdown = (text: string): ReactNode => {
    const lines = text.split("\n");
    const result: ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            result.push(
                <ul key={`list-${result.length}`} style={{ paddingLeft: 20, marginBottom: 16 }}>
                    {listItems.map((item, i) => <li key={i} style={{ marginBottom: 6, lineHeight: 1.7 }}>{item}</li>)}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line) => {
        if (line.startsWith("- **")) {
            const boldMatch = line.match(/^- \*\*(.*?)\*\*(.*)/);
            if (boldMatch) {
                listItems.push(<><strong>{boldMatch[1]}</strong>{boldMatch[2].replace(/^:\s*/, "")}</> as unknown as string);
            } else {
                listItems.push(line.replace(/^- /, ""));
            }
        } else if (line.startsWith("- ")) {
            listItems.push(line.replace(/^- /, ""));
        } else if (line.match(/^\d+\./)) {
            listItems.push(line);
        } else {
            flushList();
            if (line.trim() === "") {
                return;
            }
            const processed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
            result.push(
                <p key={`p-${result.length}`} style={{ marginBottom: 12, lineHeight: 1.8, whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: processed }} />
            );
        }
    });

    flushList();
    return result;
};

const About = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Vereinsgeschichte</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Von der Gründung 1926 bis zur modernen Anlage am Faulenfürster Eck
                    </p>
                </div>
            </BigBox>

            {historySections.map((section, i) => (
                <MediumBox key={i}>
                    <Heading level={2}>
                        {section.title}
                    </Heading>
                    {renderMarkdown(section.content)}
                </MediumBox>
            ))}

            <BigBox>
                <Heading level={2}>
                    Ehrenmitglieder
                </Heading>
                <p style={{ textAlign: "center", marginBottom: 24, lineHeight: 1.7 }}>
                    Hier würdigen wir die besonderen Verdienste unserer Ehrenmitglieder für den Verein.
                </p>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 16
                }}>
                    {ehrenmitglieder.map((mitglied, i) => (
                        <div key={i} style={{
                            padding: 16,
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                        }}>
                            <div style={{ fontWeight: 600, color: "#143620", marginBottom: 6 }}>{mitglied.name}</div>
                            <div style={{ color: "#5a5a5a", fontSize: "0.875rem", lineHeight: 1.6 }}>{mitglied.note}</div>
                        </div>
                    ))}
                </div>
            </BigBox>
        </div>
    );
};

export default About;