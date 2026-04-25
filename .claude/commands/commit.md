Create a git commit for the lesteban portfolio project following conventional commit format.

## Format

```
<type>(<scope>): <subject>
```

## Rules

- **type**: `feat`, `fix`, `refac`, `style`, `chore`, `docs`, `test`
- **scope**: `portfolio`, `blog`, `i18n`, `ui`, `seo`, `config`, `ci`, `deps`
- **subject**: sentence-case, no period at end, max 72 chars total header
- Body only if the change needs explanation beyond the title; blank line before body
- **Never commit directly to `main`** — only commit on feature branches

## Steps

1. Run `git status` to confirm the current branch is NOT `main`. If on `main`, stop and ask the user to switch to a feature branch.

2. Run `git diff --staged` to see what's staged. If nothing is staged, run `git status` and ask the user what to include.

3. Analyze the changes and determine the most appropriate type and scope.

4. Show the commit message to the user and confirm before running `git commit`.

5. Run `git commit -m "<message>"`.

## Examples

```
feat(blog): Add first marathon post in en and es
fix(i18n): Correct missing translation key in es dictionary
refac(ui): Extract BlogCard image into standalone component
style(portfolio): Align skills grid spacing to 8px base unit
chore(deps): Bump next to 15.3.1
docs(config): Update CLAUDE.md with bun commands
seo(portfolio): Add canonical URLs to blog post pages
```
