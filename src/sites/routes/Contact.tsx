import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const boardMembers = [
    { name: "Volker Matthews", role: "Oberschützenmeister" },
    { name: "Wolfgang Faller (Indi)", role: "Schützenmeister" },
    { name: "Julian Booz", role: "Schatzwart" },
    { name: "Ursula Robens", role: "Schriftführerin" },
    { name: "Daniel Khan-Leonhard", role: "Jugendtrainer" },
    { name: "Timo Matthews", role: "Sportwart" },
    { name: "Phillip Laaß", role: "Beisitzer" },
    { name: "Albert Götte", role: "Beisitzer" },
    { name: "Richard Lorenz", role: "Jugendvertreter" },
];

const Contact = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Kontakt</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Vorstand des SSV Schluchsee e. V.
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Vereinsvorstand
                </Heading>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: 12,
                }}>
                    {boardMembers.map((member, index) => (
                        <div key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                        }}>
                            <div style={{
                                width: 42,
                                height: 42,
                                borderRadius: "50%",
                                background: "#143620",
                                color: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                                fontSize: "0.8125rem",
                                flexShrink: 0,
                            }}>
                                {member.name.split(" ").filter(n => !n.includes("(")).map(n => n[0]).join("").slice(0, 2)}
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: "#1a1a1a", fontSize: "0.9375rem" }}>{member.name}</div>
                                <div style={{ color: "#5a5a5a", fontSize: "0.8125rem" }}>{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Adresse
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p><strong>SSV Schluchsee e. V.</strong></p>
                    <p>Faulenfürster Eck</p>
                    <p>D-79859 Schluchsee</p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Gastschützen
                </Heading>
                <p style={{ lineHeight: 1.7, marginBottom: 12 }}>
                    Gastschützen können nur nach vorheriger Anmeldung und deren Bestätigung durch den SSV Schluchsee
                    (per E-Mail oder telefonisch) am Schießtraining teilnehmen.
                </p>
                <a
                    href="https://www.ssv-schluchsee.de/images/uploads/Anmeldung%20f%C3%BCr%20Gastsch%C3%BCtzen%2004.04.26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                >
                    Anmeldeformular herunterladen →
                </a>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Öffnungszeiten
                </Heading>
                <a
                    href="https://www.ssv-schluchsee.de/images/uploads/Öffnungszeiten.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                >
                    Öffnungszeiten PDF →
                </a>
            </MediumBox>
        </div>
    );
};

export default Contact;