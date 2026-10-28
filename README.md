# SSV Schluchsee Website

German-language club website built with React 19, TypeScript, Vite, Ant Design,
and React Router, with a Node/SQLite backend for news, image uploads, and contact
messages. The website remains in development; club information and publication
approval are still pending.

## Development

Use Node 24.13 or newer. Run the backend and frontend in separate terminals:

```sh
npm install
npm run server
npm run dev
```

Use the URL reported by Vite. The default backend origin is `http://localhost:5173`;
if the frontend runs elsewhere, set `SITE_ORIGIN` accordingly and restart the backend.

```sh
npm run build
npm run lint
npm run test -- --run
npm run coverage
npx playwright install chromium
npm run test:browser
```

`npm run preview` previews the frontend build only; use the Node server to test the
complete application. `npm run test:browser` builds with the component showcase
enabled and runs isolated browser tests. `/testing` is available during development
and is excluded from the default production build.

Setup, administrator credentials, content maintenance, backups and deployment:
[DEPLOYMENT.md](docs/DEPLOYMENT.md). The local administrator credentials, when
configured, are in the ignored private file `var/local-admin.txt`.

## Content maintenance

- Manage articles, drafts, review notes, event dates and images at `/admin`.
- The backend synchronises the Markdown files under [news](src/data/news/) into
  the SQLite database on every start, preserving their numeric IDs. Seed files
  are the source for seeded content (editing/deleting a file changes it on the
  next restart); articles created in `/admin` use UUID IDs and live only in the
  database.
- [newsData.ts](src/data/newsData.ts) contains the seed loader and type adapter,
  not another copy of the article bodies. News uses `markdown-it` and `interweave`.
- Contact submissions are saved to the private administrator inbox. They do not
  send email notifications; the club must assign someone to monitor and answer them.
- Shared range information, training times, addresses and document references are
  maintained in [clubData.ts](src/data/clubData.ts).
- Club PDFs are bundled under [documents](public/documents/), with their provenance
  and external-link checks recorded in [LINK_REVIEW.md](docs/LINK_REVIEW.md).
- [info](info/) contains imported reference material, not live page content.
  Keep changes to reviewed runtime content explicit.

## Agent skills

The [skills](skills/) directory holds fifteen optional design-engineering
playbooks for UI, motion, and mobile work: Emil Kowalski's animation and design
philosophy (`animate`, `review-animations`, `improve-animations`,
`find-animation-opportunities`, `animation-performance`, `animation-vocabulary`,
`apple-design`, `mobile-native`, `break-ui`, `prototype`, `pick-ui-library`,
`ask-sonner`, `emil-design-eng`) plus `animate-expo` and `write-swift`, which do
not apply to this React web project.

They are advisory material for agents, not project conventions.
[docs/SKILLS.md](docs/SKILLS.md) is the index with one-line descriptions for
every skill — that is the entry point for any agent, regardless of tooling.

The skills follow the standard `SKILL.md` layout, so most harnesses find them
automatically:

| Harness | Path |
| --- | --- |
| OpenCode | [opencode.jsonc](opencode.jsonc) → `"skills": ["./skills"]` |
| Claude Code | `.claude/skills` (symlink to `skills/`) |
| Agents.md / generic | `.agents/skills` (symlink to `skills/`) |
| Any other agent | `skills/<id>/SKILL.md` |

Each skill lives in `skills/<id>/SKILL.md` with YAML frontmatter (`name`,
`description`) and optional companion files such as `RECIPES.md` or
`STANDARDS.md`. The skill ID is the directory name. Agents load one skill at a
time; `prototype`, `pick-ui-library`, and `review-animations` set
`disable-model-invocation: true` and are used only on explicit request.

The skills assume Tailwind and sometimes Framer Motion. This project uses
Ant Design and inline style objects instead, so translate their advice rather
than copying their code samples or adding dependencies. Task-to-skill routing
and the full caveats are documented in [AGENTS.md](AGENTS.md).

## Agent models

Agents here work in two tiers: a strong model for decisions and code, a free
model for reading and mechanical work. The setup is configured in
[opencode.jsonc](opencode.jsonc) — `explore` and `general` run on the free
DeepSeek Flash tier, `reviewer` (defined in
[.opencode/agents/reviewer.md](.opencode/agents/reviewer.md)) inherits the
strong session model, and `deep-worker` uses your own paid DeepSeek key.

Connect the key with one export before starting OpenCode:

```bash
export DEEPSEEK_API_KEY=sk-...   # https://platform.deepseek.com/api_keys
```

`/connect` → `deepseek` works as well. Everything except `deep-worker` runs
without a key. Costs, model IDs, escalation rules and IDE setups are in
[docs/MODELS.md](docs/MODELS.md).

## Contribution standards

Human contributors and agents work to the same rules, which are spelled out in
[AGENTS.md](AGENTS.md):

- **SOLID** principles and **Clean Code** conventions — one concern per module,
  configuration over shared edits, pure and testable functions, German
  user-facing copy, no duplicated club facts.
- **Tests for everything that can regress.** A new feature gets a unit test
  where possible, a bug fix gets a regression test, and backend or visible UI
  behavior is covered in `test/integration/` or `e2e/`.
- **Pathfinder principle.** Findings that surface while working are fixed in the
  same pass when they are small and verifiable; larger ones are described and
  approved first.
- **Token discipline for agents.** Search with `grep`/`glob` before reading
  files, read ranges instead of whole files, and hand broad reconnaissance to a
  cheaper subagent so the stronger model spends its budget on the decisions.
  See "Working efficiently" in [AGENTS.md](AGENTS.md).

## Completion checklist

Updated on 2026-09-15. Checked tasks are implemented; unchecked tasks need external
information, editorial approval, or a deployment decision. Existing unrelated
working-tree changes were preserved.

