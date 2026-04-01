import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import SmallBox from "../../components/boxes/SmallBox.tsx";
import LargeImage from "../../components/images/LargeImage.tsx";
import imagePaths from "../../config/imagePaths.ts";

const Home = (): ReactNode => {
    return (
        <>
            {/* Hero Section */}
            <BigBox>
                <div style={{textAlign: "center", padding: "40px 20px"}}>
                    <LargeImage linkToImage={imagePaths.ssvLogoFull}/>
                    <Heading level={1}>Willkommen bei SSV Schluchsee</Heading>
                    <Paragraph>
                        Der Schützenverein Schluchsee ist ein traditionsreicher Verein mit einer langen Geschichte.
                        Wir sind stolz auf unsere Mitglieder und unser Engagement für den Schiesssport.
                    </Paragraph>
                </div>
            </BigBox>

            {/* Main Sections */}
            <MediumBox>
                <Heading level={2}>Über Uns</Heading>
                <Paragraph>
                    Der Schützenverein Schluchsee wurde vor vielen Jahren gegründet und hat sich seitdem
                    zu einem bedeutenden Verein in der Region entwickelt. Wir bieten Training und Wettkämpfe
                    für alle Altersgruppen an und fördern den Schiesssport in einer freundlichen Atmosphäre.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Schießstände</Heading>
                <Paragraph>
                    Unser Verein verfügt über moderne Schießstände mit professioneller Ausrüstung.
                    Wir bieten ideale Bedingungen für Training und Wettkämpfe verschiedener Disziplinen.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Trainingszeiten</Heading>
                <Paragraph>
                    <strong>Trainingszeiten:</strong><br/>
                    Montag - Freitag: 19:00 - 22:00 Uhr<br/>
                    Samstag: 14:00 - 19:00 Uhr<br/>
                    Sonntag: 10:00 - 16:00 Uhr<br/>
                    <br/>
                    Neue Mitglieder sind herzlich willkommen! Kontaktieren Sie uns für weitere Informationen.
                </Paragraph>
            </MediumBox>

            <SmallBox>
                <Heading level={3}>Aktuelle Meldungen</Heading>
                <Paragraph>
                    Besuchen Sie unsere Neuigkeitenseite für die neuesten Updates und Ereignisse des Vereins.
                </Paragraph>
            </SmallBox>
        </>
    )
};

export default Home;