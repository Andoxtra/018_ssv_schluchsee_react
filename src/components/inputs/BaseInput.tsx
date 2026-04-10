import {Input} from "antd";
import React, {type ReactNode} from "react";
import BaseInputStyle from "../../style/components/inputs/BaseInputStyle.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type BaseInputProps = {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    type?: string;
    maxLength?: number;
    minLength?: number;
};

const {
    BaseInputStyleS,
    BaseInputStyleM,
    BaseInputStyleL,
    BaseInputStyleE
} = BaseInputStyle;


//ToDo: Styling doesnt work correctly
const BaseInput = ({
                       placeholder,
                       value,
                       onChange,
                       disabled,
                       type = "text",
                       maxLength,
                       minLength
                   }: BaseInputProps): ReactNode => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            style={getDynamicStyle(BaseInputStyleS, BaseInputStyleM, BaseInputStyleL, BaseInputStyleE)}
        />
    );
};

export default BaseInput;


