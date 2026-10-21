import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

interface Achievement {
    year: number;
    shooter: string;
    category: string;
    discipline: string;
    place: string;
}

const achievementsData: Achievement[] = [
    { year: 2025, shooter: "Tobias Johe", category: "Jugend", discipline: "Luftpistole", place: "69" },
    { year: 2025, shooter: "Arne Leonard", category: "Schüler", discipline: "Luftpistole", place: "31" },
    { year: 2004, shooter: "Rainer Neubronner", category: "Schützenklasse", discipline: "Standardpistole", place: "83" },
    { year: 2004, shooter: "Björn Stobbe", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 2004, shooter: "Rainer Neubronner", category: "Schützenklasse", discipline: "Sportpistole GK", place: "47" },
    { year: 2003, shooter: "Björn Stobbe", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 2002, shooter: "Björn Stobbe", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "13" },
    { year: 2002, shooter: "Björn Stobbe", category: "Junioren", discipline: "Luftpistole", place: "63" },
    { year: 2002, shooter: "Michael Feser", category: "Schützenklasse", discipline: "Luftpistole", place: "93" },
    { year: 2000, shooter: "Björn Stobbe", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 2000, shooter: "Björn Stobbe", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 2000, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "1. Platz (Einzel)" },
    { year: 1999, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1999, shooter: "Björn Stobbe", category: "Jugend", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1998, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1997, shooter: "Armin Rothmund", category: "Junioren", discipline: "Luftgewehr", place: "-" },
    { year: 1997, shooter: "Nicole Gondro", category: "Jugend", discipline: "3-Stellung LG", place: "-" },
    { year: 1997, shooter: "Nicole Gondro", category: "Jugend", discipline: "Luftgewehr", place: "-" },
    { year: 1997, shooter: "Wolfgang Maier", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1997, shooter: "Klaus Strübe", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1997, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1997, shooter: "Armin Rothmund", category: "Junioren", discipline: "KK Gewehr 100 m", place: "-" },
    { year: 1996, shooter: "Klaus Strübe", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1996, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1996, shooter: "Franz Kiefer", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1996, shooter: "Michael Feser", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1996, shooter: "Siegfried Knödler", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1995, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1995, shooter: "Sascha Gondro", category: "Junioren", discipline: "Luftgewehr", place: "-" },
    { year: 1995, shooter: "Siegfried Knödler", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1995, shooter: "Michael Feser", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1995, shooter: "Wolfgang Maier", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1995, shooter: "Klaus Strübe", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1995, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1994, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1994, shooter: "Daniel Khan-Leonhard", category: "Schützenklasse", discipline: "Luftpistole", place: "-" },
    { year: 1994, shooter: "Rainer Neubronner", category: "Schützenklasse", discipline: "Sportpistole GK", place: "-" },
    { year: 1994, shooter: "Gerhard Brugger", category: "Senioren 1", discipline: "Luftpistole", place: "-" },
    { year: 1993, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1993, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1993, shooter: "Andreas Isele", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1993, shooter: "Sascha Gondro", category: "Jugend", discipline: "Luftgewehr", place: "-" },
    { year: 1993, shooter: "Andreas Isele", category: "Junioren", discipline: "Freie Pistole", place: "-" },
    { year: 1993, shooter: "Lutz Gasparini", category: "Junioren", discipline: "Freie Pistole", place: "-" },
    { year: 1993, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Sportpistole KK", place: "-" },
    { year: 1993, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Freie Pistole", place: "-" },
    { year: 1992, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Sportpistole KK", place: "-" },
    { year: 1992, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1991, shooter: "Lutz Gasparini", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1991, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1991, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Sportpistole KK", place: "-" },
    { year: 1991, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1991, shooter: "Andreas Isele", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1990, shooter: "Andreas Isele", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1990, shooter: "Lutz Gasparini", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1990, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Luftpistole", place: "-" },
    { year: 1990, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1989, shooter: "Daniel Khan-Leonhard", category: "Junioren", discipline: "Olymp. Schnellfeuerpistole", place: "-" },
    { year: 1985, shooter: "Daniel Khan-Leonhard", category: "Schüler", discipline: "Luftpistole", place: "-" },
    { year: 1984, shooter: "Walter Kaiser", category: "Altersklasse", discipline: "Luftgewehr", place: "-" },
];

const AchievementsTable = ({ data }: { data: Achievement[] }) => (
    <div style={{ overflowX: "auto" }}>
        <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.8125rem",
        }}>
            <thead>
                <tr style={{ borderBottom: "2px solid #143620" }}>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700 }}>Jahr</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700 }}>Schütze</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700, minWidth: 110 }}>Klasse</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#143620", fontWeight: 700 }}>Disziplin</th>
                    <th style={{ textAlign: "right", padding: "10px 12px", color: "#143620", fontWeight: 700 }}>Platz</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} style={{
                        borderBottom: "1px solid #EDECE4",
                        background: i % 2 === 0 ? "#F8F8F4" : "transparent",
                    }}>
                        <td style={{ padding: "8px 12px", fontWeight: 600, color: "#5a5a5a" }}>{row.year}</td>
                        <td style={{ padding: "8px 12px", fontWeight: 500 }}>{row.shooter}</td>
                        <td style={{ padding: "8px 12px", color: "#6b6b6b" }}>{row.category}</td>
                        <td style={{ padding: "8px 12px" }}>{row.discipline}</td>
                        <td style={{
                            padding: "8px 12px",
                            textAlign: "right",
                            fontWeight: row.place.includes("1.") ? 700 : 500,
                            color: row.place.includes("1.") ? "#9a6508" : "#5a5a5a",
                        }}>
                            {row.place}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const Achievements = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Erfolgsbilanz</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "rgba(255, 255, 255, 0.8)" }}>
                        Teilnahmen an Deutschen Meisterschaften in München
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <AchievementsTable data={achievementsData} />
            </MediumBox>
        </div>
    );
};