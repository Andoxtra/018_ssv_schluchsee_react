import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const Download = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Downloads</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Wichtige Dokumente und Formulare
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Sportordnung des Deutschen Schützenbundes (DSB)
                </Heading>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <a
                        href="http://www.sbsv.de/sbsv/sport/wettkampfklassen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                            color: "#9a6508",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        Wettkampfklassen →
                    </a>
                    <a
                        href="https://www.ssv-schluchsee.de/index.php/downloads?task=weblink.go&id=25"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                            color: "#9a6508",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        Downloads zum Thema Waffenrecht →
                    </a>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Vereinsdokumente
                </Heading>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <a
                        href="https://www.ssv-schluchsee.de/index.php/downloads?task=weblink.go&id=27"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                            color: "#9a6508",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        Satzung des SSV Schluchsee →
                    </a>
                    <a
                        href="https://www.ssv-schluchsee.de/images/uploads/Öffnungszeiten.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                            color: "#9a6508",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        Öffnungszeiten →
                    </a>
                    <a
                        href="https://www.ssv-schluchsee.de/images/uploads/Anmeldung%20f%C3%BCr%20Gastsch%C3%BCtzen%2004.04.26.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "12px 14px",
                            background: "#F8F8F4",
                            borderRadius: 8,
                            border: "1px solid #EDECE4",
                            color: "#9a6508",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        Anmeldeformular für Gastschützen →
                    </a>
                </div>
            </MediumBox>
        </div>
    );
};

export default Download;