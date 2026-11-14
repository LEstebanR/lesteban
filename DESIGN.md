# Design System — Signal

> A mature cyberpunk console for the AGI era. Precise, calm, instrument-like.
> No neon overload, no gamer tropes: the interface feels like the operator panel
> of a machine that thinks, and the person behind it is the signal.

## 1. Principles

1. **One loud moment, a living console.** The hero name is scanned in once; after that the page stays alive quietly — ambient signals, pointer response and scroll-driven reveals, all in the language of instruments (see §6).
2. **Instruments, not decoration.** Every structural device carries information: the timeline rail is chronological, the grid marks the hero's coordinate space, corner brackets (`.hud-frame`) mark interactive or focal surfaces.
3. **Dark is native, light is daylight.** `defaultTheme="dark"`. Light mode is a cool daylight console, not an inverted afterthought.
4. **Reading is sacred.** Long-form (`.blog-content`) drops the chrome: calm IBM Plex Sans body, 3xl measure, only a `/` marker on `h2`.

## 2. Color (OKLCH tokens in `app/globals.css`)

Token names are the site's own vocabulary, not shadcn's defaults. Each maps to a Tailwind utility (`--ink-dim` → `text-ink-dim`, `--panel` → `bg-panel`, `--rule` → `border-rule`).

| Token                         | Dark (native)                      | Light                                 | Role                                  |
| ----------------------------- | ---------------------------------- | ------------------------------------- | ------------------------------------- |
| `--canvas`                    | `oklch(0.155 0.025 245)` ink navy  | `oklch(0.972 0.008 215)` cool paper   | Page background                       |
| `--panel` / `--panel-ink`     | `oklch(0.19 0.03 243)`             | `oklch(0.992 0.004 215)`              | Raised surfaces (cards, figure)       |
| `--overlay` / `--overlay-ink` | same as panel                      | same as panel                         | Menus and popovers                    |
| `--ink`                       | `oklch(0.93 0.018 210)`            | `oklch(0.21 0.035 240)`               | Text                                  |
| `--ink-dim`                   | `oklch(0.72 0.045 215)`            | `oklch(0.46 0.05 232)`                | Metadata, secondary text              |
| `--signal` / `--signal-ink`   | `oklch(0.86 0.12 200)` ice cyan    | `oklch(0.52 0.12 222)` deep teal-blue | Signal: links, active state, markers  |
| `--flare` / `--flare-ink`     | `oklch(0.72 0.17 300)` ultraviolet | `oklch(0.52 0.21 298)`                | Rare second signal (quotes, heart)    |
| `--recess`                    | `oklch(0.22 0.032 240)`            | `oklch(0.935 0.014 218)`              | Sunken fills (table heads, skeletons) |
| `--tint` / `--tint-ink`       | `oklch(0.27 0.05 225)`             | `oklch(0.93 0.03 215)`                | Hover/selected fills, inline code     |
| `--alert` / `--alert-ink`     | `oklch(0.65 0.2 25)`               | `oklch(0.577 0.245 27.325)`           | Errors                                |
| `--rule`                      | `oklch(0.31 0.04 238)`             | `oklch(0.86 0.025 222)`               | Hairlines                             |
| `--field`                     | same as rule                       | same as rule                          | Input borders                         |
| `--halo`                      | signal (solid, ≥ 3:1 on canvas)    | signal (solid, ≥ 3:1 on canvas)       | Focus rings and outlines              |
| `--grid-line`, `--glow`       | derived from signal                | derived from signal                   | Hero backdrop only                    |

Components added with the shadcn CLI arrive with default token classes (`text-muted-foreground`, `bg-card`, `border-border`…): rename them to this vocabulary before committing.

Rules: cyan is a signal, not a fill — never more than ~5% of a screen. Violet appears at most once per view.

## 3. Typography

| Role           | Family                                 | Usage                                                                                      |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| `font-heading` | **Tektur** (`--font-tektur`)           | Display name (uppercase, `clamp(3rem,11vw,8.5rem)`, leading 0.88), section and card titles |
| `font-sans`    | **IBM Plex Sans** (`--font-plex-sans`) | Body, UI, long-form (400/500/600/700)                                                      |
| `font-mono`    | **IBM Plex Mono** (`--font-plex-mono`) | Data only: dates, stack tags, status lines, handles (400/500)                              |

Tektur is the only voice for titles; Plex stays neutral for running text. Avoid Inter/Geist/system-ui — they read as the unchosen default.

Scale: 12 (mono data) · 14 · 16/18 (body) · 20/24 (card titles) · 30 (sections) · display clamp. Headings use `tracking-tight`.

## 4. Layout

- Container: `max-w-6xl`, gutters `px-4 md:px-8`, left-aligned throughout.
- Home order: Hero → Experience → Projects → Skills → Contact, `gap-24 md:gap-32`.
- Section heading (`components/section-heading.tsx`): `/` marker + title + hairline to the edge.
- Experience: vertical rail (`border-l`) with square nodes; the current role's node glows.
- Skills: table-like rows (label column 240px + tag cluster).
- Contact: ruled rows, two columns on desktop.