### Scope

- [x] React website with Ant Design.
- [x] Markdown news previews and detail pages.
- [x] Nontechnical article editing with formatting controls and live preview.
- [x] Authenticated admin center with drafts, publishing, image uploads and inbox.
- [x] Persistent SQLite storage, session authentication, request validation and tests.
- [x] Provide a single-server Docker/Caddy deployment with persistent data and SPA routes.
- [ ] Select the actual hosting server/domain and publish after content approval.

### Components and layout

- [x] Tables, input fields, text areas, text variants, radio buttons, checkboxes, dropdowns and text links.
- [x] Headings h1–h6; remove the extra line break after every heading.
- [x] Basic `BigBox`, `MediumBox`, and `SmallBox` wrappers.
- [x] Full/Half/Quarter/Eighth/Sixteenth width boxes through `SizingBox width={1|2|4|8|16}`.
- [x] Full/Half/Quarter/Eighth/Sixteenth height boxes through `SizingBox height={1|2|4|8|16}`. Percentage heights require a parent with a defined height.
- [x] Demonstrate all original base controls, box variants, fractional sizes and h6 on `/testing`; omit this showcase from standard production builds.
- [x] Fix secondary-button color overrides and verify hover and keyboard-focus states.
- [x] Render clickable destinations in `LinkTable`.
- [x] Make internal shared links and navigation use React Router.
- [x] Fix the production logo asset URLs and the document's German language declaration.
- [x] Correct the text-area style prop exposed by a clean dependency installation.

### Pages

- [x] Home, About/Vereinsgeschichte and Ehrenmitglieder.
- [x] Kontakt, working Kontaktformular and Standort/Anfahrt.
- [x] News list, detail pages and useful recovery for unknown article IDs.
- [x] Downloads, Impressum, Datenschutz and Nutzungsbedingungen.
- [x] Standrekorde, Rundenwettkämpfe/Veranstaltungen and Erfolge.
- [x] Links, FAQ, Gesetze and Schießstände.
- [x] Jugend and Daniel Khan-Leonhard.
- [x] Administrator editor and contact inbox.
- [x] General not-found page with recovery links.

### Duplication and visitor experience

- [x] Centralize training information; show one shared timetable and link to it from related pages.
- [x] Remove conflicting youth-training end times from repeated page copy; explicitly ask visitors to confirm the end time until the club verifies it.
- [x] Centralize range counts/descriptions and remove the duplicated full list from Home.
- [x] Centralize guest-registration instructions and document links, with an actionable inquiry form.
- [x] Consolidate address, directions and map on Standort; make Anfahrt discoverable in navigation.
- [x] Use article event dates for upcoming/archive views instead of copying celebration details into Veranstaltungen.
- [x] Remove repeated WBK/Sachkunde guidance from FAQ; link to the maintained official-source page.
- [x] Remove the second handwritten news-body store; import Markdown into persistent content once.
- [x] Label placeholder/unverified articles with editorial notes without inventing results or meeting details.
- [x] Label historical RWK results and separate past events from upcoming events.
- [x] Give desktop and mobile navigation the same destinations, with active-page indication and clearer link labels.
- [x] Replace inaccessible FAQ click targets with native keyboard-operable disclosure controls.
- [x] Add modal mobile navigation with focus wrapping, Escape dismissal, focus restoration and background scroll locking.
- [x] Add main/navigation landmarks, a skip link, accessible logo text and route focus handling.
- [x] Protect unsaved administrator edits when navigating away; reject stale concurrent updates.
- [x] Fix the light-card contrast issue by removing the duplicated problematic card layouts.
- [x] Unify Markdown rendering for articles, previews and long-form imported content; remove invalid table whitespace.
- [x] Remove redundant heading spacing, correct typography selectors and constrain grids to their containers.
- [x] Replace the incorrect association directory with verified official destinations.
- [x] Migrate the club PDFs locally and check external destinations; see the link-review record.
- [x] Align privacy copy with the actual contact inbox, administrator session and opt-in map behavior; final legal approval remains below.

### Validation

Validation completed: build and lint passed, all 15 Vitest tests and 10 Chromium
browser tests passed, and the Docker image built and passed a local startup smoke
test. Compose configuration validation also passed. The existing bundle-size
warning and Node SQLite experimental-feature notice remain nonblocking.

- [x] Build and lint the application.
- [x] Add meaningful tests beyond the original placeholder: news import, Markdown safety/table rendering, event boundaries, authentication, persistence, draft visibility, stale updates, uploads and private contact messages.
- [x] Exercise public routes at 320, 375, 768, 1024 and 1440px, checking overflow and browser errors.
- [x] Exercise keyboard FAQ/menu navigation, route recovery, contact submission, admin publishing with images and secondary-button states in Chromium.
- [ ] Complete public deployment verification after a real host/domain is selected.

## Remaining decisions and editorial work

These remain open by request; no contact details, training times, results or legal
approval have been invented.

- [ ] Supply approved email/telephone and register details for Kontakt/Impressum.
- [ ] Confirm youth-training end time, the other training times, and the opening-hours PDF.
- [ ] Verify the general-meeting chronology and fill in missing meeting details/results. Articles 168, 169, 171 and 172 carry review notes until this is done.
- [ ] Review imported club history, board/record information, expired closure notices and the migrated PDFs.
- [ ] Approve the final legal/privacy text, hosting information, processing grounds and retention periods.
- [ ] Assign responsibility for checking the administrator inbox and answering messages; configure email notifications only if the club wants them.
- [ ] Select the server/domain, configure production credentials and backups, and validate HTTPS/direct route access on that host.
- [ ] Consider further route splitting if the remaining Vite bundle-size warning becomes a performance concern. The admin editor and component showcase already load separately.
