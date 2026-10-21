# Agent models

How agents are wired in this repository, which model handles which job, and how
to connect your own DeepSeek API key.

The short version: **a strong model decides, a cheap model reads.** The
configuration lives in [opencode.jsonc](../opencode.jsonc); the rules live in
[AGENTS.md](../AGENTS.md) → "Model roles".

## The tiers

| Role | Model | Cost | Task |
| --- | --- | --- | --- |
| Main session | your strongest model | paid or subscription | design, implementation, decisions, diff review, final summary |
| `explore` subagent | `opencode/deepseek-v4.1-flash-free` | free | greps, file inventories, call-site searches |
| `general` subagent | `opencode/deepseek-v4.1-flash-free` | free | mechanical work with a verifiable deliverable (unit tests, bulk renames) |
| `reviewer` subagent | inherits the session model | as the main model | read-only diff review |
| `deep-worker` subagent | `deepseek/deepseek-v4-pro` | paid | larger mechanical implementation on the paid tier |

The free Flash tier is enough for most of this repository. `tsc`, ESLint,
Vitest and Playwright verify the result, so a weaker model can work safely on
scoped tasks. The strong model is reserved for the admin editor's concurrency
logic, Ant Design 6 API details, multi-file refactors, and final reviews.

Where the agents live:

| Agent | Definition | Model |
| --- | --- | --- |
| `explore`, `general`, `deep-worker` | [opencode.jsonc](../opencode.jsonc) → `agents` | pinned there |
| `reviewer` | [.opencode/agents/reviewer.md](../.opencode/agents/reviewer.md) | inherits the session model |

