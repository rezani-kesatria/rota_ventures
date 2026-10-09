# Water Matters — Page Brief

## Overview

`water-matters.html` is a Product Supports leaf page presenting Water Matters, Rota Ventures' holistic industrial water stewardship service. Unlike the equipment-led sibling pages, this line is consulting-plus-systems: water auditing, treatment design, smart monitoring, and zero liquid discharge, wrapped in strategic planning. It serves operations directors, ESG and sustainability leads, and plant owners in water-intensive industries who face rising water costs, discharge regulation, and scarcity risk. The page shares the Product Supports template (badge + H1 hero, image grid, hairline detail rows, partners band, CTA band, dark footer) with the other five product pages, and carries the group's only green CTA band variant.

## Goals

- Reframe water from a fixed utility cost into a manageable resource with measurable savings, opening a consulting engagement rather than a one-off equipment sale.
- Quantify the value proposition up front: 40–70% reduction in freshwater intake through recycling and optimization.
- Address the compliance and ESG buyer alongside the cost buyer — regulatory compliance, risk mitigation, and sustainability reporting are named benefits.
- Convert visits into a low-commitment first step: the CTA invites a water audit, not a purchase.

## Primary CTA

**Start Your Water Audit** — the CTA band button (`btn-white btn-white-green` on the green band variant), targeting `#contact` (the footer contact form). The header "Contact Us" pill points to the same anchor.

## Key Messages

- "Water Matters is our comprehensive approach to industrial water stewardship" — monitoring, treatment, and strategic planning combined.
- The service transforms water from a simple utility into a managed resource that supports both operational efficiency and corporate sustainability goals.
- Freshwater intake can be cut by 40–70% through recycling and optimization.
- Four service components: Water Auditing (usage and waste-stream analysis), Treatment Design (purification, recycling, reuse), Smart Monitoring (real-time quality and consumption tracking), and Zero Liquid Discharge (maximum water recovery).
- Benefits span cost (lower purchase and discharge fees), compliance (stringent water regulations), risk (scarcity and price volatility), and reputation (demonstrated environmental leadership).

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo, primary nav (Home, How It Works, Strategic Leasing) plus Engineering Solutions and Product Supports dropdowns, Contact Us pill | Product Supports dropdown lists all six sibling pages |
| 2 | Page hero | "Product Supports" badge, H1 "Water Matters", lead on sustainability, recycling, and intelligent optimization of industrial water usage | Lead duplicates the meta description verbatim |
| 3 | Image grid | Three photos: water resource management, water treatment equipment, sustainable water solutions | Currently hotlinked from Unsplash — see Assets |
| 4 | Detail rows | Description · Category · Service Components · Benefits · Applications · Support Services | Six rows. "Service Components" fills the template's "How It Works" slot; "Support Services" is an additional row. Category line: "Product Supports · Water Management · Sustainability · Resource Optimization" |
| 5 | Partners band | "Trusted by Industry Leaders" heading with partner-1, partner-2, and partner-3 logos | Logo subset differs from sibling pages |
| 6 | CTA band (green variant) | "Make Water Work for Your Business", partnership pitch line, "Start Your Water Audit" button | Only page in the group using the `cta-band green` variant |
| 7 | Footer | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, contact form, legal row | Carries the `#contact` anchor target |

## SEO

- **Baseline title:** `Water Matters — Rota Ventures`
- **Baseline description:** `Holistic water resource management focusing on sustainability, recycling, and the intelligent optimization of industrial water usage.`
- Suggested improvement: lead with the measurable outcome and service nouns, e.g. "Industrial water auditing, treatment design, smart monitoring, and zero liquid discharge — cut freshwater intake by 40–70% and meet tightening discharge regulations." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): link to `portable-water.html`, the closest sibling (deployable water and wastewater treatment supplies the hardware this service plans for). Link to `strategic-leasing.html` — treatment and ZLD infrastructure is capital-intensive and leasable. The consulting-flavoured delivery also maps naturally onto `how-it-works.html`'s 7-step process.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Production issue — Unsplash hotlinking:** all three grid images load from `images.unsplash.com` URLs. Replace with local assets under `assets/img/` (e.g. `water-matters-1/2/3.jpg`) so imagery is stable, licensed, and performance-budgeted.
- One of the three images is shared with Specialized Pumping — dedupe and differentiate during the asset pass.
- `assets/img/logo.png` (header and footer), `assets/img/partner-1.png`, `partner-2.png`, `partner-3.png` (partners band) are already local.

## Design Notes

Applying the EcoVolt design language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Water Matters" with **"Water" in near-black ink** and **"Matters" in grey** (`#B9BDC4`) — the subject stays ink, the single grey drop falls on the verb so the eye lands on what the page is about. Weight 500, sentence case, tight tracking, word-by-word rise on entry.
- **Hero badge:** "Product Supports" becomes a pill chip; a circular line-icon badge with its dot indicator (a droplet glyph) can sit above the H1.
- **Image grid:** the three photos become large-radius (~16–26px) photo cards — the only rounded elements — wiping open upward from ~1.09 over-scale on scroll.
- **Detail rows:** rebuild the six rows as full-bleed hairline-divided rows with a vertical hairline between label and body on desktop; the four Service Components suit small circular icon badges with dot indicators (audit, treatment, monitoring, discharge).
- **Heading band:** open the detail list with a tall full-bleed band — title pinned top, circular icon button far right — reusing the lead's framing ("Holistic water resource management…").
- **Paired CTA:** "Start Your Water Audit" becomes a filled pill paired with a circular arrow button that rolls out from behind the pill (~-300°, under-scaled, one beat late). The green band is a deviation from the single-accent rule: either document it as a flat, gradient-free section accent or remap the band to ink with the royal-blue paired CTA — it must not gain gradients either way.
- **Dark field:** partners band, footer, and the closing marquee read as ONE continuous dark block with no internal rules; the three partner logos sit as a tight centred cluster knocked to one colour at low opacity. Inverts to light in dark mode.
- **Discipline:** flat colour only, zero shadows, no gradients, no margins — separation comes exclusively from hairline rules and solid background blocks, capped at 1800px content width.
