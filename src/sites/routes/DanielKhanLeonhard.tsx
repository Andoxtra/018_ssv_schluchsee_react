import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ImagePlaceholder from "../../components/images/ImagePlaceholder.tsx";

const careerStations = [
    { year: "1985", achievement: "Schüler Vereinsmeister in Luftpistole; Schüler Bezirksmeister mit Luftpistole" },
    { year: "1986", achievement: "Schüler-Landesmeister mit Luftpistole; Teilnahme an deutschen Schülermeisterschaften" },
    { year: "1987", achievement: "Jugendmeister mit Luftpistole auf Kreis-, Bezirks- und Landesebene; Schwarzwaldmeister der Junioren (LP und LG)" },
    { year: "1988", achievement: "Landesmeister mit Luftpistole (Jugend); Landesmeister mit OSP (Junioren); Deutsche Meisterschaft: 13. Platz Sportpistole (Junioren); jüngstes Mitglied im Landeskader OSP Baden-Württembergs" },
    { year: "1989", achievement: "Vereinsjugendmeister in 7 Disziplinen; Deutsche Meisterschaft in München: 5. Platz mit OSP, 8. Platz Sportpistole, 10. Platz LP; Mitglied C-Kader DSB; Aufnahme in Fördergruppe Schnellfeuerpistole" },
    { year: "1990", achievement: "Deutsche Meisterschaft: Jugendmeister in LP und OSP; Mannschaftsmeister OSP; Deutscher Vizemeister LP mit Mannschaft aus Schluchsee" },
    { year: "1991", achievement: "1. Sieger internationales Pistolenturnier LP in Freiburg; Aufnahme in Juniorennationalmannschaft; 1. Platz Mannschaft Junioren-EM England; 3. Platz Mannschaft Junioren-WM Norwegen; Deutscher Meister Sportpistole Junioren" },
    { year: "1992", achievement: "Deutscher Meister OSP Junioren; Vizemeister Sportpistole Junioren" },
    { year: "1993", achievement: "Deutscher Meister OSP Junioren; Mannschaftseuropameister OSP mit neuem Mannschaftsweltrekord; Vize-Europameister Einzeln (Tschechien); 2. Sieger Weltcup München; Aufnahme in A-Kader OSP DSB" },
    { year: "1994", achievement: "Deutscher Vizemeister OSP (Schützenklasse); 1. Sieger Weltcup Peking; 2. Platz Weltcup Finale München; 4. Platz Weltcup Barcelona" },
    { year: "1995", achievement: "Deutscher Vizemeister OSP; Qualifikation für EM; Mannschaftseuropameister in Zürich" },
    { year: "1996", achievement: "3. Platz Deutsche Meisterschaft; Qualifikation als 2. Starter für OSP-Disziplin; 8. Platz Finalrunde Olympische Spiele Atlanta" },
    { year: "1997", achievement: "Mannschaftseuropameister OSP in Finnland; 1. Platz Vier-Länderkampf OSP (595 von 600 Ringen)" },
    { year: "1998", achievement: "Rangliste: 2. OSP Deutschland; Weltcup Finalsieger Zürich; Silber Einzeln OSP und Gold Mannschaft WM Barcelona; Aktivensprecher Deutsche Schützen" },
    { year: "1999", achievement: "Deutscher Vizemeister; Weltcup 2. München; Mannschaftseuropameister Bordeaux" },
    { year: "2000", achievement: "Deutscher Meister OSP vor Ralf Schuhmann; 1. Platz Grand Prix Pilsen; 2. Rang Weltcup in München; 3. Platz Weltcup Sydney (AUS); 1. Platz Weltcup Atlanta (USA); Träger Silbernes Lorbeerblatt und Ehrenkreuz Bundeswehr (Silber); Rücktritt vom Leistungssport" },
];

const strengths = [
    "Großer Trainingsfleiß",
    "Fähigkeit, geplante Ziele im Sport und Beruf zu erreichen",
    "Kritisches und differenzierendes Denken",
    "Bescheidenheit und Bodenhaftung trotz überragender Erfolge",
];

