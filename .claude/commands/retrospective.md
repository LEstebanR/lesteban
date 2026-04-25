Review the current conversation and update CLAUDE.md and/or any command files in .claude/commands/ to reflect what was learned, decided, or established during this session.

## What to look for

Scan the conversation for:

- **New conventions adopted** — patterns used consistently that aren't documented yet (e.g. a new import order, a new token name, a testing pattern).
- **New tools or dependencies added** — packages installed, config files created (e.g. `bunfig.toml`, new dev deps).
- **New commands created or modified** — if a `/command` was added or its behavior was clarified through use.
- **Decisions about project structure** — where files go, naming rules, what belongs in which directory.
- **Rules that were applied but aren't written down** — things you had to infer that should be explicit for the next session.
- **Things that should NOT be added** — corrections made mid-session ("no, don't do X") that should become a documented rule.

Do NOT add:
- Task-specific details (what issues were fixed today, specific commit messages, PR numbers).
- Ephemeral state (current branch, current Linear milestone).
- Anything already documented in CLAUDE.md or the command files.

## Steps

1. Read the full conversation from the beginning.

2. Read the current versions of:
   - `CLAUDE.md`
   - All files in `.claude/commands/`

3. For each finding from step 1, decide where it belongs:
   - **CLAUDE.md** — project-wide conventions, architecture decisions, tooling setup, test infrastructure.
   - **A specific command file** — a refinement to how that command should behave based on actual usage.
   - **A new command file** — only if a new repeatable workflow was established.

4. Make the minimal edits needed. Prefer adding a bullet or a short paragraph to an existing section over restructuring the whole file.

5. Report back: list each file touched, what was added/changed, and why.

## Rules

- Keep CLAUDE.md and commands concise — don't pad them with redundant explanation.
- Write in imperative style ("Use X", "Run Y", "Never Z").
- If nothing meaningful was learned that isn't already documented, say so and make no changes.
