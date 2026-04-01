import {Input, ConfigProvider} from "antd";
import type {ReactNode} from "react";
import BaseInputStyle from "../../style/components/inputs/BaseInputStyle.ts";
import BaseInputTheme from "../../style/components/inputs/BaseInputTheme.ts";
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
        <ConfigProvider theme={BaseInputTheme}>
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
        </ConfigProvider>
    );
};

export default BaseInput;


