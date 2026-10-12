# Biomethane Green Compression — Page Brief

## Overview

`biomethane-compression.html` is the first leaf page under the Product Supports group of the Rota Ventures site. It presents the biomethane compression support line to biogas plant operators, landfill gas operators, wastewater treatment facilities, and waste-to-energy developers who need to capture, upgrade, and compress renewable biogas. The page (refit 2026) uses the shared leaf template — eyebrow-and-two-tone-H1 hero, problem band, insight grid, specification values, five-step delivery rows with line-art panels, applications values, contact band with the full form, footer, marquee — and funnels every visitor to the contact band (`#contact`), which hands off to the visitor's email client.

## Goals

- Let technical buyers self-qualify by stating the operating envelope plainly: 50–5,000 Nm³/h capacity, up to 300 bar, methane content 45–99%, >95% mechanical efficiency.
- Build credibility with concrete outcomes from the page copy: up to 98% of available biogas energy recovered, methane captured that would otherwise be released or flared.
- Frame the offer commercially — revenue generation through renewable natural gas and regulatory compliance — not just equipment supply.
- Conversion goal: move the reader to the contact band (`#contact`) via the nav "Contact" pill or the closing contact band.

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line". The header carries the same destination with the generic "Contact" label. There is no separate CTA band; the contact band closes the page like the other refit leaves.

## Key Messages

- Compressors engineered specifically for renewable biogas: variable composition and moisture content handled while maintaining peak efficiency.
- Wide operating envelope — 50 to 5,000 Nm³/h, pressures up to 300 bar, methane content 45–99%.
- Up to 98% of available biogas energy extracted for grid injection or vehicle fuel.
- Capturing methane that would otherwise be released or flared converts waste into RNG revenue and meets environmental mandates.
- Backed by 24/7 technical support, remote diagnostics and monitoring, preventive maintenance, and rapid spare-parts deployment.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Shared chrome on all 11 pages |
| 2 | Page hero | Eyebrow "Product Supports"; two-tone H1 "Biomethane *Green Compression.*"; lead on compression engineered for variable, wet biogas | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("Biogas won't behave", "Pressurise it, and it pays") alternating with two photos | Local images: `hero-3` (impeller), `vision-4` (tank farm) |
| 4 | The Specification values | Three hairline cells: 98% energy recovery; 300 bar pressure; 45–99% methane compatibility | Specs from the old Technical Specifications row |
| 5 | Delivery band + five steps | 01 Gas assessment, 02 System design, 03 Installation & integration, 04 Commissioning & testing, 05 Monitoring & support | Each step copy-left, decorative line-art SVG panel right |
| 6 | Applications values | Three icon-badge cells: wastewater treatment plants, landfill gas recovery, agriculture & food waste | From the old Applications row |
| 7 | Contact band | H2 "Turn waste gas *into revenue.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor every CTA targets |
| 8 | Footer + marquee | Brand blurb, quick links, address/email/phone, legal links; closing marquee ticker | Shared with the other refit pages |

## SEO

- **Baseline title:** `Biomethane Green Compression — Rota Ventures`
- **Baseline meta description:** "Optimizing renewable energy throughput with advanced compression technology designed for high-efficiency biogas capture and processing."
- **Suggested improvement (description):** it states the what but not the offer; append the commercial hook, e.g. "…biogas capture and processing. Available for lease with 24/7 support — request a quote." The title already leads with the product name and needs no change.

## Cross-links

- **Receives:** the Home product grid, the Product Supports dropdown on every page, and the footer "Products Supports" quick link — which currently points at this file from all 11 pages, a quirk to resolve sitewide.
- **Links to:** sibling Product Supports pages, most naturally `portable-water.html` (wastewater treatment facilities appear in this page's applications list) and `economical-pumping.html` (adjacent fluid-handling line).
- **Strategic Leasing is the natural upsell:** these systems are leasable, so the page should link `strategic-leasing.html` beside the specs or benefits with a "lease instead of buying" line.
- Also relevant: `combined-head-power.html` (Engineering Solutions) for biogas-to-energy sites considering full plant integration.

## Assets

- **Imagery (2):** both local — `assets/img/hero-3.png` (compression impeller close-up) and `assets/img/vision-4.png` (storage tank farm). The old Unsplash hotlinks are gone.
- **Logo:** local, `assets/img/logo.png`.
- When available, replace generic stock with photography of actual compression skids and installed sites.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Biomethane" in ink, "Green Compression." in the grey tone — the decorative qualifier recedes, per the two-tone device.
- **Hero:** eyebrow label (no pill), word-rise entrance, dot-grid backdrop, narrow measure lead.
- **Bands:** tall full-bleed heading bands with eyebrow + two-tone display H2 ("The Problem", "The Specification", "Delivery", "Applications").
- **Steps:** copy left (number, heading, one-line lead, three proof bullets), decorative line-art SVG panel right — feedstock analysis dome, compression train, tie-in route, pressure gauge, recovery sparkline. All SVGs inherit theme tokens; panels are `aria-hidden`.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; validation is local and submits via mailto.
