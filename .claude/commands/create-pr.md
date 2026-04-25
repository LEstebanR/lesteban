Create a pull request for the current branch with all its changes relative to main.

## Steps

1. Run `git status` to confirm you are NOT on `main`. If on `main`, stop and ask the user to switch to a feature branch.

2. Run the following in parallel:
   - `git log main...HEAD --oneline` — list all commits on the branch
   - `git diff main...HEAD --stat` — summarize changed files
   - `git diff main...HEAD` — full diff for understanding scope

3. Analyze all commits and changes to draft:
   - **Title** — short (≤70 chars), sentence-case, no period. Use the same type/scope vocabulary as `/commit` (`feat`, `fix`, `style`, `refac`, `test`, `docs`, `chore`).
   - **Summary** — 2–4 bullets covering what changed and why. Be specific about files and behavior.
   - **Test plan** — bulleted checklist of what to verify manually or automatically.

4. Check if there are Linear issue IDs referenced in commit messages or branch names (e.g. `LES-37`). If found, mention them in the PR body.

5. Push the branch if it has no upstream yet:
   ```bash
   git push -u origin HEAD
   ```

6. Create the PR with `gh pr create`:
   ```bash
   gh pr create --title "<title>" --body "$(cat <<'EOF'
   ## Summary
   - ...

   ## Linear issues
   - Closes LES-XX (if applicable)

   ## Test plan
   - [ ] ...

   🤖 Generated with [Claude Code](https://claude.com/claude-code)
   EOF
   )"
   ```

7. Return the PR URL.

## Rules

- Base branch is always `main`.
- Never force-push or amend commits as part of this flow.
- If the diff is empty (branch is identical to main), stop and tell the user there is nothing to open a PR for.
