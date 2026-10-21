import {useMediaQuery} from "@uidotdev/usehooks";
import DeviceSize from "./DeviceSize.ts"
import {resolveDeviceSize} from "./resolveDeviceSize.ts";

const GetDeviceSize = (): DeviceSize => {
    const smallDeviceActive: boolean = useMediaQuery("only screen and (max-width : 767px)");
    const mediumDeviceActive: boolean = useMediaQuery("only screen and (min-width : 768px) and (max-width : 1023px)");
    const largeDeviceActive: boolean = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1439px)");

    return resolveDeviceSize(smallDeviceActive, mediumDeviceActive, largeDeviceActive);
};

export default GetDeviceSize;
