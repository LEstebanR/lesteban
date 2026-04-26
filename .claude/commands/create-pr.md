Create a pull request for the current branch with all its changes relative to main.

## Steps

1. Run `git status` to confirm you are NOT on `main`. If on `main`, stop and ask the user to switch to a feature branch.

2. Run the following in parallel:
   - `git log main...HEAD --oneline` — list all commits on the branch
   - `git diff main...HEAD --stat` — summarize changed files
   - `git diff main...HEAD` — full diff for understanding scope

3. Analyze all commits and changes to draft the PR body (see **PR structure** below).

4. Push the branch if it has no upstream yet:
   ```bash
   git push -u origin HEAD
   ```

5. Create the PR with `gh pr create`:
   ```bash
   gh pr create --title "<title>" --body "$(cat <<'EOF'
   <body>
   EOF
   )"
   ```

6. Return the PR URL.

---

## PR structure

### Title
- ≤70 characters, sentence-case, no trailing period
- Format: `type(scope): short description`
- Types: `feat`, `fix`, `style`, `refactor`, `test`, `docs`, `chore`
- Scope: the affected area (e.g. `blog`, `skills`, `experience`, `i18n`, `auth`)
- Example: `fix(skills): correct malformed Tailwind hover classes on icons`

### Body template

```
## Context

<1–3 sentences explaining WHY this change is needed. What problem does it solve?
Reference the user story, bug report, or product requirement that motivated it.>

## Changes

- **`path/to/file.tsx`** — what changed and the concrete effect on behavior/UI
- **`path/to/file.ts`** — …
- (one bullet per meaningfully changed file or logical group)

## Linear issues

- Closes LES-XX
(omit section if no Linear issues are referenced in commits or branch name)

## Test plan

- [ ] <specific UI state or user flow to verify manually>
- [ ] <edge case or regression to check>
- [ ] `bun typecheck` passes
- [ ] `bun lint` passes
- [ ] (add `bun test` if tests were added or modified)

## Notes

<Optional: breaking changes, follow-up work, known limitations, deploy considerations.
Omit this section if there is nothing worth flagging.>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

### Description quality rules

- **Context** must answer *why*, not restate *what* — the diff already shows what changed.
- **Changes** bullets must name the file and describe the behavioral or visual effect, not just "updated X".
- **Test plan** items must be specific enough that a reviewer can follow them step by step.
- Omit any section that adds no value (e.g. no Notes if there's nothing notable).
- Never use filler phrases like "various improvements" or "minor fixes".

---

## Rules

- Base branch is always `main`.
- Never force-push or amend commits as part of this flow.
- If the diff is empty (branch is identical to main), stop and tell the user there is nothing to open a PR for.
- Scan commit messages and the branch name for Linear issue IDs (pattern `[A-Z]+-\d+`). Include all found IDs in the **Linear issues** section.
