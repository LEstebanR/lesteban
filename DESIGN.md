# Design System Inspired by Apple

## 1. Visual Theme & Atmosphere

Apple's web language is a precision editorial system that alternates between gallery-like calm and retail-density information blocks. The visual tone stays restrained: broad neutral canvases, quiet chrome, and product imagery given almost all of the expressive weight. The interface is engineered to disappear so hardware, materials, and finish options become the narrative foreground.

Across the five analyzed pages, the rhythm is consistent but not monolithic. Marketing surfaces (homepage and Environment) use cinematic black-and-light chaptering, while commerce surfaces (Store and Shop flows) introduce tighter spacing, more utility controls, and denser card stacks without breaking the core brand grammar. The result is one system with two gears: showcase mode and transaction mode.

Typography is the stabilizer. SF Pro Display carries hero and merchandising hierarchy with compact line heights and controlled tracking, while SF Pro Text handles product metadata, navigation, filters, and dense selection UI. The typography stays understated, but the scale range is wide enough to support both billboard hero messaging and micro utility labels.

**Key Characteristics:**
- Binary section rhythm: light canvases (`#ffffff`, `#f8f8f8`) in light mode alternating with deep dark surfaces (`#181818`, `#292929`) in dark mode
- Navy-to-teal action family for action and link semantics (`#134686`, `#0089d0`, `#568de9`); coral secondary accent (`#f05461`) for brand highlights
- Dual operating modes in one system: cinematic showcase modules and dense commerce configurators
- Heavy reliance on imagery and material finishes; UI chrome remains visually thin
- Tight headline metrics (SF Pro Display, semibold) paired with compact body/link typography (SF Pro Text)
- Pill and capsule geometry as signature action language (`18px` to `980px` and circular controls)
- Depth used sparingly; contrast and surface separation do most of the layering work
- Multi-page color-block rhythm: black hero chapters -> pale neutral merchandising fields -> utility white retail surfaces -> dark micro-surfaces for controls

## 2. Color Palette & Roles

> **Source:** CSS custom properties defined in `app/globals.css` (Tailwind CSS v4 OKLCH tokens, converted to sRGB hex for reference)

### Primary (Light Mode)
- **Pure White** (`#ffffff`): Main page background and product list surfaces.
- **Near-White Canvas** (`#f8f8f8`): Cards, muted areas, and subtle elevated surfaces in light contexts.
- **Dark Charcoal** (`#3a3a3a`): Primary text and dark-fill control color on light canvases.

### Primary (Dark Mode)
- **Deep Background** (`#181818`): Main dark mode canvas, immersive section backgrounds, deep UI anchors.
- **Elevated Card** (`#292929`): Card and raised surface step in dark mode.
- **Near-Black Popover** (`#030303`): Deepest dark layer for popovers and maximum-contrast elements.
- **Light Foreground** (`#eeeeee`): Primary text on dark canvases.

### Action & Brand Accent
- **Navy Primary** (`#134686`): Primary action fill and brand anchor in light mode.
- **Bright Blue Primary** (`#568de9`): Primary action color in dark mode; high-luminance interactive treatment.
- **Sky Blue Accent** (`#0089d0`): Inline links and accent treatment for mid-contrast contexts.
- **Coral Secondary** (`#f05461`): Brand secondary accent for highlights, decorative emphasis, and secondary actions.
- **Teal Focus Signal** (`#008994`): Ring/focus state and keyboard navigation emphasis across both modes. Dark mode variant: `#0099a3`.

### Surface & Utility
- **Dark Muted Surface** (`#161616`): Muted and bordered dark surfaces; tight dark utility containment.
- **Dark Input** (`#0b0b0b`): Form field backgrounds in dark mode.

### Neutrals & Text
- **Muted Foreground** (`#636363`): Body secondary copy, helper descriptions, tertiary metadata in light mode.
- **Medium Gray** (`#808080`): Secondary text and muted content in dark mode.
- **Light Border** (`#dedede`): Dividers, subtle outlines, and field containment in light mode.
- **Dark Border** (`#161616`): Dividers and outlines in dark mode.

### Semantic & Chart
- **Selection/Focus Signal** (`#134686` / `#008994`): Shared focus and selected-state signal; navy in action contexts, teal in ring/outline contexts.
- **Destructive Red** (`#e7000b`): Error states, destructive actions, and warning signals.
- **Amber** (`#e18528`): Warning-adjacent chart and accent highlight color. Dark mode variant: `#f2943c`.
- **Teal Chart** (`#008994`): Chart accent 1 and teal data series.
- **Blue Chart** (`#0089d0`): Chart accent 2 and blue data series.

