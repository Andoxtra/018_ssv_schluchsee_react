import * as React from "react";
import getDeviceSize from "./getDeviceSize.ts";
import DeviceSize from "./DeviceSize.ts";

const getDynamicStyle = (smallDeviceStyle: React.CSSProperties, mediumDeviceStyle: React.CSSProperties, largeDeviceStyle: React.CSSProperties, extraLargeDeviceStyle: React.CSSProperties) => {
    switch (getDeviceSize()) {
        case DeviceSize.smallDeviceStyle:
            return smallDeviceStyle;
        case DeviceSize.mediumDeviceStyle:
            return mediumDeviceStyle;
        case DeviceSize.largeDeviceStyle:
            return largeDeviceStyle;
        case DeviceSize.extraLargeDeviceStyle:
            return extraLargeDeviceStyle;
    }
}

export default getDynamicStyle;