import SmallBox from "../../components/boxes/SmallBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import SizingBox from "../../components/boxes/SizingBox.tsx";
import type {ReactNode} from "react";
import {useState} from "react";

import SmallIcon from "../../components/icons/SmallIcon.tsx";
import MediumIcon from "../../components/icons/MediumIcon.tsx";
import LargeIcon from "../../components/icons/LargeIcon.tsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.tsx";
import SecondaryButton from "../../components/buttons/SecondaryButton.tsx";

import imagePaths from "../../config/imagePaths.ts";
import webPaths from "../../config/webPaths.ts";
import SmallImage from "../../components/images/SmallImage.tsx";
import MediumImage from "../../components/images/MediumImage.tsx";
import LargeImage from "../../components/images/LargeImage.tsx";

import BaseInput from "../../components/inputs/BaseInput.tsx";
import TextArea from "../../components/inputs/TextArea.tsx";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import TextLink from "../../components/links/TextLink.tsx";
import RadioGroup from "../../components/radio/RadioGroup.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";
import CheckboxGroup from "../../components/checkbox/CheckboxGroup.tsx";
import Dropdown from "../../components/dropdown/Dropdown.tsx";
import RecordTable from "../../components/table/RecordTable.tsx";
import NewsItemFullView from "../../elements/NewsItem/NewsItemFullView.tsx";
import {DateClass} from "../../logic/date/DateClass.ts";
import NewsTable from "../../components/table/NewsTable.tsx";
import KeyboardText from "../../components/texts/KeyboardText.tsx";
import ItalicText from "../../components/texts/ItalicText.tsx";
import StrongText from "../../components/texts/StrongText.tsx";
import CopyableText from "../../components/texts/CopyableText.tsx";
import LinkTable from "../../components/table/LinkTable.tsx";
import AchievementsTable from "../../components/table/AchievementsTable.tsx";
import RWKTable from "../../components/table/RWKTable.tsx";