### Gradient System
- The interface is predominantly solid-surface driven. Visual richness comes from photography and component layering rather than persistent UI gradients.

## 3. Typography Rules

### Font Family
- **Display Family:** `SF Pro Display`, fallbacks `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Text Family:** `SF Pro Text`, fallbacks `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Usage Split:** Display family handles hero/product headlines and merchandising headings; Text family handles navigation, controls, labels, and dense commerce copy.

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Display XL | 80px | 600 | 1.00-1.05 | -1.2px | Environment/store hero scale |
| Hero Display L | 56px | 600 | 1.07 | -0.28px | Homepage hero moments |
| Section Display | 48px | 500-600 | 1.08 | -0.144px | Major chapter headings |
| Product Heading | 40px | 600 | 1.10 | normal | Product and campaign section titles |
| Feature Display | 38px | 600 | 1.21 | 0.152px | Device and merchandising callouts |
| Promo Display | 32px | 300-600 | 1.09-1.13 | 0.128px to 0.352px | Module-level sub-heroes |
| Card/Product Title | 28px | 600 | 1.14 | 0.196px | Tile-level naming and key copy |
| Utility Heading | 24px | 600 | 1.17 | 0.216px / -0.2px | Configurator and grouped content headers |
| Link/Action Heading | 21px | 600 | 1.14-1.38 | 0.231px | Larger promotional links |
| Subhead | 19px | 600 | 1.21 | 0.228px | Compact section intros |
| Body Primary | 17px | 400 | 1.47 | -0.374px | Standard body and retail descriptions |
| Body Emphasis | 17px | 600 | 1.24 | -0.374px | Emphasized labels and key values |
| Control Label | 14px | 400-600 | 1.29-1.47 | -0.224px | Buttons, helper labels, compact nav text |
| Micro UI | 12px | 400-600 | 1.00-1.33 | -0.12px | Fine print, micro labels |
| Legal/Meta | 10px | 400 | 1.30-1.47 | -0.08px | Dense metadata and legal support text |

### Principles
- **Continuity across page types:** The same typographic DNA spans cinematic launches and product-purchase flows, preventing a brand split between marketing and commerce.
- **Compression at scale:** Display tiers use tight leading and controlled tracking to feel machined and product-first.
- **Readable density at retail depth:** SF Pro Text balances compactness with enough vertical rhythm for long product lists and option matrices.
- **Measured weight ladder:** 600 is the dominant emphasis weight; 700 appears selectively; 300 is used sparingly for contrast in larger lines.

### Note on Font Substitutes
- Closest freely available substitutes: `Inter` for text-heavy implementation and `SF Pro Display-like` metrics approximated with `Inter Tight` for headings.
- When substituting, increase line-height slightly (+0.02 to +0.06) on body sizes and reduce negative tracking intensity to preserve readability.

## 4. Component Stylings

### Buttons
- **Primary Fill Action:** `#134686` background, `#ffffff` text, 8px radius, compact horizontal padding (commonly 8px 15px). Dark mode: `#568de9` background. Used for decisive purchase/progression actions.
- **Dark Fill Action:** `#3a3a3a` background, `#ffffff` text, 8px radius. Used when light surfaces need a restrained high-contrast primary.
- **Pill/Capsule Action Family:** large capsule actions at `18px`-`56px` radii and extreme pill links at `980px`. Establishes the soft but precise call-to-action silhouette.
- **Utility Filter/Button Shells:** light shells (`#f8f8f8` or translucent white) with subtle gray borders (`#dedede`) for dense configuration contexts.
- **Pressed Behavior:** active controls commonly reduce scale or shift fill slightly to indicate physical press confirmation.

### Cards & Containers
- **Editorial/Product Cards:** light cards on `#f8f8f8` or white fields with minimal framing and image-first composition.
- **Dark Utility Cards:** dark steps (`#292929` to `#161616`) used for overlays, media controls, and dark-context modules.
- **Configurator Panels:** rounded containers (often 12px-18px) with clear but restrained border definition.
- **Carousel/Spotlight Modules:** larger rounded shells (`28px`-`36px`) for featured content lanes.

