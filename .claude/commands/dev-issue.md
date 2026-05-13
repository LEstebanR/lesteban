Full development flow for a Linear issue: fetch details, branch from develop, implement, commit, push, and open a PR.

The issue ID is provided as an argument (e.g. `LES-64`): $ARGUMENTS

If no argument is given, ask the user for the issue ID before proceeding.

## Steps

### 1. Fetch the issue

Use `mcp__linear-server__get_issue` with the provided ID to fetch the full issue details (title, description, type, status).

### 2. Update develop

```bash
git checkout develop
git pull origin develop
```

### 3. Create a branch

Follow the project naming convention: `les/<type>-<short-description>` (e.g. `les/feat-blog-rss-feed`, `les/fix-header-mobile-menu`).
Derive the type from the issue type and the description from the issue title — keep it short (2–4 words, kebab-case).

```bash
git checkout -b les/<type>-<short-description>
```

### 4. Implement the issue

- Read the issue description carefully to understand exactly what needs to change and in which files.
- Read the relevant files before editing them.
- Implement the changes. Follow the design system rules in `DESIGN.md` and coding conventions in `CLAUDE.md`.
- Never modify files outside the issue scope.
- If the issue is ambiguous or too broad to implement safely, ask the user to clarify before touching any code.

### 5. Verify

Run both checks in parallel:

```bash
bun typecheck
bun lint
```

Do not proceed if either fails — fix the errors first.

### 6. Commit

Stage only the files changed for this issue and create a conventional commit:

```
<type>(<scope>): <subject>   (≤72 chars, sentence-case, no period)

Closes LES-XX
```

Types: `feat`, `fix`, `refac`, `style`, `chore`, `docs`, `test`, `perf`
Scopes: `portfolio`, `blog`, `i18n`, `ui`, `seo`, `config`, `ci`, `deps`

```bash
git add <relevant files>
git commit -m "$(cat <<'EOF'
<type>(<scope>): <subject>

Closes LES-XX
EOF
)"
```

### 7. Push

```bash
git push -u origin HEAD
```

### 8. Open a PR targeting `develop`

Use `gh pr create` with `--base develop`:

```bash
gh pr create --base develop --title "<type>(<scope>): <subject>" --body "$(cat <<'EOF'
## Context

<1–3 sentences explaining WHY this change is needed.>

## Changes

- **`path/to/file.tsx`** — what changed and the concrete effect on behavior/UI

## Linear issues

- Closes LES-XX

## Test plan

- [ ] <specific UI state or user flow to verify manually>
- [ ] `bun typecheck` passes
- [ ] `bun lint` passes

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Return the PR URL.

### 9. Mark the issue as Done in Linear

Use `mcp__linear-server__save_issue`:

```
id: <issue-id>
team: Lesteban
state: Done
```

### 10. Report back

Summarize: what was implemented, the branch name, and the PR URL.

## Rules

- If the issue status is already `Done`, report that and stop — do not re-implement.
- Always start from an up-to-date `develop` — never branch from a stale local state.
- Never commit directly to `develop` or `main`.
- Do not mark the issue as Done if `bun typecheck` or `bun lint` fail.
- PR base branch is always `develop`, never `main`.
- Never force-push or amend commits as part of this flow.
