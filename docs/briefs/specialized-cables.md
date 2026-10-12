# Specialized Cables — Page Brief

## Overview

`specialized-cables.html` is a Product Supports leaf page presenting Rota Ventures' specialized cabling line: high-durability cables engineered to survive extreme mechanical stress, heat, and chemical exposure in hazardous industrial zones. It serves electrical and instrumentation engineers, maintenance leads, and project procurement in the harshest environments — refineries, offshore platforms, mines, steel mills — who need cable that will not fail where standard product would. The page (refit 2026) shares the leaf template (eyebrow + two-tone H1 hero, problem band, insight grid, specification values, five-step delivery rows with line-art panels, applications values, contact band, dark footer, marquee) with the other five product pages.

## Goals

- Convince technically sceptical buyers with hard specifications: 250°C continuous rating, ATEX/IECEx hazardous-area certification, 5–10x lifespan versus standard cable.
- Show breadth across five cable families so buyers self-identify their application (high-temperature, chemical-resistant, armored, explosion-proof, flexible).
- Sell total cost of ownership, not unit price: fewer replacements, lower maintenance, less unplanned downtime.
- Convert visits into a cable-selection conversation via the contact band (`#contact`).

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line". The header "Contact" pill points to the same anchor. There is no separate CTA band.

## Key Messages

- "When standard electrical cables fail under extreme conditions, our specialized cables deliver unwavering performance."
- Five cable families matched precisely to application: High-Temperature (continuous operation up to 250°C), Chemical-Resistant (impervious to acids and solvents), Armored (steel or aluminium against mechanical damage), Explosion-Proof (ATEX and IECEx certified), and Flexible (continuous flexing duty).
- Cables outlast standard product by 5–10x in harsh environments, cutting long-term cost and unplanned downtime.
- Safety and compliance are engineered in: reduced fire risk, code compliance, and shielding that prevents electromagnetic interference.
- Support covers the full lifecycle: cable selection engineering, custom configuration and manufacturing, installation training, testing and certification, and emergency replacement stock programs.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Product Supports dropdown lists all six sibling pages |
| 2 | Page hero | Eyebrow "Product Supports", two-tone H1 "Specialized *Cables.*", lead on surviving mechanical stress, heat, and chemical exposure | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("The environment takes the weakest link", "Cable built for the zone") alternating with two photos | Local images: `hero-2` (plant machinery), `vision-5` (petrochemical complex) |
| 4 | The Specification values | Three hairline cells: 5–10× lifespan; 250°C continuous rating; ATEX · IECEx certification (with remote-operations text-link) | The page's own numbers, now display-scale stats |
| 5 | Delivery band + five steps | 01 Application review, 02 Selection & custom build, 03 Installation guidance, 04 Testing & certification, 05 Emergency stock & support | The five cable families are carried in step 02 copy; each step copy-left, decorative line-art SVG panel right (zone plan, cross-section, pull plan, test bench, spares shelf) |
| 6 | Applications values | Three icon-badge cells: refineries & offshore platforms; mines & steel mills; power & hazardous zones | From the old Applications row |
| 7 | Contact band | H2 "Cables that outlive *their environment.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor |
| 8 | Footer + marquee | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, legal row; closing marquee ticker | Shared with the other refit pages |

## SEO

- **Baseline title:** `Specialized Cables — Rota Ventures`
- **Baseline description:** `High-durability cabling solutions designed to withstand extreme mechanical stress, heat, and chemical exposure in hazardous zones.`
- Suggested improvement: front-load the certifiable specifics that buyers search for, e.g. "High-temperature (250°C), armored, chemical-resistant, and ATEX/IECEx explosion-proof cables for hazardous industrial environments — engineered to outlast standard cable 5–10x." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): link to `industrial-remote-operations.html` — monitoring and retrofit projects are heavy consumers of exactly these cables — and to `combined-head-power.html` as a co-specified engineering package. An in-copy link to `strategic-leasing.html` fits emergency stock programs and custom manufacturing runs, which are leasable-adjacent capital commitments.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Imagery (2):** both local — `assets/img/hero-2.png` (plant machinery) and `assets/img/vision-5.png` (petrochemical complex). The old Unsplash hotlinks are gone.
- Cable-specific photography (armoured runs, glands, hazardous-area installations) still wanted — no such assets exist locally yet.
- `assets/img/logo.png` (header and footer) is local.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Specialized" in ink, "Cables." in the grey tone; word-by-word rise on entry.
- **Specification stats:** 5–10× / 250°C / ATEX · IECEx as three hairline value cells, numbers at display scale in accent.
- **Steps:** copy left (number, heading, one-line lead, three proof bullets), decorative line-art SVG panel right — zone plan, cable cross-section, pull plan, test bench, spares shelf. Panels `aria-hidden`, theme-token strokes.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; local validation, mailto handoff.