### Inputs & Forms
- **Retail Input Fields:** translucent or white backgrounds (`#f8f8f8`), dark text (`#3a3a3a`), border-led containment (`#dedede`).
- **Selection Controls:** circular/toggle-like control geometry appears frequently in product selection interfaces.
- **Density Strategy:** form fields remain visually quiet to keep device imagery and pricing hierarchy dominant.

### Navigation
- **Global Marketing Nav:** compact dark translucent bar with small-type links and restrained iconography.
- **Store/Sub-shop Nav Layers:** additional utility bars, chips, and segmented controls for category and product narrowing.
- **Link Hierarchy:** link blues remain the primary interactive signal while neutral text supports dense navigation sets.

### Image Treatment
- **Object-First Photography:** hardware and accessories are foregrounded on controlled solid surfaces.
- **High-fidelity finish rendering:** reflective/material details are central to visual persuasion.
- **Mixed framing:** full-bleed hero scenes coexist with rounded retail cards and tightly cropped merchandising thumbnails.

### Other Distinctive Components
- **Product Configurator Matrix:** option stacks and selectors combining chips, radio-style controls, and contextual pricing/summary blocks.
- **Carousel Control Dots/Arrows:** circular control vocabulary in muted overlays for gallery progression.
- **Environment Story Panels:** narrative chapters that blend editorial typography with cinematic product/environment visuals.

## 5. Layout Principles

### Spacing System
- Base unit is effectively `8px`, but the system supports dense micro-steps for precision alignment.
- Frequently reused spacing values across pages: `2`, `4`, `6`, `7`, `8`, `9`, `10`, `12`, `14`, `17`, `20` px.
- Universal rhythm constants visible across both marketing and retail flows: `8px` unit scaffolding with `14-20px` utility intervals for component padding and list spacing.

### Grid & Container
- **Showcase pages:** large central columns with broad horizontal breathing room and full-width color chapters.
- **Commerce pages:** tighter multi-column product and control grids with frequent modular stacking.
- **Container behavior:** constrained readable core with generous outer margins at desktop widths.

### Whitespace Philosophy
- **Scene pacing:** major visual chapters use broad top/bottom breathing room.
- **Information compaction where needed:** retail pages deliberately compress spacing to expose more actionable information per viewport.
- **Contrast-led separation:** section transitions rely more on surface changes than decorative separators.

### Border Radius Scale
- **5px:** tiny utility links/tags and minor small shells.
- **8px-12px:** standard controls and compact fields.
- **16px-18px:** cards, module frames, and commerce panels.
- **28px-36px:** larger module and spotlight containers.
- **56px / 100px / 980px:** capsules, large pills, and signature elongated CTA forms.
- **50%:** circular media and selection controls.

## 6. Depth & Elevation

| Level | Treatment | Use |
|------|-----------|-----|
| Level 0 | Flat neutral surfaces (`#ffffff`, `#f8f8f8` / dark: `#181818`) | Main narrative and product stages |
| Level 1 | Subtle border containment (`#dedede` / dark: `#161616`) | Filters, input fields, utility cards |
| Level 2 | Soft shadow (`rgba(0,0,0,0.08)` to `rgba(0,0,0,0.22)` where present) | Highlighted cards and elevated merchandise modules |
| Level 3 | Dark-surface stepping (`#292929` → `#161616` → `#030303`) | Overlays, media controls, dark utility clusters |
| Accessibility | Navy/teal focus signal (`#134686` / `#008994`) | Keyboard and selection emphasis |

Depth is intentionally restrained. Apple favors tonal contrast, surface stepping, and compositional hierarchy over heavy shadow stacks.

### Decorative Depth
- Decorative depth is primarily created by photographic realism and material rendering, not synthetic UI effects.
- Translucent overlays and glass-like utility bars provide mild atmospheric layering in navigation and controls.

## 7. Do's and Don'ts

### Do
- Use the neutral foundation (`#ffffff`, `#f8f8f8` / dark: `#181818`, `#292929`) as the structural foundation.
- Reserve blue accents for genuine action and navigation semantics.
- Keep typography tight and deliberate, especially at display scales.
- Maintain the capsule/circle geometry language for controls and key actions.
- Let product imagery carry visual drama; keep chrome understated.
- Use border-led containment in dense retail contexts instead of heavy card ornamentation.
- Preserve clear separation between showcase modules and transactional modules while keeping core tokens shared.

