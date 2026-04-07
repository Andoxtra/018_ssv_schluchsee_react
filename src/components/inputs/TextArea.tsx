import {Input, ConfigProvider} from "antd";
import React, {type ReactNode} from "react";
import BaseInputStyle from "../../style/components/inputs/BaseInputStyle.ts";
import BaseInputTheme from "../../style/components/inputs/BaseInputTheme.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type TextAreaProps = {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
};

const {
    BaseInputStyleS,
    BaseInputStyleM,
    BaseInputStyleL,
    BaseInputStyleE
} = BaseInputStyle;

const TextArea = ({
    placeholder,
    value,
    onChange,
    disabled,
    rows = 4,
    maxLength
}: TextAreaProps): ReactNode => {
    return (
        <ConfigProvider theme={BaseInputTheme}>
            <Input.TextArea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                rows={rows}
                maxLength={maxLength}
                style={getDynamicStyle(BaseInputStyleS, BaseInputStyleM, BaseInputStyleL, BaseInputStyleE)}
            />
        </ConfigProvider>
    );
};

export default TextArea;


