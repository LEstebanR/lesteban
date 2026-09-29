# Design System — Editorial Minimalism with Light Cyan Accent

## 1. Visual Theme & Atmosphere

This design system is inspired by Delba (https://delba.dev) and editorial portfolio layouts. The visual language emphasizes whitespace, calm typography, and a light-only color palette with a soft cyan accent. There is no dark mode in v1.

The atmosphere is professional yet approachable, with a focus on content hierarchy and readability. Wide margins, generous vertical spacing, and a serif-sans font pairing create an editorial feel. Work and projects are presented as light cards or lists, not dense grids.

The cyan accent (#00b8d4) provides just enough visual energy without overwhelming the calm neutral foundation. It appears in CTAs, links, hover states, and subtle glow effects. The background grid (if present) is kept at ≤2% opacity to maintain the minimal aesthetic.

**Key Characteristics:**

- Light-only palette: no dark mode toggle or dark variants
- Editorial whitespace: generous vertical rhythm and horizontal breathing room
- Serif + sans pairing for editorial contrast (or high-quality sans throughout)
- Cyan accent (#00b8d4) as the primary interactive color
- Minimal cyberpunk: soft cyan glow, ultra-subtle grid (≤2% opacity)
- Work/projects as light cards with borders, not heavy shadows or dense grids
- Natural, approachable copy (ES: Colombia natural, EN: professional-casual)
- Delba-inspired layout rhythm: hero → work list → experience → about → contact

## 2. Color Palette & Roles

> **Source:** CSS custom properties defined in `app/globals.css` (light-only design, no dark mode)

### Foundation (Light Only)

- **Background** (`--bg`): `#f7f8fa` — Main page canvas, soft off-white
- **Elevated Surface** (`--bg-elev`): `#ffffff` — Cards, nav, modals, and raised components
- **Text** (`--text`): `#0f1419` — Primary body and heading text
- **Muted Text** (`--muted`): `#5b6570` — Secondary text, metadata, helper copy
- **Border** (`--border`): `rgba(15, 20, 25, 0.08)` — Subtle dividers and card containment

### Accent & Interactive

- **Cyan Primary** (`--cyan`): `#00b8d4` — Primary CTA, links, active states, brand accent
- **Cyan Soft** (`--cyan-soft`): `rgba(0, 184, 212, 0.12)` — Subtle backgrounds for tags and highlights
- **Cyan Glow** (`--cyan-glow`): `rgba(0, 184, 212, 0.35)` — Soft glow effects on hover, focus, and hero accents

### Semantic Colors

- Use `--cyan` for success-adjacent states when needed
- Use a muted red (e.g., `#e53e3e`) for destructive actions or errors if required
- Keep the palette minimal; avoid introducing additional accent colors

## 3. Typography Rules

### Font Family

- **Sans Family:** `Inter`, fallback `system-ui, sans-serif` — Primary font for body, UI, and most headings
- **Mono Family:** `JetBrains Mono`, fallback `monospace` — Code, technical labels, and eyebrow text
- **Optional Serif Family:** Consider adding a serif like `Lora` or `Merriweather` for large editorial headings if desired. Otherwise, Inter at bold weights is sufficient.

### Hierarchy

| Role               | Size    | Weight | Line Height | Letter Spacing | Notes                                         |
| ------------------ | ------- | ------ | ----------- | -------------- | --------------------------------------------- |
| Hero Display       | 56px    | 700    | 1.1         | -0.03em        | Main hero headline                            |
| Section Heading    | 20-24px | 600    | 1.3         | 0              | Section labels (e.g., "Proyectos destacados") |
| Card/Project Title | 18px    | 600    | 1.4         | 0              | Card headings                                 |
| Body Primary       | 16px    | 400    | 1.65        | 0              | Standard body copy, descriptions              |
| Body Secondary     | 14px    | 500    | 1.55        | 0              | Metadata, smaller descriptions                |
| Eyebrow/Label      | 12px    | 500    | 1.2         | 0.08em         | Uppercase eyebrow text in mono font           |
| Button/CTA         | 14px    | 600    | 1.2         | 0              | Button labels and action text                 |

### Principles

- **Editorial clarity:** Use generous line height (1.55–1.65) for body text to improve readability
- **Calm hierarchy:** Bold weights (600–700) for headings, normal (400) for body
- **Minimal tracking:** Avoid heavy letter-spacing except for uppercase labels
- **Serif-sans pairing (optional):** If a serif is added, reserve it for large editorial headings; use sans for everything else

## 4. Component Stylings

### Buttons & CTAs

- **Primary CTA:** `background: var(--cyan)`, `color: #fff`, `border-radius: 10px`, `padding: 12px 20px`, optional soft `box-shadow: 0 0 24px var(--cyan-glow)`
- **Ghost/Outline CTA:** `background: var(--bg-elev)`, `color: var(--text)`, `border: 1px solid var(--border)`, same radius and padding
- **Hover states:** Increase border opacity or add subtle scale transform (`scale(1.02)`)

### Cards

- **Editorial Card:** `background: var(--bg-elev)`, `border: 1px solid var(--border)`, `border-radius: 14px`, `padding: 24px`
- **Hover state:** `border-color: rgba(0, 184, 212, 0.35)`, `box-shadow: 0 8px 32px rgba(0, 184, 212, 0.1)`
- **Gradient border (optional):** Use a subtle gradient pseudo-element (`::before`) with `linear-gradient(135deg, transparent 40%, var(--cyan-soft))` for a soft glow effect
- Keep cards light and airy; avoid heavy shadows

### Inputs & Forms

- `background: var(--bg-elev)`, `border: 1px solid var(--border)`, `border-radius: 8px`, `padding: 10px 14px`
- `focus:border-color: var(--cyan)`, `focus:ring: 0 0 0 3px var(--cyan-soft)`

### Navigation

- **Top nav:** `background: var(--bg-elev)` or transparent, `border-bottom: 1px solid var(--border)`
- **Logo:** Mono font, regular weight, cyan accent on part of the name (e.g., `les<span class="cyan">teban</span>.dev`)
- **Links:** `color: var(--muted)`, `hover:color: var(--cyan)`, smooth transition

### Tags & Badges

- `background: var(--cyan-soft)`, `color: #0088a3` (darker cyan for contrast), `border-radius: 6px`, `padding: 4px 8px`, mono font at 11px

### Image Treatment

- Clean, minimal framing with subtle borders if needed
- Use `border-radius: 10px` for a modern, soft look
- Avoid heavy filters or overlays; keep images crisp

## 5. Layout Principles

### Spacing System

- Base unit: `8px`
- Common spacing values: `12px`, `16px`, `20px`, `24px`, `32px`, `48px`, `64px`
- Use generous vertical spacing between sections (`48px`–`64px`)
- Card/grid gaps: `16px` for tight layouts, `24px` for breathing room

### Grid & Container

- **Max-width container:** `1100px` centered with `margin: 0 auto`
- **Horizontal padding:** `40px` on desktop, `20px` on mobile
- **Work/Projects grid:** `repeat(2, 1fr)` on tablet+, single column on mobile, `gap: 16px`

### Whitespace Philosophy

- **Editorial breathing room:** Large top/bottom padding on hero and major sections
- **Content focus:** Wide horizontal margins keep the eye on the content
- **Minimal density:** Unlike e-commerce sites, this is a portfolio — space is a feature, not a bug

### Border Radius Scale

- **Small:** `6px` for tags and small buttons
- **Medium:** `10px` for buttons and inputs
- **Large:** `14px` for cards and major containers
- **Circular:** `50%` for avatars and icon buttons

## 6. Depth & Elevation

| Level   | Treatment                                                               | Use                        |
| ------- | ----------------------------------------------------------------------- | -------------------------- |
| Level 0 | Flat neutral surface (`--bg`)                                           | Main page canvas           |
| Level 1 | Elevated white (`--bg-elev`) with subtle border                         | Cards, nav, modals         |
| Level 2 | Border + soft hover glow (`box-shadow: 0 8px 32px rgba(0,184,212,0.1)`) | Interactive cards on hover |
| Level 3 | Optional cyan glow for hero elements                                    | Hero accents, primary CTAs |

Depth is minimal. Tonal contrast and border containment do most of the work. Avoid heavy drop shadows.

## 7. Do's and Don'ts

### Do

- Use the light-only palette (`--bg`, `--bg-elev`, `--text`, `--muted`, `--cyan`)
- Embrace whitespace and vertical rhythm
- Keep cyan accent usage selective (CTAs, links, hover states)
- Use Inter (or a similar high-quality sans) for most text
- Maintain calm, editorial pacing
- Present work/projects as light cards or list items, not dense grids

### Don't

- Don't add dark mode in v1
- Don't use heavy shadows or dramatic depth effects
- Don't overcrowd the layout with dense information blocks
- Don't introduce additional accent colors beyond cyan
- Don't use em dashes (—) in copy; use regular dashes or commas
- Don't leave the cyberpunk grid at high opacity; keep it ≤2% if used at all

## 8. Responsive Behavior

### Breakpoints

| Name    | Width          | Key Changes                                                  |
| ------- | -------------- | ------------------------------------------------------------ |
| Mobile  | < 640px        | Single-column layout, reduced padding (20px), stacked nav    |
| Tablet  | 640px – 1024px | Two-column work grid, moderate padding (32px)                |
| Desktop | > 1024px       | Max-width container (1100px), full horizontal padding (40px) |

### Touch Targets

- Minimum tap target: `44px × 44px` for buttons and links on mobile
- Increase padding on mobile to ensure comfortable interaction

### Collapsing Strategy

- Hero typography scales down gracefully (56px → 40px → 32px)
- Work/projects grid collapses to single column on mobile
- Navigation compresses into a simpler horizontal list or hamburger menu if needed

## 9. Agent Prompt Guide

### Quick Color Reference

- Background: `#f7f8fa` (`--bg`)
- Elevated surface: `#ffffff` (`--bg-elev`)
- Primary text: `#0f1419` (`--text`)
- Muted text: `#5b6570` (`--muted`)
- Border: `rgba(15, 20, 25, 0.08)` (`--border`)
- Cyan accent: `#00b8d4` (`--cyan`)
- Cyan soft: `rgba(0, 184, 212, 0.12)` (`--cyan-soft`)
- Cyan glow: `rgba(0, 184, 212, 0.35)` (`--cyan-glow`)

### Example Component Prompts

- "Design a hero section with a large Inter bold headline (56px), a short subtitle (20px muted), and two buttons: a cyan primary CTA and a ghost secondary button."
- "Create a project card with a white background, 1px subtle border, 14px border-radius, 24px padding, a bold title, a muted description, and a row of cyan-soft tags at the bottom."
- "Build a navigation bar with a mono logo (`lesteban.dev` with cyan accent), horizontal link list (muted text, cyan on hover), and a language toggle."
- "Compose a work/experience section as a two-column grid of light cards on desktop, single column on mobile, with 16px gap between cards."

### Iteration Guide

1. Start with the neutral foundation (`--bg`, `--bg-elev`, `--text`, `--muted`)
2. Add cyan accents sparingly (CTAs, links, hover states)
3. Tune typography scale and line heights for readability
4. Use border-radius consistently (6px, 10px, 14px, 50%)
5. Test responsive collapse: two-column → single-column
6. Validate that whitespace remains generous, not cramped

### Known Gaps

- No dark mode defined (intentional for v1)
- Destructive/error states not fully specified; use a muted red (`#e53e3e`) if needed
- Serif font is optional; if not added, rely on Inter bold weights for all headings
- Success states can use cyan variants or a compatible green if needed
