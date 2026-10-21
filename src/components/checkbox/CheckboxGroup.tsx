import {Checkbox} from "antd";
import type {ReactNode} from "react";
import CheckBoxStyle from "../../style/components/checkbox/CheckBoxStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type CheckboxOption = {
    label: string;
    value: string | number;
};

type CheckboxGroupProps = {
    options: CheckboxOption[];
    value?: (string | number)[];
    onChange?: (checkedValues: (string | number)[]) => void;
    disabled?: boolean;
};

const {
    CheckBoxStyleS,
    CheckBoxStyleM,
    CheckBoxStyleL,
    CheckBoxStyleE
} = CheckBoxStyle;

const CheckboxGroup = (
    {
        options,
        value,
        onChange,
        disabled
    }: CheckboxGroupProps): ReactNode => {
    return (
        <div style={getDynamicStyle(CheckBoxStyleS, CheckBoxStyleM, CheckBoxStyleL, CheckBoxStyleE)}>
            <Checkbox.Group
                options={options}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={{display: "flex", flexDirection: "column", gap: 8}}
            />
        </div>
    );
};

export default CheckboxGroup;

