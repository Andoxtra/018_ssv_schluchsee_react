import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const trainingTimes = [
    { label: "Jugendtraining", day: "Freitags", time: "19:00 – 20:00 Uhr" },
    { label: "Auflageschießen", day: "Mittwochnachmittag", time: "ab 14:00 Uhr" },
    { label: "Schießbetrieb", day: "Freitags", time: "ab 19:00 Uhr" },
    { label: "Schießbetrieb", day: "Sonntags", time: "10:00 – 12:00 Uhr" },
];

const rwkData = [
    { wettkampf: "RWK LP und LG – Kreisliga LP", saison: "2016/2017", url: "http://www.sportschuetzenkreis3.de/index.php?site=content&freicontent=Kreisliga_lp1449149865" },
    { wettkampf: "RWK LP und LG – Kreisklasse LG", saison: "2016/2017", url: "http://www.sportschuetzenkreis3.de/index.php?site=content&freicontent=Kreisklasse_1449245964" },
    { wettkampf: "RWK Kreisliga B – KK-Liegend", saison: "2016", url: "http://www.sportschuetzenkreis3.de" },
    { wettkampf: "RWK LG Auflage", saison: "2013/2014" },
    { wettkampf: "RWK LG Kreis 11", saison: "2013/2014" },
    { wettkampf: "RWK LP Kreis 11", saison: "2013/2014" },
    { wettkampf: "KK-Gewehr Auflageschießen", saison: "2013" },
    { wettkampf: "RWK Gewehr KK-3-Stellung", saison: "2013" },
    { wettkampf: "RWK KK-Gewehr Liegend", saison: "2013" },
    { wettkampf: "Kreispokal Hüfingen LG", saison: "2013" },
];

const RWKTable = ({ data }: { data: { wettkampf: string; saison: string; url?: string }[] }) => (
    <div style={{ overflowX: "auto" }}>
        <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.875rem",
        }}>
            <thead>
                <tr style={{ borderBottom: "2px solid #143620" }}>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700 }}>Wettbewerb</th>
                    <th style={{ textAlign: "center", padding: "10px 12px", color: "#143620", fontWeight: 700, minWidth: 90 }}>Saison</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700, minWidth: 120 }}>Ergebnisse</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} style={{
                        borderBottom: "1px solid #EDECE4",
                        background: i % 2 === 0 ? "#F8F8F4" : "transparent",
                    }}>
                        <td style={{ padding: "8px 12px", fontWeight: 500 }}>{row.wettkampf}</td>
                        <td style={{ padding: "8px 12px", textAlign: "center", color: "#6b6b6b", fontWeight: 600 }}>{row.saison}</td>
                        <td style={{ padding: "8px 12px" }}>
                            {row.url ? (
                                <a
                                    href={row.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    Ergebnisse →
                                </a>
                            ) : (
                                <span style={{ color: "#6b6b6b" }}>–</span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Competitions = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>100 Jahre SSV Schluchsee</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Jubiläumsfeier und Westernfest 2026
                    </p>
                </div>
            </BigBox>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 20
            }}>
                <MediumBox>
                    <Heading level={2}>
                        Jubiläumsfeier
                    </Heading>
                    <div style={{
                        padding: "12px 14px",
                        background: "#F8F8F4",
                        borderRadius: 8,
                        border: "1px solid #EDECE4",
                        marginBottom: 12,
                    }}>
                        <div style={{ fontWeight: 600, marginBottom: 6 }}>Datum: 3. Juli 2026</div>
                        <div style={{ color: "#6b6b6b" }}>Zeit: 19:00 Uhr</div>
                    </div>
                </MediumBox>

                <MediumBox>
                    <Heading level={2}>
                        Westernfest
                    </Heading>
                    <div style={{
                        padding: "12px 14px",
                        background: "#F8F8F4",
                        borderRadius: 8,
                        border: "1px solid #EDECE4",
                        marginBottom: 12,
                    }}>
                        <div style={{ fontWeight: 600, marginBottom: 6 }}>Datum: 4. Juli 2026</div>
                        <div style={{ color: "#6b6b6b" }}>Live Musik: Dapper Dan Men</div>
                    </div>
                </MediumBox>
            </div>

            <BigBox>
                <Heading level={2}>
                    Westernfest – Cowboy Action Shooting
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 16 }}>
                        Seit über 20 Jahren treffen sich Schützen aus nah und fern am Faulenfürster Eck
                        und messen sich beim traditionellen "Cowboy Action Shooting" und anderen Disziplinen
                        in Treffsicherheit und Schnelligkeit.
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 12,
                        marginBottom: 16,
                    }}>
                        {[
                            "Schießevent – Cowboys und Trapper Lager",
                            "Old West Saloon",
                            "Preisschießen mit der Henry Winchester",
                            "Leckeres Essensangebot ab 11:30 Uhr",
                            "Siegerehrung ca. 19:00 Uhr",
                            "Live Bluegrass- und Country Musik",
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: "10px 14px",
                                background: "#F8F8F4",
                                borderRadius: 8,
                                border: "1px solid #EDECE4",
                                fontWeight: 500,
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>
                        Die besondere Stimmung auf dem ganzen Areal, ob am Lagerfeuer oder im Saloon bei
                        einem erlesenen Whisky, führt uns in der Zeit des amerikanischen Wilden Westens.
                    </p>
                    <p style={{ marginTop: 12 }}>
                        <a
                            href="http://www.dapper-dan-men.de/index.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                        >
                            Dapper Dan Men →
                        </a>
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Trainingszeiten für Vereinsmitglieder
                </Heading>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {trainingTimes.map((item, i) => (
                        <div key={i} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                        }}>
                            <div>
                                <div style={{ fontWeight: 600, color: "#143620" }}>{item.label}</div>
                                <div style={{ fontSize: "0.8125rem", color: "#6b6b6b" }}>{item.day}</div>
                            </div>
                            <div style={{ fontWeight: 600, color: "#5a5a5a", fontSize: "0.875rem" }}>
                                {item.time}
                            </div>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Rundenwettkämpfe (RWK)
                </Heading>
                <RWKTable data={rwkData} />
            </MediumBox>
        </div>
    );
};

export default Competitions;