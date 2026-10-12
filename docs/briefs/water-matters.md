# Water Matters — Page Brief

## Overview

`water-matters.html` is a Product Supports leaf page presenting Water Matters, Rota Ventures' holistic industrial water stewardship service. Unlike the equipment-led sibling pages, this line is consulting-plus-systems: water auditing, treatment design, smart monitoring, and zero liquid discharge, wrapped in strategic planning. It serves operations directors, ESG and sustainability leads, and plant owners in water-intensive industries who face rising water costs, discharge regulation, and scarcity risk. The page (refit 2026) shares the leaf template (eyebrow + two-tone H1 hero, problem band, insight grid, outcome values, five-step delivery rows with line-art panels, applications values, contact band, dark footer, marquee) with the other five product pages.

## Goals

- Reframe water from a fixed utility cost into a manageable resource with measurable savings, opening a consulting engagement rather than a one-off equipment sale.
- Quantify the value proposition up front: 40–70% reduction in freshwater intake through recycling and optimization.
- Address the compliance and ESG buyer alongside the cost buyer — regulatory compliance, risk mitigation, and sustainability reporting are named benefits.
- Convert visits into a low-commitment first step: the contact band copy invites a water audit, not a purchase.

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line"; the band copy opens with the audit framing. The header "Contact" pill points to the same anchor. The old green CTA band variant is gone with the refit — the page now closes with the shared contact band.

## Key Messages

- "Water Matters is our comprehensive approach to industrial water stewardship" — monitoring, treatment, and strategic planning combined.
- The service transforms water from a simple utility into a managed resource that supports both operational efficiency and corporate sustainability goals.
- Freshwater intake can be cut by 40–70% through recycling and optimization.
- Four service components: Water Auditing (usage and waste-stream analysis), Treatment Design (purification, recycling, reuse), Smart Monitoring (real-time quality and consumption tracking), and Zero Liquid Discharge (maximum water recovery).
- Benefits span cost (lower purchase and discharge fees), compliance (stringent water regulations), risk (scarcity and price volatility), and reputation (demonstrated environmental leadership).

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Product Supports dropdown lists all six sibling pages |
| 2 | Page hero | Eyebrow "Product Supports", two-tone H1 "Water *Matters.*", lead on auditing, treatment design, smart monitoring and ZLD | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("Two invoices, one resource", "One resource, managed") alternating with two photos | Local images: `vision-7` (managed water channel), `leasing-1` (facility) |
| 4 | The Outcome values | Three hairline cells: 40–70% less freshwater drawn; 0 liquid discharge (ZLD); 24/7 live quality monitoring | The page's own numbers, now display-scale stats |
| 5 | Delivery band + five steps | 01 Water audit, 02 Strategy & treatment design, 03 Smart monitoring, 04 Recycling & ZLD build-out, 05 Reporting & stewardship | The four service components (auditing, treatment design, monitoring, ZLD) are carried in steps 01–04; each step copy-left, decorative line-art SVG panel right |
| 6 | Applications values | Three icon-badge cells: manufacturing & power generation; mining & textiles; food, chemical & automotive | From the old Applications row |
| 7 | Contact band | H2 "Make water *accountable.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor |
| 8 | Footer + marquee | Brand blurb, quick links, Bandar Baru Bangi address, email, phone, legal row; closing marquee ticker | Shared with the other refit pages |

## SEO

- **Baseline title:** `Water Matters — Rota Ventures`
- **Baseline description:** `Holistic water resource management focusing on sustainability, recycling, and the intelligent optimization of industrial water usage.`
- Suggested improvement: lead with the measurable outcome and service nouns, e.g. "Industrial water auditing, treatment design, smart monitoring, and zero liquid discharge — cut freshwater intake by 40–70% and meet tightening discharge regulations." Keep the title.

## Cross-links

- Out (current): nav links to all primary pages and both dropdown groups; footer quick links to Strategic Leasing, Combined Head & Power, Biomethane Compression, and How It Works.
- Out (recommended): link to `portable-water.html`, the closest sibling (deployable water and wastewater treatment supplies the hardware this service plans for). Link to `strategic-leasing.html` — treatment and ZLD infrastructure is capital-intensive and leasable. The consulting-flavoured delivery also maps naturally onto `how-it-works.html`'s 7-step process.
- In: the Home product grid links here; the nav Product Supports dropdown exposes it on every page; sibling product pages share the footer.

## Assets

- **Imagery (2):** both local — `assets/img/vision-7.png` (managed water channel) and `assets/img/leasing-1.png` (production facility). The old Unsplash hotlinks are gone.
- `assets/img/logo.png` (header and footer) is local.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Water" in ink, "Matters." in the grey tone; word-by-word rise on entry.
- **Outcome stats:** 40–70% / 0 (ZLD) / 24/7 as three hairline value cells, numbers at display scale in accent.
- **Steps:** copy left (number, heading, one-line lead, three proof bullets), decorative line-art SVG panel right — site water map, recycle loop, live balance, recovery ramp, stewardship report. Panels `aria-hidden`, theme-token strokes.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; local validation, mailto handoff. The green band variant no longer exists sitewide.