### Don't
- Don’t introduce additional accent palettes beyond navy primary (`#134686`), sky blue accent (`#0089d0`), and coral secondary (`#f05461`).
- Don’t overuse shadows, glow effects, or decorative gradients in core UI chrome.
- Don’t mix unrelated font families or loosen tracking indiscriminately.
- Don’t flatten all corners to a single radius; Apple uses purposeful radius tiers.
- Don’t overload commerce modules with thick borders or loud visual effects.
- Don’t remove neutral contrast cadence between dark and light chapters.
- Don’t treat marketing and purchase flows as separate design systems.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | 374px and below | Tightened retail controls, single-column product stacks |
| Mobile | 375px-640px | One-column modules, compact action rows, condensed selectors |
| Tablet | 641px-833px | Expanded cards and mixed 1-2 column transitions |
| Tablet Wide | 834px-1023px | More stable multi-column merchandising, larger text blocks |
| Desktop | 1024px-1240px | Full retail layouts and product comparison structures |
| Desktop Wide | 1241px-1440px | Marketing hero expansion and broader section spacing |
| Large Desktop | 1441px+ | Maximum chapter breathing room and wide editorial composition |

### Touch Targets
- Primary and secondary actions are generally presented in tap-friendly pill/button geometries.
- Circular media and selection controls align with minimum touchable intent in mobile contexts.
- Dense commerce UI uses compact labels but maintains clear hit regions via surrounding shape padding.

### Collapsing Strategy
- Marketing hero typography scales down in discrete tiers while preserving hierarchy contrast.
- Product and commerce grids collapse from multi-column to stacked cards with persistent selector visibility.
- Utility navigation compresses into simpler link/control groupings while preserving key actions.
- Option/configuration clusters become vertically sequenced to keep purchase flow linear on small screens.

### Image Behavior
- Product imagery preserves aspect and centrality through breakpoints.
- Hero visuals remain dominant on mobile, with text repositioned around media priority.
- Retail thumbnails stay legible via tighter crop logic and denser card stacking.
- Image-led modules continue to anchor the rhythm as layout density increases.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (light mode): **Navy Primary** (`#134686`)
- Primary action (dark mode): **Bright Blue** (`#568de9`)
- Inline link / accent: **Sky Blue** (`#0089d0`)
- Secondary brand accent: **Coral** (`#f05461`)
- Focus / ring signal: **Teal** (`#008994`)
- Dark mode canvas: **Deep Background** (`#181818`)
- Light mode canvas: **Near-White Canvas** (`#f8f8f8`)
- Primary text (light): **Dark Charcoal** (`#3a3a3a`)
- Primary text (dark): **Light Foreground** (`#eeeeee`)
- Secondary text: **Muted Foreground** (`#636363`)
- Border (light): **Light Border** (`#dedede`)
- Destructive / error: **Destructive Red** (`#e7000b`)

### Example Component Prompts
- "Design a product hero on a dark canvas (`#181818`) with Space Grotesk semibold headline (48-56px), concise supporting copy, and two capsule CTAs using `#568de9` and `#f05461`."
- "Create a configuration panel on white (`#ffffff`) with 18px rounded cards, `#dedede` border fields, DM Sans 17px body copy, and compact option selectors."
- "Build a card grid alternating `#f8f8f8` and white surfaces, with image-first cards, restrained shadows, and 14-17px DM Sans metadata."
- "Generate a carousel control cluster using circular buttons (50% radius), muted gray overlays, and clear active feedback for gallery navigation."
- "Compose a mixed marketing + editorial page rhythm: dark showcase chapter (`#181818`) -> light feature chapter (`#f8f8f8`) -> dense card module while keeping navy/teal accents only for actions and links."

### Iteration Guide
1. Lock the neutral foundation first (`#ffffff`, `#f8f8f8` / dark: `#181818`, `#292929`) before tuning accents.
2. Keep blue accents scarce and purposeful; if everything is blue, hierarchy collapses.
3. Tune typography in this order: display scale, body readability, then micro labels.
4. Match radius by component class (field, card, capsule, circle) rather than one-size-fits-all rounding.
5. Increase density gradually when moving from showcase sections to commerce sections.
6. Validate that product imagery remains the strongest visual layer after each revision.

### Known Gaps
- Destructive/error is defined (`#e7000b`); success and warning tokens are not explicitly defined — use amber (`#e18528`) for warning-adjacent states and derive success from a compatible green if needed.
- Some interaction micro-states vary by module and are not represented as universal system tokens.
- A few modules expose context-specific typography overrides that do not appear as shared system tokens.
