import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
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
                <NormalText>
                    Der Schützenverein Schluchsee blickt auf eine lange und stolze Geschichte zurück.
                    Als einer der traditionsreichsten Schützenvereine in der Region haben wir uns über
                    die Jahre hinweg zu einer angesehenen Institution entwickelt. Unsere Mitglieder teilen
                    eine Leidenschaft für den Schiesssport und ein starkes Gemeinschaftsgefühl.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Unsere Mission</Heading>
                <NormalText>
                    Wir fördern den Schiesssport in all seinen Facetten. Unser Ziel ist es, den Sport
                    für alle Altersgruppen zugänglich zu machen, von Anfängern bis zu Profis.
                    Wir glauben an die Werte von Disziplin, Fairness und gegenseitigem Respekt.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Erfolge und Auszeichnungen</Heading>
                <NormalText>
                    Unsere Mitglieder haben auf regionaler und überregionaler Ebene beeindruckende
                    Erfolge erzielt. Wir sind stolz auf unsere Champions und auf die kontinuierliche
                    Entwicklung unserer Athleten. Besuchen Sie unsere Seite "Erfolge" für weitere Details.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Mitgliedschaft</Heading>
                <NormalText>
                    Sie sind an einer Mitgliedschaft interessiert? Wir freuen uns auf neue Mitglieder!
                    Kontaktieren Sie uns, um mehr über die Beitrittsvoraussetzungen und -gebühren zu erfahren.
                    Es gibt keine minimalen oder maximalen Altersgrenzen - jeder ist willkommen!
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Vereinsvorstand</Heading>
                <NormalText>
                    <strong>Vorsitzender:</strong> Max Mustermann<br/>
                    <strong>Stellvertreter:</strong> Anna Schmidt<br/>
                    <strong>Kassier:</strong> Peter Müller<br/>
                    <strong>Schriftführer:</strong> Clara Wagner<br/>
                    <br/>
                    Kontaktieren Sie uns über die Kontaktseite für weitere Informationen.
                </NormalText>
            </MediumBox>
        </>
    )
};

export default About;