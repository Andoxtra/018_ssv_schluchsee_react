// Single source for the site's colours. Each role has a light and a dark value;
// the page reads them as CSS custom properties (see colorConfig.ts), and the
// Ant Design themes read the raw values (see src/style/general/BaseTheme.ts).

export type ThemeMode = "light" | "dark";

export type Palette = {
    page: string;
    surface: string;
    surfaceAlt: string;
    headerBg: string;
    borderSoft: string;
    border: string;
    borderStrong: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    primary: string;
    primaryHover: string;
    primaryText: string;
    onPrimary: string;
    secondary: string;
    secondaryHover: string;
    link: string;
    linkHover: string;
    accent: string;
    focus: string;
    focusGlow: string;
    primaryTint: string;
    primaryTintHover: string;
    noteBg: string;
    noteText: string;
    codeBg: string;
    codeText: string;
    heroStart: string;
    heroMid: string;
    heroEnd: string;
    footerBg: string;
    footerText: string;
    footerMuted: string;
    error: string;
    success: string;
    shadowSm: string;
    shadowMd: string;
    shadowLg: string;
    shadowDropdown: string;
};

export const lightPalette: Palette = {
    page: "#F8F8F4",
    surface: "#FFFFFF",
    surfaceAlt: "#EDECE4",
    headerBg: "rgba(255, 255, 255, 0.97)",
    borderSoft: "#E8E6DC",
    border: "#D5D2C8",
    borderStrong: "#C8C5BB",
    text: "#1a1a1a",
    textSecondary: "#5a5a5a",
    textMuted: "#66665f",
    primary: "#143620",
    primaryHover: "#1a4a2e",
    primaryText: "#143620",
    onPrimary: "#FFFFFF",
    secondary: "#9a6508",
    secondaryHover: "#825506",
    // Slightly darker than the button gold so text links pass 4.5:1 on surfaceAlt as well.
    link: "#8f5e07",
    linkHover: "#143620",
    accent: "#d48a0b",
    focus: "#b36e00",
    focusGlow: "rgba(20, 54, 32, 0.1)",
    primaryTint: "#E3ECE5",
    primaryTintHover: "#D3E1D6",
    noteBg: "#fff4d6",
    noteText: "#47320b",
    codeBg: "#143620",
    codeText: "#F8F8F4",
    heroStart: "#0d2215",
    heroMid: "#143620",
    heroEnd: "#1a4a2e",
    footerBg: "#0d2215",
    footerText: "#e5e5e5",
    footerMuted: "#cccccc",
    error: "#d43030",
    success: "#3abf3a",
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.08)",
    shadowMd: "0 4px 12px rgba(0, 0, 0, 0.1)",
    shadowLg: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowDropdown: "0 6px 20px rgba(0, 0, 0, 0.13)",
};

export const darkPalette: Palette = {
    page: "#101813",
    surface: "#18231C",
    surfaceAlt: "#223029",
    headerBg: "rgba(24, 35, 28, 0.97)",
    borderSoft: "#2A3830",
    border: "#3A4A40",
    borderStrong: "#4C5E52",
    text: "#E6E9E3",
    textSecondary: "#B9C0B7",
    textMuted: "#A0A99F",
    primary: "#2E6B45",
    primaryHover: "#37794F",
    primaryText: "#9BD3AE",
    onPrimary: "#FFFFFF",
    secondary: "#9a6508",
    secondaryHover: "#825506",
    link: "#E0A93A",
    linkHover: "#9BD3AE",
    accent: "#d48a0b",
    focus: "#E0A93A",
    focusGlow: "rgba(155, 211, 174, 0.25)",
    primaryTint: "#24402F",
    primaryTintHover: "#2B4C38",
    noteBg: "#3A2F14",
    noteText: "#F3DFA8",
    codeBg: "#0B120E",
    codeText: "#E6E9E3",
    heroStart: "#0a1a10",
    heroMid: "#11301d",
    heroEnd: "#174128",
    footerBg: "#0a140d",
    footerText: "#e5e5e5",
    footerMuted: "#cccccc",
    error: "#FF7B72",
    success: "#6FD08C",
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.4)",
    shadowMd: "0 4px 12px rgba(0, 0, 0, 0.45)",
    shadowLg: "0 8px 30px rgba(0, 0, 0, 0.5)",
    shadowDropdown: "0 6px 20px rgba(0, 0, 0, 0.55)",
};

export const palettes: Record<ThemeMode, Palette> = {light: lightPalette, dark: darkPalette};

export const cssVariableName = (role: keyof Palette): string =>
    `--color-${role.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`;

export const cssVariables = (palette: Palette): string =>
    (Object.keys(palette) as (keyof Palette)[]).map(role => `${cssVariableName(role)}: ${palette[role]};`).join(" ");

/** The complete stylesheet for both modes; injected once at startup. */
export const themeStylesheet = (): string =>
    `:root { ${cssVariables(lightPalette)} color-scheme: light; }\n` +
    `:root[data-theme="dark"] { ${cssVariables(darkPalette)} color-scheme: dark; }`;
