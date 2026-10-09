# Home — Page Brief

## Overview

`index.html` is the canonical entry point of the Rota Ventures corporate site. It introduces the business in one scroll: who Rota Ventures is, the strategic leasing model (the headline commercial offer), the two engineering solution lines, the six product support lines, the delivery process, and a contact path. The audience is business decision-makers — plant owners, operations directors, finance leads — and the single job of the page is to funnel them to contact.

## Goals

- Present the full service portfolio (leasing + engineering + product support) in one page, clearly enough that a first-time visitor can self-qualify.
- Make the strategic leasing model the headline feature: it is the differentiator and the strongest hook for capital-constrained operators.
- Build trust fast: partner logos, real stats (80+ assets, 55% emission reduction, 100% upfront financing), and a credible process.
- Drive every scroll toward the footer contact form / `#contact`.

## Primary CTA

**Contact Us** — footer form (`#contact`), reached via the nav Contact pill and the closing CTA. Secondary paired CTA in the hero ("How We Help" → `how-it-works.html`).

## Key Messages

- **Engineering growth, financing reality** — the company tagline and the page H1.
- Zero-upfront leasing releases "cash stuck in operations" for core innovation and expansion.
- Engineering solutions (Combined Head & Power, Industrial Remote Operations) delivered to global standards.
- Six specialized product support lines keep critical infrastructure resilient.
- A proven 7-step path from problem diagnosis to after-sales support.

## Content Outline

Per the design language (`design-guidelines/design-system.json`, section order is non-negotiable):

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Sticky pill nav | Burger + wordmark, pill group (Home as solid ink pill), Contact pill | Direction-aware hide/show, transparent when stuck |
| 2 | Hero | Social-proof avatar line, two-tone display H1, sub copy, paired CTA | H1: "Engineering growth, **financing reality.**" (grey drop in bold here) |
| 3 | Wide photo card | One full-width industrial photo (assets/img/hero-1.png) | Large radius (~20px) photo card, wipe-open motion |
| 4 | About split | Vision + Mission copy condensed left; oversized stat + emissions chart right | One full-bleed row, vertical hairline divider; stat "55" accent + "%" ink; before/after bar chart |
| 5 | Leasing heading band | Tall band, title top-pinned, circular icon button far right | Title: "Own the output, **not the asset.**" |
| 6 | Leasing ring row | Three dashed-ring stat cells (RM 0 upfront · 100% tax deductible · Fixed payments) + CTA cell | Full-bleed row, four cells cut by vertical rules; badges overlap ring base |
| 7 | Engineering row | Combined Head & Power + Industrial Remote Operations cards | Two cells, vertical rule; photo cards; links to both leaf pages |
| 8 | Product grid | Six product support cells (Biomethane Compression, Portable Water & Wastewater, Economical Pumping, Specialized Pumping, Water Matters, Specialized Cables) | Hairline-divided grid, no radius; each cell links its leaf page |
| 9 | Process rows | 7 steps: Problem Diagnosis → Strategic Design → Custom Procurement → Tailored Modification → Expert Installation → Commissioning → After Sales Support | Numbered full-bleed hairline rows; link to how-it-works.html |
| 10 | FAQ | 4 questions (zero upfront cost, customization, maintenance responsibility, tax advantage) | Accordion with hairlines |
| 11 | Dark field | Partners bar (tight logo cluster) → footer (brand blurb, quick links, contact details, contact form) → giant closing marquee | One continuous dark block, no internal rules; inverts to light in dark mode |

## SEO

- **Baseline title:** `Rota Ventures — Engineering Growth, Financing Reality`
- **Baseline description:** `Scaling sustainable infrastructure through integrated engineering and zero-upfront capital solutions.`
- Improvement: keep the title; extend the description with the leasing hook and location, e.g. "Zero-upfront strategic leasing and precision engineering for industrial energy and water infrastructure. Based in Bandar Baru Bangi, Selangor, Malaysia."

## Cross-links

- Out: `strategic-leasing.html` (hero + ring row CTA), `how-it-works.html` (hero secondary CTA + process rows), both engineering pages, all six product pages, `#contact`.
- In: every page's logo/wordmark links home; footer quick links on all pages point back to home sections.

## Assets

- `assets/img/logo.png` (nav + footer)
- Photos: `hero-1.png` (wide card), `vision-1/2/3.png` (about split / FAQ), `engineering-1/2.png`, `leasing-1..5.png`
- `partner-1..6.png` (dark partners bar)
- Avatar cluster: no photo assets exist — build initial-letter avatars from design tokens (contextually meaningful replacement, same slot).

## Design Notes

The homepage is the design language's flagship (EcoVolt study recreation — credit Irfanaffian / One Week Wonders). Non-negotiables from `design-system.json`:

- **Two-tone headlines** everywhere: near-black ink + one deliberate grey drop per sentence (grey carries non-essential words). Headings at weight 500, sentence case, tight tracking — never bold, never caps.
- **No margins anywhere.** Sections separate via 1px hairline rules and solid background blocks only; every section full bleed, contents inset by padding, hard-capped at 1800px.
- **Zero elevation:** no shadows, flat colour, no gradients. Pills fully rounded; photo cards ~16–26px radius; structural blocks square.
- **Paired CTA** (filled pill + circular arrow) throughout; the circular button rolls out from behind its pill on entrance (rotated ~-300°, under-scaled, spins into place a beat late).
- **Motion:** GSAP + ScrollTrigger + Lenis + Motion (all vendored in `assets/js/vendor/`). Word-by-word heading rise (~42ms), imagery wipes upward from 1.09 over-scale, chart bars grow off baseline (before → after → summary), rings unwind, marquee runs continuously. All scroll-triggered once; fully disabled under `prefers-reduced-motion`.
- **Themes:** ship both; light (white/ink/royal blue `#2F5BFF`) and dark (ink/white, grey primary) — the dark field inverts in dark mode. WCAG AA: keep headline grey tone at ≥3:1 on white for display sizes.
