import DeviceSize from "./DeviceSize.ts";

export const resolveDeviceSize = (small: boolean, medium: boolean, large: boolean): DeviceSize => {
    if (small) return DeviceSize.smallDeviceStyle;
    if (medium) return DeviceSize.mediumDeviceStyle;
    if (large) return DeviceSize.largeDeviceStyle;
    return DeviceSize.extraLargeDeviceStyle;
};
