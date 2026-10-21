import {Checkbox as AntdCheckbox} from "antd";
import type {CheckboxChangeEvent} from "antd";
import type {ReactNode} from "react";
import CheckBoxStyle from "../../style/components/checkbox/CheckBoxStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
    disabled?: boolean;
    indeterminate?: boolean;
};

const {
    CheckBoxStyleS,
    CheckBoxStyleM,
    CheckBoxStyleL,
    CheckBoxStyleE
} = CheckBoxStyle;

const Checkbox = (
    {
        label,
        checked,
        onChange,
        disabled,
        indeterminate
    }: CheckboxProps): ReactNode => {
    return (
        <AntdCheckbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            indeterminate={indeterminate}
            style={getDynamicStyle(CheckBoxStyleS, CheckBoxStyleM, CheckBoxStyleL, CheckBoxStyleE)}
        >
            {label}
        </AntdCheckbox>
    );
};

export default Checkbox;


