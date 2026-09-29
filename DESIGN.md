# Design System — Riso

> Purely artistic: the portfolio is a risograph poster. Fluorescent inks are
> overprinted on uncoated stock, colours mix where shapes overlap, type is
> printed slightly out of register and everything sits under a paper grain.

## 1. Principles

1. **Print, don't render.** Flat ink shapes, no gradients, no soft shadows. Depth comes from overprinting (`mix-blend-mode`), never from elevation.
2. **Three inks + text ink.** Fluorescent pink, teal and sunflower yellow; federal blue is the "black" in day mode.
3. **Deliberate imperfection.** Misregistered headlines (`.misregister`), slightly rotated posters and stickers, paper grain (`.grain`).
4. **Composition over components.** Sections are poster sheets: huge headline, one or two geometric shapes, content laid out freely.

## 2. Inks (OKLCH tokens in `app/globals.css`)

| Token                             | Day (lilac-grey stock)             | Night (black stock)     | Role                                   |
| --------------------------------- | ---------------------------------- | ----------------------- | -------------------------------------- |
| `--background`                    | `oklch(0.955 0.012 300)`           | `oklch(0.18 0.012 300)` | Paper                                  |
| `--foreground`                    | `oklch(0.3 0.13 266)` federal blue | `oklch(0.93 0.02 300)`  | Text ink                               |
| `--primary`                       | `oklch(0.66 0.25 356)` fluoro pink | `oklch(0.72 0.23 356)`  | Portrait duotone, badges, links, dates |
| `--teal` (`bg-teal`, `text-teal`) | `oklch(0.62 0.12 205)`             | `oklch(0.72 0.12 205)`  | Role, second ink, shapes               |
| `--secondary`                     | `oklch(0.88 0.17 95)` sunflower    | `oklch(0.9 0.17 95)`    | Sun circle, contact sheet, buttons     |
| `--blend`                         | `multiply`                         | `screen`                | How inks overprint on the page paper   |

`.ink.on-paper` forces `multiply` when shapes sit on a coloured poster, in both themes.

## 3. Typography

| Role           | Family                             | Usage                                                                                                                                              |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `font-heading` | **Unbounded** (`--font-unbounded`) | Name `clamp(3.25rem,11vw,8.5rem)` 900 stacked with `w-min`; section titles `clamp(2.25rem,8vw,5.5rem)`; skills set as a type poster at mixed sizes |
| `font-sans`    | **Epilogue** (`--font-epilogue`)   | Body 16–18px, labels 14px bold                                                                                                                     |

Lists (stack, tags) are inline and separated by a pink `/`.

## 4. Layout

- Container `max-w-6xl`, gutters `px-4 md:px-8`.
- Home: Hero poster → Projects → Experience → Skills → Contact sheet, `gap-24 md:gap-36`.
- Hero: 7/5 split; name overprints the sun circle; arch-shaped halftone portrait with a misregistered teal plate behind it.
- Projects: 2-col poster cards cycling paper (pink → yellow → teal → stock), each with two overprinted shapes; tilted ±1°, straighten on hover.
- Experience: dotted pink rules, company names large.
- Contact: a yellow sheet with overprinted pink circle and teal triangle (triangle hidden on mobile).

## 5. Print artefacts

| Class          | Effect                                                     |
| -------------- | ---------------------------------------------------------- |
| `.grain`       | Fixed SVG fractal-noise layer over the whole page (layout) |
| `.misregister` | Two offset text-shadows in pink and teal                   |
| `.halftone`    | Grayscale photo multiplied on pink + 5px dot screen        |
| `.ink`         | Shape that overprints using `--blend`                      |

## 6. Motion

- `.drift`: ink shapes float and rotate slowly (14–22s).
- `.parallax`: hero shapes rise as the hero scrolls away (scroll-driven).
- `.print-in`: experience rows and posters slide up like sheets off the drum (scroll-driven).
- Posters: shapes slide out of register on hover (`.shape-a` / `.shape-b`).
- `prefers-reduced-motion`: drift, parallax and print-in disabled.

## 7. Accessibility

- Text ink on paper ≥ 10:1 (day) / ≥ 14:1 (night); text on pink/teal posters uses paper colour ≥ 4.5:1.
- Grain and shapes are `aria-hidden` and `pointer-events: none`.
