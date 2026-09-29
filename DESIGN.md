# Design System — Marginalia

> Editorial, minimal, mature. The portfolio is set like a well-made book:
> section titles live in the margin, content lives in a calm reading column,
> and typography does all of the work. No cards, no badges, no decoration.

## 1. Principles

1. **Type is the interface.** Hierarchy comes from size, weight and the serif/sans contrast — never from boxes, fills or icons.
2. **Marginalia grid.** Every home section uses `components/section.tsx`: title in the left 3 columns (sticky on desktop), content in the right 9.
3. **Lists read like prose.** Stacks, tags and skills are comma-separated inline lists (`after:content-[',']`), not chips.
4. **One colour with a job.** Ultramarine ink is reserved for links and interactive text. Everything else is ink on paper.
5. **Stillness.** A single 0.9s `.settle` fade on the opening spread; nothing else animates on its own.

## 2. Color (OKLCH tokens in `app/globals.css`)

| Token                   | Day                                    | Night                   | Role                           |
| ----------------------- | -------------------------------------- | ----------------------- | ------------------------------ |
| `--background`          | `oklch(0.982 0.003 145)` neutral paper | `oklch(0.2 0.006 250)`  | Page                           |
| `--foreground`          | `oklch(0.21 0.006 250)` ink            | `oklch(0.91 0.006 95)`  | Text                           |
| `--muted-foreground`    | `oklch(0.5 0.008 250)`                 | `oklch(0.68 0.008 250)` | Margin titles, metadata        |
| `--primary`             | `oklch(0.44 0.17 266)` ultramarine     | `oklch(0.77 0.1 266)`   | Links only                     |
| `--border`              | `oklch(0.88 0.005 145)`                | `oklch(0.32 0.006 250)` | Hairline rules between entries |
| `--card`, `--secondary` | faint tonal steps                      | faint tonal steps       | Code blocks, inline code       |

The paper is deliberately neutral (a hint of green-grey), not cream.

## 3. Typography

| Role                          | Family                                     | Notes                                                                                                                             |
| ----------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `font-heading` / `font-serif` | **Newsreader** (opsz axis, roman + italic) | Display (`clamp(2.75rem,7vw,5.25rem)`, weight 400, tracking −0.02em), entry titles (24–28px, 500), lede (22–26px), long-form body |
| `font-sans`                   | **Instrument Sans**                        | Metadata, margin titles, navigation, buttons (14–16px)                                                                            |
| `font-mono`                   | system monospace                           | Code only                                                                                                                         |

- Measure: 36ch for the hero lede, 58–62ch for descriptions, 65ch for articles.
- Articles: 19px serif, line-height 1.75, drop cap on the first paragraph.
- No all-caps labels, no single-word colour accents.

## 4. Layout

- Container `max-w-5xl`, gutters `px-5 md:px-10`.
- Home: Hero → Experience → Projects → Skills → Contact, `gap-20 md:gap-28`, each section opened by a full-width hairline.
- Hero: portrait (96px) + role in the margin; headline, lede and a three-column definition list (Now / Stack / Elsewhere) in the column.
- Blog index: title in the margin, entries as ruled rows with a small 4:5 thumbnail on the right.
- Post: single 65ch column; italic standfirst; related posts as ruled rows.

## 5. Shape & depth

- Radius `0.375rem`, used only on images and focus rings.
- No shadows, no filled surfaces. Separation is hairline rules (`divide-y`, `border-t`) and whitespace.

## 6. Interaction

- `.ink-link`: underline at 35% ink, full ink on hover.
- Blog entry titles underline on hover; the whole row is the link.
- `prefers-reduced-motion` disables the opening fade.

## 7. Accessibility

- Body contrast ≥ 12:1 (day) and ≥ 11:1 (night); muted text ≥ 4.5:1.
- Visible `focus-visible:ring-2` on links and buttons; `aria-expanded` on "See more".
