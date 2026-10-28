# Repository guidance

## Start here

This file contains the rules that apply to every change. If you are an agent
without skill tooling, read it completely — it is the map of the repository.

1. **This file** — architecture, conventions, engineering standards, validation.
2. [docs/SKILLS.md](docs/SKILLS.md) — index of the 15 optional UI/motion
   playbooks in `skills/`; see "Skills" below before using one.
3. [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — running the site, administrator
   accounts, content maintenance, backups, and deployment.
4. [docs/MODELS.md](docs/MODELS.md) — which model does what, and how to
   connect your own DeepSeek key.
5. [README.md](README.md) — project status, completed work, and the open
   editorial decisions that still need the club's input.

Also read "Working efficiently" before you start searching: it explains when
to grep instead of read, and when to hand the searching to a cheaper agent so
the expensive model keeps its budget for the decisions.

## What this project is

German-language club website (SSV Schluchsee e. V.) with two parts:

- **Frontend** — React 19, TypeScript, Vite, Ant Design 6, React Router 7.
- **Backend** — Node 24 (`server/`, TypeScript run natively via Node type
  stripping), SQLite via the built-in `node:sqlite` module, session cookie
  authentication, image uploads, contact inbox. No third-party backend runtime
  packages.

`/admin` is a real admin center: articles, drafts, review notes, event dates,
image uploads, and the private contact inbox. Do not describe the site as a
static frontend — the old README wording about a "future admin center" is
outdated.

Public copy is German. Never invent club facts (contact details, training
times, results, legal text). Those are still pending editorial approval; see
"Remaining decisions" in [README.md](README.md).

## Orientation

These are pointers, not a reading list — jump to the part you need with
`grep`/`glob` instead of reading every file (see "Working efficiently"):

1. `src/sites/Router.tsx` — route registration; `src/config/webPaths.ts` — URL constants.
2. `src/elements/` — page shell (`Header`, `Body`, `Footer`) and news views; `src/components/` — reusable controls.
3. `src/logic/` — data flow: `api/client.ts` (fetch wrapper), `news/*` (articles, Markdown), `date/DateClass.ts`, `dynamicStyling/*` (responsive style selection).
4. `src/style/` — React style objects and the Ant Design theme; `src/config/colorConfig.ts` — shared colors; `src/index.css` — global CSS.
5. `server/` — the TypeScript backend: `app.ts` (composition), `routes/*` (handlers),
   `lib/` (db, http, validation, auth, static), `router.ts`, `config.ts`, `types.ts`.
6. `src/data/clubData.ts` — shared club facts (address, training times, ranges, documents).

## Commands

Use npm and the scripts in `package.json` (Node >= 24.13):

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies. |
| `npm run dev` | Vite dev server; uses the URL it reports. |
| `npm run server` | Node backend on port 3001. Run it in a second terminal. |
| `npm run setup:admin` | Create the local administrator for a fresh data directory (see `docs/DEPLOYMENT.md`). |
| `npm run build` | `tsc -b` type check + production build. |
| `npm run lint` | ESLint over the whole repository. |
| `npm run test -- --run` | Vitest once (`npm test` watches). |
| `npm run coverage` | Vitest once with V8 coverage. |
| `npm run test:browser` | Playwright end-to-end tests; builds with the showcase enabled first. |
| `npm run preview` | Serves the frontend build only, without backend features. |

## Working efficiently

Agents spend their budget on two things: reading and reasoning. Keep the
reasoning budget for the parts that need judgment, and push the reading to
cheaper tools and cheaper agents.

### Search first, read second

- **Never open a file to find out whether it contains something.** Use `grep`
  with a specific pattern and an `include` filter, and `glob` to find paths by
  name. Read only what the search proved is there.
- **Read ranges, not whole files.** Use `read` with `offset`/`limit` for the
  region you need, and list a directory before opening files you have not seen.
- **Skip what can never be the answer**: `node_modules/`, `dist/`, `var/`,
  `package-lock.json`, binary files in `public/documents/`, and skill files you
  are not currently applying.
- **Do not re-read a file you just edited.** The edit tool already confirmed
  the result; `git diff` is the cheaper way to confirm the change.
- **Scope the commands.** `npx eslint src/sites/routes/Admin.tsx`,
  `npx vitest run test/unit/news.test.ts`. Do not run the full browser suite
  for a backend-only change, or the full test suite for a one-file fix.
- **Summarize long tool output** instead of passing it on: keep the decisive
  lines, drop the rest.
- **Reuse what you already know.** The orientation list, the API table, and the
  content rules in this file answer most "where is X" questions — read them
  here instead of searching the tree again.

### Delegate the expensive searching to a cheap agent

- Use the **explore subagent** for broad, read-only reconnaissance: "where is X
  implemented", "which files import Y", "map the admin flow". It searches in
  its own context and returns a compact report, so the file contents never
  enter this conversation. It is pinned to the free Flash tier in
  `opencode.jsonc` — see [Model roles](#model-roles).
- Write the prompt precisely: the question, the folders to search, and the
  expected answer shape — **file paths with line numbers and short quotes**,
  never pasted files. State the thoroughness level (quick / medium / very
  thorough).
- Run independent explorations as **background subagents in parallel** and
  continue with other work while they run. Pass a cheaper `model` for bulk
  sweeps when the harness allows it.
- Delegate the mechanical work: file inventories, call-site searches,
  duplication sweeps, "where is this string used". Keep the strong model for
  what needs judgment — designing the change, writing the code, reviewing the
  diff, and the final summary.
- **Never delegate a decision.** If the question is which approach to take or
  what the correct behavior is, answer it here with the cheap agent's findings
  as input.
- Use the **general subagent** for self-contained work with a verifiable
  deliverable (for example: "write unit tests for `renderMarkdown.ts` and
  report the files you created"). Give it the same standards and conventions
  this file defines, and verify its result before relying on it.

## Model roles

The repository is set up for a **two-tier model strategy**: a strong model
decides, a cheap model reads. The tiering is configuration, not a request —
see `opencode.jsonc`.

| Role | Model | Use it for |
| --- | --- | --- |
| Main session | the strongest model you have (`/models`) | Designing the change, writing the code, deciding, reviewing the diff, the final summary |
| `explore` subagent | `opencode/deepseek-v4.1-flash-free` (free) | Greps, file inventories, call-site searches, "where is X" |
| `general` subagent | `opencode/deepseek-v4.1-flash-free` (free) | Mechanical work with a verifiable deliverable: unit tests, bulk renames, adding strings |
| `reviewer` subagent | inherits the session model (the strong one) | Read-only review of the current diff; may run `git diff`, `git status`, `git log`, nothing else |
| `deep-worker` subagent | `deepseek/deepseek-v4-pro` (paid) | Larger mechanical implementation when the free tier is not precise enough |

`explore`, `general` and `deep-worker` are defined in `opencode.jsonc`;
`reviewer` lives in `.opencode/agents/reviewer.md`, because its permission
rules use the OpenCode V2 format that V1 rejects inside JSON config. Both
OpenCode versions in use here load the setup without errors.

Rules:

- **Explore first, decide once.** A `grep` inside a free subagent is cheaper
  than the same `read` inside the main session.
- **Delegate the reading, never the deciding.** The cheap models may map,
  search, and mechanically edit. Architecture, trade-offs, and "is this
  correct" stay with the strong model.
- **Escalate instead of looping.** If the free tier answers wrongly twice,
  redo the task in the main session or hand it to `deep-worker`. Do not keep
  asking the same cheap model.
- **The free tier covers most of this repository.** `tsc`, ESLint, Vitest and
  Playwright verify the result, so a smaller model can work safely on scoped
  tasks. Keep the strong model for the admin editor's concurrency logic, Ant
  Design 6 API details, multi-file refactors, and final reviews.
- **Context is budget.** `AGENTS.md` is loaded in every session. Read it once;
  do not re-read it, and do not paste it into prompts.

### Paid DeepSeek key

The `deepseek` provider in `opencode.jsonc` reads the key from the
environment, so one export is enough:

```bash
export DEEPSEEK_API_KEY=sk-...   # key from https://platform.deepseek.com/api_keys
```

`/connect` → `deepseek` works as well and stores the credential for the
machine. After either route, `/models` shows `deepseek/deepseek-flash` and
`deepseek/deepseek-v4-pro`. Only `deep-worker` needs them; everything else
works without a key.

Full guide, including costs and alternatives: [docs/MODELS.md](docs/MODELS.md).

## Code layout

### Frontend

- `src/main.tsx` mounts the app and configures the global Ant Design theme and German locale.
- `src/sites/Router.tsx` registers routes and composes header, body, and footer.
  Page components live in `src/sites/routes/`; URL constants live in
  `src/config/webPaths.ts`. Keep route registration and links consistent.
  `/admin` and `/testing` are lazy-loaded; `/testing` exists only in dev or
  when `VITE_ENABLE_SHOWCASE=true`.
- `src/components/` contains reusable controls and presentation components.
  `src/elements/` contains larger sections, including the page shell and news views.
- `src/style/` holds React style objects and Ant Design theme configuration.
  Shared colors are in `src/config/colorConfig.ts`; global CSS is in `src/index.css`.
- `src/logic/dynamicStyling/` selects responsive styles for small, medium, large,
  and extra-large devices. Existing style modules commonly expose S/M/L/E variants
  and are consumed through `getDynamicStyle(small, medium, large, extraLarge)`.
- `src/config/translations/` contains shared German labels and Ant Design locale
  configuration. Keep user-facing copy in German unless requested otherwise.
- `src/assets/` contains bundled assets; `src/config/imagePaths.ts` centralizes
  image references.

### Backend

- `server/app.ts` — composes the HTTP server, security headers, origin/rate-limit
  and admin guards, route dispatch, and static file serving; `server/routes/*` —
  one module per resource; `server/lib/` — `db.ts` (SQLite repository), `http.ts`
  (`HttpError`, `jsonBody`, `sendJson`), `validation.ts`, `auth.ts`, `static.ts`;
  `server/router.ts` — route table with `:id` params; `server/config.ts` — typed
  env parsing; `server/types.ts` — domain and infrastructure types.
- `server/index.ts` — entry point; `server/setup.ts` — administrator setup;
  `server/revoke-sessions.ts` — session invalidation.
- Data lives under `DATA_DIR` (default `var/`): `club.sqlite`, `admin.json`,
  `uploads/`. Never commit that directory.

### API

The frontend talks to the backend through `src/logic/api/client.ts`; Vite proxies
`/api` and `/uploads` to `http://127.0.0.1:3001` in development.

| Endpoint | Auth | Purpose |
| --- | --- | --- |
| `GET /api/news` | public | Published articles only. |
| `GET /api/session` | public | `{authenticated, configured}`. |
| `POST /api/login` / `POST /api/logout` | public | Session cookie (`ssv_session`, 8 h, `HttpOnly`, `SameSite=Strict`). |
| `POST /api/contact` | public | Contact form submission into the private inbox. Rate limited. |
| `GET/POST /api/admin/news`, `PUT /api/admin/news/:id` | session | Read, create, and update articles (version-checked). |
| `GET /api/admin/messages`, `PATCH/DELETE /api/admin/messages/:id` | session | Inbox. |
| `POST /api/admin/uploads` | session | Base64 PNG/JPEG/WebP up to 5 MB; returns `/uploads/<uuid>.<ext>`. |

Mutating requests require a trusted `Origin` (or `Referer` when `Origin` is
absent) matching `SITE_ORIGIN`; otherwise the server answers `403`.

## Content rules

- `src/data/news/*.md` are **seed files**. The backend synchronises them into
  the SQLite database on every start, preserving the numeric ID from the file
  name: editing a file updates the article on the next restart, and deleting a
  file removes it. Articles created in `/admin` use UUID IDs and are not touched
  by the seeder.
- `src/data/newsData.ts` is the seed loader and type adapter, not a second copy
  of the article bodies.
- `src/data/clubData.ts` is the single source for the address, training times,
  range descriptions, and document references. Do not repeat those values in
  page components.
- `info/` is imported reference material, not live page content. `schemas/newsItem.json`
  documents the news data format; check the runtime `Article` type first.
- Markdown is rendered with `markdown-it` (`html: false`) and `interweave`.
  Parent components such as `NewsItemFullView` convert Markdown to HTML, then
  pass the HTML string to `HtmlRenderer`. Preserve unique news IDs and the
  metadata expected by `NewsItemProps` and `DateClass`.
- Club PDFs live under `public/documents/`; provenance and external-link checks
  are recorded in `docs/LINK_REVIEW.md`.

## Editing conventions

- Follow nearby formatting and component patterns; avoid unrelated reformatting.
- Use typed functional React components, PascalCase component names, and explicit
  prop types. Existing source imports commonly include `.ts` or `.tsx` extensions.
- Use `import type` for type-only imports. TypeScript enables strict checking and
  rejects unused locals and parameters.
- Reuse existing UI wrappers, shared colors, styles, and theme tokens when possible.
  Check all responsive variants when changing a shared component.
- Preserve unrelated working-tree changes and keep edits focused on the task.
  Do not edit generated build output (`dist/`), dependencies, or `var/`.

## Engineering standards

Every change — from a human contributor or from an agent — is held to the same
bar: **SOLID** principles, **Clean Code** conventions, a **test** for the
behavior that could regress, and the **Pathfinder principle** for anything
discovered along the way.

### SOLID, applied to this codebase

- **S — Single Responsibility.** One concern per module and per component.
  Pages compose sections from `src/elements/` and `src/components/` instead of
  containing logic; fetching lives in a hook (`src/logic/news/useNews.ts`),
  parsing in `src/logic/news/newsSource.ts`, rendering in
  `src/logic/news/renderMarkdown.ts`. Split a component when it starts doing
  a second job.
- **O — Open/Closed.** Add behavior through configuration instead of editing
  shared code: club facts in `src/data/clubData.ts`, colors in
  `src/config/colorConfig.ts`, theme tokens in `src/style/general/BaseTheme.ts`,
  routes in `src/config/webPaths.ts`, navigation in `src/config/navigation.ts`,
  breakpoints in `src/logic/dynamicStyling/`.
- **L — Liskov Substitution.** A component must honor its documented prop
  contract everywhere it is used. Wrappers (`BigBox`, `MediumBox`, `SmallBox`,
  `SizingBox`) are interchangeable; a replacement must accept the same props
  and behave the same for the caller.
- **I — Interface Segregation.** Keep prop types small and specific. Do not
  widen a shared component's props to serve one caller — add a dedicated
  component or an optional config entry instead.
- **D — Dependency Inversion.** Depend on the boundary, not on the
  implementation: components use the `api()` client in
  `src/logic/api/client.ts` and props, never `fetch` or SQLite directly. The
  backend owns persistence, validation, and sessions; the UI owns presentation.

### Clean Code conventions

- Meaningful names; German for user-facing copy, English for identifiers.
- Small functions with early returns and guard clauses instead of deep nesting.
- No duplication: club facts, addresses, training times, and document links
  exist once in `src/data/clubData.ts`.
- Comments explain **why**, not **what**; no commented-out code, no dead code.
- No magic values — name constants (`getDynamicStyle` breakpoints, upload
  limits, session lifetime).
- Pure functions wherever possible, so they can be unit tested without a DOM,
  a server, or the current time (`sortArticles`, `isPastEvent`, `localDate`,
  `parseNewsFile`, `renderMarkdown`).
- Immutable state updates; never mutate props or shared objects in place.
- Errors surface as German user-facing messages; never leak internals. The API
  always answers `{error}` with a status code, and the client turns that into
  an `Error`.
- Accessibility is part of code quality: semantic elements, keyboard operation,
  focus handling, and `prefers-reduced-motion` support.
- Keep the diff focused. Unrelated reformatting is noise, not quality.

### Testing policy

- **A new feature gets a test whenever it is possible to write one.** If a
  behavior cannot be tested, say so explicitly in the summary and explain why.
- **Every code path that could regress is covered.** "Could regress" includes:
  parsing and formatting, date and event boundaries, sorting and ordering,
  validation, authentication and authorization, status codes, error paths,
  Markdown rendering, and anything a user sees.
- **A bug fix gets a regression test that fails before the fix.**
- Put tests where they belong:

| Kind of test | Location | How |
| --- | --- | --- |
| Pure logic (parsers, dates, Markdown, sorting) | `test/unit/*.test.ts` | Vitest, node environment, no DOM needed |
| Backend and API behavior | `test/integration/backend.test.ts` | `createApp()` with a temporary data directory and real HTTP requests |
| User-visible flows, responsive behavior, accessibility | `e2e/site.spec.ts` | Playwright against the built app |

- Name tests as behavior sentences ("keeps drafts private, publishes, persists
  edits and rejects stale versions") and keep them independent of each other.
- Never rely on the wall clock or on sleep timers; pass an explicit date
  (`localDate`, `isPastEvent(article, today)`) or use fake timers.
- Do not add a test dependency (jsdom, testing-library) without a reason; the
  current stack covers logic and end-to-end behavior.
- Run `npm run test -- --run` for unit and integration tests, and
  `npm run test:browser` when the change touches rendered UI.

### Pathfinder principle

When you notice something that could be improved — a bug, a smell, a missing
test, an inconsistency — **follow the path to its cause and act on it in the
same pass**. Do not merely note it and move on.

- Fix the **root cause**, not the symptom; if the cause is elsewhere, follow
  the call chain before editing.
- Act directly on findings that are inside the area you are already changing,
  or that are small, safe, and independently verifiable.
- Anything larger, riskier, or outside the current task needs explicit
  approval — describe it, then continue with the agreed scope.
- Every fix comes with a test when it can regress.
- Report what you changed beyond the literal request, and why. Leaving the
  codebase better than you found it is part of the job, but correctness and
  scope come first.

## Skills (`skills/`)

`skills/` holds 15 optional design-engineering playbooks (Emil Kowalski's
animation and design philosophy, plus Apple design guidance). They are **not**
project conventions — they are advisory material for UI, motion, and mobile
tasks.

**Full index with one-line descriptions:**
[docs/SKILLS.md](docs/SKILLS.md). Read that file first if you are an agent
without skill tooling.

### Discovery paths

The skills follow the standard `SKILL.md` layout, so most harnesses find them
automatically:

| Harness | Path | Status |
| --- | --- | --- |
| OpenCode | `opencode.jsonc` → `"skills": ["./skills"]` | registered |
| Claude Code | `.claude/skills` | symlink to `skills/` |
| Agents.md / generic | `.agents/skills` | symlink to `skills/` |
| Any other agent | `skills/<id>/SKILL.md` | read the file directly |

The `.claude` and `.agents` entries are relative symlinks. On a file system
without symlink support, copy the folder: `cp -r skills .claude/skills`.

### Using them efficiently

- Load **one** skill per task. The **skill ID is the directory name** (e.g.
  `animate`, `review-animations`). With skill tooling, load it with
  `skill(id: "review-animations")`; without tooling, read
  `skills/<id>/SKILL.md` directly. Never read all 15 files up front — each
  `SKILL.md` is 100–700 lines.
- Read `skills/<id>/SKILL.md` first. It names the companion files it needs:
  `RECIPES.md`, `STANDARDS.md`, `API.md`, `AUDIT.md`, `PLAN-TEMPLATE.md`,
  `CATALOG.md`, `PICKER.md`. Supporting files are **not** loaded automatically.
- The frontmatter `description` decides when a skill fits. Three skills set
  `disable-model-invocation: true` (`prototype`, `pick-ui-library`,
  `review-animations`): use them only when the user asks for them explicitly.

### Routing table

| Task | Skill | Notes |
| --- | --- | --- |
| Build a new animation or transition | `animate` | Writes the implementation; `RECIPES.md` holds ready-made patterns. |
| Review motion in a diff | `review-animations` | Applies `STANDARDS.md`; opt-in only. |
| Audit motion across the app and plan fixes | `improve-animations` | Read-only; produces audits and plans (`AUDIT.md`, `PLAN-TEMPLATE.md`). |
| Find where motion is missing | `find-animation-opportunities` | Read-only proposals, not code. |
| Animation drops frames or stutters | `animation-performance` | Diagnose layout/paint/composite, `will-change`, React re-renders. |
| Name an unknown motion effect | `animation-vocabulary` | Glossary lookup only. |
| Apple-style gesture, spring, or sheet UI | `apple-design` | Springs, momentum, translucent depth. |
| Site must feel native on phones | `mobile-native` | Viewport, tap delay, safe areas, scroll behavior. |
| Stress-test a screen with worst-case data | `break-ui` | `CATALOG.md` holds the hostile data sets. |
| Build several UI variants to choose from | `prototype` | Opt-in; `PICKER.md` describes the picker. |
| Pick a library for a frontend need | `pick-ui-library` | Opt-in; opinionated curated list. |
| Toast or notification work | `ask-sonner` | See the caveat below. |
| General UI polish, taste, component detail | `emil-design-eng` | The broadest philosophy document. |
| Not applicable here | `animate-expo`, `write-swift` | No React Native app and no Swift code in this repository. |

### Repo-specific caveats — read before applying a skill

- The stack is **Ant Design 6 plus inline React style objects** in `src/style/`.
  These skills assume Tailwind and frequently Framer Motion/Motion. Do not add
  Tailwind classes or new animation dependencies unless the user explicitly
  asks for them; map the advice onto Ant Design components, the style objects
  in `src/style/`, and CSS transitions in `src/index.css`.
- `ask-sonner` documents Sonner. This project uses Ant Design `message` /
  `notification` and has no Sonner dependency — translate the guidance instead
  of installing Sonner.
- `pick-ui-library` recommends third-party packages. Ant Design already covers
  the needs here; adding a dependency requires explicit approval and a
  `package.json` change.
- Respect `prefers-reduced-motion`, and prefer CSS transitions over per-frame
  React state updates so animation stays off the main thread.
- The skills are opinionated about aesthetics. The club's visual identity comes
  from `src/config/colorConfig.ts` and `src/style/general/BaseTheme.ts`; keep it.
- Keep all user-facing strings in German.

## Validation

A change is not done until it is verified. The order of work:

1. `npm run build` — type check plus production build.
2. `npm run lint` — ESLint over the whole repository.
3. `npm run test -- --run` — Vitest for unit and integration tests. Add or
   extend a test with the change; see the testing policy above.
4. `npm run test:browser` — Playwright for rendered UI, when the change touches
   the interface, routing, or accessibility.

Report failures and distinguish pre-existing issues from regressions. Vitest
discovers `.ts`/`.tsx` files under `test/` via `vite.config.ts`; the browser
suite lives in `e2e/` and drives the built app through `e2e/server.mjs` at
`http://127.0.0.1:3002`.

For UI changes, inspect the affected routes at the viewport widths the browser
suite uses (320, 375, 768, 1024, 1440 px) and check browser errors. The
`/testing` route provides a component showcase. For news changes, check both
the news list and the corresponding detail page, plus the admin editor.
Documentation changes only require reviewing accuracy and the diff.

## Deployment and operations

Setup, administrator credentials, content maintenance, backups, and deployment
are documented in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md); external link and
document provenance in [docs/LINK_REVIEW.md](docs/LINK_REVIEW.md).
