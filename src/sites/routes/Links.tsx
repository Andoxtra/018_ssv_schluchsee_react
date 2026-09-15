import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const linksGroups = [
    {title: "Sport und Verbände", links: [
        {name: "Südbadischer Sportschützenverband", url: "https://www.sbsv.de"},
        {name: "Deutscher Schützenbund", url: "https://www.dsb.de"},
        {name: "Landesverbände – offizielles Verzeichnis des DSB", url: "https://www.dsb.de/der-verband/ueber-uns/mitglieder/landesverbaende"},
    ]},
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