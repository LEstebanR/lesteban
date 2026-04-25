Create a new React component for the lesteban portfolio following the project's design system and conventions.

## Steps

1. Ask the user for:
   - **Component name** (PascalCase)
   - **Location**: `components/ui/` (primitive), `components/cards/` (composed card), or `components/` root (page section)
   - **Client or server component** — default to server unless it needs hooks, theme, or browser APIs
   - **Brief description** of what it does

2. Read one or two existing components in the same target directory to match patterns before writing.

3. Create the component file following these rules:

**Imports order** (enforced by Prettier — must match exactly):
```ts
// 1. React (only if needed)
// 2. Next.js (next/image, next/link, next/navigation)
// 3. next-themes
// 4. lucide-react
// 5. @/components/...
// 6. @/lib/...
```

**Design system constraints** (see DESIGN.md for full reference):
- Use CSS token utilities only — never hardcode hex values
  - Text: `text-foreground`, `text-primary`, `text-secondary`, `text-muted-foreground`
  - Background: `bg-background`, `bg-card`, `bg-muted`, `bg-primary`, `bg-secondary`
  - Border: `border-border`, `border-primary`, `border-secondary`
  - Destructive: `text-destructive`, `bg-destructive`
- Headings: add `font-heading` class (Space Grotesk); body uses `font-sans` by default (DM Sans)
- Dark mode is automatic — tokens switch via `.dark` class; no manual `dark:` overrides needed for color tokens
- Radius: use `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, or `rounded-full` — no arbitrary values
- Spacing: stick to Tailwind's default scale (multiples of 4px/8px); avoid arbitrary spacing
- Animations: use existing classes (`animate-fade-in-up`, `animate-fade-in-scale`, `animate-float`) or `tw-animate-css` utilities before writing custom keyframes

**shadcn/ui primitives** available in `components/ui/`:
- Use them as the base for any new composed component (Card, Badge, Button, etc.)
- Do not re-implement what shadcn already provides

4. If the component needs i18n strings:
   - Accept `lang: 'en' | 'es'` as a prop on server components
   - Use `getClientDictionary(lang)` on client components
   - Add any new keys to both `app/[lang]/dictionaries/en.json` and `es.json`

5. After creating, verify with `bun typecheck` that there are no type errors.
