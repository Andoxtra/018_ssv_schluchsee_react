import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const linksGroups = [
    {
        title: "Badische Verbände",
        links: [
            { name: "Badischer Sportschützenverband", url: "https://www.bssv.de" },
            { name: "Südbadischer Sportschützenverband", url: "https://www.sbsv.de" },
        ]
    },
    {
        title: "Bayerische Verbände",
        links: [
            { name: "Bayerischer Sportschützenbund", url: "https://www.bsb-ev.de" },
            { name: "Oberpfälzer Schützenbund", url: "https://www.oberpfaelzer-schuetzenbund.de" },
        ]
    },
    {
        title: "Weitere Landesverbände",
        links: [
            { name: "Brandenburgischer Schützenbund e. V.", url: "https://www.schuetzen-brandenburg.de" },
            { name: "Hessischer Schützenverband", url: "https://www.hsv-schiessen.de" },
            { name: "Landesschützenverband Mecklenburg-Vorpommern", url: "https://www.lsv-mv.de" },
            { name: "Landesschützenverband Sachsen-Anhalt", url: "https://www.schuetzen-sachsen-anhalt.de" },
            { name: "Niedersächsischer Sportschützenverband", url: "https://www.nssv.de" },
            { name: "Norddeutscher Schützenbund", url: "https://www.norddeutscher-schuetzenbund.de" },
            { name: "Nordwestdeutscher Schützenbund", url: "https://www.nwdsb.de" },
            { name: "Pfälzischer Sportschützenbund", url: "https://www.pssb.de" },
            { name: "Sächsischer Schützenbund", url: "https://www.saechsischer-schuetzenbund.de" },
            { name: "Schützenverband Berlin-Brandenburg", url: "https://www.svbb.de" },
            { name: "Schützenverband Hamburg und Umgebung", url: "https://www.schuetzenverband-hamburg.de" },
            { name: "Schützenverband Saar", url: "https://www.schuetzenverband-saar.de" },
            { name: "Thüringer Schützenbund", url: "https://www.thueringer-schuetzenbund.de" },
            { name: "Württembergischer Schützenverband", url: "https://www.wuerttschuetzen.de" },
            { name: "Westfälischer Schützenbund", url: "https://www.wsb.de" },
        ]
    },
];

const Links = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Links</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Übersicht von Schützenorganisationen und Verbänden
                    </p>
                </div>
            </BigBox>

            {linksGroups.map((group, i) => (
                <MediumBox key={i}>
                    <Heading level={2}>
                        {group.title}
                    </Heading>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {group.links.map((link, j) => (
                            <a
                                key={j}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: "10px 14px",
                                    background: "#F8F8F4",
                                    borderRadius: 8,
                                    border: "1px solid #EDECE4",
                                    color: "#9a6508",
                                    fontWeight: 500,
                                    textDecoration: "underline",
                                }}
                            >
                                {link.name} →
                            </a>
                        ))}
                    </div>
                </MediumBox>
            ))}
        </div>
    );
};

export default Links;