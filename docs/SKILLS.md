# Skills index

This folder contains **15 optional playbooks** for UI, motion, and mobile
work. They are advisory material for agents and designers — **not** project
conventions. Nothing here is required to build or run the website.

## How to use these skills from any agent

The skills follow the standard `SKILL.md` layout, so most agent harnesses
pick them up automatically. If yours does not, use the two steps below — no
tooling required.

1. **Pick a skill** from the table below (the *ID* is the directory name).
2. **Read `skills/<id>/SKILL.md`.** It is the entry point and states what
   additional files it needs. Companion files (`RECIPES.md`, `STANDARDS.md`,
   `API.md`, `AUDIT.md`, `PLAN-TEMPLATE.md`, `CATALOG.md`, `PICKER.md`) are not
   loaded automatically — read them only when the skill points you there.

Load **one** skill per task. The files are 100–700 lines each; reading all of
them wastes context and dilutes the guidance.

### Automatic discovery paths

All paths are relative to the repository root.

| Harness | Path | Status |
| --- | --- | --- |
| OpenCode | `opencode.jsonc` → `"skills": ["./skills"]` | registered |
| Claude Code | `.claude/skills` | symlink to `skills/` |
| Agents.md / generic | `.agents/skills` | symlink to `skills/` |
| Anything else | `skills/<id>/SKILL.md` | read the file directly |

The `.claude` and `.agents` entries are relative symlinks. On a file system
without symlink support, copy the folder instead:
`cp -r skills .claude/skills`.

### Frontmatter

Each `SKILL.md` starts with YAML frontmatter:

- `name` — display label.
- `description` — when the skill applies; agents use it to route a request.
- `disable-model-invocation: true` — the skill is **opt-in**: it is hidden from
  automatic selection and used only when explicitly requested. Three skills
  carry this flag: `prototype`, `pick-ui-library`, `review-animations`.

## The skills

| ID | Use it for | Companion files | Opt-in |
| --- | --- | --- | --- |
| `animate` | Building an animation or transition from scratch; writes the implementation. | `RECIPES.md` | no |
| `review-animations` | Reviewing motion in a diff against a high craft bar. | `STANDARDS.md` | yes |
| `improve-animations` | Auditing motion across a codebase and producing prioritized, self-contained fix plans. Read-only. | `AUDIT.md`, `PLAN-TEMPLATE.md` | no |
| `find-animation-opportunities` | Finding places that should animate — and rejecting those that should not. Read-only. | — | no |
| `animation-performance` | Diagnosing dropped frames: layout/paint/composite pipeline, `will-change`, React re-renders, blur cost. | — | no |
| `animation-vocabulary` | Naming an unfamiliar motion effect ("the bouncy popover" → Pop in). | — | no |
| `apple-design` | Apple-style gesture-driven UI, springs, momentum, sheets, depth, reduced motion. | — | no |
| `mobile-native` | Making a web app feel native on a phone: viewport, tap delay, safe areas, scroll behavior, PWA basics. | — | no |
| `break-ui` | Stress-testing a screen with worst-case data (long names, missing fields, huge counts) and reporting what breaks. | `CATALOG.md` | no |
| `prototype` | Building several genuinely different UI variants behind a picker to choose from. | `PICKER.md` | yes |
| `pick-ui-library` | Choosing a library for a frontend need from a curated, opinionated list. | — | yes |
| `ask-sonner` | Working with Sonner toasts: setup, promise/loading toasts, styling, troubleshooting. | `API.md` | no |
| `emil-design-eng` | General UI polish, component design, animation philosophy, and the invisible details. | — | no |
| `animate-expo` | Animations in React Native / Expo (Reanimated, Gesture Handler, haptics). | `RECIPES.md` | no |
| `write-swift` | Modern Swift: value semantics, Swift 6 concurrency, generics, performance, Swift Testing. | — | no |

## Applying them in this repository

This project is a **React 19 + Ant Design 6 + TypeScript** website with inline
style objects in `src/style/`. The skills assume Tailwind and often Framer
Motion. Translate their advice onto the existing stack:

- Use Ant Design components and the style objects in `src/style/`; do not add
  Tailwind classes or new animation dependencies unless explicitly asked.
- `ask-sonner` describes Sonner, which is not a dependency here — the app uses
  Ant Design `message` / `notification`. Translate, do not install.
- `pick-ui-library` recommends third-party packages; Ant Design already covers
  the needs of this site, and new dependencies need explicit approval.
- Keep the club's visual identity (`src/config/colorConfig.ts`,
  `src/style/general/BaseTheme.ts`) and keep user-facing copy in German.
- Respect `prefers-reduced-motion`; prefer CSS transitions over per-frame React
  state updates.

`animate-expo` and `write-swift` do not apply: there is no React Native app and
no Swift code in this repository.

See [AGENTS.md](../AGENTS.md) for the full routing table and the engineering
standards every change has to meet.
