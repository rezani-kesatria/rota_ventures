# Portable Water & Wastewater — Page Brief

## Overview

`portable-water.html` is the second leaf page under the Product Supports group. It presents Rota Ventures' deployable water and wastewater treatment systems to buyers who need industrial-grade purification at temporary or remote sites: mining camps, construction sites, disaster relief, military operations, oil & gas exploration, temporary events, agriculture, and remote industrial installations. The page (refit 2026) uses the shared leaf template — eyebrow-and-two-tone-H1 hero, problem band, insight grid, benefit deck, five-step delivery rows with line-art panels, applications values, contact band, footer, marquee — with every CTA pointing at the contact band (`#contact`).

## Goals

- Communicate the core promise immediately: complete, containerized treatment capacity that deploys anywhere and runs within 24–48 hours of delivery.
- Give procurement and site teams the shortlisting numbers: 10–500 m³/day, 20' or 40' ISO containers, filtration/UV/RO/biological processes, generator-compatible 230–480V power.
- Position the systems as the way to avoid permanent infrastructure investment for temporary needs — the entry point for the leasing conversation.
- Conversion goal: generate enquiries through the contact band (`#contact`).

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line". The header carries the same destination as "Contact". There is no separate CTA band; the contact band closes the page like the other refit leaves.

## Key Messages

- Industrial-grade purification wherever it's needed — designed for rapid deployment and easy relocation.
- Operational within 24–48 hours; each unit is pre-engineered, tested, and ready for immediate commissioning on arrival.
- Complete all-in-one systems — pumps, controls, and monitoring inside 20' or 40' ISO containers, treating 10–500 m³/day.
- Meets drinking water and discharge standards.
- Avoids permanent infrastructure investment for temporary needs.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Shared chrome on all 11 pages |
| 2 | Page hero | Eyebrow "Product Supports"; two-tone H1 "Portable Water *& Wastewater.*"; lead on containerised plants that travel | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("No grid, no plant, no exceptions", "A treatment plant in a box") alternating with two photos | Local images: `leasing-5` (treatment vessels), `vision-7` (water channel) |
| 4 | The Outcome benefit deck | Self-looping three-tab carousel: Live in 24–48 hours; Moves with the site; Compliant anywhere — chips over photos (24–48h, 20' · 40', 24/7) | Panels: `leasing-1`, `hero-2`, `vision-4`; operable without JS |
| 5 | Delivery band + five steps | 01 Water assessment, 02 Container configuration, 03 Delivery & siting, 04 Commissioning, 05 Operation & support | Each step copy-left, decorative line-art SVG panel right |
| 6 | Applications values | Three icon-badge cells: mining camps & construction; disaster relief & military; events, agriculture & remote industry | From the old Applications row |
| 7 | Contact band | H2 "Water, anywhere, *to standard.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor |
| 8 | Footer + marquee | Brand blurb, quick links, address/email/phone, legal links; closing marquee ticker | Shared with the other refit pages |

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

- **Imagery (5):** all local — insight: `assets/img/leasing-5.png`, `assets/img/vision-7.png`; benefit panels: `leasing-1`, `hero-2`, `vision-4`. The old Unsplash hotlinks are gone.
- **Logo:** local, `assets/img/logo.png`.
- When available, add photography of actual containerized units and field deployments; current stock reads generic.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Portable Water" in ink, "& Wastewater." in the grey tone.
- **Benefit deck:** the vertical tab carousel with self-looping dwell, progress bar, dots and arrows; chips ("24–48h", "20' · 40'", "24/7") land as accent blocks over the panel photos. All numbers come from the page's own copy.
- **Steps:** copy left (number, heading, one-line lead, three proof bullets), line-art SVG panel right — source survey, treatment train, site arrival, quality check, uptime log. Panels `aria-hidden`, theme-token strokes.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; local validation, mailto handoff.
