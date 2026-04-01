import {Radio, ConfigProvider} from "antd";
import type {RadioChangeEvent} from "antd";
import type {ReactNode} from "react";
import RadioGroupStyle from "../../style/components/radio/RadioGroupStyle.ts";
import RadioGroupTheme from "../../style/components/radio/RadioGroupTheme.ts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

type RadioOption = {
    label: string;
    value: string | number;
};

type RadioGroupProps = {
    options: RadioOption[];
    value?: string | number;
    onChange?: (e: RadioChangeEvent) => void;
    disabled?: boolean;
    vertical?: boolean;
};

const {
    RadioGroupStyleS,
    RadioGroupStyleM,
    RadioGroupStyleL,
    RadioGroupStyleE
} = RadioGroupStyle;

const RadioGroup = ({
    options,
    value,
    onChange,
    disabled,
    vertical = false
}: RadioGroupProps): ReactNode => {
    return (
        <ConfigProvider theme={RadioGroupTheme}>
            <div style={getDynamicStyle(RadioGroupStyleS, RadioGroupStyleM, RadioGroupStyleL, RadioGroupStyleE)}>
                <Radio.Group
                    options={options}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    style={{display: "flex", flexDirection: vertical ? "column" : "row", gap: 12}}
                />
            </div>
        </ConfigProvider>
    );
};

export default RadioGroup;


