import ArrowLink from "../../components/links/ArrowLink.tsx";
import GuestRegistration from "../../elements/club/GuestRegistration.tsx";
import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import colorConfig from "../../config/colorConfig.ts";

type BoardMember = {name: string; role: string; email?: string; phone?: string};

const boardMembers: BoardMember[] = [
    { name: "Volker Matthews", role: "Oberschützenmeister", email: "osm@ssv-schluchsee.de", phone: "+49 152 5420 1351" },
    { name: "Wolfgang Faller (Indi)", role: "Schützenmeister", email: "sm@ssv-schluchsee.de" },
    { name: "Julian Booz", role: "Schatzwart", email: "kassierer@ssv-schluchsee.de" },
    { name: "Ursula Robens", role: "Schriftführerin", email: "info@ssv-schluchsee.de" },
    { name: "Daniel Khan-Leonhard", role: "Jugendtrainer", email: "jugend@ssv-schluchsee.de" },
    { name: "Timo Matthews", role: "Sportwart", email: "sportwart@ssv-schluchsee.de" },
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
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "rgba(255, 255, 255, 0.8)" }}>
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
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))",
                    gap: 12,
                }}>
                    {boardMembers.map((member, index) => (
                        <div key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "12px 14px",
                            background: colorConfig.page,
                            borderRadius: 8,
                            border: `1px solid ${colorConfig.surfaceAlt}`,
                        }}>
                            <div style={{
                                width: 42,
                                height: 42,
                                borderRadius: "50%",
                                background: colorConfig.primary,
                                color: colorConfig.onPrimary,
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
                                <div style={{ fontWeight: 600, color: colorConfig.text, fontSize: "0.9375rem" }}>{member.name}</div>
                                <div style={{ color: colorConfig.textSecondary, fontSize: "0.8125rem" }}>{member.role}</div>
                                {member.email && <a href={`mailto:${member.email}`} style={{ fontSize: "0.8125rem" }}>{member.email}</a>}
                                {member.phone && <a href={`tel:${member.phone.replace(/\s/g, "")}`} style={{ fontSize: "0.8125rem" }}>{member.phone}</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </MediumBox>

            <MediumBox><GuestRegistration/></MediumBox>
            <MediumBox><Heading level={2}>Besuch planen</Heading><p>Trainingszeiten prüfen und Ihre Anreise vorbereiten.</p><ul className="link-list"><li><ArrowLink to="/schiessstaende">Trainingszeiten</ArrowLink></li><li><ArrowLink to="/standort">Adresse & Anfahrt</ArrowLink></li></ul></MediumBox>
        </div>
    );
};
export default Contact;
