Develop and close a Linear issue by its ID.

The issue ID is provided as an argument (e.g. `LES-40`): $ARGUMENTS

## Steps

1. Use `mcp__linear-server__get_issue` with the provided ID to fetch the full issue details (title, description, status).

2. Create a branch following the project naming convention: `les/<type>-<short-description>` (e.g. `les/feat-blog-rss-feed`, `les/fix-header-mobile-menu`). Derive the type from the issue type and the description from the issue title — keep it short (2–4 words, kebab-case).

3. Read the description carefully to understand exactly what needs to be changed and in which files.

4. Read the relevant files before editing them.

5. Implement the changes described in the issue. Follow the project's design system rules in `DESIGN.md` and coding conventions in `CLAUDE.md`.

6. Run `bun typecheck` and `bun lint` to verify no errors were introduced.

7. Use `mcp__linear-server__save_issue` to mark the issue as `Done`:
   ```
   id: <issue-id>
   team: Lesteban
   state: Done
   ```

8. Report back: what was changed and confirm the issue is closed.

## Rules

- Never modify files unrelated to the issue scope.
- If the issue is ambiguous or too broad to implement safely, ask the user to clarify before touching any code.
- Do not close the issue if `bun typecheck` or `bun lint` fail.
