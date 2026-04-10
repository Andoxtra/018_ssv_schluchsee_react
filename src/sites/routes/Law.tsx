import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
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
                <NormalText>
                    Die vollständige Satzung des SSV Schluchsee regelt die Struktur und den Betrieb unseres Vereins. 
                    Sie können die Satzung in unserem Downloadbereich einsehen oder von unserem Vorstand anfordern.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Hausregeln</Heading>
                <NormalText>
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
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Disziplinarbestimmungen</Heading>
                <NormalText>
                    Verstöße gegen diese Regeln können zu Verwarnungen, Geldstrafen oder im schlimmsten Fall 
                    zum Ausschluss aus dem Verein führen. Der Vorstand entscheidet im Einzelfall.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontakt bei Fragen</Heading>
                <NormalText>
                    Bei Fragen zu unseren Regeln oder der Satzung können Sie sich jederzeit an 
                    unseren Vorstand wenden.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Law;

