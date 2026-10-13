---
name: Rota Ventures
description: Flat hairline-ruled industrial leasing site — white paper, near-black ink, one leaf-green instrument accent, glass nav, pill controls.
colors:
  paper: "#ffffff"
  ink: "#0b0b0c"
  ink-soft: "#4d525a"
  tone: "#8e939c"
  accent: "#44821f"
  accent-ink: "#44821f"
  line: "#e4e6e9"
  line-strong: "#b9bdc4"
  chip: "#f1f2f4"
  chip-hover: "#e7e9ec"
  pill-ink-bg: "#0b0b0c"
  pill-ink-fg: "#ffffff"
  field-bg: "#0b0b0c"
  field-ink: "#ffffff"
  field-soft: "#b9bdc4"
  field-line: "#26282c"
  field-logo: "brightness(0) invert(1)"
  bar-before: "#b9bdc4"
typography:
  display:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 1rem + 6.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  display-sm:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3.4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "normal"
rounded:
  pill: "999px"
  photo-card: "20px"
  notch-tab: "28px"
  structural: "0"
spacing:
  pad: "clamp(1.25rem, 3.2vw, 4rem)"
  band-top: "clamp(3rem, 5vw, 4.5rem)"
  band-bottom: "clamp(5rem, 9vw, 8.5rem)"
  cell: "clamp(2rem, 4vw, 3.5rem)"
components:
  nav-chip:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  nav-chip-current:
    backgroundColor: "{colors.pill-ink-bg}"
    textColor: "{colors.pill-ink-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  cta-pill:
    backgroundColor: "{colors.pill-ink-bg}"
    textColor: "{colors.pill-ink-fg}"
    typography: "{typography.label}"
    textTransform: "uppercase"
    letterSpacing: "0.08em"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  circle-btn:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "clamp(56px, 6vw, 76px)"
    height: "clamp(56px, 6vw, 76px)"
  icon-badge:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "46px"
    height: "46px"
  about-proof:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  field-input:
    textColor: "{colors.field-ink}"
    typography: "{typography.label}"
    padding: "8px 0"
---

# Design System: Rota Ventures

## Overview

**Creative North Star: "The Instrument Sheet"**

