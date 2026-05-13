Perform a deep audit of the lesteban portfolio project, discover improvement opportunities across performance, UI/UX, DX, SEO/marketing, accessibility, and blog — then create prioritized Linear issues for everything found.

## What this skill does

1. Reads all relevant source files to understand the current state of the codebase
2. Evaluates each dimension (see below) against best practices and known gaps
3. Deduplicates against existing open Linear issues
4. Creates new Linear issues with proper priority, label, and description
5. Reports a final summary table

## Dimensions to audit

### Performance
- Image optimization: `next/image` usage, `priority` prop on above-the-fold images, missing `sizes` attributes
- Bundle: heavy client-side imports, missing dynamic imports for non-critical components
- Font loading: `font-display`, preconnect hints, subset usage
- Route caching: whether static pages use `export const revalidate`, ISR strategy
- Animation overhead: `useScrollAnimation` hook — does it use `IntersectionObserver` efficiently or trigger on every scroll event?
- Missing `loading="lazy"` on below-fold images outside next/image

### UI / UX
- Mobile layout: scan components for fixed pixel widths, horizontal overflow risks, tap target sizes (< 44px)
- Skeleton/loading states: are all async sections covered by `loading.tsx` or `<Skeleton>`?
- Empty states: blog with 0 posts, projects list empty, contact error state
- Scroll-to-top button visibility threshold and accessibility label
- Dark mode: any hardcoded light-only colors not using CSS tokens?
- Animation accessibility: missing `prefers-reduced-motion` guards
- Form validation feedback in contact section (if any form exists)
- Hero section: CTAs clear? Primary action obvious on first glance?
- Contrast ratios: any text using low-contrast token combinations

### Accessibility (a11y)
- Missing `aria-label` on icon-only buttons (theme toggle, language toggle, social links)
- Heading hierarchy: is there exactly one `<h1>` per page? Are h2→h6 used in order?
- Focus management: keyboard navigation through nav, skip-to-content link
- `<img>` alt text completeness (including decorative images needing `alt=""`)
- Link text: avoid "click here", "read more" without context
- Color-only information: badges, status indicators that rely solely on color

### SEO / Marketing
- `<title>` and `<meta description>` uniqueness per page/post
- Open Graph images: are `og:image` tags present and do they point to real assets?
- Twitter card completeness (`twitter:image`, `twitter:description`)
- Canonical URLs on blog posts (avoid duplicate content between `/en/` and `/es/`)
- Sitemap coverage: does `app/sitemap.ts` include all blog posts in both languages?
- RSS feed at `/feed.xml`: does it include all posts with full content and correct `pubDate`?
- JSON-LD: BreadcrumbList on blog post pages, BlogPosting schema on posts
- Internal linking: blog posts link to related content?
- Missing `rel="noopener noreferrer"` on external links

### Developer Experience (DX)
- Test coverage gaps: any exported function in `lib/` with no corresponding test?
- E2E coverage: critical flows not covered (blog post reading, language switch on blog, 404 page)
- Missing `data-testid` attributes on dynamic or interactive elements
- Type safety: any `any` types or non-null assertions (`!`) in non-test code?
- Stale or missing JSDoc on exported types in `types/`
- `lib/data.ts` hardcoded strings that should be constants or come from dictionaries
- Environment variable validation: no runtime check that required env vars are set
- CI: missing jobs (e.g., Lighthouse CI, bundle size check, test coverage report)

### Blog / Content
- Reading time estimate missing from post metadata
- Table of contents for long-form posts
- Code block copy button
- Syntax highlighting theme matches site dark/light mode
- Social share buttons on blog posts
- Author metadata (name, avatar) missing from post pages
- Pagination or "load more" for the blog list
- Search / filter by tag on blog list page
- Draft posts: is there a way to write drafts without publishing?

### Internationalization (i18n)
- Missing translation keys: any string added to `en.json` not yet in `es.json` (and vice versa)?
- Hardcoded English strings inside components (not going through dictionary)
- `hreflang` link tags in `<head>` for alternate language versions
- Language-aware `og:locale` meta tag
- Blog post URL slugs: are they truly identical across languages (required for language switcher)?

## Steps

