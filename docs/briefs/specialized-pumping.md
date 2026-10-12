# Specialized Pumping — Page Brief

## Overview

`specialized-pumping.html` is a Product Supports leaf page presenting Rota Ventures' specialized pumping line: precision-engineered pump systems for fluids that defeat standard equipment — high-viscosity, corrosive, abrasive, and extreme-temperature media. It serves engineers, plant managers, and procurement leads in process industries who arrive with a specific fluid-handling problem, and its single job is to funnel them into a consultation with a pumping specialist. The page (refit 2026) shares the leaf template (eyebrow + two-tone H1 hero, problem band, insight grid, benefit deck, five-step delivery rows with line-art panels, applications values, contact band, dark footer, marquee) with the other five product pages.

## Goals

- Qualify demanding fluid-handling enquiries by showing exactly which pump families (progressive cavity, diaphragm, peristaltic, gear) solve which media problems.
- Position Rota Ventures as the custom-configuration partner for applications standard pumps cannot serve, not a catalogue reseller.
- Reassure technical buyers with concrete lifecycle support: fluid compatibility testing, field service, rebuild programs, spare parts.
- Convert visits into specialist conversations via the contact band (`#contact`).

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line". The header "Contact" pill points to the same anchor; every path on the page ends at the form. There is no separate CTA band.

## Key Messages

- "When standard pumping solutions fall short, our specialized pumping systems rise to the challenge" — the page's core positioning line.
- Every system is custom-configured to match the customer's fluid properties, operating conditions, and performance requirements.
- Four pump families cover the hard cases: progressive cavity (viscous, shear-sensitive), diaphragm (abrasive slurries, corrosive chemicals), peristaltic (contamination-free), and gear (precision metering at high pressure).
- Materials and seals are selected for chemical compatibility and wear resistance; sealed designs prevent leaks of hazardous materials.
- Applications span chemical processing, pharmaceuticals, food & beverage, mining, paint & coatings, petroleum refining, and pulp & paper.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Product Supports dropdown lists all six sibling pages |
| 2 | Page hero | Eyebrow "Product Supports", two-tone H1 "Specialized *Pumping.*", lead on high-viscosity, corrosive, and extreme-temperature transport | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("The fluid always wins", "Matched to the fluid, not the catalogue") alternating with two photos | Local images: `engineering-2` (engineer servicing pump), `vision-5` (processing complex) |
| 4 | The Outcome benefit deck | Self-looping three-tab carousel: Extreme durability; Sealed and safe; Flow you can set — chips over photos (Tested, Sealed, Minimised) | Panels: `leasing-4`, `hero-2`, `leasing-2`; operable without JS |
| 5 | Delivery band + five steps | 01 Application consultation, 02 Compatibility testing, 03 Custom configuration, 04 Field service & commissioning, 05 Life-cycle support | The four pump families (PC, diaphragm, peristaltic, gear) are carried in steps 01–03 copy; each step copy-left, decorative line-art SVG panel right |
| 6 | Applications values | Three icon-badge cells: chemical & pharmaceutical; mining & refining; food, paint & pulp | From the old Applications row |
| 7 | Contact band | H2 "Tell us the fluid. *We'll spec the pump.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor |
| 8 | Footer + marquee | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, legal row; closing marquee ticker | Shared with the other refit pages |

## SEO

- **Baseline title:** `Specialized Pumping — Rota Ventures`
- **Baseline description:** `Precision-engineered pumping solutions tailored for high-viscosity, corrosive, or extreme-temperature fluid transport across diverse industries.`
- Suggested improvement: name the pump families for long-tail queries, e.g. "Custom-configured progressive cavity, diaphragm, peristaltic, and gear pumps for high-viscosity, corrosive, and extreme-temperature fluids — leasable through Rota Ventures' strategic leasing model." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): an in-copy link from the outcome or delivery copy to `strategic-leasing.html` — these custom systems are leasable, and capital-intensive engineered pumps are the strongest leasing fit on the site. Also cross-link `economical-pumping.html` so cost-driven visitors can step down to the economical line.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Imagery (5):** all local — insight: `assets/img/engineering-2.png`, `assets/img/vision-5.png`; benefit panels: `leasing-4`, `hero-2`, `leasing-2`. The old Unsplash hotlinks and their sibling-page reuse are gone.
- `assets/img/logo.png` (header and footer) is local.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Specialized" in ink, "Pumping." in the grey tone; word-by-word rise on entry.
- **Benefit deck:** vertical tab carousel with self-looping dwell, progress bar, dots and arrows; chips ("Tested", "Sealed", "Minimised") land as accent blocks over the panel photos — qualitative labels only, no invented benchmarks.
- **Steps:** copy left (number, heading, one-line lead, three proof bullets), decorative line-art SVG panel right — fluid sample, coupon matrix, family selector, live run, wear trend. Panels `aria-hidden`, theme-token strokes.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; local validation, mailto handoff.
