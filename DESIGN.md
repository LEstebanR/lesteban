# Design System — Playground

> Curious, bold, animated. The portfolio behaves like a desk full of toys:
> letters you can fling, stickers that wiggle, cards that tilt toward the
> pointer. Chunky, tactile and friendly, without losing legibility.

## 1. Principles

1. **Everything answers the hand.** Motion is mostly a response to the visitor: drag, hover, press, tilt. Ambient motion is limited to the marquee.
2. **Toy surfaces.** `.toy` = 2px ink border + hard 5px offset shadow. `.toy-press` sinks into the shadow on hover/active like a physical button.
3. **Colour as material.** Cobalt, lemon and bubblegum are _surfaces_ (project cards, stickers, CTA block), not accents sprinkled on text.
4. **Big type, friendly body.** Syne ExtraBold at poster sizes; Manrope keeps paragraphs relaxed and readable.

## 2. Color (OKLCH tokens in `app/globals.css`)

| Token                       | Day                                   | Night                             | Role                                      |
| --------------------------- | ------------------------------------- | --------------------------------- | ----------------------------------------- |
| `--background`              | `oklch(0.975 0.006 270)` cool white   | `oklch(0.2 0.06 272)` deep cobalt | Page                                      |
| `--foreground` / `--border` | `oklch(0.2 0.04 270)` ink             | `oklch(0.96 0.01 270)`            | Text, toy outlines and shadows            |
| `--primary`                 | `oklch(0.5 0.25 268)` electric cobalt | `oklch(0.72 0.17 268)`            | Role, links, CTA block, card tone         |
| `--secondary`               | `oklch(0.92 0.16 105)` lemon          | `oklch(0.9 0.17 105)`             | Marquee, buttons, stickers                |
| `--pink` (`bg-pink`)        | `oklch(0.8 0.13 350)` bubblegum       | `oklch(0.78 0.14 350)`            | Stickers, card tone                       |
| `--accent`                  | pale cobalt                           | dim cobalt                        | Date pills, inline code                   |
| `--hairline`                | `oklch(0.88 0.015 270)`               | `oklch(0.36 0.07 272)`            | Default borders (`* { border-hairline }`) |

## 3. Typography

| Role           | Family                         | Usage                                                                                                                            |
| -------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `font-heading` | **Syne** (`--font-syne`)       | Hero name `clamp(2.75rem,13vw,11.5rem)` 800, tracking −0.04em; section titles `clamp(2.25rem,9.5vw,4.5rem)`; card titles 24–36px |
| `font-sans`    | **Manrope** (`--font-manrope`) | Body 16–18px, UI labels 12–14px bold                                                                                             |

## 4. Layout

- Container `max-w-6xl`, gutters `px-4 md:px-8`.
- Home: Hero → skills Marquee (full-bleed, tilted −1°) → Projects → Experience → Skills → Contact.
- `components/section-title.tsx`: huge title + animated squiggle underline (`.squiggle-line`, moves on hover).
- Projects: 2-col grid; cards cycle tones (cobalt → lemon → bubblegum → card).
- Contact: a single cobalt CTA block with contact pills.
- Sections that animate in use `-mx-4 px-4 overflow-x-clip` so rotated entrances never cause horizontal scroll.

## 5. Shape

- `--radius: 1rem`; cards `rounded-xl`, pills `rounded-full`, portrait is an organic blob.
- Depth is always the hard offset shadow, never blurred shadows.

## 6. Motion

| Piece                | Where                | Behaviour                                                                           |
| -------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| `DragLetters`        | Hero name            | Each letter draggable (framer-motion), springs back; hover lift + tilt              |
| `Marquee`            | Below hero           | 28s infinite scroll, pauses on hover; duplicate row is `aria-hidden`                |
| `.sticker`           | Stack, skills, badge | Rotated by `--r`, wiggles on hover                                                  |
| Tilt                 | Project cards        | Pointer-driven 3D tilt (±8°) with spring, resets on leave                           |
| `.pop-in` (`Reveal`) | Cards                | CSS scroll-driven lift + tilt settle; static where unsupported, never hidden in SSR |
| `.toy-press`         | Buttons, links       | Sinks into its shadow on hover/press                                                |

`prefers-reduced-motion`: drag, hover springs, tilt, marquee and pop-in are all disabled.

## 7. Accessibility

- The hero name is exposed once via `sr-only`; the draggable letters are `aria-hidden`.
- Ink on lemon/bubblegum ≥ 9:1; white on cobalt ≥ 6:1.
- Focus: `focus-visible:ring-4 ring-ring` on interactive toys.
