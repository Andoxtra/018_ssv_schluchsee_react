// Applies the visitor's display mode before the first paint, so dark mode never
// flashes white. Kept as an external file because the CSP forbids inline scripts.
// Must stay in sync with src/logic/theme/themePreference.ts (storage key, values).
(function () {
    var preference = "system";
    try {
        var stored = window.localStorage.getItem("ssv-theme");
        if (stored === "light" || stored === "dark") preference = stored;
    } catch (error) { /* Storage blocked: follow the system setting. */ }
    var dark = preference === "dark" || (preference === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var root = document.documentElement;
    root.dataset.theme = dark ? "dark" : "light";
    root.style.colorScheme = dark ? "dark" : "light";
})();
