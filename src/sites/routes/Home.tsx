import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import SecondaryButton from "../../components/buttons/SecondaryButton.tsx";

import webPaths from "../../config/webPaths.ts";
import textList from "../../config/translations/textList.ts";

const shootingRanges = [
    { label: "8 Bahnen für Luftdruckwaffen", sub: "Halle", icon: "🎯" },
    { label: "5 begehbare Präzisionsstände", sub: "25 Meter", icon: "🎯" },
    { label: "5 Duelstände", sub: "25 Meter", icon: "🎯" },
    { label: "6 elektronische Stände", sub: "50 Meter", icon: "🎯" },
    { label: "3 Schießstände", sub: "100 Meter", icon: "🎯" },
];

const Home = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>
                        Willkommen beim SSV Schluchsee e. V.
                    </Heading>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}>
                        Seit 1926 Tradition und Gemeinschaft im Schießsport im Herzen des Schwarzwalds.
                    </p>
                </div>
            </BigBox>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20
            }}>
                <MediumBox>
                    <Heading level={3}>
                        {textList.news}
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        Aktuelles aus dem Verein und aus aller Welt zum Thema Schießsport.
                    </p>
                    <SecondaryButton linkTo={webPaths.newsSite} text="Weiterlesen →" />
                </MediumBox>

                <MediumBox>
                    <Heading level={3}>
                        {textList.about}
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        Erfahren Sie mehr über unsere Vereinsgeschichte seit 1926 und den Neubau am Faulenfürster Eck.
                    </p>
                    <SecondaryButton linkTo={webPaths.aboutSite} text="Weiterlesen →" />
                </MediumBox>

                <MediumBox>
                    <Heading level={3}>
                        {textList.shootingRanges}
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        27 Schießstände von 10m bis 100m für Luftdruck, KK, Großkaliber und mehr.
                    </p>
                    <SecondaryButton linkTo={webPaths.shootingLocation} text="Weiterlesen →" />
                </MediumBox>

                <MediumBox>
                    <Heading level={3}>
                        Veranstaltungen
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        Westernfest, CAS-Wettkämpfe, Generalversammlungen und weitere Termine.
                    </p>
                    <SecondaryButton linkTo={webPaths.rwk} text="Weiterlesen →" />
                </MediumBox>

                <MediumBox>
                    <Heading level={3}>
                        {textList.contact}
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        Vorstand, Schützenmeister und alle Ansprechpartner auf einen Blick.
                    </p>
                    <SecondaryButton linkTo={webPaths.contactSite} text="Weiterlesen →" />
                </MediumBox>

                <MediumBox>
                    <Heading level={3}>
                        Gastschützen
                    </Heading>
                    <p style={{ lineHeight: 1.7 }}>
                        Gastschützen können nur nach vorheriger Anmeldung und Bestätigung durch den SSV Schluchsee am Training teilnehmen.
                    </p>
                    <a
                        href="https://www.ssv-schluchsee.de/images/uploads/Anmeldung%20f%C3%BCr%20Gastsch%C3%BCtzen%2004.04.26.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#9a6508", fontWeight: 600, textDecoration: "underline" }}
                    >
                        Anmeldeformular →
                    </a>
                </MediumBox>
            </div>

            <BigBox>
                <Heading level={2}>
                    Unsere Schießstände
                </Heading>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16
                }}>
                    {shootingRanges.map((range, i) => (
                        <div key={i} style={{
                            textAlign: "center",
                            padding: 16,
                            background: "#f8f8f4",
                            borderRadius: 8,
                        }}>
                            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{range.icon}</div>
                            <div style={{ fontWeight: 600 }}>{range.label}</div>
                            <div style={{ color: "#6b6b6b", fontSize: "0.875rem" }}>{range.sub}</div>
                        </div>
                    ))}
                </div>
            </BigBox>
        </div>
    );
};

export default Home;