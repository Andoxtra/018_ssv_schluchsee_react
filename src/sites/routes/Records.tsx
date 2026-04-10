import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const recordsData = [
    { discipline: "10m Luftgewehr", record: 396 / 400, holder: "Max Schütze", year: 2024 },
    { discipline: "25m Standardpistole", record: 570 / 600, holder: "Anna Müller", year: 2023 },
    { discipline: "300m Gewehr", record: 292 / 300, holder: "Klaus Weber", year: 2024 },
    { discipline: "50m Freipistole", record: 285 / 300, holder: "Peter Schmidt", year: 2023 }
];

const Records = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Standrekorde</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Vereinsrekorde</Heading>
                <NormalText>
                    Hier sind die aktuellen Standrekorde unseres Vereins in verschiedenen Disziplinen aufgelistet:
                </NormalText>
            </MediumBox>

            {recordsData.map((record, index) => (
                <MediumBox key={index}>
                    <Heading level={3}>{record.discipline}</Heading>
                    <NormalText>
                        <strong>Rekord:</strong> {record.record} Punkte<br/>
                        <strong>Gehalten von:</strong> {record.holder}<br/>
                        <strong>Jahr:</strong> {record.year}
                    </NormalText>
                </MediumBox>
            ))}

            <MediumBox>
                <Heading level={2}>Einen Rekord aufstellen</Heading>
                <NormalText>
                    Möchten Sie einen Rekord aufstellen? Sprechen Sie mit unserem Trainerpersonal 
                    über das richtige Training und die optimalen Bedingungen für Ihr bestes Schießen!
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Records;