The reviewer lives in its own file because its permission rules use the
OpenCode V2 format, which V1 rejects inside a JSON config file. See
[OpenCode V1 and V2](#opencode-v1-and-v2).

## Connecting your DeepSeek key

The `deepseek` provider in `opencode.jsonc` reads the credential from the
environment, so a single export is enough:

```bash
export DEEPSEEK_API_KEY=sk-...   # https://platform.deepseek.com/api_keys
opencode
```

Put the export in your shell profile if you want it to persist. Do **not**
commit the key and do not add it to the repository `.env` — that file belongs
to the Node backend (`SITE_ORIGIN`, `PORT`, `DATA_DIR`), and OpenCode reads
the key from the shell that starts it.

The interactive route works too and stores the credential for the machine:

```text
/connect     # choose "deepseek", paste the key
/models      # deepseek/deepseek-flash, deepseek/deepseek-v4-pro
```

Both routes lead to the same model IDs, because `opencode.jsonc` defines the
provider explicitly:

| Model ID | Notes |
| --- | --- |
| `deepseek/deepseek-flash` | served by DeepSeek-V4.1-Flash; fast and cheap |
| `deepseek/deepseek-v4-pro` | the stronger model; use for bulk implementation |

The base URL is `https://api.deepseek.com`. DeepSeek also exposes an
Anthropic-compatible endpoint at `https://api.deepseek.com/anthropic` for
tools that expect the Anthropic API shape.

Prices are listed on
[api-docs.deepseek.com/quick_start/pricing](https://api-docs.deepseek.com/quick_start/pricing).
The retired legacy names (`deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`)
no longer serve a model.

## OpenCode V1 and V2

Two OpenCode versions can read this repository:

| Version | Where | Notes |
| --- | --- | --- |
| V2 (`2.1.2`) | the ACP agent inside IntelliJ IDEA, `~/.cache/JetBrains/acp-agents/opencode-v2/` | the harness this repository was tuned for |
| V1 (`1.19.3`) | the `opencode` command in `PATH` | still works |

The configuration is written so both load it without errors:

- `opencode.jsonc` carries the provider and the model pins. It lists
  `npm`/`options` (V1) and `package`/`settings` (V2) side by side — same
  values, so either version talks to `https://api.deepseek.com`.
- The reviewer's permission rules use the V2 `permissions` array. V1 rejects
  that array in JSON config, so the reviewer lives in
  `.opencode/agents/reviewer.md`, where V1 reads both forms without
  complaining: `permission` for V1, `permissions` for V2.
- Verified: V2 enforces `permissions` and ignores the legacy `permission`
  object; V1 enforces `permission` and ignores the array. Each version
  therefore gets the read-only reviewer it understands.

Check what a version resolved:

```bash
opencode models                      # V1: available models
opencode debug agents                # V2: agents, their mode and model
opencode debug config                # V2: configuration sources
```

## Working without a key

Nothing above requires a key. The free tier covers the whole pipeline:

- `explore` and `general` run on `opencode/deepseek-v4.1-flash-free`, which
  has the reasoning variants `low`, `high` and `max`. The variant suffix is
  OpenCode V2 syntax (`opencode/deepseek-v4.1-flash-free#low`); V1 cannot
  resolve it, so the pinned ids stay plain.
- The `reviewer` inherits whatever model the main session uses.
- `deep-worker` is the only agent that needs a DeepSeek key. Without one it
  simply is not usable — that is intentional, it is an escalation path, not a
  default.

Other free models in the OpenCode catalog (`opencode/glm-5.3-flash-free`,
`opencode/minimax-m3.1-flash-free`, `opencode/mimo-v2.6-flash-free`, …) can
replace the Flash tier by editing one line in `opencode.jsonc`.

## Switching the pinned models

Open the `agents` block in [opencode.jsonc](../opencode.jsonc) and change the
`model` string. The format is `provider/model`, plus `#variant` on
OpenCode V2:

```jsonc
"explore": {
  "model": "opencode/deepseek-v4.1-flash-free"   // free, works in V1 and V2
  // "model": "opencode/deepseek-v4.1-flash-free#low"  // V2 only, less reasoning
  // "model": "deepseek/deepseek-flash"                // paid, needs a key
}
```

Rules of thumb:

- Keep `explore` on the cheapest model that returns usable file paths.
- Keep `general` one step stronger than `explore`.
- Leave `reviewer` without a `model` key so it inherits the strong session
  model.
- Restart OpenCode after changing the file; the config is read at startup.

## Cost control

- Explore before deciding. A `grep` in a free subagent is far cheaper than
  the same `read` in the main session.
- Ask for file paths with line numbers, not pasted file contents. The
  subagent's report is the only thing that enters the main context.
- Run independent explorations in parallel instead of sequentially.
- Escalate once. If the cheap tier produced a wrong answer twice, do the task
  in the main session or hand it to `deep-worker` rather than looping.
- `AGENTS.md` is loaded into every session. Keep it a contract, not a
  manual, and never re-read it.

## IDEs and other harnesses

The rules in `AGENTS.md` and the playbooks in `skills/` are plain files, so
they work outside OpenCode as well:

- **Zed, or any ACP client** — `opencode acp` runs OpenCode as an
  [Agent Client Protocol](https://agentclientprotocol.com) agent. Configuration
  example:

  ```json title="~/.config/zed/settings.json"
  {
    "agent_servers": {
      "OpenCode": {
        "command": "opencode",
        "args": ["acp"]
      }
    }
  }
  ```

- **IntelliJ IDEA** — the IDE's own AI Assistant ignores `skills/` and needs
  the rules pasted into a rules file. Two workable setups:
  - JetBrains AI Assistant → *Settings | Tools | AI Assistant | Providers & API
    keys* → add an **OpenAI-compatible** provider with the DeepSeek base URL
    `https://api.deepseek.com/v1`, the API key, and assign the model manually
    under *Models Assignment* (compatible models are not auto-assigned).
  - Continue (the JetBrains extension) with an OpenAI-compatible provider:

    ```yaml title="~/.continue/config.yaml"
    models:
      - name: DeepSeek
        provider: openai
        model: deepseek-v4-pro
        apiBase: https://api.deepseek.com/v1
        apiKey: $DEEPSEEK_API_KEY
    ```

  In both cases point the agent at [AGENTS.md](../AGENTS.md) and the skills at
  [docs/SKILLS.md](SKILLS.md).

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| `deepseek/...` models missing from `/models` | `DEEPSEEK_API_KEY` is not visible to the OpenCode process. Export it in the same shell that starts OpenCode, or use `/connect`. |
| The `deep-worker` agent fails to start | No DeepSeek key in the environment. It is optional — the other agents do not need one. |
| A subagent uses a model you did not pin | The parent session model wins when an agent has no `model` of its own. Check the `agents` block in `opencode.jsonc`. |
| `Configuration is invalid … V2 permissions are not supported by OpenCode V1` | A V2 `permissions` array ended up in `opencode.jsonc`. Keep it in `.opencode/agents/reviewer.md` only. |
| The reviewer can edit files | V2 enforces `permissions`, V1 enforces `permission`. Both forms are in the agent file; make sure neither was dropped. |
| Skills are not found | OpenCode needs `"skills": ["./skills"]` in `opencode.jsonc`; other harnesses need the `.claude/skills` or `.agents/skills` symlinks. See [docs/SKILLS.md](SKILLS.md). |