### 1. Gather project state

Read the following files in parallel (use Read tool):

- `app/[lang]/layout.tsx`
- `app/[lang]/page.tsx`
- `app/[lang]/dictionaries.ts`
- `app/[lang]/dictionaries/en.json`
- `app/[lang]/dictionaries/es.json`
- `app/sitemap.ts`
- `app/feed.xml/route.ts`
- `app/robots.ts`
- `lib/blog.ts`
- `lib/data.ts`
- `lib/constants.ts`
- `components/hero.tsx`
- `components/ui/header.tsx`
- `components/ui/footer.tsx`
- `components/ui/theme-toggle.tsx`
- `components/ui/language-toggle.tsx`
- `components/ui/scroll-to-top.tsx`
- `hooks/use-scroll-animation.ts`
- `middleware.ts`
- `next.config.ts` (or `next.config.js` — check which exists)
- `package.json`

Also run these shell commands in parallel to gather structural data:

```bash
# Find all blog posts in both languages
find content/blog -name "*.md" | sort

# Check for hardcoded strings (not using dictionary)
grep -rn '"[A-Z][a-z]' components/ --include="*.tsx" | grep -v 'className\|aria-label\|data-\|href\|src\|alt=' | head -40

# Check for any types
grep -rn ': any\b\|as any\b' --include="*.ts" --include="*.tsx" . | grep -v node_modules | grep -v .next | grep -v e2e | head -20

# Check for non-null assertions outside tests
grep -rn '[a-zA-Z]!' --include="*.tsx" --include="*.ts" components/ lib/ app/ hooks/ | grep -v node_modules | head -20

# Check external links for missing rel attribute
grep -rn 'href="http' --include="*.tsx" --include="*.ts" components/ app/ | grep -v 'rel=' | head -20

# Check for images without alt
grep -rn '<img\b' --include="*.tsx" components/ app/ | head -20

# Check aria-label coverage on icon buttons
grep -B2 -A2 'ThemeToggle\|LanguageToggle\|ScrollToTop' components/ui/ -r | head -40
```

### 2. Check existing Linear issues

Use `mcp__linear-server__list_issues` to fetch open issues in team **Lesteban**. Parse their titles to build a deduplication set — do not create issues that already exist in substance.

### 3. Check available labels

Use `mcp__linear-server__list_issue_labels` with `team: "Lesteban"` to see what labels exist.

### 4. Evaluate findings

For each dimension, write down concrete issues found. For each issue include:
- **Title** — short, actionable (≤ 60 chars)
- **Description** — markdown body: what the problem is, where it is (file:line if known), what the expected fix looks like, and the user impact
- **Priority** — assign using this matrix:
  - **1 Urgent**: broken functionality, accessibility failure that blocks users, SEO issue losing indexing
  - **2 High**: significant UX friction, missing critical SEO signal, security risk, performance regression
  - **3 Medium**: noticeable improvement opportunity, DX friction, missing nice-to-have SEO
  - **4 Low**: polish, minor inconsistency, future-proofing

### 5. Create issues in Linear

For each finding, call `mcp__linear-server__save_issue` with:

```
title: <actionable title>
team: Lesteban
description: <markdown body>
priority: <1–4>
labels: [<matching label name if it exists>]
state: Todo
```

Create issues one at a time (do not batch in a single call — the tool creates one issue per call).

Aim for **10–25 issues** total. Prefer depth over breadth: one well-described issue is better than five vague ones. Skip findings that are too minor to warrant a Linear issue.

### 6. Report back

After all issues are created, print a summary table:

```
| ID     | Priority | Area          | Title                              |
|--------|----------|---------------|------------------------------------|
| LES-XX | High     | Accessibility | Add aria-label to icon-only buttons|
| ...    | ...      | ...           | ...                                |
```

List them sorted by priority (Urgent → Low).

## Rules

- Never modify any source file — this skill is read-only.
- Never create duplicate issues (check existing ones first).
- Be concrete: always reference the specific file and component where a problem lives.
- Do not create issues for things that are already well-implemented.
- If a finding requires clarification before it can be a proper issue, note it in the report instead of creating a vague ticket.
- Assign priority honestly — not everything is Urgent.
