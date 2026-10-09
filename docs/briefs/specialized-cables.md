# Specialized Cables — Page Brief

## Overview

`specialized-cables.html` is a Product Supports leaf page presenting Rota Ventures' specialized cabling line: high-durability cables engineered to survive extreme mechanical stress, heat, and chemical exposure in hazardous industrial zones. It serves electrical and instrumentation engineers, maintenance leads, and project procurement in the harshest environments — refineries, offshore platforms, mines, steel mills — who need cable that will not fail where standard product would. The page shares the Product Supports template (badge + H1 hero, image grid, hairline detail rows, partners band, CTA band, dark footer) with the other five product pages, and carries the group's largest partners band (four logos).

## Goals

- Convince technically sceptical buyers with hard specifications: 250°C continuous rating, ATEX/IECEx hazardous-area certification, 5–10x lifespan versus standard cable.
- Show breadth across five cable families so buyers self-identify their application (high-temperature, chemical-resistant, armored, explosion-proof, flexible).
- Sell total cost of ownership, not unit price: fewer replacements, lower maintenance, less unplanned downtime.
- Convert visits into a cable-selection conversation via the CTA band and the footer contact form (`#contact`).

## Primary CTA

**Find Your Cable Solution** — the CTA band button, targeting `#contact` (the footer contact form). The header "Contact Us" pill points to the same anchor.

## Key Messages

- "When standard electrical cables fail under extreme conditions, our specialized cables deliver unwavering performance."
- Five cable families matched precisely to application: High-Temperature (continuous operation up to 250°C), Chemical-Resistant (impervious to acids and solvents), Armored (steel or aluminium against mechanical damage), Explosion-Proof (ATEX and IECEx certified), and Flexible (continuous flexing duty).
- Cables outlast standard product by 5–10x in harsh environments, cutting long-term cost and unplanned downtime.
- Safety and compliance are engineered in: reduced fire risk, code compliance, and shielding that prevents electromagnetic interference.
- Support covers the full lifecycle: cable selection engineering, custom configuration and manufacturing, installation training, testing and certification, and emergency replacement stock programs.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo, primary nav (Home, How It Works, Strategic Leasing) plus Engineering Solutions and Product Supports dropdowns, Contact Us pill | Product Supports dropdown lists all six sibling pages |
| 2 | Page hero | "Product Supports" badge, H1 "Specialized Cables", lead on withstanding extreme mechanical stress, heat, and chemical exposure | Lead duplicates the meta description verbatim |
| 3 | Image grid | Three photos: industrial cable systems, cable control systems, high-performance wiring | Currently hotlinked from Unsplash — see Assets |
| 4 | Detail rows | Description · Category · Cable Types · Benefits · Applications · Support Services | Six rows. "Cable Types" fills the template's "How It Works" slot; "Support Services" is an additional row, and Benefits carries six items (the group's longest). Category line: "Product Supports · Electrical Systems · Hazardous Environment · Industrial Cables" |
| 5 | Partners band | "Trusted by Industry Leaders" heading with partner-1, partner-2, partner-5, and partner-6 logos | Four logos — the largest subset in the Product Supports group |
| 6 | CTA band | "Protect Your Critical Infrastructure", reliability pitch line, "Find Your Cable Solution" button | Sits directly above the footer |
| 7 | Footer | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, contact form, legal row | Carries the `#contact` anchor target |

## SEO

- **Baseline title:** `Specialized Cables — Rota Ventures`
- **Baseline description:** `High-durability cabling solutions designed to withstand extreme mechanical stress, heat, and chemical exposure in hazardous zones.`
- Suggested improvement: front-load the certifiable specifics that buyers search for, e.g. "High-temperature (250°C), armored, chemical-resistant, and ATEX/IECEx explosion-proof cables for hazardous industrial environments — engineered to outlast standard cable 5–10x." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): link to `industrial-remote-operations.html` — monitoring and retrofit projects are heavy consumers of exactly these cables — and to `combined-head-power.html` as a co-specified engineering package. An in-copy link to `strategic-leasing.html` fits emergency stock programs and custom manufacturing runs, which are leasable-adjacent capital commitments.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Production issue — Unsplash hotlinking:** all three grid images load from `images.unsplash.com` URLs. Replace with local assets under `assets/img/` (e.g. `specialized-cables-1/2/3.jpg`) so imagery is stable, licensed, and performance-budgeted.
- Two of the three images are shared with Specialized Pumping — dedupe and differentiate during the asset pass; cable-specific photography should show armoured runs, glands, and hazardous-area installations.
- `assets/img/logo.png` (header and footer), `assets/img/partner-1.png`, `partner-2.png`, `partner-5.png`, `partner-6.png` (partners band) are already local.

## Design Notes

Applying the EcoVolt design language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Specialized Cables" with **"Specialized" in grey** (`#B9BDC4`) and **"Cables" in near-black ink** — the descriptor takes the single grey drop, the essential noun stays ink (mirroring the Specialized Pumping treatment for template consistency). Weight 500, sentence case, tight tracking, word-by-word rise on entry.
- **Hero badge:** "Product Supports" becomes a pill chip; a circular line-icon badge with its dot indicator (a cable/bolt glyph) can sit above the H1.
- **Image grid:** the three photos become large-radius (~16–26px) photo cards — the only rounded elements — wiping open upward from ~1.09 over-scale on scroll.
- **Detail rows:** rebuild the six rows as full-bleed hairline-divided rows with a vertical hairline between label and body on desktop. The five Cable Types suit small circular icon badges with dot indicators (temperature, chemical, armour, certification, flex); the six-item Benefits row stays scannable because each hairline row holds one idea.
- **Heading band:** open the detail list with a tall full-bleed band — title pinned top, circular icon button far right — reusing the page's positioning line ("When standard electrical cables fail…").
- **Paired CTA:** "Find Your Cable Solution" becomes a filled royal-blue pill (`#2F5BFF`) paired with a circular arrow button that rolls out from behind the pill (~-300°, under-scaled, one beat late). Apply the same pair to the header Contact pill.
- **Dark field:** partners band, footer, and the closing marquee read as ONE continuous dark block with no internal rules; the four partner logos sit as a tight centred cluster knocked to one colour at low opacity. Inverts to light in dark mode.
- **Discipline:** flat colour only, zero shadows, no gradients, no margins — separation comes exclusively from hairline rules and solid background blocks, capped at 1800px content width.
