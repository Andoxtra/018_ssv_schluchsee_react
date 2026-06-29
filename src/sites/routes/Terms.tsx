import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const Terms = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Nutzungsbedingungen</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Geltungsbereich</Heading>
                <NormalText>
                    Diese Nutzungsbedingungen regeln die Nutzung unserer Website und aller angebotenen Dienste.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Nutzungsrecht</Heading>
                <NormalText>
                    Die Inhalte der Website dürfen nur für persönliche Zwecke genutzt werden.
                    Eine kommerzielle Nutzung ohne ausdrückliche Genehmigung ist nicht gestattet.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Haftung</Heading>
                <NormalText>
                    Wir bemühen uns, die Richtigkeit und Aktualität aller Informationen auf unserer Website zu gewährleisten.
                    Wir übernehmen jedoch keine Gewähr für Vollständigkeit oder Richtigkeit der Inhalte.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Links zu externen Websites</Heading>
                <NormalText>
                    Unsere Website enthält möglicherweise Links zu externen Websites.
                    Wir sind nicht verantwortlich für den Inhalt dieser Websites und machen
                    keine Aussagen über deren Gültigkeit oder Sicherheit.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Änderungen dieser Bedingungen</Heading>
                <NormalText>
                    Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern.
                    Die Änderungen werden auf dieser Seite veröffentlicht.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Terms;