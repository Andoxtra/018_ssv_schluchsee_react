import {useMediaQuery} from "@uidotdev/usehooks";
import DeviceSize from "./DeviceSize.ts"

const GetDeviceSize = (): DeviceSize => {
    const smallDeviceActive: boolean = useMediaQuery("only screen and (max-width : 768px)");
    const mediumDeviceActive: boolean = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
    const largeDeviceActive: boolean = useMediaQuery("only screen and (min-width : 993px) and (max-width : 1920px)");

    if (smallDeviceActive) {
        return DeviceSize.smallDeviceStyle;
    } else if (mediumDeviceActive) {
        return DeviceSize.mediumDeviceStyle;
    } else if (largeDeviceActive) {
        return DeviceSize.largeDeviceStyle;
    } else {
        return DeviceSize.extraLargeDeviceStyle;
    }
};

export default GetDeviceSize;
