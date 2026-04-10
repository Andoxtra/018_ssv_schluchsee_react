import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
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
                    <NormalText>
                        Der Schützenverein Schluchsee ist ein traditionsreicher Verein mit einer langen Geschichte.
                        Wir sind stolz auf unsere Mitglieder und unser Engagement für den Schiesssport.
                    </NormalText>
                </div>
            </BigBox>

            {/* Main Sections */}
            <MediumBox>
                <Heading level={2}>Über Uns</Heading>
                <NormalText>
                    Der Schützenverein Schluchsee wurde vor vielen Jahren gegründet und hat sich seitdem
                    zu einem bedeutenden Verein in der Region entwickelt. Wir bieten Training und Wettkämpfe
                    für alle Altersgruppen an und fördern den Schiesssport in einer freundlichen Atmosphäre.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Schießstände</Heading>
                <NormalText>
                    Unser Verein verfügt über moderne Schießstände mit professioneller Ausrüstung.
                    Wir bieten ideale Bedingungen für Training und Wettkämpfe verschiedener Disziplinen.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Trainingszeiten</Heading>
                <NormalText>
                    <strong>Trainingszeiten:</strong><br/>
                    Montag - Freitag: 19:00 - 22:00 Uhr<br/>
                    Samstag: 14:00 - 19:00 Uhr<br/>
                    Sonntag: 10:00 - 16:00 Uhr<br/>
                    <br/>
                    Neue Mitglieder sind herzlich willkommen! Kontaktieren Sie uns für weitere Informationen.
                </NormalText>
            </MediumBox>

            <SmallBox>
                <Heading level={3}>Aktuelle Meldungen</Heading>
                <NormalText>
                    Besuchen Sie unsere Neuigkeitenseite für die neuesten Updates und Ereignisse des Vereins.
                </NormalText>
            </SmallBox>
        </>
    )
};

export default Home;