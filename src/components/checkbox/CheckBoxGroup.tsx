import {Checkbox} from "antd";
import type {ReactNode} from "react";
import CheckBoxStyle from "../../style/components/checkbox/CheckBoxStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type CheckBoxOption = {
    label: string;
    value: string | number;
};

type CheckBoxGroupProps = {
    options: CheckBoxOption[];
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

const CheckBoxGroup = (
    {
        options,
        value,
        onChange,
        disabled
    }: CheckBoxGroupProps): ReactNode => {
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

export default CheckBoxGroup;

