import {Select} from "antd";
import type {ReactNode} from "react";
import DropdownStyle from "../../style/components/dropdown/DropdownStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type DropdownOption = {
    label: string;
    value: string | number;
};

type DropdownProps = {
    options: DropdownOption[];
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    disabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    searchable?: boolean;
};

const {
    DropdownStyleS,
    DropdownStyleM,
    DropdownStyleL,
    DropdownStyleE
} = DropdownStyle;

const Dropdown = (
    {
        options,
        placeholder = "Select an option",
        value,
        onChange,
        disabled,
        multiple = false,
        clearable = true,
        searchable = true
    }: DropdownProps): ReactNode => {
    return (
        <Select
            options={options}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            mode={multiple ? "multiple" : undefined}
            allowClear={clearable}
            showSearch={searchable}
            style={getDynamicStyle(DropdownStyleS, DropdownStyleM, DropdownStyleL, DropdownStyleE)}
        />
    );
};

export default Dropdown;

