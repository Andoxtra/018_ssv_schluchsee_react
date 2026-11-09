import type {ReactNode} from "react";
import {useTheme} from "../../logic/theme/themeContext.ts";
import {toggleLabel} from "../../logic/theme/themePreference.ts";
import type {ThemePreference} from "../../logic/theme/themePreference.ts";

const icons: Record<ThemePreference, ReactNode> = {
    // Half-filled circle: follows the device setting.
    system: <><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/></>,
    light: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    dark: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>,
};

/** Cycles the display mode: Automatisch → Hell → Dunkel. */
const ThemeToggle = () => {
    const {preference, cycle} = useTheme();
    const label = toggleLabel(preference);
    return (
        <button type="button" className="theme-toggle" onClick={cycle} aria-label={label} title={label} data-preference={preference}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {icons[preference]}
            </svg>
        </button>
    );
};

export default ThemeToggle;
