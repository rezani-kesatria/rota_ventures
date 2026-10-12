# Economical Pumping & Compression — Page Brief

## Overview

`economical-pumping.html` is the third leaf page under the Product Supports group. It presents Rota Ventures' cost-efficient pumping and compression systems to buyers whose decisions hinge on total cost of ownership: municipal water supply, irrigation, building services, industrial process water, HVAC circulation, cooling towers, and general fluid transfer. The page (refit 2026) uses the shared leaf template — eyebrow-and-two-tone-H1 hero, problem band, insight grid, outcome values, five-step delivery rows with line-art panels, applications values, contact band, footer, marquee — with every CTA pointing at the contact band (`#contact`).

## Goals

- Sell on economics: make the energy case with the page's own numbers — 30–50% power reduction versus fixed-speed systems, ROI typically within 2–3 years.
- Show breadth through the operating envelope: flow from 1 to 1,000 m³/h, pressure up to 150 bar, up to IE4/IE5 motor efficiency.
- Differentiate on engineering substance (VFDs, high-efficiency motors, optimized hydraulics) rather than price alone.
- Conversion goal: drive readers to the contact band (`#contact`) — the copy acknowledges the "calculation" is delivered as an audit-and-model conversation.

## Primary CTA

**Send message** in the contact band (`#contact`), a mailto handoff with the interest select pre-set to "A product support line". The header carries the same destination as "Contact". There is no separate CTA band; the contact band closes the page like the other refit leaves.

## Key Messages

- Advanced engineering with cost-conscious design: variable frequency drives, high-efficiency motors, and optimized hydraulics minimize energy consumption while maintaining reliable performance.
- 30–50% power reduction compared to fixed-speed systems.
- Quick ROI — energy savings typically recover the investment within 2–3 years.
- Lower total cost of ownership: minimal maintenance and long service life, with proven components for consistent operation.
- Flexible operation adapts to varying demand without wasting energy; energy audits, retrofits, and extended warranties are available as support services.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Glass nav: burger, wordmark, chips (Home, How It Works, Strategic Leasing), Engineering Solutions dropdown (2 pages), Product Supports dropdown (6 pages, this page `aria-current`), theme toggle, Contact pill | Shared chrome on all 11 pages |
| 2 | Page hero | Eyebrow "Product Supports"; two-tone H1 "Economical Pumping *& Compression.*"; lead on cutting power, not pressure | Word-rise entrance |
| 3 | The Problem band + insight grid | Two copy cells ("Fixed speed, wasted energy", "Efficiency as a specification") alternating with two photos | Local images: `engineering-1` (pump skids), `leasing-3` (process line) |
| 4 | The Outcome values | Three hairline cells: 30–50% less power; IE4/IE5 motor class; 2–3 year payback (with leasing text-link) | The page's own numbers, now display-scale stats |
| 5 | Delivery band + five steps | 01 Energy audit, 02 System selection, 03 Installation & commissioning, 04 Savings verification, 05 Optimisation & care | Each step copy-left, decorative line-art SVG panel right (power log, duty-point curve, changeover, before/after bars, kWh hold) |
| 6 | Applications values | Three icon-badge cells: municipal water & irrigation; building services & HVAC; process water & fluid transfer | From the old Applications row |
| 7 | Contact band | H2 "Cut the power bill, *keep the pressure.*"; five-field form (interest pre-set to "A product support line"); mailto handoff | Carries the `#contact` anchor |
| 8 | Footer + marquee | Brand blurb, quick links, address/email/phone, legal links; closing marquee ticker | Shared with the other refit pages |

## SEO

- **Baseline title:** `Economical Pumping & Compression — Rota Ventures`
- **Baseline meta description:** "Maximizing operational efficiency with cost-effective pumping systems that reduce power consumption while maintaining high-pressure output."
- **Suggested improvement (description):** add the quantified hook the page already owns, e.g. "Cut pumping energy by 30–50% with VFD-driven systems — IE4/IE5 motors, up to 150 bar, ROI in 2–3 years." The title is fine as is.

## Cross-links

- **Receives:** the Home product grid, the Product Supports dropdown on every page, and the footer "Products Supports" quick link (which points at `biomethane-compression.html` sitewide — flagged in that brief).
- **Links to:** `specialized-pumping.html` (the pumping sibling for extreme fluids) and `biomethane-compression.html` (the compression sibling), so visitors comparing pumping lines stay in the group.
- **Strategic Leasing is the natural upsell:** the page's own ROI logic supports it — lease the upgrade and let verified energy savings offset the payments. Link `strategic-leasing.html` near Benefits or Support Services.
- Header nav already carries Home, How It Works, and Strategic Leasing on every page.

## Assets

- **Imagery (2):** both local — `assets/img/engineering-1.png` (pump sets on skids) and `assets/img/leasing-3.png` (process line). The old Unsplash hotlinks and their sibling-page reuse are gone.
- **Logo:** local, `assets/img/logo.png`.

## Design Notes

Implemented in the refit (2026), matching `css/home.css` + `css/page.css`:

- **Two-tone H1:** "Economical Pumping" in ink, "& Compression." in the grey tone.
- **Oversized stat:** the 30–50% / IE4-IE5 / 2–3 yrs device lives as three hairline value cells, numbers at display scale in accent.
- **Before/after chart:** realised as a line-art SVG panel in step 04 (Savings verification) — before and after bars with the −30–50% callout.
- **Steps:** copy left, decorative line-art SVG panel right; panels `aria-hidden`, theme-token strokes.
- **Contact band:** dark field, five-field form, pill submit with bloom hover; local validation, mailto handoff.
