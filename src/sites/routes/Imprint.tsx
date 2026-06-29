import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const Imprint = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Impressum</Heading>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Angaben gemäß § 5 TMG
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p><strong>SSV Schluchsee e. V.</strong></p>
                    <p>Faulenfürster Eck</p>
                    <p>D-79859 Schluchsee</p>
                    <p style={{ marginTop: 12 }}><strong>Vertretungsberechtigter:</strong> Volker Matthews</p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Kontakt
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>Telefon und E-Mail auf Anfrage</p>
                    <p style={{ marginTop: 8 }}>
                        <a href="/kontakt" style={{ color: "#9a6508", fontWeight: 600 }}>
                            Zum Kontaktformular →
                        </a>
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Haftungsausschluss
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}><strong>Haftung für Inhalte</strong></p>
                    <p style={{ marginBottom: 12 }}>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu überwachen.
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Urheberrecht
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                        bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
                    </p>
                </div>
            </MediumBox>

            <div style={{ textAlign: "center", padding: "16px 0", color: "#6b6b6b", fontSize: "0.875rem" }}>
                <p>Copyright 2026 – alle Rechte vorbehalten – Schützenverein Schluchsee e. V.</p>
            </div>
        </div>
    );
};

export default Imprint;