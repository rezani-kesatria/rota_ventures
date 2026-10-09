# Portable Water & Wastewater — Page Brief

## Overview

`portable-water.html` is the second leaf page under the Product Supports group. It presents Rota Ventures' deployable water and wastewater treatment systems to buyers who need industrial-grade purification at temporary or remote sites: mining camps, construction sites, disaster relief, military operations, oil & gas exploration, temporary events, agriculture, and remote industrial installations. The page uses the shared Product Supports template — badge-and-H1 hero, image grid, hairline-divided detail rows, partners band, CTA band, footer — with every CTA pointing at the footer contact form.

## Goals

- Communicate the core promise immediately: complete, containerized treatment capacity that deploys anywhere and runs within 24–48 hours of delivery.
- Give procurement and site teams the shortlisting numbers: 10–500 m³/day, 20' or 40' ISO containers, filtration/UV/RO/biological processes, generator-compatible 230–480V power.
- Position the systems as the way to avoid permanent infrastructure investment for temporary needs — the entry point for the leasing conversation.
- Conversion goal: generate enquiries through the footer form (`#contact`) via the "Get a Solution" CTA band.

## Primary CTA

**Get a Solution**, targeting the footer contact form (`#contact`). The header carries the same destination as "Contact Us". The CTA band uses the standard white-on-ink band, not the green variant.

## Key Messages

- Industrial-grade purification wherever it's needed — designed for rapid deployment and easy relocation.
- Operational within 24–48 hours; each unit is pre-engineered, tested, and ready for immediate commissioning on arrival.
- Complete all-in-one systems — pumps, controls, and monitoring inside 20' or 40' ISO containers, treating 10–500 m³/day.
- Meets drinking water and discharge standards.
- Avoids permanent infrastructure investment for temporary needs.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo; nav: Home, How It Works, Strategic Leasing; Engineering Solutions dropdown (2 pages); Product Supports dropdown (6 pages); Contact Us button | Shared chrome on all 11 pages |
| 2 | Page hero | Badge "Product Supports"; H1 "Portable Water & Wastewater"; lead on reliable water management and filtration in remote or temporary industrial environments | Narrow container |
| 3 | Image grid | Three photos: water treatment facility, industrial water systems, water management technology | All three hotlinked from Unsplash |
| 4 | Detail rows | Description; Category (Water Treatment · Portable Systems · Environmental Solutions); Technical Specifications (capacity, configuration, processes, power); Benefits (5 items); Applications; Support Services (5 items) | `detail-list` of six hairline rows; Specifications and Support Services carry the page-specific weight where a generic "How It Works" row would sit |
| 5 | Partners band | "Trusted by Industry Leaders" with five logos (partner-1, -2, -3, -5, -6) | Dark block |
| 6 | CTA band | H2 "Need Reliable Water Solutions Anywhere?"; supporting line; "Get a Solution" button | Standard `cta-band` |
| 7 | Footer | Brand blurb, quick links, address/email/phone, contact form, legal links | Carries the `#contact` anchor |

## SEO

- **Baseline title:** `Portable Water & Wastewater — Rota Ventures`
- **Baseline meta description:** "Deployable treatment solutions engineered to provide reliable water management and filtration in remote or temporary industrial environments."
- **Suggested improvement (description):** the copy is accurate but generic for search; work in the differentiating terms buyers actually use, e.g. "Containerized water and wastewater treatment for remote sites: 10–500 m³/day in 20'/40' ISO units, operational within 24–48 hours." The title is fine as is.

## Cross-links

- **Receives:** the Home product grid, the Product Supports dropdown on every page, and the footer "Products Supports" quick link (which points at `biomethane-compression.html` sitewide — flagged in that brief).
- **Links to:** `water-matters.html`, the water-consulting sibling and strongest pairing, and `economical-pumping.html` for the pumping supply that moves water around the same sites.
- **Strategic Leasing is the natural upsell:** containerized plant is a classic lease asset; link `strategic-leasing.html` near the Benefits with a "deploy without capital expenditure" line.
- Header nav already carries Home, How It Works, and Strategic Leasing on every page.

## Assets

- **Hero grid images (3):** hotlinked from `images.unsplash.com` — a production issue. Localize under `assets/img/products/portable-water-1.jpg` through `-3.jpg` and reference relatively.
- **Image reuse:** `photo-1774019883172-a89730a86500` also appears on `economical-pumping.html`; replace one instance so the two pages do not share a lead image.
- **Partner logos (5):** local under `assets/img/` (partner-1, -2, -3, -5, -6); partner-4 omitted — confirm intentional.
- **Logo:** local, `assets/img/logo.png`.
- When available, add photography of actual containerized units and field deployments; current stock reads generic.

## Design Notes

Apply the EcoVolt language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Portable" in the grey second tone and keep "Water & Wastewater" in ink — "<span grey>Portable</span> Water & Wastewater". The grey drop carries the qualifier, which the lead ("Deployable…") and the "Flexible Mobility" benefit restate; the ink words name the service domain. 500 weight, sentence case, tight tracking.
- **Hero badge:** "Product Supports" pill with its dot indicator.
- **Image grid:** three large-radius photo cards (~16–26px), opening with the upward wipe.
- **Detail rows:** full-bleed hairline-divided rows — label left, content right, rules edge to edge; no elevation.
- **Benefit icons:** the five Benefits items suit circular line-icon badges with dot indicators (deployment, mobility, completeness, compliance, cost).
- **Tall heading band:** a band above the detail list — title pinned top with the circular icon button far right — would give the specifications block a proper stage without new copy.
- **CTA pair:** "Get a Solution" as a filled pill plus circular arrow, the circle rolling out from behind the pill.
- **Dark field:** partners band, footer, and closing marquee as one continuous dark block; partner logos as a tight centred low-opacity cluster.
