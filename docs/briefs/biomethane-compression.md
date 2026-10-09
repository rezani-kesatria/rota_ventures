# Biomethane Green Compression — Page Brief

## Overview

`biomethane-compression.html` is the first leaf page under the Product Supports group of the Rota Ventures site. It presents the biomethane compression support line to biogas plant operators, landfill gas operators, wastewater treatment facilities, and waste-to-energy developers who need to capture, upgrade, and compress renewable biogas. The page follows the shared Product Supports template — badge-and-H1 hero, image grid, hairline-divided detail rows, partners band, CTA band, footer — and funnels every visitor to the contact form in the footer.

## Goals

- Let technical buyers self-qualify by stating the operating envelope plainly: 50–5,000 Nm³/h capacity, up to 300 bar, methane content 45–99%, >95% mechanical efficiency.
- Build credibility with concrete outcomes from the page copy: up to 98% of available biogas energy recovered, methane captured that would otherwise be released or flared.
- Frame the offer commercially — revenue generation through renewable natural gas and regulatory compliance — not just equipment supply.
- Conversion goal: move the reader to the footer contact form (`#contact`) via the header "Contact Us" button or the "Request a Quote" CTA band.

## Primary CTA

**Request a Quote**, targeting the footer contact form (`#contact`). The header carries the same destination with the generic "Contact Us" label. The CTA band button uses the white-on-green variant (`btn btn-white btn-white-green`), currently unique to this page among the Product Supports leaves.

## Key Messages

- Compressors engineered specifically for renewable biogas: variable composition and moisture content handled while maintaining peak efficiency.
- Wide operating envelope — 50 to 5,000 Nm³/h, pressures up to 300 bar, methane content 45–99%.
- Up to 98% of available biogas energy extracted for grid injection or vehicle fuel.
- Capturing methane that would otherwise be released or flared converts waste into RNG revenue and meets environmental mandates.
- Backed by 24/7 technical support, remote diagnostics and monitoring, preventive maintenance, and rapid spare-parts deployment.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo; nav: Home, How It Works, Strategic Leasing; Engineering Solutions dropdown (2 pages); Product Supports dropdown (6 pages); Contact Us button | Shared chrome on all 11 pages; this page sits under Product Supports |
| 2 | Page hero | Badge "Product Supports"; H1 "Biomethane Green Compression"; lead on optimizing renewable energy throughput for high-efficiency biogas capture and processing | Narrow container |
| 3 | Image grid | Three photos: green energy biogas, compression technology, industrial energy facility | All three hotlinked from Unsplash |
| 4 | Detail rows | Description; Category (Green Energy · Compression Systems · Renewable Energy); Technical Specifications (4 items); Benefits (5 items); Applications; Support Services (5 items) | `detail-list` of six hairline rows — richer than the nominal five-row template: Specifications and Support Services replace a generic "How It Works" row |
| 5 | Partners band | "Trusted by Industry Leaders" with five logos (partner-1, -2, -3, -5, -6) | Dark block |
| 6 | CTA band | H2 "Transform Waste into Renewable Energy"; supporting line; "Request a Quote" button | Green variant of `cta-band` |
| 7 | Footer | Brand blurb, quick links, address/email/phone, contact form, legal links | Carries the `#contact` anchor every CTA targets |

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

- **Hero grid images (3):** hotlinked from `images.unsplash.com` — a production issue. Hotlinking risks broken imagery, licensing drift, and slow loads; download to local assets (e.g. `assets/img/products/biomethane-1.jpg` through `-3.jpg`) and reference relatively.
- **Partner logos (5):** local under `assets/img/` (partner-1, -2, -3, -5, -6). Partner-4 is omitted on this page; confirm the set is intentional.
- **Logo:** local, `assets/img/logo.png`.
- When available, replace generic stock with photography of actual compression skids and installed sites.

## Design Notes

Apply the EcoVolt language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Green" in the grey second tone and keep "Biomethane Compression" in ink — "Biomethane <span grey>Green</span> Compression". "Green" is the decorative qualifier; the single grey drop carries it, and the lead restates the environmental story. Heading stays at 500 weight, sentence case, tight tracking.
- **Hero badge:** "Product Supports" as the pill label, paired with a small dot indicator per the circular-icon-badge device.
- **Image grid:** render the three photos as large-radius photo cards (~16–26px; radius on photo cards only), wiping open upward on scroll.
- **Detail rows:** full-bleed hairline-divided rows — H3 label left, content right, 1px rules running edge to edge with only contents padded. Zero elevation, no cards.
- **Benefit icons:** give the five Benefits items circular line-icon badges, each with its dot indicator.
- **Tall heading band:** if the detail list needs a section title, use the tall full-bleed band with the title pinned top-left and a circular icon button far right; height from bottom padding.
- **CTA pair:** "Request a Quote" as a filled pill with a circular arrow beside it — the circle rolls out from behind the pill. Keep the green band flat; no gradients anywhere.
- **Dark field:** partners band, footer, and a closing marquee read as one continuous dark block with no rule between them; partner logos as a tight centred cluster knocked to one colour at low opacity.
