import {describe, expect, test} from 'vitest';
import DeviceSize from '../../src/logic/dynamicStyling/DeviceSize.ts';
import {resolveDeviceSize} from '../../src/logic/dynamicStyling/resolveDeviceSize.ts';

describe('resolveDeviceSize', () => {
    test('selects small, medium, large and extra-large', () => {
        expect(resolveDeviceSize(true, false, false)).toBe(DeviceSize.smallDeviceStyle);
        expect(resolveDeviceSize(false, true, false)).toBe(DeviceSize.mediumDeviceStyle);
        expect(resolveDeviceSize(false, false, true)).toBe(DeviceSize.largeDeviceStyle);
        expect(resolveDeviceSize(false, false, false)).toBe(DeviceSize.extraLargeDeviceStyle);
    });

    test('prefers the smallest active breakpoint', () => {
        expect(resolveDeviceSize(true, true, true)).toBe(DeviceSize.smallDeviceStyle);
        expect(resolveDeviceSize(false, true, true)).toBe(DeviceSize.mediumDeviceStyle);
        expect(resolveDeviceSize(false, false, true)).toBe(DeviceSize.largeDeviceStyle);
    });
});