const Test = (): ReactNode => {
    const [inputValue, setInputValue] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("option1");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<(string | number)[]>([]);
    const [selectedDropdown, setSelectedDropdown] = useState<string | number>("option1");

    const radioOptions = [
        {label: "Option 1", value: "option1"},
        {label: "Option 2", value: "option2"},
        {label: "Option 3", value: "option3"}
    ];

    const checkboxOptions = [
        {label: "Checkbox 1", value: "check1"},
        {label: "Checkbox 2", value: "check2"},
        {label: "Checkbox 3", value: "check3"}
    ];

    const dropdownOptions = [
        {label: "Option 1", value: "option1"},
        {label: "Option 2", value: "option2"},
        {label: "Option 3", value: "option3"},
        {label: "Option 4", value: "option4"}
    ];

    return (
        <>
            {/* Heading Section */}
            <Heading level={1}>Test Page</Heading>
            <Heading level={2}>This is a Heading Level 2</Heading>
            <Heading level={3}>This is a Heading Level 3</Heading>
            <Heading level={4}>This is a Heading Level 4</Heading>
            <Heading level={5}>This is a Heading Level 5</Heading>
            <Heading level={6}>Überschrift der Ebene 6</Heading>
            <BigBox><Heading level={2}>Große Box</Heading></BigBox>
            <MediumBox><Heading level={2}>Mittlere Box</Heading></MediumBox>
            <SmallBox>Kleine Box</SmallBox>
            <Heading level={2}>Breiten und Höhen</Heading>
            {([1, 2, 4, 8, 16] as const).map(fraction => <div key={fraction} style={{marginBottom: 12}}>
                <p>Breite und Höhe: 1/{fraction}</p>
                <SizingBox width={fraction} style={{background: "#9a6508", minHeight: 12}}><span className="sr-only">Breite 1/{fraction}</span></SizingBox>
                <div style={{height: 80, marginTop: 8}}><SizingBox height={fraction} style={{background: "#143620"}}><span className="sr-only">Höhe 1/{fraction}</span></SizingBox></div>
            </div>)}

            {/* Table Section*/}

            <RecordTable tableData={[
                {key: 0, discipline: "Pistole", points: 255, date: new DateClass("2022-09-23"), shooter: "Daniel"},
                {key: 1, discipline: "Pistole", points: 255, date: new DateClass("2022-09-23"), shooter: "Daniel"}
            ]}/>

            <NewsTable tableData={[
                {key: 0, title: "News Item 1", date: new DateClass("2023-09-10"), author: "John Doe"},
                {key: 1, title: "News Item 2", date: new DateClass("2024-09-10"), author: "John Doe"},
                {key: 2, title: "News Item 1", date: new DateClass("2023-09-10"), author: "Not John Doe"}
            ]}/>

            <LinkTable tableData={[
                {key:0, title:"Sportordnung", link:"/download"},
                {key:1, title:"Wechsel der Wettkampfklasse", link:"/download"},
                {key:2, title:"Sportordnung", link:"/download"}
            ]}/>

            <AchievementsTable tableData={[
                {key:0, year:2025, shooter:"Tobias Johe", category:"Jugend", discipline:"Luftpistole", place:"69"},
                {key:1, year:2000, shooter:"Daniel Khan-Leonhard", category:"Schützenklasse", discipline:"Olymp. Schnellfeuerpistole", place:"1. Platz (Einzel)"},
                {key:2, year:1993, shooter:"Andreas Isele", category:"Junioren", discipline:"Freie Pistole", place:"-"}
            ]}/>

            <RWKTable tableData={[
                {key:0, wettkampf:"RWK LP und LG – Kreisliga LP", saison:"2016/2017", url:"/download"},
                {key:1, wettkampf:"RWK LG Auflage", saison:"2013/2014"},
                {key:2, wettkampf:"Kreispokal Hüfingen LG", saison:"2013"}
            ]}/>

            {/* Icons Section */}
            <Heading level={1}>Icons</Heading>
            <SmallIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite}></SmallIcon>
            <MediumIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite}></MediumIcon>
            <LargeIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite}></LargeIcon>

            {/* Buttons Section */}
            <Heading level={1}>Buttons</Heading>
            <PrimaryButton text="Primary Button" linkTo={webPaths.testingSite}></PrimaryButton>
            <SecondaryButton text="Secondary Button" linkTo={webPaths.testingSite}></SecondaryButton>

            {/* Images Section */}
            <Heading level={1}>Images</Heading>
            <SmallImage linkToImage={imagePaths.ssvLogoFull}></SmallImage>
            <MediumImage linkToImage={imagePaths.ssvLogoFull}></MediumImage>
            <LargeImage linkToImage={imagePaths.ssvLogoFull}></LargeImage>

            {/* Text Components Section */}
            <NormalText>
                This is a sample paragraph. You can use this component for displaying text content throughout the
                application.
            </NormalText>
            <KeyboardText>Keyboard Text</KeyboardText>
            <ItalicText>Italic Text</ItalicText>
            <StrongText>Strong Text</StrongText>
            <CopyableText>Copyable Text</CopyableText>
            <TextLink href={webPaths.testingSite} target="_self">This is a text link</TextLink>

            {/* Input Components Section */}
            <Heading level={1}>Input Components</Heading>
            <Heading level={2}>Text Input</Heading>
            <BaseInput
                placeholder="Enter some text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <NormalText>Current input value: {inputValue}</NormalText>

            <Heading level={2}>Text Area</Heading>
            <TextArea
                placeholder="Enter multiple lines of text..."
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                rows={5}
            />
            <NormalText>Current textarea value: {textAreaValue}</NormalText>

            {/* Radio Button Section */}
            <Heading level={1}>Radio Buttons</Heading>
            <RadioGroup
                options={radioOptions}
                value={selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
            />
            <NormalText>Selected radio option: {selectedRadio}</NormalText>

            {/* Checkbox Section */}
            <Heading level={1}>Checkboxes</Heading>
            <Heading level={2}>Single Checkbox</Heading>
            <Checkbox
                label="Accept terms and conditions"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <NormalText>Checkbox checked: {checkboxChecked ? "Yes" : "No"}</NormalText>

            <Heading level={2}>Checkbox Group</Heading>
            <CheckboxGroup
                options={checkboxOptions}
                value={selectedCheckboxes}
                onChange={(checkedValues) => setSelectedCheckboxes(checkedValues)}
            />
            <NormalText>Selected checkboxes: {selectedCheckboxes.join(", ") || "None"}</NormalText>

            {/* Dropdown Section */}
            <Heading level={1}>Dropdown</Heading>
            <Dropdown
                options={dropdownOptions}
                placeholder="Select an option..."
                value={selectedDropdown}
                onChange={(value) => setSelectedDropdown(value)}
            />
            <NormalText>Selected dropdown option: {selectedDropdown}</NormalText>

            <Heading level={1}>News Item</Heading>
            <NewsItemFullView
                title="Sample Title"
                creationDate={new DateClass("2023-09-10")}
                author="John Doe"
                contentAsMarkdown="# Sample Content  ## This is a sample news item."
                uuid={""}
                previewText={""}/>
        </>
    )
};

export default Test;