## 5. Shape & depth

- Corners are square: `--corner: 0px`. The `rounded-*` scale is proportional to `--corner` (`sm` ×0.5, `lg` ×1.5, `xl` ×2.5), so the whole theme stays square. Only true circles (`rounded-full`) round.
- Neutrals (canvas, panel, recess, rule) are tinted toward the cyan signal hue (~215–245), never a cold grey-slate.
- Depth comes from tone (`bg-panel` over `bg-canvas`) and hairlines. No drop shadows except the cyan glow on the current timeline node and the reading progress bar.
- `.hud-frame` corner ticks brighten on hover/focus-within.

## 6. Motion

Motion behaves like instruments coming online — linear scans, stepped blinks, glyphs decoding, signal filling a rail. Never bouncy, never decorative springs.

**Load (once)**

- `.scan-in` + `.scan-beam`: the hero name is revealed by a scan beam (1.1s) while `ScrambleText` decodes it from random glyphs.
- The portrait gets the same treatment: `.scan-in` + beam. No per-cell mosaic or staggered fades: one element, one reveal.
- `.seq` boot sequence: status, greeting, role, lede, stack chips (one by one) and socials enter in order (`--d` delay in ms) with a blur-to-sharp lift.

**Ambient (slow, low-contrast)**

- `.aurora`: three pre-softened radial light masses (cyan, violet, cyan) orbit on 19–31s loops and breathe — transform/opacity only, no `filter` — and rise and fade as the hero scrolls away (`.aurora-exit`).
- `NeuralField` (`components/neural-field.tsx`, maths in `lib/neural-field.ts`): a canvas network of drifting nodes behind the hero; links brighten and reach toward the pointer. Pauses off-screen, colour read from `--signal` (follows the theme).
- `.console-grid` drifts one cell every 14s (an oversized `::before` moved by `transform`).
- `.caret` (block cursor after the role) blinks in steps. Status dots (hero availability, current role node) are static: a real state needs no pulse.
- `.photo-scan`: a scan pass over the portrait every 7s.

**Interactive**

- `.console-spot`: a 920px light moved by `transform` toward the pointer, easing behind it (`--mx`/`--my` are written by `Hero` only on the backdrop and reticle layers; no layout reads per move).
- `.reticle`: a HUD crosshair with live `x / y` coordinates follows the pointer (desktop).
- `ScrambleText` (driven by `hooks/use-host-decode.ts`) re-decodes on hover inside any `[data-scramble-host]`: section, project and blog titles, header Blog link, experience companies, contact handles, footer wordmark.
- `.glitch-host` / `.glitch-layer`: the portrait tears into hue-shifted slices for 600ms on hover.
- `.jitter`: social icons shake briefly on hover.
- `.hud-frame` corner ticks grow 14px → 28px on hover/focus (`@property --tick`).
- `.sweep-line`: one scan line crosses project/blog panels on hover.

**Scroll-driven (CSS `animation-timeline`, static where unsupported)**

Only motion that carries information is tied to scroll. Section headings, project panels and skill chips are static — no reveal-on-scroll.

- `.rail::before`: the experience rail fills with signal as it crosses the viewport (progress through the career).
- `ScrollTelemetry`: fixed right-edge readout (xl+) with a filling bar and a `00%`–`100%` counter driven by `@property --scroll` on the root scroll timeline.

**Icons**

Lucide is not used. The few icons the UI needs live in `components/ui/icon.tsx` (`<Icon name="…" />`): a 24px grid, 1.75 stroke, square caps and mitred joins. Only functional icons (menu, theme, disclosure chevrons, external arrow, mail); decorative icons are not added. Brand logos (GitHub, LinkedIn) stay as their own SVGs.

`prefers-reduced-motion`: every animation above is disabled; beams, scans, sweep, rail fill, reticle, and glitch are hidden; text never scrambles; the aurora and neural field hold still.

## 7. Accessibility

- Contrast: body text ≥ 7:1 in dark, ≥ 10:1 in light; muted text ≥ 4.5:1.
- Focus: `focus-visible:ring-2 ring-ring` on all links/cards.
- Decorative layers (grid, glow, beam, markers) are `aria-hidden`.

## 8. Brand mark

- `app/icon.svg` (favicon): ink-navy tile, cyan HUD corner ticks and the `/▮` prompt (section slash + hero caret).
- `public/favicon.ico` (16/32/48) and `app/apple-icon.png` (180, square) are rasterised from the same SVG.
- Open Graph cards (`components/og/brand-og-image.tsx`): ink-navy canvas with coordinate grid, aurora glow, HUD corner ticks, the brand mark and Tektur display type; blog posts show their cover in a framed panel. Fonts are static TTFs in `public/fonts/og/` (Satori can't read WOFF2 or variable fonts); colours are the hex equivalents of the dark tokens in `lib/og.ts`.
