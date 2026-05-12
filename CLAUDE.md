# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev           # Dev server with Turbopack
bun build         # Production build
bun lint          # ESLint
bun lint:fix      # ESLint with auto-fix
bun format        # Prettier (write)
bun typecheck     # tsc --noEmit

bun test                    # Run unit tests (scoped to lib/ middleware.test.ts tests/)
bun test lib/blog.test.ts   # Run a single test file
bun test --watch            # Watch mode
bun test:e2e                # Run Playwright E2E tests (separate from unit tests)

bun create:post             # Interactive CLI to create a new blog post
```

## Branch Naming

Always name branches using the format: `les/<type>-<short-description>`

Examples:
- `les/fix-e2e-ci-tests`
- `les/feat-blog-rss-feed`
- `les/refac-header-language-toggle`

Never use `claude/` prefixes or generic names like `develop-les-64`.

## Test Infrastructure

Unit tests (`bun test`) run **only** `lib/`, `middleware.test.ts`, and `tests/`. Never run `bun test` without path arguments — it will pick up Playwright `.spec.ts` files from `e2e/` and fail.

E2E tests (`bun test:e2e` / `bunx playwright test`) run separately. The `e2e/` directory is excluded from `tsconfig.json` to avoid type errors.

### E2E conventions

- The header renders `<h1>Luis Esteban</h1>` as the site logo. Use `page.locator('main h1')` to target content headings, never bare `locator('h1')`.
- `LanguageToggle` is a `<Button>`, not a link. Use `page.getByRole('button', { name: 'ES' })` or `{ name: 'EN' }` depending on the current locale.
- shadcn `Badge` does not emit a literal `badge` CSS class. Add `data-testid="date-badge"` (or equivalent) to Badge elements you need to target in tests.
- Never use `waitUntil: 'commit'` when testing redirected URLs — Playwright resolves before the redirect completes. Omit it to get the final URL.
- Test i18n redirects against paths that actually exist in the app (e.g. `/blog` → `/en/blog`), not against non-existent paths like `/about`.

## Available Skills

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `/commit` | When committing changes | Conventional commit with project-specific scopes |
| `/blog-post` | When creating a new post | Scaffolds bilingual markdown files with correct frontmatter |
| `/component` | When creating a new component | Generates components following design system constraints |

## Design System

All UI work must follow the design system documented in [`DESIGN.md`](./DESIGN.md). Key rules:

- **Colors:** Use only the CSS tokens defined in `app/globals.css` (`--primary`, `--secondary`, `--accent`, `--destructive`, etc.). Do not hardcode hex values — map to Tailwind utilities (`text-primary`, `bg-secondary`, `border-border`, etc.). Full palette and roles are in `DESIGN.md §2`.
- **Typography:** `font-sans` (DM Sans) for body, `font-heading` (Space Grotesk) for headings, `font-mono` (Geist Mono) for code. Scale, weights, and tracking rules are in `DESIGN.md §3`.
- **Spacing & radius:** Follow the radius scale (`rounded-sm` → `rounded-xl`, up to full pills). Base spacing unit is 8px. Details in `DESIGN.md §5`.
- **Dark mode:** All new components must work in both light and dark mode. Tokens switch automatically via the `.dark` class — avoid hardcoding light-only or dark-only colors.
- **Depth:** Prefer tonal contrast and border containment over shadows. See elevation levels in `DESIGN.md §6`.

## Architecture

**Next.js 15 App Router portfolio site** with bilingual support. No database — all content is file-based.

### Internationalization

All pages live under `app/[lang]/`. Middleware (`middleware.ts`) detects the `Accept-Language` header and 301-redirects bare paths (e.g. `/about`) to `/en/about` or `/es/about`. Supported locales: `en`, `es`.

Translation strings come from `app/[lang]/dictionaries/{en,es}.json` loaded via `getDictionary(locale)` (server) or `getClientDictionary(locale)` (client). When adding a new UI string, add it to both JSON files.

### Blog System

Posts are Markdown files in `content/blog/en/` and `content/blog/es/`. Frontmatter is parsed with `gray-matter`; Markdown is converted to HTML via `remark` → `rehype` with syntax highlighting. All blog logic lives in `lib/blog.ts` — three main functions: `getAllPosts(lang)`, `getPostByUrl(url, lang)`, `getAllPostUrls(lang)`.

The URL slug of a post must be identical across languages for the language switcher to work correctly.

### Component Organization

- `components/ui/` — shadcn/ui primitives (new-york style, Radix-based)
- `components/cards/` — composed card components (blog, project, experience, contact)
- `components/` root — page-section feature components (hero, experience, skills, projects, contact)

### Styling

Tailwind CSS v4 with CSS custom properties defined in `app/globals.css` using the OKLCH color space. The design token names (`--primary`, `--secondary`, `--accent`, etc.) map directly to Tailwind utilities. Dark mode is toggled via the `.dark` class (next-themes).

### Import Order

Prettier enforces this order via `@trivago/prettier-plugin-sort-imports`:
1. React
2. Next.js
3. `next-themes`
4. `lucide-react`
5. `@/components/...`
6. `@/lib/...`
