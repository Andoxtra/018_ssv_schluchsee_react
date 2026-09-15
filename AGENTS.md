# Repository guidance

## Project

This is the German-language SSV Schluchsee club website, built with React 19,
TypeScript, Vite, Ant Design, and React Router. It is currently a static frontend.
The README includes future plans; do not assume its proposed admin center or
content upload workflow already exists.

## Commands

Use npm and the scripts in `package.json`:

- `npm install`: install dependencies.
- `npm run dev`: start the Vite development server; use the URL it reports.
- `npm run build`: run TypeScript project checks and create the production build.
- `npm run lint`: run ESLint.
- `npm run test -- --run`: run Vitest once; `npm test` starts watch mode.
- `npm run coverage`: run Vitest once with V8 coverage via `@vitest/coverage-v8`.
- `npm run preview`: serve the production build locally after building.

## Code layout

- `src/main.tsx` mounts the app and configures the global Ant Design theme and locale.
- `src/sites/Router.tsx` registers routes and composes the header, body, and footer.
  Page components live in `src/sites/routes/`; URL constants live in
  `src/config/webPaths.ts`. Keep route registration and links consistent.
- `src/components/` contains reusable controls and presentation components.
  `src/elements/` contains larger sections, including the page shell and news views.
- `src/style/` holds React style objects and Ant Design theme configuration.
  Shared colors are in `src/config/colorConfig.ts`; global CSS is in `src/index.css`.
- `src/logic/dynamicStyling/` selects responsive styles for small, medium, large,
  and extra-large devices. Existing style modules commonly expose S/M/L/E variants.
- `src/config/translations/` contains shared German labels and Ant Design locale
  configuration. Keep user-facing copy in German unless requested otherwise.
- `src/data/newsData.ts` contains the runtime news entries, including Markdown
  bodies. Files under `src/data/news/` are not automatically loaded by that array;
  editing a Markdown file alone does not update the displayed news.
- `info/` contains reference content for club pages. `schemas/newsItem.json`
  describes a news data format; check runtime types before changing data.
- `src/assets/` contains bundled assets; `src/config/imagePaths.ts` centralizes
  image references.

## Editing conventions

- Follow nearby formatting and component patterns; avoid unrelated reformatting.
- Use typed functional React components, PascalCase component names, and explicit
  prop types. Existing source imports commonly include `.ts` or `.tsx` extensions.
- Use `import type` for type-only imports. TypeScript enables strict checking and
  rejects unused locals and parameters.
- Reuse existing UI wrappers, shared colors, styles, and theme tokens when possible.
  Check all responsive variants when changing a shared component.
- Parent components such as `NewsItemFullView` convert Markdown to HTML with
  `markdown-it`, then pass the HTML string to `HtmlRenderer`, which renders it
  using `interweave`. Preserve unique news IDs and the metadata expected by
  `NewsItemProps` and `DateClass`.
- Preserve unrelated working-tree changes and keep edits focused on the task.
  Do not edit generated build output or dependencies.

## Validation

For application changes, run `npm run build` and `npm run lint`, plus relevant
Vitest tests for changed behavior. Report failures and distinguish pre-existing
issues from regressions. The current test suite contains only a placeholder test;
passing it does not establish application coverage. Vitest discovers `.ts` and
`.tsx` files under `test/` via `vite.config.ts`.

For UI changes, inspect the affected routes at relevant viewport widths and check
browser errors. The `/testing` route provides a component showcase. For news
changes, check both the news list and the corresponding detail page. Documentation
changes only require reviewing accuracy and the diff.
