# Design System — Trailhead

> The portfolio as a topographic trail map. Luis runs mountain marathons and
> builds software in Colombia; the career is a route climbing from the valley
> (first job) to the summit (now). Map paper, contour lines, trail blazes,
> park signage — calm, outdoorsy and unmistakably personal.

## 1. Principles

1. **The map is the story.** The hero's route passes real waypoints (Nominapp → DevPeoplz → Aleluya) and ends at a flagged summit labelled with the current role.
2. **Signage, not UI.** Section headings carry a painted trail blaze; projects are forest trail signs; contact is a signpost with arrows.
3. **One accent that means "the path".** Blaze orange (day) / headlamp amber (night) is used only for the route, blazes, waypoints and primary actions. Water blue is for links.
4. **Data looks like map data.** Overpass Mono only for coordinates, dates and tags.

## 2. Color (OKLCH tokens in `app/globals.css`)

| Token                           | Day map                             | Night map                            | Role                                          |
| ------------------------------- | ----------------------------------- | ------------------------------------ | --------------------------------------------- |
| `--background`                  | `oklch(0.965 0.014 125)` sage paper | `oklch(0.2 0.03 235)` navy           | Page                                          |
| `--foreground`                  | `oklch(0.27 0.045 160)` forest ink  | `oklch(0.93 0.02 100)`               | Text                                          |
| `--primary`                     | `oklch(0.64 0.19 40)` blaze orange  | `oklch(0.79 0.15 68)` headlamp amber | Route, blazes, waypoints, CTAs                |
| `--secondary`                   | `oklch(0.34 0.055 160)` forest sign | `oklch(0.3 0.04 200)`                | Sign panels, footer                           |
| `--water` (`text-water`)        | `oklch(0.5 0.11 235)`               | `oklch(0.76 0.1 225)`                | Links (`.trail-link`)                         |
| `--contour` / `--contour-index` | sage greys                          | slate blues                          | Contour lines (every 4th is an index contour) |

## 3. Typography

| Role                         | Family                                      | Usage                                                                     |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------------------- |
| `font-heading` / `font-sans` | **Overpass** (highway/park signage lineage) | Name `clamp(3.25rem,10vw,7.5rem)` 900; headings 36–48px 900; body 16–18px |
| `font-mono`                  | **Overpass Mono**                           | Coordinates, dates, tags, waypoint labels                                 |

## 4. Layout

- Container `max-w-6xl`, gutters `px-4 md:px-8`; content left-aligned.
- Home: Hero map → Experience (route log) → Projects (trail signs) → Skills (gear checklists) → Contact (signpost).
- `components/trail-map.tsx`: full-bleed SVG — two procedurally generated peaks (`lib/topo.ts`, deterministic) and the career route.
- `components/blaze-heading.tsx`: section heading with blaze.
- Experience: `.rail-route` dashed rail with ring waypoints; the current role is filled.

## 5. Shape

- Radius `0.5rem`; signs `rounded-xl` with an inner routed border; signpost arrows are `clip-path` polygons.
- No drop shadows. Separation via dashed rules (trails) and tonal panels.

## 6. Motion

| Piece                 | Behaviour                                                  |
| --------------------- | ---------------------------------------------------------- |
| `.route`              | The hero trail draws itself on load (2.6s, `pathLength=1`) |
| `.waypoint`           | Waypoints pop in along the route, summit flag last         |
| `.beacon`             | The summit marker pulses like a GPS fix                    |
| `.terrain`            | Contours breathe very slowly (26s)                         |
| `.rail-route::before` | Experience route draws down as you scroll (scroll-driven)  |
| `.arrive`             | Experience entries walk in from the left (scroll-driven)   |
| `.sign-arrow`         | Signpost arrows swing on their pivot on hover/focus        |
| Trail signs           | Lift slightly on hover, the summit glyph rises             |

`prefers-reduced-motion`: terrain, beacon, waypoints and scroll-driven effects are static; the route appears fully drawn.

## 7. Accessibility

- Map SVG is `aria-hidden`; every fact it shows (companies, current role) is also in the Experience section.
- Forest ink on sage ≥ 11:1; cream on forest signs ≥ 10:1; blaze orange is never used for body text.