const DanielKhanLeonhard = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Daniel Khan-Leonhard</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "rgba(255, 255, 255, 0.8)" }}>
                        Olympiateilnehmer und Ehrenmitglied des SSV Schluchsee
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Jugendliche Jahre und Karrierebeginn
                </Heading>
                <div style={{maxWidth: 320, margin: "0 auto 20px"}}>
                    <ImagePlaceholder alt="Porträt von Daniel Khan-Leonhard" aspectRatio="3 / 4"/>
                </div>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>
                        Zu einer beispiellosen sportlichen Karriere gehören günstige Rahmenbedingungen.
                        Daniel wuchs in einem Elternhaus auf, das ihm Sicherheit und vielfältige Anregungen
                        bot und seine sportlichen Ambitionen in jeder Hinsicht förderte.
                    </p>
                    <p style={{ marginBottom: 12 }}>
                        Die 1982 im neuen Schützenhaus eröffneten Luftgewehr- und Luftpistolenstände mit
                        geregeltem Schießbetrieb lockten den vielseitig begabten Daniel ins Schützenhaus.
                        Dort trainierte damals eine starke Schülergruppe, die sich in ihren Leistungen
                        gegenseitig anspornte. Daniel schloss sich ihnen an und bald wurde sein großes
                        Talent erkannt.
                    </p>
                    <p>
                        Neben seiner Mutter unterstützte ihn immer mehr Franz Kiefer, der sein Heimtrainer
                        und auf Wettkämpfen Fahrer und Betreuer war. Seine sich schon mit 13 Jahren
                        einstellenden Erfolge verstärkten seinen Trainingseifer und führten zu einem
                        rasanten Leistungsschub.
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Charakterliche Stärken
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>
                        Es gehört viel Idealismus dazu, seine berufliche Karriere zurückzustellen und
                        sich mit hartem Einsatz dem Wettkampfsport zu verschreiben. Diese Eigenschaften
                        machen Daniel sympathisch – er bleibt in unserer Region ein Vorzeigeathlet und
                        ein Vorbild besonders für junge Sportler.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 10 }}>
                        {strengths.map((s, i) => (
                            <div key={i} style={{
                                padding: "10px 14px",
                                background: "#F8F8F4",
                                borderRadius: 8,
                                border: "1px solid #EDECE4",
                                fontWeight: 500,
                            }}>
                                {s}
                            </div>
                        ))}
                    </div>
                </div>
            </MediumBox>

            <BigBox>
                <Heading level={2}>
                    Stationen der sportlichen Karriere
                </Heading>
                <div style={{ overflowX: "auto" }}>
                    <table style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "0.875rem",
                    }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid #d48a0b" }}>
                                <th style={{ textAlign: "left", padding: "10px 12px", color: "#FFFFFF", fontWeight: 700, minWidth: 60 }}>Jahr</th>
                                <th style={{ textAlign: "left", padding: "10px 12px", color: "#FFFFFF", fontWeight: 700 }}>Erfolg</th>
                            </tr>
                        </thead>
                        <tbody>
                            {careerStations.map((station, i) => (
                                <tr key={i} style={{
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                                    background: i % 2 === 0 ? "rgba(255, 255, 255, 0.06)" : "transparent",
                                }}>
                                    <td style={{ padding: "10px 12px", fontWeight: 600, color: "#d48a0b" }}>{station.year}</td>
                                    <td style={{ padding: "10px 12px", lineHeight: 1.6 }}>{station.achievement}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </BigBox>

            <BigBox>
                <div style={{ textAlign: "center", lineHeight: 1.8 }}>
                    <p>
                        Nach den Olympischen Spielen von Sydney beschloss Daniel, seine Karriere als
                        Hochleistungssportler zu beenden, um sich beruflichen Zielen zuzuwenden.
                    </p>
                    <p style={{ marginTop: 12 }}>
                        1996 wurde Daniel Khan-Leonhard zum <strong>Ehrenmitglied</strong> ernannt. Durch seine
                        herausragenden sportlichen Leistungen, besonders mit der olympischen Schnellfeuerpistole,
                        hat er für den Schießsport im Allgemeinen und für unseren Sportverein im Besonderen geworben.
                    </p>
                </div>
            </BigBox>
        </div>
    );
};

export default DanielKhanLeonhard;