import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import RecordTable from "../../components/table/RecordTable.tsx";
import {DateClass} from "../../logic/date/DateClass.ts";

const pistolRecords = [
    { discipline: "Freie Pistole", rings: 278, date: "02.07.1995", shooter: "Daniel Khan-Leonhard" },
    { discipline: "Gebrauchspistole .45 ACP", rings: 382, date: "26.09.2004", shooter: "Andreas Isele" },
    { discipline: "Gebrauchspistole 9 mm", rings: 373, date: "09.10.2005", shooter: "Rainer Neubronner" },
    { discipline: "Gebrauchsrevolver .357", rings: 381, date: "04.02.2007", shooter: "Michael Seidel" },
    { discipline: "Gebrauchsrevolver .44", rings: 373, date: "24.07.2005", shooter: "Wolfgang Faller" },
    { discipline: "Luftpistole", rings: 380, date: "31.05.2002", shooter: "Daniel Leonhard" },
    { discipline: "Luftpistole – Auflage", rings: 296, date: "22.05.2008", shooter: "Karl-Heinz Decker" },
    { discipline: "Olymp. Schnellfeuerpistole", rings: 595, date: "21.06.1992", shooter: "Daniel Khan-Leonhard" },
    { discipline: "Sportpistole GK", rings: 289, date: "04.04.1996", shooter: "Rainer Neubronner" },
    { discipline: "Sportpistole KK", rings: 293, date: "20.12.1992", shooter: "Klaus Strübe" },
    { discipline: "Standardpistole", rings: 556, date: "26.10.2003", shooter: "Rainer Neubronner" },
    { discipline: "Perkussionspistole", rings: 136, date: "31.12.2017", shooter: "Wolfgang Faller" },
    { discipline: "Perkussionsrevolver", rings: 132, date: "16.02.2019", shooter: "Richard Lorenz" },
];

const rifleRecords = [
    { discipline: "KK Gewehr 100 m", rings: 283, date: "23.10.1994", shooter: "Anton Kiefer" },
    { discipline: "KK international (liegend)", rings: 1047, date: "04.04.1997", shooter: "Rüdiger Steffen" },
    { discipline: "KK Olympisch Match (60)", rings: 571, date: "08.10.2017", shooter: "Karl-Heinz Kahnt" },
    { discipline: "Luftgewehr", rings: 388, date: "13.10.2004", shooter: "Uwe Fromherz" },
    { discipline: "Luftgewehr – Auflage", rings: 300, date: "22.11.2009", shooter: "August Kiefer" },
    { discipline: "Olymp. Match (30)", rings: 300, date: "01.03.2009", shooter: "Karl-Heinz Kahnt" },
    { discipline: "Ordonnanzgewehr (Karabiner)", rings: 98, date: "10.08.2005", shooter: "Sigi Knödler" },
    { discipline: "Perkussionsgewehr", rings: 142, date: "19.02.2006", shooter: "Richard Lorenz" },
    { discipline: "Standardgewehr", rings: 572, date: "12.03.1994", shooter: "Hans-Peter Vögtle" },
    { discipline: "Unterhebelrepetier", rings: 390, date: "20.12.2015", shooter: "Sigi Knödler" },
];

const toRecordTableData = (rows: { discipline: string; rings: number; date: string; shooter: string }[]) =>
    rows.map((row, index) => ({
        key: index,
        discipline: row.discipline,
        points: row.rings,
        date: new DateClass(row.date.split(".").reverse().join("-")),
        shooter: row.shooter,
    }));

const Records = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Standrekorde</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "rgba(255, 255, 255, 0.8)" }}>
                        Übersicht der Standrekorde im SSV Schluchsee (Stand: 29.09.2025)
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Pistolendisziplinen
                </Heading>
                <RecordTable tableData={toRecordTableData(pistolRecords)} />
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Gewehrdisziplinen
                </Heading>
                <RecordTable tableData={toRecordTableData(rifleRecords)} />
            </MediumBox>
        </div>
    );
};

export default Records;
