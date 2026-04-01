import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
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
                <Paragraph>
                    Diese Nutzungsbedingungen regeln die Nutzung unserer Website und aller angebotenen Dienste.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Nutzungsrecht</Heading>
                <Paragraph>
                    Die Inhalte der Website dürfen nur für persönliche Zwecke genutzt werden. 
                    Eine kommerzielle Nutzung ohne ausdrückliche Genehmigung ist nicht gestattet.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Haftung</Heading>
                <Paragraph>
                    Wir bemühen uns, die Richtigkeit und Aktualität aller Informationen auf unserer Website zu gewährleisten. 
                    Wir übernehmen jedoch keine Gewähr für Vollständigkeit oder Richtigkeit der Inhalte.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Links zu externen Websites</Heading>
                <Paragraph>
                    Unsere Website enthält möglicherweise Links zu externen Websites. 
                    Wir sind nicht verantwortlich für den Inhalt dieser Websites und machen 
                    keine Aussagen über deren Gültigkeit oder Sicherheit.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Änderungen dieser Bedingungen</Heading>
                <Paragraph>
                    Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. 
                    Die Änderungen werden auf dieser Seite veröffentlicht.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Terms;

