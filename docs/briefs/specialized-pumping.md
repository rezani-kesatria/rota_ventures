# Specialized Pumping — Page Brief

## Overview

`specialized-pumping.html` is a Product Supports leaf page presenting Rota Ventures' specialized pumping line: precision-engineered pump systems for fluids that defeat standard equipment — high-viscosity, corrosive, abrasive, and extreme-temperature media. It serves engineers, plant managers, and procurement leads in process industries who arrive with a specific fluid-handling problem, and its single job is to funnel them into a consultation with a pumping specialist. The page shares the Product Supports template (badge + H1 hero, image grid, hairline detail rows, partners band, CTA band, dark footer) with the other five product pages.

## Goals

- Qualify demanding fluid-handling enquiries by showing exactly which pump families (progressive cavity, diaphragm, peristaltic, gear) solve which media problems.
- Position Rota Ventures as the custom-configuration partner for applications standard pumps cannot serve, not a catalogue reseller.
- Reassure technical buyers with concrete lifecycle support: fluid compatibility testing, field service, rebuild programs, spare parts.
- Convert visits into specialist conversations via the CTA band and the footer contact form (`#contact`).

## Primary CTA

**Speak with an Expert** — the CTA band button, targeting `#contact` (the footer contact form). The header "Contact Us" pill points to the same anchor; every path on the page ends at the form.

## Key Messages

- "When standard pumping solutions fall short, our specialized pumping systems rise to the challenge" — the page's core positioning line.
- Every system is custom-configured to match the customer's fluid properties, operating conditions, and performance requirements.
- Four pump families cover the hard cases: progressive cavity (viscous, shear-sensitive), diaphragm (abrasive slurries, corrosive chemicals), peristaltic (contamination-free), and gear (precision metering at high pressure).
- Materials and seals are selected for chemical compatibility and wear resistance; sealed designs prevent leaks of hazardous materials.
- Applications span chemical processing, pharmaceuticals, food & beverage, mining, paint & coatings, petroleum refining, and pulp & paper.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo, primary nav (Home, How It Works, Strategic Leasing) plus Engineering Solutions and Product Supports dropdowns, Contact Us pill | Product Supports dropdown lists all six sibling pages; this page is one of them |
| 2 | Page hero | "Product Supports" badge, H1 "Specialized Pumping", lead paragraph on high-viscosity, corrosive, and extreme-temperature transport | Lead duplicates the meta description verbatim |
| 3 | Image grid | Three photos: specialized pumping equipment, advanced pumping systems, industrial control systems | Currently hotlinked from Unsplash — see Assets |
| 4 | Detail rows | Description · Category · Pump Types · Benefits · Applications · Support Services | Six rows. "Pump Types" fills the template's "How It Works" slot; "Support Services" is an additional row. Category line: "Product Supports · Specialized Pumping · Chemical Processing · High-Performance" |
| 5 | Partners band | "Trusted by Industry Leaders" heading with partner-1, partner-2, and partner-4 logos | Logo subset differs from sibling pages |
| 6 | CTA band | "Challenging Fluid? We Have the Solution", consultant pitch line, "Speak with an Expert" button | Sits directly above the footer |
| 7 | Footer | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, contact form, legal row | Carries the `#contact` anchor target |

## SEO

- **Baseline title:** `Specialized Pumping — Rota Ventures`
- **Baseline description:** `Precision-engineered pumping solutions tailored for high-viscosity, corrosive, or extreme-temperature fluid transport across diverse industries.`
- Suggested improvement: name the pump families for long-tail queries, e.g. "Custom-configured progressive cavity, diaphragm, peristaltic, and gear pumps for high-viscosity, corrosive, and extreme-temperature fluids — leasable through Rota Ventures' strategic leasing model." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): an in-copy link from the Description or CTA band to `strategic-leasing.html` — these custom systems are leasable, and capital-intensive engineered pumps are the strongest leasing fit on the site. Also cross-link `economical-pumping.html` so cost-driven visitors can step down to the economical line.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Production issue — Unsplash hotlinking:** all three grid images load from `images.unsplash.com` URLs. Replace with local assets under `assets/img/` (e.g. `specialized-pumping-1/2/3.jpg`) so the page does not break if the remote images change or disappear, and so licensing is controlled.
- The images are also reused across sibling pages (one appears on Water Matters, two on Specialized Cables) — dedupe and differentiate during the asset pass.
- `assets/img/logo.png` (header and footer), `assets/img/partner-1.png`, `partner-2.png`, `partner-4.png` (partners band) are already local.

## Design Notes

Applying the EcoVolt design language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Specialized Pumping" with **"Specialized" in grey** (`#B9BDC4`) and **"Pumping" in near-black ink** — the descriptor takes the single grey drop, the essential noun stays ink. Weight 500, sentence case, tight tracking, word-by-word rise on entry.
- **Hero badge:** "Product Supports" becomes a pill chip; a circular line-icon badge with its dot indicator (a pump/impeller glyph) can sit above the H1.
- **Image grid:** the three photos become large-radius (~16–26px) photo cards — the only rounded elements on the page — wiping open upward from ~1.09 over-scale on scroll.
- **Detail rows:** rebuild the six rows as full-bleed hairline-divided rows (1px rules edge to edge, contents inset by padding), label column split from body by a vertical hairline on desktop; each row label can carry a small circular icon badge with dot indicator.
- **Heading band:** open the detail list with a tall full-bleed band — title pinned top, circular icon button far right — reusing the page's own positioning line ("When standard pumping solutions fall short…").
- **Paired CTA:** "Speak with an Expert" becomes a filled royal-blue pill (`#2F5BFF`) paired with a circular arrow button that rolls out from behind the pill (~-300°, under-scaled, one beat late). Apply the same pair to the header Contact pill.
- **Dark field:** partners band, footer, and the closing marquee read as ONE continuous dark block with no internal rules; the three partner logos sit as a tight centred cluster knocked to one colour at low opacity. Inverts to light in dark mode.
- **Discipline:** flat colour only, zero shadows, no gradients, no margins — separation comes exclusively from hairline rules and solid background blocks, capped at 1800px content width.
