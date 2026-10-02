# Design System — Signal

> A mature cyberpunk console for the AGI era. Precise, calm, instrument-like.
> No neon overload, no gamer tropes: the interface feels like the operator panel
> of a machine that thinks, and the person behind it is the signal.

## 1. Principles

1. **One loud moment, a living console.** The hero name is scanned in once; after that the page stays alive quietly — ambient signals, pointer response and scroll-driven reveals, all in the language of instruments (see §6).
2. **Instruments, not decoration.** Every structural device carries information: the timeline rail is chronological, the grid marks the hero's coordinate space, corner brackets (`.hud-frame`) mark interactive or focal surfaces.
3. **Dark is native, light is daylight.** `defaultTheme="dark"`. Light mode is a cool daylight console, not an inverted afterthought.
4. **Reading is sacred.** Long-form (`.blog-content`) drops the chrome: calm Geist body, 3xl measure, only a `/` marker on `h2`.

## 2. Color (OKLCH tokens in `app/globals.css`)

| Token                   | Dark (native)                      | Light                                 | Role                                 |
| ----------------------- | ---------------------------------- | ------------------------------------- | ------------------------------------ |
| `--background`          | `oklch(0.155 0.022 258)` ink navy  | `oklch(0.975 0.005 250)` cool paper   | Canvas                               |
| `--card`                | `oklch(0.19 0.026 258)`            | `oklch(0.995 0.002 250)`              | Panels                               |
| `--foreground`          | `oklch(0.93 0.012 235)`            | `oklch(0.22 0.03 262)`                | Text                                 |
| `--primary`             | `oklch(0.86 0.12 200)` ice cyan    | `oklch(0.52 0.12 222)` deep teal-blue | Signal: links, active state, markers |
| `--secondary`           | `oklch(0.72 0.17 300)` ultraviolet | `oklch(0.52 0.21 298)`                | Rare second signal (quotes, heart)   |
| `--muted-foreground`    | `oklch(0.7 0.03 245)`              | `oklch(0.48 0.03 258)`                | Metadata                             |
| `--border`              | `oklch(0.31 0.035 258)`            | `oklch(0.87 0.015 250)`               | Hairlines                            |
| `--grid-line`, `--glow` | derived from primary               | derived from primary                  | Hero backdrop only                   |

Rules: cyan is a signal, not a fill — never more than ~5% of a screen. Violet appears at most once per view.

## 3. Typography

| Role           | Family                               | Usage                                                                                      |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| `font-heading` | **Tektur** (`--font-tektur`)         | Display name (uppercase, `clamp(3rem,11vw,8.5rem)`, leading 0.88), section and card titles |
| `font-sans`    | **Geist** (`--font-geist`)           | Body, UI, long-form                                                                        |
| `font-mono`    | **Geist Mono** (`--font-geist-mono`) | Data only: dates, stack tags, status lines, handles                                        |

Scale: 12 (mono data) · 14 · 16/18 (body) · 20/24 (card titles) · 30 (sections) · display clamp. Headings use `tracking-tight`.

## 4. Layout

- Container: `max-w-6xl`, gutters `px-4 md:px-8`, left-aligned throughout.
- Home order: Hero → Experience → Projects → Skills → Contact, `gap-24 md:gap-32`.
- Section heading (`components/section-heading.tsx`): `/` marker + title + hairline to the edge.
- Experience: vertical rail (`border-l`) with square nodes; the current role's node glows.
- Skills: table-like rows (label column 240px + tag cluster).
- Contact: ruled rows, two columns on desktop.

## 5. Shape & depth

- Radius is small: `--radius: 0.25rem`. Chips and buttons use `rounded-sm`.
- Depth comes from tone (`bg-card` over `bg-background`) and hairlines. No drop shadows except the cyan glow on the current timeline node and the reading progress bar.
- `.hud-frame` corner ticks brighten on hover/focus-within.

## 6. Motion

Motion behaves like instruments coming online — linear scans, stepped blinks, glyphs decoding, signal filling a rail. Never bouncy, never decorative springs.

**Load (once)**

- `.scan-in` + `.scan-beam`: the hero name is revealed by a scan beam (1.1s) while `ScrambleText` decodes it from random glyphs.
- The portrait gets the same treatment: `.scan-in` + beam, plus `DecodeMask` (`components/decode-mask.tsx`) — a 12×12 glyph mosaic that clears row by row in sync with the beam (CSS `cell-fade` fallback without JS).
- `.seq` boot sequence: status, greeting, role, lede, stack chips (one by one) and socials enter in order (`--d` delay in ms) with a blur-to-sharp lift.

