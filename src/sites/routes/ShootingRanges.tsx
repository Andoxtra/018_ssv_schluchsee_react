import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const shootingRanges = [
    { name: "Luftdruckwaffen", lanes: 8, distance: "10m", location: "Halle" },
    { name: "Präzisionsstände", lanes: 5, distance: "25m", location: "begehbar" },
    { name: "Duelstände", lanes: 5, distance: "25m", location: "" },
    { name: "Elektronische Stände", lanes: 6, distance: "50m", location: "" },
    { name: "Großkaliberstände", lanes: 3, distance: "100m", location: "" },
];

const trainingTimes = [
    { day: "Freitag", time: "19:00 – 20:00 Uhr", label: "Jugendtraining" },
    { day: "Mittwoch", time: "ab 14:00 Uhr", label: "Auflageschießen" },
    { day: "Freitag", time: "ab 19:00 Uhr", label: "Schießbetrieb" },
    { day: "Sonntag", time: "10:00 – 12:00 Uhr", label: "Schießbetrieb" },
];

const ShootingRanges = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Schießstände</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Faulenfürster Eck, 79859 Schluchsee
                    </p>
                </div>
            </BigBox>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20
            }}>
                <MediumBox>
                    <Heading level={2}>
                        Übersicht der Stände
                    </Heading>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {shootingRanges.map((range, i) => (
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
                                    <div style={{ fontWeight: 600, color: "#143620" }}>{range.name}</div>
                                    {range.location && (
                                        <div style={{ fontSize: "0.8125rem", color: "#6b6b6b" }}>{range.location}</div>
                                    )}
                                </div>
                                <div style={{
                                    textAlign: "right",
                                    fontSize: "0.875rem",
                                    color: "#5a5a5a",
                                }}>
                                    <div>{range.lanes} Bahnen</div>
                                    <div>{range.distance}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        marginTop: 16,
                        padding: "12px 14px",
                        background: "#143620",
                        color: "#FFFFFF",
                        borderRadius: 8,
                        textAlign: "center",
                        fontWeight: 600,
                    }}>
                        Gesamt: 27 Schießstände
                    </div>
                </MediumBox>

                <MediumBox>
                    <Heading level={2}>
                        Trainingszeiten
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
                                <div style={{
                                    fontWeight: 600,
                                    color: "#5a5a5a",
                                    fontSize: "0.875rem",
                                }}>
                                    {item.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </MediumBox>
            </div>

            <BigBox>
                <Heading level={2}>
                    Standort
                </Heading>
                <div style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid #EDECE4",
                }}>
                    <iframe
                        title="SSV Schluchsee Standort"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=8.2050%2C47.8230%2C8.2120%2C47.8260&layer=mapnik&marker=47.82422%2C8.20847"
                        style={{ border: 0 }}
                    />
                </div>
                <div style={{ textAlign: "center", marginTop: 12 }}>
                    <a
                        href="https://www.openstreetmap.org/?mlat=47.82422&mlon=8.20847#map=17/47.82422/8.20847"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                    >
                        Größere Karte auf OpenStreetMap →
                    </a>
                </div>
            </BigBox>
        </div>
    );
};

export default ShootingRanges;