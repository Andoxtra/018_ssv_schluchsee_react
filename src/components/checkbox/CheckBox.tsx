import {Checkbox, ConfigProvider} from "antd";
import type {CheckboxChangeEvent} from "antd";
import type {ReactNode} from "react";
import CheckBoxStyle from "../../style/components/checkbox/CheckBoxStyle.ts";
import CheckBoxTheme from "../../style/components/checkbox/CheckBoxTheme.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type CheckBoxProps = {
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

const CheckBox = ({
    label,
    checked,
    onChange,
    disabled,
    indeterminate
}: CheckBoxProps): ReactNode => {
    return (
        <ConfigProvider theme={CheckBoxTheme}>
            <Checkbox
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                indeterminate={indeterminate}
                style={getDynamicStyle(CheckBoxStyleS, CheckBoxStyleM, CheckBoxStyleL, CheckBoxStyleE)}
            >
                {label}
            </Checkbox>
        </ConfigProvider>
    );
};

export default CheckBox;


