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
import Paragraph from "../../components/texts/Paragraph.tsx";
import TextLink from "../../components/links/TextLink.tsx";
import RadioGroup from "../../components/radio/RadioGroup.tsx";
import CheckBox from "../../components/checkbox/CheckBox.tsx";
import CheckBoxGroup from "../../components/checkbox/CheckBoxGroup.tsx";
import Dropdown from "../../components/dropdown/Dropdown.tsx";

const Test = (): ReactNode => {
    const [inputValue, setInputValue] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("option1");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<(string | number)[]>([]);
    const [selectedDropdown, setSelectedDropdown] = useState<string | number>("option1");

    const radioOptions = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
    ];

    const checkboxOptions = [
        { label: "Checkbox 1", value: "check1" },
        { label: "Checkbox 2", value: "check2" },
        { label: "Checkbox 3", value: "check3" }
    ];

    const dropdownOptions = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
        { label: "Option 4", value: "option4" }
    ];

    return (
        <>
            {/* Icons Section */}
            <Heading level={1}>Icons</Heading>
            <SmallIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.testingSite} ></SmallIcon>
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
            <Heading level={1}>Text Components</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
            <Paragraph>This is a sample paragraph. You can use this component for displaying text content throughout the application.</Paragraph>
            <TextLink href={webPaths.testingSite} target="_self">This is a text link</TextLink>

            {/* Input Components Section */}
            <Heading level={1}>Input Components</Heading>
            <Heading level={2}>Text Input</Heading>
            <BaseInput
                placeholder="Enter some text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Paragraph>Current input value: {inputValue}</Paragraph>

            <Heading level={2}>Text Area</Heading>
            <TextArea
                placeholder="Enter multiple lines of text..."
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                rows={5}
            />
            <Paragraph>Current textarea value: {textAreaValue}</Paragraph>

            {/* Radio Button Section */}
            <Heading level={1}>Radio Buttons</Heading>
            <RadioGroup
                options={radioOptions}
                value={selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
            />
            <Paragraph>Selected radio option: {selectedRadio}</Paragraph>

            {/* Checkbox Section */}
            <Heading level={1}>Checkboxes</Heading>
            <Heading level={2}>Single Checkbox</Heading>
            <CheckBox
                label="Accept terms and conditions"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <Paragraph>Checkbox checked: {checkboxChecked ? "Yes" : "No"}</Paragraph>

            <Heading level={2}>Checkbox Group</Heading>
            <CheckBoxGroup
                options={checkboxOptions}
                value={selectedCheckboxes}
                onChange={(checkedValues) => setSelectedCheckboxes(checkedValues)}
            />
            <Paragraph>Selected checkboxes: {selectedCheckboxes.join(", ") || "None"}</Paragraph>

            {/* Dropdown Section */}
            <Heading level={1}>Dropdown</Heading>
            <Dropdown
                options={dropdownOptions}
                placeholder="Select an option..."
                value={selectedDropdown}
                onChange={(value) => setSelectedDropdown(value)}
            />
            <Paragraph>Selected dropdown option: {selectedDropdown}</Paragraph>
        </>
    )
};

export default Test;