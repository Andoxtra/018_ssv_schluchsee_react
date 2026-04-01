import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const About = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Über SSV Schluchsee</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Unsere Geschichte</Heading>
                <Paragraph>
                    Der Schützenverein Schluchsee blickt auf eine lange und stolze Geschichte zurück.
                    Als einer der traditionsreichsten Schützenvereine in der Region haben wir uns über
                    die Jahre hinweg zu einer angesehenen Institution entwickelt. Unsere Mitglieder teilen
                    eine Leidenschaft für den Schiesssport und ein starkes Gemeinschaftsgefühl.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Unsere Mission</Heading>
                <Paragraph>
                    Wir fördern den Schiesssport in all seinen Facetten. Unser Ziel ist es, den Sport
                    für alle Altersgruppen zugänglich zu machen, von Anfängern bis zu Profis.
                    Wir glauben an die Werte von Disziplin, Fairness und gegenseitigem Respekt.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Erfolge und Auszeichnungen</Heading>
                <Paragraph>
                    Unsere Mitglieder haben auf regionaler und überregionaler Ebene beeindruckende
                    Erfolge erzielt. Wir sind stolz auf unsere Champions und auf die kontinuierliche
                    Entwicklung unserer Athleten. Besuchen Sie unsere Seite "Erfolge" für weitere Details.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Mitgliedschaft</Heading>
                <Paragraph>
                    Sie sind an einer Mitgliedschaft interessiert? Wir freuen uns auf neue Mitglieder!
                    Kontaktieren Sie uns, um mehr über die Beitrittsvoraussetzungen und -gebühren zu erfahren.
                    Es gibt keine minimalen oder maximalen Altersgrenzen - jeder ist willkommen!
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Vereinsvorstand</Heading>
                <Paragraph>
                    <strong>Vorsitzender:</strong> Max Mustermann<br/>
                    <strong>Stellvertreter:</strong> Anna Schmidt<br/>
                    <strong>Kassier:</strong> Peter Müller<br/>
                    <strong>Schriftführer:</strong> Clara Wagner<br/>
                    <br/>
                    Kontaktieren Sie uns über die Kontaktseite für weitere Informationen.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default About;