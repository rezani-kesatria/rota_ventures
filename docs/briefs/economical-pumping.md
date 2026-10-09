# Economical Pumping & Compression — Page Brief

## Overview

`economical-pumping.html` is the third leaf page under the Product Supports group. It presents Rota Ventures' cost-efficient pumping and compression systems to buyers whose decisions hinge on total cost of ownership: municipal water supply, irrigation, building services, industrial process water, HVAC circulation, cooling towers, and general fluid transfer. The page uses the shared Product Supports template — badge-and-H1 hero, image grid, hairline-divided detail rows, partners band, CTA band, footer — with every CTA pointing at the footer contact form.

## Goals

- Sell on economics: make the energy case with the page's own numbers — 30–50% power reduction versus fixed-speed systems, ROI typically within 2–3 years.
- Show breadth through the operating envelope: flow from 1 to 1,000 m³/h, pressure up to 150 bar, up to IE4/IE5 motor efficiency.
- Differentiate on engineering substance (VFDs, high-efficiency motors, optimized hydraulics) rather than price alone.
- Conversion goal: drive readers to the footer form (`#contact`) via the "Calculate Your Savings" CTA band — noting the label promises a calculation that is delivered as a conversation, which the page copy should acknowledge.

## Primary CTA

**Calculate Your Savings**, targeting the footer contact form (`#contact`). The header carries the same destination as "Contact Us". The CTA band uses the standard white-on-ink band.

## Key Messages

- Advanced engineering with cost-conscious design: variable frequency drives, high-efficiency motors, and optimized hydraulics minimize energy consumption while maintaining reliable performance.
- 30–50% power reduction compared to fixed-speed systems.
- Quick ROI — energy savings typically recover the investment within 2–3 years.
- Lower total cost of ownership: minimal maintenance and long service life, with proven components for consistent operation.
- Flexible operation adapts to varying demand without wasting energy; energy audits, retrofits, and extended warranties are available as support services.

## Content Outline

| Order | Section | Content summary | Notes |
|---|---|---|---|
| 1 | Site header | Logo; nav: Home, How It Works, Strategic Leasing; Engineering Solutions dropdown (2 pages); Product Supports dropdown (6 pages); Contact Us button | Shared chrome on all 11 pages |
| 2 | Page hero | Badge "Product Supports"; H1 "Economical Pumping & Compression"; lead on reducing power consumption while maintaining high-pressure output | Narrow container |
| 3 | Image grid | Three photos: industrial pumping equipment, modern pumping technology, industrial compression systems | Hotlinked from Unsplash; two of the three are reused from sibling pages |
| 4 | Detail rows | Description; Category (Pumping Systems · Compression · Energy Efficiency); Technical Specifications (flow, pressure, motor efficiency, VFD control); Benefits (5 items); Applications; Support Services (5 items) | `detail-list` of six hairline rows; Specifications and Support Services fill the slot a generic "How It Works" row would take |
| 5 | Partners band | "Trusted by Industry Leaders" with four logos (partner-1, -2, -3, -4) | Dark block; the only Product Supports page showing four logos instead of five |
| 6 | CTA band | H2 "Reduce Costs Without Compromising Performance"; supporting line on lowering energy bills; "Calculate Your Savings" button | Standard `cta-band` |
| 7 | Footer | Brand blurb, quick links, address/email/phone, contact form, legal links | Carries the `#contact` anchor |

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

- **Hero grid images (3):** hotlinked from `images.unsplash.com` — a production issue. Localize under `assets/img/products/economical-pumping-1.jpg` through `-3.jpg`.
- **Image reuse:** `photo-1774019883172-a89730a86500` also leads `portable-water.html`, and `photo-1635277055420-230e79907552` also appears on `biomethane-compression.html`; replace both instances here so no two pages share imagery.
- **Partner logos (4):** local under `assets/img/` (partner-1, -2, -3, -4). This page uses a different set from its siblings — confirm whether the four-logo band is intended.
- **Logo:** local, `assets/img/logo.png`.

## Design Notes

Apply the EcoVolt language from `design-guidelines/design-system.json`:

- **Two-tone H1:** set "Economical" in the grey second tone and keep "Pumping & Compression" in ink — "<span grey>Economical</span> Pumping & Compression". The qualifier is the value claim, so the grey drop poses the question and the lead answers it; the ink words name the capability. 500 weight, sentence case, tight tracking.
- **Oversized stat:** this page has the strongest numbers on the site for the two-tone stat device — "30–50%" with the number in accent and "energy saved" in ink, and "2–3 yrs" to ROI, set at display scale beside the hero or above the detail rows.
- **Before/after chart:** an energy-consumption chart built from the same hairlines and accent (before series sweeping first, after ~300ms later, the saving figure landing last) would make the savings claim visible; it is a recommendation, not existing content.
- **Image grid:** three large-radius photo cards (~16–26px), upward wipe on entry.
- **Detail rows:** full-bleed hairline-divided rows — label left, content right; zero elevation.
- **Benefit icons:** the five Benefits items map to circular line-icon badges with dot indicators (energy savings, TCO, reliability, ROI, flexible operation).
- **Tall heading band:** a band introducing the specifications — title pinned top, circular icon button far right — fits before the detail list.
- **CTA pair:** "Calculate Your Savings" as a filled pill plus circular arrow, the circle rolling out from behind the pill.
- **Dark field:** partners band, footer, and closing marquee as one continuous dark block; partner logos as a tight centred low-opacity cluster.
