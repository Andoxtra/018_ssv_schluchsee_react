import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const Law = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Satzung und Regelwerk</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Vereinssatzung</Heading>
                <Paragraph>
                    Die vollständige Satzung des SSV Schluchsee regelt die Struktur und den Betrieb unseres Vereins. 
                    Sie können die Satzung in unserem Downloadbereich einsehen oder von unserem Vorstand anfordern.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Hausregeln</Heading>
                <Paragraph>
                    <strong>1. Sicherheit:</strong><br/>
                    Die Einhaltung aller Sicherheitsrichtlinien ist obligatorisch. Jedes Fehlverhalten wird geahndet.<br/>
                    <br/>
                    <strong>2. Respekt und Verhalten:</strong><br/>
                    Respekt und Fairness gegenüber anderen Mitgliedern ist erforderlich. Belästigung oder 
                    aggressive Verhalten sind nicht toleriert.<br/>
                    <br/>
                    <strong>3. Vereinsvermögen:</strong><br/>
                    Alle Geräte und Einrichtungen müssen mit Sorgfalt behandelt werden. 
                    Beschädigungen müssen dem Vorstand gemeldet werden.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Disziplinarbestimmungen</Heading>
                <Paragraph>
                    Verstöße gegen diese Regeln können zu Verwarnungen, Geldstrafen oder im schlimmsten Fall 
                    zum Ausschluss aus dem Verein führen. Der Vorstand entscheidet im Einzelfall.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontakt bei Fragen</Heading>
                <Paragraph>
                    Bei Fragen zu unseren Regeln oder der Satzung können Sie sich jederzeit an 
                    unseren Vorstand wenden.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Law;

