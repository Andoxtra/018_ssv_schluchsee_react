import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ArrowLink from "../../components/links/ArrowLink.tsx";

type IconName =
    | "target"
    | "crosshair"
    | "marker"
    | "knife"
    | "archive"
    | "hammer"
    | "shield-check"
    | "scale"
    | "check";

const iconPaths: Record<IconName, ReactNode> = {
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    crosshair: <><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></>,
    marker: <><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.5 5 9a7 7 0 0 1 7-7Z"/><path d="M9 9h.01"/><path d="M12 11h.01"/><path d="M15 9h.01"/></>,
    knife: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/></>,
    archive: <><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></>,
    hammer: <><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></>,
    "shield-check": <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></>,
    scale: <><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></>,
    check: <path d="M20 6 9 17l-5-5"/>,
};

type IconProps = {
    name: IconName;
    size?: number;
};

const Icon = ({name, size = 24}: IconProps): ReactNode => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
);

const Emblem = (): ReactNode => (
    <svg aria-hidden="true" viewBox="0 0 120 120" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 8 108 25v32c0 28-19 45-48 55C31 102 12 85 12 57V25Z" stroke="currentColor"/>
        <circle cx="60" cy="56" r="28" stroke="currentColor" opacity="0.9"/>
        <circle cx="60" cy="56" r="16" stroke="#d48a0b"/>
        <circle cx="60" cy="56" r="5" fill="#d48a0b" stroke="#d48a0b"/>
    </svg>
);

const vdb = {
    name: "Verband Deutscher Büchsenmacher und Waffenfachhändler e.V.",
    url: "https://www.vdb-waffen.de/",
};

const warumText = "Ein verständliches, vollziehbares Waffenrecht ohne unnötige Bürokratie liegt im Interesse aller legalen Waffenbesitzer – vom Sportschützen über Jäger und Sammler bis zum Waffenfachhandel. Der VDB vertritt diese Interessen fachlich fundiert und verantwortungsvoll.";

const nutzergruppen = [
    {icon: "target" as const, title: "Sportschützen", text: "Profitieren von bedürfnisfreien Schalldämpfern, erwerbbaren Standard-Magazinen und dem Ausklammern der Nachtzieltechnik."},
    {icon: "crosshair" as const, title: "Jäger & Jagd", text: "Profitieren von bedürfnisfreien Schalldämpfern und dem Munitionserwerb allein mit Jagdschein."},
    {icon: "marker" as const, title: "Airsoft & Paintball", text: "Profitieren von der Freistellung aus dem Waffengesetz und erlaubnisfrei belassenen Schreckschusswaffen."},
    {icon: "knife" as const, title: "Messer & Alltagswerkzeug", text: "Profitieren vom erlaubten Führen von Einhandmessern und vom Schutz vor Verboten von Alltagswerkzeug."},
    {icon: "archive" as const, title: "Sammler & Erben", text: "Profitieren von gestrichenen Mengenbeschränkungen und der Meldepflicht der Kategorie C."},
    {icon: "hammer" as const, title: "Waffenfachhandel & Büchsenmacher", text: "Profitieren von einem Waffenschein für Fachhändler und erleichterten Importen."},
];

const hauptanliegen = [
    {icon: "shield-check" as const, title: "Mehr echte Sicherheit durch ein Waffenrecht mit Augenmaß", text: "Der VDB setzt sich für ein praxistaugliches, verständliches und vollziehbares Waffenrecht ohne unnötige bürokratische Hürden ein, das die öffentliche Sicherheit sowie die Belange der freiheitlichen Zivilgesellschaft berücksichtigt."},
    {icon: "hammer" as const, title: "Anerkennung und Förderung der Waffenfachhandelsbranche", text: "Die Waffenfachhandelsbranche und das Büchsenmacherhandwerk müssen gesellschaftlich anerkannt und gefördert werden. Dafür braucht es zukunftsfähige, klare gesetzliche Rahmenbedingungen."},
    {icon: "scale" as const, title: "Verantwortungsvoller und sicherer Umgang mit Waffen", text: "Der VDB unterstützt den sicheren und verantwortungsvollen Umgang mit Waffen für Sport, Jagd, Sammeln und Freizeitaktivitäten und positioniert sich gegen jede missbräuchliche Verwendung von Waffen."},
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
                <div className="hero-grid">
                    <div>
                        <p className="eyebrow">Unterstützung des VDB</p>
                        <Heading level={1}>Unsere Haltung zum Waffenrecht</Heading>
                        <p>Der SSV Schluchsee unterstützt den {vdb.name} in seinem Einsatz für ein praxistaugliches, entbürokratisiertes Waffenrecht, das legalen Waffenbesitzern dient.</p>
                        <div className="hero-facts">
                            <span className="hero-fact"><Icon name="check" size={16}/>25 Forderungen</span>
                            <span className="hero-fact"><Icon name="shield-check" size={16}/>3 Hauptanliegen</span>
                        </div>
                    </div>
                    <div className="hero-emblem"><Emblem/></div>
                </div>
            </BigBox>

            <MediumBox>
                <div className="why-grid">
                    <div className="why-icon"><Icon name="scale" size={40}/></div>
                    <div>
                        <Heading level={2}>Warum wir den VDB unterstützen</Heading>
                        <p>{warumText}</p>
                    </div>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Wem hilft der VDB?</Heading>
                <div className="benefit-grid">
                    {nutzergruppen.map(gruppe => (
                        <div className="benefit-card" key={gruppe.title}>
                            <span className="benefit-icon"><Icon name={gruppe.icon} size={24}/></span>
                            <Heading level={3}>{gruppe.title}</Heading>
                            <p>{gruppe.text}</p>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Die Hauptanliegen des VDB</Heading>
                <div className="anliegen-grid">
                    {hauptanliegen.map(item => (
                        <div className="benefit-card" key={item.title}>
                            <span className="benefit-icon"><Icon name={item.icon} size={24}/></span>
                            <Heading level={3}>{item.title}</Heading>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Forderungen für ein neues Waffenrecht</Heading>
                <p>{forderungenIntro}</p>
                <ul className="demand-list">
                    {forderungen.map(forderung => (
                        <li key={forderung}><Icon name="check" size={16}/><span>{forderung}</span></li>
                    ))}
                </ul>
            </MediumBox>

            <MediumBox className="position-cta">
                <Heading level={2}>Mehr erfahren</Heading>
                <p>Die vollständigen Positionen des VDB finden Sie auf der Verbandswebsite.</p>
                <ArrowLink href={vdb.url} target="_blank">Zum VDB – {vdb.name}</ArrowLink>
            </MediumBox>
        </div>
    );
};

export default Position;