The Rota Ventures home page is one continuous, hairline-ruled sheet of white paper carrying near-black ink. Nothing floats on shadow; nothing glows. Sections are cut apart by 1px full-bleed rules, columns by vertical rules, and the page closes on one continuous dark ink field — contact band, footer, marquee. The single leaf green (#44821f) behaves like a measurement instrument: it marks the number, the eyebrow, the dot, the arrow — never a wall of colour.

Density is generous but calm: display type at up to 6rem, stat figures at up to 9.5rem, tall section bands whose height comes from bottom padding, and large breathing room inside full-bleed cells. Controls are pills and perfect circles — nothing else gets a radius. The world is an adaptation of the pinned EcoVolt study (design-guidelines/design-system.json, original design by Irfanaffian for One Week Wonders), tuned to WCAG AA and adjusted by client direction: a glass header bar with a bare logo and a centred menu, single-pill CTAs (no companion circle), and an about split that keeps the eyebrow, the long stat headline, and a stacked proof badge beside the restored stat instrument and before/after chart. The brief's grey second tone #b9bdc4 survives as borders and dark-field secondary text; on white it is replaced by darker greys for text, because #b9bdc4 on white fails contrast at every text size.

**Scope:** this system documents the home page world (`index.html` + `css/home.css` + `js/home.js`). The other 10 pages remain on the legacy stylesheet and are out of scope.

**Key Characteristics:**
- One continuous full-bleed sheet: no margins anywhere, 1px rules between sections and columns, content inset by padding only, hard-capped at 1800px.
- Zero elevation: no shadows, no gradients, anywhere — the header sits on a glass bar (translucency + blur + hairline), not a shadow.
- Two-tone Space Grotesk 500 display headlines: one deliberate grey drop per headline, never bold, never all-caps.
- Green as instrument: accent ink and fills on numbers, eyebrows, arrows, dots, dashes and badges; green stays the only colour "past zero."
- Single-pill CTAs; band navigations use ghost circle buttons with a diagonal arrow.
- Dashed measurement rings with badges overlapping the ring's base by half their own height.
- One continuous dark field closing the page: contact band, footer, marquee — no rule between them.
- Both themes ship; dark blocks invert in dark mode.

## Colors

The palette is paper white, near-black ink, one leaf-green instrument accent, and a ladder of cool greys. Every token is a CSS custom property defined on `:root` in `css/home.css` and re-mapped under `[data-theme="dark"]`; the values below are the light-theme canon and the frontmatter is normative for them. Dark-theme values are recorded in `.impeccable/design.json` (`colorMeta.<token>.darkValue`).

### Primary

- **Leaf Green / `accent`** (#44821f): the single instrument accent. The About eyebrow text, icon-badge dots, filled about badge, ring badges, the after-value marks, selection highlight, focus outlines, caret colour, marquee separators, open-FAQ icon fill. Identical in both themes. Never used as a large background field. Sourced from the brand mark's leaf cluster (`logo.png`, #6db944), darkened one step to pass AA as text on white.
- **Accent Ink / `accent-ink`** (#44821f light / #6db944 dark): the readable variant of green reserved for text-scale uses — the About eyebrow, error form status, hovered product links, the current page in the mobile menu. In dark mode it lifts to the brand leaf #6db944 for contrast on near-black. The `.field` re-scopes it the other way: #85bf55 while the field is dark (light theme), #3d7419 once the field inverts to light in dark mode.

### Secondary

None. The system deliberately has exactly one hue. Where the brief pinned a grey "second voice", it exists as `tone` (see Neutral).

### Neutral

- **Paper / `bg` / `paper`** (#ffffff; dark #0b0b0c): page ground. Sections are full-bleed paper; rules sit on it.
- **Ink / `ink`** (#0b0b0c; dark #ffffff): primary text, headline first tone, `pill-ink-bg` fill, stat unit, avatar one, scrollbar context.
- **Ink Soft / `ink-soft`** (#4d525a; dark #b4b8bf): the working secondary voice — body copy in cells, ring copy, nav chip labels, hero sub-line, storyline, proof captions. Passes AA at body size in both themes.
- **Display Tone / `tone`** (#8e939c; dark #b9bdc4): the grey drop inside display headlines only (`<em class="tone">`). Large-text-only token — see the named rule below. Never for body copy, labels, or anything below display scale.
- **Rule / `line`** (#e4e6e9; dark #26282c): the standard 1px hairline between sections, columns, cells, process rows, FAQ items, and the glass bar's bottom edge.
- **Rule Strong / `line-strong`** (#b9bdc4; dark #3a3d42): the stronger hairline — chart baseline, dashed ring stroke, outlined circle controls, icon badges, the 4th avatar's border. This is where the brief's pinned #b9bdc4 grey landed after the AA pass.
- **Chip / `chip`** (#f1f2f4; dark #17181b) and **Chip Hover / `chip-hover`** (#e7e9ec; dark #202226): reserved hover fills for nav chips; avatar two uses `chip`.
- **Pill Ink BG / FG / `pill-ink-bg` / `pill-ink-fg`** (#0b0b0c on #ffffff; dark #b9bdc4 on #0b0b0c): the solid "current page" nav pill, every CTA pill, the skip link. In dark mode the solid pill becomes silver. Inside the closing field the pill re-scopes to `field-ink`/`field-bg` so it keeps its silhouette on the field ground.
- **Field BG / Ink / Soft / Line / `field-bg` / `field-ink` / `field-soft` / `field-line`**: the closing dark field's internal palette. Light theme: #0b0b0c ground, white ink, #b9bdc4 secondary, #26282c internal rules. Dark theme the whole field inverts to #f4f5f7 / #0b0b0c / #4d525a / #dcdfe3.
- **Bar Before / `bar-before`** (#b9bdc4; dark #3a3d42): the "before" series in the before/after chart — grey, because only the after-value is green.
- **Field Logo Filter / `field-logo`**: not a colour but a token — `brightness(0) invert(1)` (knock the footer logo white) in light theme, `brightness(0)` (knock it black) in dark. The footer logo runs through this filter.

### WCAG AA adaptations (as built)

- **#8e939c at large sizes only.** The brief pinned #b9bdc4 as the headline's second tone; on white it fails AA even at 3:1 large-text. The as-built compromise: display drops use #8e939c (~3.1:1, valid for the ≥24px display sizes it appears at), and #b9bdc4 is demoted to non-text work — borders, the dashed ring. In dark theme `tone` becomes #b9bdc4 on #0b0b0c, which passes easily.
- **Field-scoped accent ink.** Where green approaches reading size on dark ground it shifts to #85bf55 (accent-ink) so status text stays ≥4.5:1 on near-black; in dark theme, where the field is light, `.field` returns it to #3d7419.
- **Body-secondary at AA body size.** All secondary prose uses `ink-soft` (#4d525a light / #b4b8bf dark), not the tone grey. Process copy, FAQ answers, storyline, captions: all `ink-soft`.
- Visible focus: 2px `accent` outline, 3px offset, 2px radius, globally on `:focus-visible`. Inside the contact form, fields swap their underline to `accent` instead.

### Named Rules

**The Green Past Zero Rule.** Green is the only colour allowed "past zero" — it marks measured, positive values: the eyebrow, the 55% figure, arrows, dots, badges. Everything else is ink or grey on paper. If a second hue appears, the instrument metaphor is broken.

**The Large-Text Grey Rule.** `tone` (#8e939c) exists only inside display headlines. Body-scale grey text is always `ink-soft`. The pinned #b9bdc4 never renders as text on light ground — it is a border/rule colour.

**The One Accent Rule.** One hue (#44821f/#6db944), used on ≤10% of any viewport: the eyebrow, numbers, dots, dashes, one open accordion icon, one filled badge.

## Typography

**Display Font:** Space Grotesk (weight 500 only; fallback "Segoe UI", sans-serif)
**Body Font:** Instrument Sans (400/500/600; fallback "Segoe UI", sans-serif)

**Character:** A grotesk that reads like engraved instrument labels (Space Grotesk 500, tight-tracked, sentence case) over a quiet humanist body (Instrument Sans). Hierarchy comes from scale, tabular numerals, and the grey two-tone drop — never from weight or case.

### Hierarchy

- **Display** (Space Grotesk 500, clamp(2.75rem, 1rem + 6.2vw, 6rem), line-height 1.04, tracking −0.04em): the hero H1 only. Carries exactly one grey drop (`<em class="tone">`, font-style normalised). Splits word-by-word for the rise animation.
- **Display SM** (Space Grotesk 500, clamp(2rem, 1rem + 3.4vw, 3.5rem), 1.04, −0.035em): the about stat headline and every section band headline — always with one grey drop; also the mobile-menu links at clamp(1.6rem, 7vw, 2.4rem), −0.03em.
- **Title** (Space Grotesk 500, clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem), −0.035em): engineering-row and process-row H3s; product cells run slightly smaller at 1.1875rem/−0.025em/1.2; FAQ questions clamp(1.125rem, 1.5vw, 1.375rem), line-height 1.35.
- **Body** (Instrument Sans 400, clamp(1rem, 0.95rem + 0.3vw, 1.125rem), line-height 1.6): paragraphs capped at 68ch (`p { max-width: 68ch }`); hero sub-line 46ch; cell prose runs at the 0.875rem small size with `ink-soft`.
- **Label** (Instrument Sans 500/600, 0.875rem): nav chips (500), ring labels and arrow links (600), form labels (0.8125rem 500), proof captions, footer text. No letterspacing, no uppercase anywhere — the single exception is the CTA pill, which runs uppercase with 0.08em tracking (client-pinned).
- **Instrument numerals**: every number that counts is Space Grotesk 500 with `font-variant-numeric: tabular-nums` and −0.02 to −0.04em tracking — ring values clamp(2rem, 3.5vw, 3rem), about proof figures, process numbers 0.875rem.

### Named Rules

**The 500 Rule.** Space Grotesk ships at weight 500 only — the font request loads a single weight and every heading sits there. Never bold, never all-caps; hierarchy is scale plus the grey drop.

**The One Drop Rule.** Exactly one grey drop (`tone`) per headline, carrying the non-essential phrase ("financing reality.", "not the asset."). Two drops or an all-grey headline is a defect.

## Layout

The page is a single full-bleed sheet. There are **no margins anywhere** (`* { margin: 0 }`): sections touch, separated only by `border-top: 1px solid var(--line)` (the hero omits its top rule). Content is inset from inside padding via `.shell { max-width: 1800px; margin-inline: auto; padding-inline: var(--pad) }` with `--pad: clamp(1.25rem, 3.2vw, 4rem)`. Rules run edge to edge; only contents are padded.

**Primitives as built:**
- `.shell` — the 1800px capped, pad-inset container. Everything centred lives in one.
- **Full-bleed rows cut by vertical rules:** the leasing row is `repeat(3, minmax(0,1fr)) minmax(0,1.15fr)` with `border-left` on cells; engineering is `1fr 1fr` with an internal rule; the product grid is 3 columns whose cells carry top+left hairlines (nth-child strips the outer edges). Cells are not cards — no background, no radius.
- **About split:** one grid (`minmax(0,5fr) / minmax(0,4fr)`) with `border-right` on the copy cell. Left: eyebrow ("About Us", accent) → two-tone stat headline → storyline paragraphs + arrow link → stacked proof badge (icon above caption). Right: the stat instrument over the before/after chart.
- **Heading bands** (`.band`): tall full-bleed strips with the title and a circular button pinned to the **top**; height comes from bottom padding (`--gap-band-top: clamp(3rem, 5vw, 4.5rem)` top, `--gap-band-bottom: clamp(5rem, 9vw, 8.5rem)` bottom).
- **Process rows:** a 3-column baseline-aligned grid — number clamp(4rem, 8vw, 8rem) / title max 22rem / copy 1fr — with hairlines between rows, wrapped in `.shell`.
- **Closing dark field:** `.field` wraps the contact band, footer, and marquee as one block; internal section borders are suppressed (`border-top: 0`) so the three read as one continuous ink surface. Only the footer's own bottom bar gets an internal hairline (`--field-line`).

**Responsive (as built):**
- ≤1200px: nav chips except the current one hide.
- ≤1080px: burger appears, all nav chips hide (full-screen menu takes over), footer grid drops to 2 columns.
- ≤900px: about/rings/engineering collapse to single column and their vertical rules flip to horizontal `border-top`; **every collapsing cell re-applies the container's `--pad` inset**; product grid 2-up with rebuilt edge rules; process rows re-grid to `num | title / num | copy` areas; photo ratio 21/9 → 16/9.
- ≤720px: hero-foot stacks; product grid and footer go single column; band headlines cap at 14ch; hero clears the 76px glass bar at 9rem top padding.

## Elevation & Depth

This system is **flat by doctrine: zero elevation.** There is not one `box-shadow` and not one gradient in the shipped CSS. Depth is conveyed by four devices instead:

1. **Hairlines** — 1px `line`/`line-strong` rules cutting the sheet horizontally and vertically, including the glass bar's bottom edge.
2. **Solid blocks** — the dark closing field, the full-screen mobile menu, the tinted about band, and the solid ink pill; blocks, not shadows, do the figure/ground work.
3. **Tonal fills** — the `chip`/`chip-hover` hovers on nav chips and theme toggle.
4. **Translucency + blur** — the header is a full-width glass bar: `color-mix(in srgb, var(--bg) 72%, transparent)` with `backdrop-filter: blur(16px) saturate(1.4)` and a 1px bottom border, so content scrolls visibly behind it. That blur is the only depth cue that could be mistaken for elevation, and it is paired with an explicit border, never a shadow.

### Named Rules

**The Flat Sheet Rule.** No shadows, no gradients, ever — not under the header, not on hover, not on cards. If a design needs a shadow, it needs a rule or a block instead.

## Shapes

The form language is **pills, perfect circles, and bare blocks.**

- **Pills (999px):** every CTA pill, nav chips, the skip link, the scrollbar thumb. Any elongated control is a pill; CTAs are single pills with no companion ornament.
- **Perfect circles (999px):** band circle buttons (clamp(56px, 6vw, 76px)), icon badges (46px), the FAQ plus-icon (40px), the theme toggle (40px), avatars (34px), ring badges (52px).
- **Photo cards only: 20px radius.** The `.wipe` figure (hero wide card, engineering media) is the one place a large radius appears — ~16–26px per the brief, built at 20px.
- **Notch tab: 28px bottom corners.** The hero photo card's centred CTA tab (`.shot-cta`) rounds only its bottom two corners at 28px — enough side run for the inverted fillets to join tangentially.
- **Structural blocks carry no radius at all.** Sections, cells, bands, the closing field: square corners, hairline edges.
- **Dashed measurement rings:** an SVG circle (viewBox 280×280, r=130, stroke 1.5, `stroke-dasharray: 3 8`, round linecap) in `line-strong`; the centred value sits inside; a 52px accent badge overlaps the ring's base by exactly half its own height (`bottom: 0; transform: translateY(50%)`).
- **Icon badge dot:** product-grid icon badges carry a 7px accent dot pinned at their top-right (`top: -1px; right: -1px`) via `::after`. The filled about badge suppresses the dot (`display: none`) — a filled circle carries no second mark.
- **Underline-only inputs:** footer fields are borderless except a 1px bottom rule; no radius, no box.

## Motion

Calm, staggered, precise — built on vendored GSAP + ScrollTrigger (reveal choreography), Lenis (smooth scroll, `duration: 1.05`, anchors offset −90px, raf-synced with ScrollTrigger), and Motion (press springs). Elements arrive at partial opacity and slightly under-scale, settle, and never slide far. Everything runs once; nothing loops except the marquee. CSS transitions ride `--ease: cubic-bezier(0.22, 1, 0.36, 1)` with `--dur: 560ms` as the base duration; the nav hides/returns over 460ms.

- **Word-by-word rise:** display headlines split into `.w/.wi` spans (overflow-hidden wrappers with a 0.15em descender pad) and rise `yPercent: 112 → 0`, 0.9s (hero) / 0.85s (about + bands), `power4.out`, **stagger 0.042 (42ms)**. The `.tone` grey drop survives the split. Hero order: social proof (0.7s) → words → sub-line + CTA (0.8s), timeline delay 0.15s.
- **Press springs:** Motion animates the pill `scale: 0.96` on pointerdown (stiffness 500, damping 24) and back with damping 18; CSS covers absence of the library.
- **Clip-path wipes:** imagery wipes open upward — `clip-path: inset(100% 0% 0% 0%) → inset(0% ...)` with `scale: 1.09 → 1`, 1.15s `power3.inOut`, at `top 88%`. **The clip is applied to the inner `.wipe-img`, never to the observed figure.**
- **Ring unwind + badge overshoot:** each ring's dashoffset unwinds `C → 0` while rotating −120° → 0 (1.4s `power2.inOut`, 0.12s per-ring delay); its value fades/scales in at +0.7s; the badge lands from `scale: 0.4` on `back.out(2)` at +0.9s. Only round objects overshoot.
- **70ms peer stagger:** peer sets (engineering cells, product cells, process rows, FAQ items, partner logos, footer columns, ring cells) fade/rise in reading order, `stagger: 0.07`, 0.7s `power3.out`, from y 12–26px.
- **Circle buttons:** band circle buttons land from `scale: 0.6, rotation: -30` on `back.out(1.8)`, 0.8s.
- **Marquee:** the closing display-scale ticker (clamp(3.5rem, 9vw, 9.25rem)) duplicates its sequence and loops `xPercent: -50` over 26s linear, infinite, pausing on `visibilitychange`.
- **Kill switch:** `prefers-reduced-motion: reduce` is honoured twice — JS bails before any GSAP/Lenis/motion setup (content renders static and fully visible; every pre-hidden selector has a no-ScrollTrigger fallback that restores final state), and CSS clamps all animation/transition durations to 0.01ms.

## Components

### Glass header
- **Shape:** one full-width fixed bar, 76px tall — `color-mix(in srgb, var(--bg) 72%, transparent)`, `backdrop-filter: blur(16px) saturate(1.4)`, 1px `line` bottom border. Direction-aware: hides on scroll-down past 140px (translateY(−130%)), returns instantly on scroll-up; the glass keeps it legible over any content while stuck.
- **Anatomy:** bare wordmark (logo 40px tall, no container) on the left; the chip menu **centred** between logo and actions (`flex: 1; justify-content: center`); theme toggle (40px circle, sun/moon swap) + the Contact pill on the right. Burger (40px, two 1.75px bars crossing at 45°) sits left of the logo, hidden above 1080px.
- **Chips:** 0.875rem/500 in `ink-soft`, 10px×18px padding; hover `chip-hover` + `ink`; the **current page is a solid ink pill** (`pill-ink-bg`/`pill-ink-fg`, silver in dark mode) with `aria-current="page"`.
- **Mobile:** ≤1080px the menu collapses to a full-screen `#0b0b0c` overlay (fixed palette in both themes) with Space Grotesk display links, hairline separators, current page in #85bf55, Escape/link-click to close, body scroll locked.

### Pill CTA
- **Shape:** single filled pill (999px, 13px×28px padding, `pill-ink-bg`/`pill-ink-fg`). Label set uppercase with 0.08em tracking. No companion circle, no icon — the label carries it.
- **Hover/focus:** three circles bloom out from top-centre behind the label — brand leaf `#6db944` → `#a3d17c` → `#44821f`, 80ms stagger, 600ms expo-out — while the label rolls out through the top and an `aria-hidden` duplicate rolls in from below; text settles white on the accent. On press, Motion springs it to 0.96 scale.
- **Variants:** `.pair--submit` as the form button (disabled state: 0.5 opacity, no lift). Used four times — nav Contact, hero "How we help", leasing ring CTA, contact-band submit. Inside the closing field the pill re-scopes to `field-ink`/`field-bg` so it keeps its silhouette on the field ground.

### Circle button (band CTA)
- **Shape:** perfect circle, clamp(56px, 6vw, 76px), ghost — 1px `line-strong` border, ink diagonal-arrow icon.
- **Hover:** fills `accent`, border and icon go white (260ms). One per heading band, top-right aligned.

### Icon badge (with dot)
- **Shape:** 46px ghost circle (1px `line-strong`), ink line icon, 7px accent dot at top-right. Product grid cells lead with one; entrance lands on the peer stagger.
- **Filled variant:** the about proof badge fills `accent` with a white icon and suppresses the dot.

### About split anatomy
- **Eyebrow:** "About Us" — `accent-ink`, 0.875rem/600, the one label permitted above a headline (client-pinned).
- **Stat headline:** Display SM two-tone, long form ("Engineering that cuts emissions, *not your capital.*"), no figure inline — the number lives in the instrument beside it.
- **Proof:** filled accent badge with a white icon **stacked above** a two-line caption ("Equivalent To **80+ Industrial Assets** / In Operation Across Malaysia."), at the bottom of the copy cell.

### Stat grid + benefit chart
- **Stat grid:** three equal cells in a hairline-ruled row that **bleeds to the section's top rule and both side edges** (negative margins cancel the column padding; internal `border-left` dividers run from the section rule to the grid's bottom rule) — 55% emissions ↓, 80+ assets, 100% upfront financing. Figures are identical size (Space Grotesk 500, clamp(2.5rem, 4.5vw, 4rem), tabular, `accent-ink` with ink suffix) so the row reads level; captions 0.875rem `ink-soft`, max 22ch. Numbers count up on entry (expo.out, 0.12s per cell); ≤720px the grid stacks to one column with horizontal rules.
- **Benefit chart:** grouped year-one comparison that sells both leasing benefits — group 1 "Upfront capital": grey 100 (own outright) vs a 3px green stub labelled RM 0 (lease); group 2 "Emissions index": grey 100 vs green 45. Legend chips above (10px swatches + `chart-key`), −55% summary right-aligned at bar-base. Whole chart carries `role="img"` + an aria-label stating the data. Bars grow off the baseline in sequence (grey → green per group, 0/0.15/0.35/0.5s); labels fade in step.

### Chips (nav)
- **Style:** transparent chips on the glass bar; text `ink-soft`; no borders on individual chips.
- **State:** current = solid ink pill; hover = `chip-hover` fill + `ink` text.

### Dashed rings (leasing row)
- **Shape:** 280px-max dashed SVG ring in `line-strong`; centred Space Grotesk value ("RM 0", "100%", "Fixed"); 52px accent circle badge with white icon overlapping the ring's base by half its height.
- **Column:** label row (0.875rem/600 + accent arrow) above, copy below (small, `ink-soft`, 30ch). Fourth cell is the CTA cell (copy + pill CTA, no ring). Cells separated by vertical rules, not cards.

### Process rows
- Seven `li` rows in a baseline-aligned 3-column grid (number / title / copy), hairline between rows, number in tabular Space Grotesk 0.875rem `ink-soft` ("01"–"07"). No cards, no icons — typography only.

### FAQ accordion (native `<details>`)
- **Shape:** full-width rows, hairline between items; question in Space Grotesk 500 clamp(1.125rem, 1.5vw, 1.375rem) with a 40px ghost circle carrying a plus sign (two 1.75px bars).
- **Open state:** the first item ships open; JS enforces one-open-at-a-time. Open icon circle fills `accent` with white glyph, plus rotates flat (320ms); answer text small `ink-soft`, max 62ch. Height animates via `::details-content` (380ms, `@supports` gated) — fully keyboard/native otherwise.

### Leaf page sections (`css/page.css`)
- All eight inner pages (How It Works, Strategic Leasing, two Engineering Solutions, six Product Supports) share one leaf template: `page-hero` (eyebrow, two-tone H1, lead on the dot grid), full-bleed `band` headings, `insight-grid` (alternating copy and media cells; the six Product Supports pages use the `insight-grid--split` variants instead — Problem band + split copy-left/image-right, How We Solve band + `insight-grid--split-flip` image-left/copy-right, Specification band + `values`, then Applications band + `values`; Product pages carry no Delivery band, no `steps` rows, and no `benefit-deck` carousel), hairline `values` cells, the `benefit-deck` tab carousel, and five numbered `steps` rows — copy left, decorative line-art SVG panel right (`art-panel`, theme-token strokes: `ln`, `ac`, `fl-ac`, `art-lbl`; panels `aria-hidden`, pulse dies under reduced motion).
- Every leaf closes with the shared dark field (contact band carrying `#contact`, footer, marquee) and loads `js/page.js`; only the section mix and copy differ per page.

### Dark field: contact band / footer / marquee
- **One continuous ink surface** (`field-bg`, `field-ink`) closing the page — no rule between the three regions. Light theme: #0b0b0c ground; dark theme the whole field inverts to #f4f5f7.
- **Contact band:** two-column grid (1fr / 1fr) mirroring the FAQ band. Left: "Contact" eyebrow, Display SM two-tone headline, lede at 44ch. Right: the form behind a left rule, band-padded (`--gap-band-top` / `--gap-band-bottom`); rows stagger in on the 70ms peer move. `#contact` anchors here — the nav Contact pill lands on the form, not the footer.
- **Form:** five fields in a two-column grid (message, status line, and submit span both columns; collapses to one column ≤900px) — Name, Email address, Company (optional), Interest (select: Not sure yet / Strategic leasing / An engineering solution / A product support line), "What do you need?" message. Boxed outlined fields: transparent bg, 1px `field-line` border, square corners, 14px×16px padding; placeholders in `field-soft` ("Your full name", "you@company.com", "Your company name", site/equipment prompt); hover `field-soft`; focus turns the full border `accent` with outline suppressed; error border `accent` via inline style. The select trades its arrow for a 10px chevron at right 14px — white on the dark field, black once the field inverts in dark theme — `appearance: none`. Labels 0.8125rem/500 `field-soft`. Local validation writes to a `role="status"` live line; errors in `accent-ink`, success in `field-soft`; submit is the pill CTA (mailto handoff, no backend — company and interest prefill the draft's subject and body).
- **Footer:** on the dark ink field — 3-column grid (1.5fr / 0.9fr / 1.2fr) — brand blurb with the logo knocked white via `field-logo`, Explore links, Contact address/mail/tel. Column H3s 1rem Space Grotesk. Internal hairlines use `field-line`; legal row sits under one.
- **Marquee:** display-scale Space Grotesk ticker on the same dark field, accent `·` separators, `aria-hidden="true"`, continuous 26s loop.
- **Field scoping:** `.field` re-declares `--accent-ink` (#85bf55 while the field is dark in light theme, #3d7419 once it inverts in dark theme) and re-scopes the CTA pill to `field-ink`/`field-bg` — white pill on ink in light theme, ink pill on light in dark theme.

## Do's and Don'ts

### Do:
- **Do** separate sections with `border-top: 1px solid var(--line)` and columns with `border-left`/`border-right`; keep every section full-bleed with `.shell` padding inside.
- **Do** put exactly one `<em class="tone">` grey drop per display headline, and keep it at display scale only.
- **Do** use the single filled pill for every CTA and let its label roll on hover, keeping the ink fill; inside the closing field, re-scope it to `field-ink`/`field-bg`.
- **Do** render every counted number in Space Grotesk 500 `tabular-nums`, and let round things land on overshoot (`back.out`), never instant.
- **Do** re-apply `var(--pad)` inset on any grid cell that collapses to full width at a breakpoint.
- **Do** keep the dark field continuous: contact band, footer, marquee with no rules between, the footer logo knocked to one colour via `field-logo`.
- **Do** keep focus visible (2px `accent` outline, 3px offset) and honour `prefers-reduced-motion` in both JS and CSS.

### Don't:
- **Don't** add shadows or gradients — zero elevation is doctrine; the header sits on glass, not a shadow.
- **Don't** put radii on structural blocks; 999px is for pills/circles, 20px only for photo cards, everything else square.
- **Don't** use `tone` (#8e939c) or `line-strong` (#b9bdc4) as body-scale text on light ground — use `ink-soft` (#4d525a).
- **Don't** introduce a second hue; green is the only colour past zero.
- **Don't** set headings in bold or all-caps, or load a second Space Grotesk weight.
- **Don't** add ornament to a pill CTA (circles, arrows, icons) — the client removed the companion circle; the label is the control.
- **Don't** put a scroll-triggered `clip-path` on the observed element itself — clip an inner child (`.wipe-img`).

### Accessibility notes (AA decisions as built)
- Contrast mapping: body ≥4.5:1 via `ink`/`ink-soft`; display grey drop passes as large text; #b9bdc4 confined to borders/decorative/dark-ground text; green on dark ground always the #6db944 variant.
- Semantics: skip link (pill), landmarks (`nav`/`main`/`footer`), `aria-current` on the live page, `aria-expanded` burger, native `<details>` accordion, `role="status"` form feedback, decorative SVGs `aria-hidden`.
- Motion: global `:focus-visible` outline; reduced-motion kill switch at both JS and CSS layers; marquee and all scroll choreography disabled under it.
