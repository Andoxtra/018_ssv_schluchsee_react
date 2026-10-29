import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ArrowLink from "../../components/links/ArrowLink.tsx";

const vdb = {
    name: "Verband Deutscher Büchsenmacher und Waffenfachhändler e.V.",
    url: "https://www.vdb-waffen.de/",
};

const hauptanliegen = [
    {
        title: "Mehr echte Sicherheit durch ein Waffenrecht mit Augenmaß",
        text: "Der VDB setzt sich für ein praxistaugliches, verständliches und vollziehbares Waffenrecht ohne unnötige bürokratische Hürden ein, das die öffentliche Sicherheit sowie die Belange der freiheitlichen Zivilgesellschaft berücksichtigt.",
    },
    {
        title: "Anerkennung und Förderung der Waffenfachhandelsbranche",
        text: "Die Waffenfachhandelsbranche und das Büchsenmacherhandwerk müssen gesellschaftlich anerkannt und gefördert werden. Dafür braucht es zukunftsfähige, klare gesetzliche Rahmenbedingungen.",
    },
    {
        title: "Verantwortungsvoller und sicherer Umgang mit Waffen",
        text: "Der VDB unterstützt den sicheren und verantwortungsvollen Umgang mit Waffen für Sport, Jagd, Sammeln und Freizeitaktivitäten und positioniert sich gegen jede missbräuchliche Verwendung von Waffen.",
    },
];

const forderungenIntro = "Um das zu gewährleisten, strebt der VDB eine umfassende, liberalisierte und entbürokratisierte Neufassung des Waffengesetzes an. Ziel ist es, auf evidenzbasierter Grundlage ein klares, praxisorientiertes Waffenrecht zu schaffen, das die tatsächliche Sicherheit erhöht und den Prinzipien der Rechtssicherheit und Normenklarheit entspricht.";

const forderungen = [
    "Neufassung des Waffengesetzes",
    "Nachwuchs fördern",
    "Bedürfnisprinzip harmonisieren",
    "Kategorie C – Meldepflichtig",
    "Stahlbehältnis reicht aus",
    "Import erleichtern, Handel stärken",
    "Einhandmesser führen dürfen",
    "Entschädigungen implementieren",
    "Waffenrecht ist Bundesrecht",
    "Mengenbeschränkungen streichen",
    "Erwerbsstreckungsgebot streichen",
    "Waffenschein für Waffenfachhändler",
    "Schreckschusswaffen erlaubnisfrei belassen",
    "Schalldämpfer bedürfnisfrei",
    "Standard-Magazine erwerbbar machen",
    "Airsoft- und Paintball freistellen",
    "Nachtzieltechnik vom WaffG ausnehmen",
    "Neuordnung der Straftatbestände",
    "Aufhebung aller Waffenverbotszonen",
    "Polizeiliche Kriminalstatistik verbessern",
    "Munitionserwerb allein mit WBK bzw. Jagdschein",
    "Keine Waffenverbote nach Aussehen",
    "Expertenrat Waffenrecht",
    "Kein Verbot von Alltagswerkzeug",
    "Reserve stärken",
];

const Position = (): ReactNode => {
    return (
        <div className="page-stack">
            <BigBox>
                <Heading level={1}>Unsere Haltung zum Waffenrecht</Heading>
                <p>Der SSV Schluchsee unterstützt den Verband Deutscher Büchsenmacher und Waffenfachhändler e.V. (VDB) in seinem Einsatz für ein praxistaugliches Waffenrecht.</p>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Unser Engagement</Heading>
                <p>[PLATZHALTER]</p>
                <ArrowLink href={vdb.url} target="_blank">Zum VDB – {vdb.name}</ArrowLink>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Die Hauptanliegen des VDB</Heading>
                <div style={{display: "grid", gap: 16}}>
                    {hauptanliegen.map(item => (
                        <div key={item.title}>
                            <Heading level={3}>{item.title}</Heading>
                            <p style={{margin: 0}}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Forderungen für ein neues Waffenrecht</Heading>
                <p>{forderungenIntro}</p>
                <ul className="demand-list">
                    {forderungen.map(forderung => <li key={forderung}>{forderung}</li>)}
                </ul>
            </MediumBox>
        </div>
    );
};

export default Position;
