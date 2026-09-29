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

Motion behaves like instruments coming online — linear scans, stepped blinks, signal filling a rail. Never bouncy, never decorative springs.

**Load (once)**

- `.scan-in` + `.scan-beam`: hero name reveal, 1.1s.

**Ambient (slow, low-contrast)**

- `NeuralField` (`components/neural-field.tsx`, maths in `lib/neural-field.ts`): a canvas network of drifting nodes behind the hero; links brighten and reach toward the pointer. Pauses off-screen, still frame under reduced motion, colour read from `--primary` (so it follows the theme).

- `.console-grid` drifts one cell every 14s.
- `.status-dot` and `.caret` (block cursor after the role) blink in steps.
- `.photo-scan`: a scan pass over the portrait every 7s.
- Current role node emits a radar ping (`animate-ping`).

**Interactive**

- `ScrambleText`: section titles, project and blog titles re-decode when the pointer enters their `[data-scramble-host]`.
- `.reticle`: a HUD crosshair with live `x / y` coordinates follows the pointer across the hero (desktop).
- `.glitch-host` / `.glitch-layer`: the portrait tears into hue-shifted slices for 600ms on hover.

- `.console-spot`: a spotlight follows the pointer across the hero (`--mx`/`--my` written by `Hero`'s `onPointerMove`).
- `.hud-frame` corner ticks grow 14px → 28px on hover/focus (`@property --tick`).
- `.sweep-line`: one scan line crosses project/blog panels on hover.

**Scroll-driven (CSS `animation-timeline: view()`, static where unsupported)**

- `.reveal-line`: section hairline draws left → right in cyan.
- `.rail::before`: the experience rail fills with signal as it crosses the viewport.
- `.boot`: project panels scan in top → bottom.
- `.chip-seq`: skill chips light up one after another (`--i` index), then settle.
- `.boot` panels flicker like a CRT powering on as they finish scanning in.
- `ScrollTelemetry`: fixed right-edge readout (xl+) with a filling bar and a `00%`–`100%` counter driven by `@property --scroll` on the root scroll timeline.

`prefers-reduced-motion`: every animation above is disabled; beams, scans, sweep, rail fill, reticle and glitch are hidden; text never scrambles; the neural field draws one still frame.

## 7. Accessibility

- Contrast: body text ≥ 7:1 in dark, ≥ 10:1 in light; muted text ≥ 4.5:1.
- Focus: `focus-visible:ring-2 ring-ring` on all links/cards.
- Decorative layers (grid, glow, beam, markers) are `aria-hidden`.
