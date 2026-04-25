Develop and close a Linear issue by its ID.

The issue ID is provided as an argument (e.g. `LES-40`): $ARGUMENTS

## Steps

1. Use `mcp__linear-server__get_issue` with the provided ID to fetch the full issue details (title, description, status).

2. Read the description carefully to understand exactly what needs to be changed and in which files.

3. Read the relevant files before editing them.

4. Implement the changes described in the issue. Follow the project's design system rules in `DESIGN.md` and coding conventions in `CLAUDE.md`.

5. Run `bun typecheck` and `bun lint` to verify no errors were introduced.

6. Use `mcp__linear-server__save_issue` to mark the issue as `Done`:
   ```
   id: <issue-id>
   team: Lesteban
   state: Done
   ```

7. Report back: what was changed and confirm the issue is closed.

## Rules

- Never modify files unrelated to the issue scope.
- If the issue is ambiguous or too broad to implement safely, ask the user to clarify before touching any code.
- Do not close the issue if `bun typecheck` or `bun lint` fail.