**Ambient (slow, low-contrast)**

- `.aurora`: three pre-softened radial light masses (cyan, violet, cyan) orbit on 19–31s loops and breathe — transform/opacity only, no `filter` — and rise and fade as the hero scrolls away (`.aurora-exit`).
- `NeuralField` (`components/neural-field.tsx`, maths in `lib/neural-field.ts`): a canvas network of drifting nodes behind the hero; links brighten and reach toward the pointer. Pauses off-screen, colour read from `--primary` (follows the theme).
- `.console-grid` drifts one cell every 14s (an oversized `::before` moved by `transform`).
- `.status-dot` and `.caret` (block cursor after the role) blink in steps.
- `.photo-scan`: a scan pass over the portrait every 7s.
- Current role node emits a radar ping (`animate-ping`).

**Interactive**

- `.console-spot`: a 920px light moved by `transform` toward the pointer, easing behind it (`--mx`/`--my` are written by `Hero` only on the backdrop and reticle layers; no layout reads per move).
- `.reticle`: a HUD crosshair with live `x / y` coordinates follows the pointer (desktop).
- `ScrambleText` (driven by `hooks/use-host-decode.ts`, shared with `DecodeMask`) re-decodes on hover inside any `[data-scramble-host]`: section, project and blog titles, header Blog link, experience companies, contact handles, footer wordmark. `DecodeMask` re-runs when the portrait is hovered.
- `.glitch-host` / `.glitch-layer`: the portrait tears into hue-shifted slices for 600ms on hover.
- `.jitter`: social icons shake briefly on hover.
- `.hud-frame` corner ticks grow 14px → 28px on hover/focus (`@property --tick`).
- `.sweep-line`: one scan line crosses project/blog panels on hover.

**Scroll-driven (CSS `animation-timeline`, static where unsupported)**

- `.reveal-line`: section hairline draws left → right in cyan; `.slash`: the `/` flickers on.
- `.rail::before`: the experience rail fills with signal as it crosses the viewport.
- `.boot`: project panels scan in top → bottom and flicker like a CRT powering on.
- `.chip-seq`: skill chips light up one after another (`--i` index), then settle.
- `ScrollTelemetry`: fixed right-edge readout (xl+) with a filling bar and a `00%`–`100%` counter driven by `@property --scroll` on the root scroll timeline.

`prefers-reduced-motion`: every animation above is disabled; beams, scans, sweep, rail fill, reticle, glitch and decode mosaic are hidden; text never scrambles; the aurora and neural field hold still.

## 7. Accessibility

- Contrast: body text ≥ 7:1 in dark, ≥ 10:1 in light; muted text ≥ 4.5:1.
- Focus: `focus-visible:ring-2 ring-ring` on all links/cards.
- Decorative layers (grid, glow, beam, markers) are `aria-hidden`.

## 8. Brand mark

- `app/icon.svg` (favicon): ink-navy tile, cyan HUD corner ticks and the `/▮` prompt (section slash + hero caret).
- `public/favicon.ico` (16/32/48) and `app/apple-icon.png` (180, square) are rasterised from the same SVG.
- Open Graph cards (`components/og/brand-og-image.tsx`): ink-navy canvas with coordinate grid, aurora glow, HUD corner ticks, the brand mark and Tektur display type; blog posts show their cover in a framed panel. Fonts are static TTFs in `public/fonts/og/` (Satori can't read WOFF2 or variable fonts); colours are the hex equivalents of the dark tokens in `lib/og.ts`.

## 9. Seasons

`lib/season.ts` ships an inline `<head>` script that sets `<html data-season="halloween">` during the visitor's own October, before first paint. Seasonal styling hangs off that attribute only, so it switches itself off on 1 November with no rebuild.

**Halloween · The Web** (`app/globals.css`, end of file)

Web developer, web: the hero's network becomes a spider web.

- `NeuralField` weaves a web from the top-right corner (`createWeb` / `forEachThread` / `stepWeb` in `lib/neural-field.ts`): 13 spokes × 9 rings, ring threads scalloped toward the hub, silk thinning toward the rim. The pointer pushes nearby threads and they spring back with a damped wobble. Same colour source (`--primary`), same pause-off-screen and reduced-motion still frame.
- `Spider` (`components/spider.tsx`, xl+): hangs from that corner on a thread in the right gutter, lowers itself from 14vh to 70vh along the root scroll timeline, sways like a pendulum and twitches its legs now and then.
- Corner silk: `.hud-frame::before` (not the reticle or hairlines) collects a few rings and spokes in its top-right corner and shivers on hover.
- Reduced motion: the web is a still frame, the spider hangs still.
