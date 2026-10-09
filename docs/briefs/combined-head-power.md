# Combined Head & Power — Page Brief

## Overview

Combined Head & Power is a leaf page under the Engineering Solutions group (`combined-head-power.html`), sharing the standard leaf template with its sibling Industrial Remote Operations. It details Rota Ventures' combined heat and power (CHP) engineering offer for facility and plant operators who need simultaneous electricity and useful thermal energy from a single fuel source: what the service covers, how the five-step engagement runs, the measured efficiency and emissions outcomes, and the site types it applies to. Everything on the page funnels to the footer contact form. Note: the title, nav, and H1 read "Combined Head & Power" while the page copy expands it as "Combined Heat & Power (CHP)" — confirm the intended spelling before production.

## Goals

- Give technical evaluators enough detail (scope, process, outcomes) to shortlist Rota Ventures for a CHP project.
- Build credibility through certified compliance, standards alignment, and integration into existing infrastructure without operational downtime.
- Convert qualified visitors into enquiries via the footer contact form (`#contact`).
- Position Strategic Leasing as the financing path so upfront capital cost does not block the enquiry.

## Primary CTA

**"Contact Our Engineers"** — the white button in the CTA band, targeting `#contact` (the footer contact form). Reinforced by the global header "Contact Us" pill, which targets the same anchor.

## Key Messages

- CHP systems generate electricity and useful thermal energy from a single fuel source, engineered to integrate with existing infrastructure.
- **Up to 80% total efficiency** by capturing and utilizing waste heat, significantly reducing fuel consumption.
- **Carbon footprint reduced by up to 55%** compared to separate heat and power generation.
- Full deployment with seamless connection to existing electrical and thermal infrastructure, maintaining operational continuity.
- A five-step engagement: site assessment, system design, installation and integration, commissioning and testing, ongoing optimization.

## Content Outline

| Order | Section | Content summary | Notes |
|------:|---------|-----------------|-------|
| 1 | Header / nav | Logo, Home, How It Works, Strategic Leasing, Engineering Solutions and Product Supports dropdowns, Contact Us pill | Shared block on all pages |
| 2 | Page hero | Badge "Engineering Solutions", H1 "Combined Head & Power", lead on aligning complex assets with global standards for safety, reliability, and maintenance efficiency | Badge + H1 + lead pattern shared with the sibling leaf page |
| 3 | Image grid | Three photos: CHP plant, industrial energy technology, modern industrial machinery | Currently hotlinked from Unsplash (see Assets) |
| 4 | Detail rows | Description; Category ("Engineering Solutions · Energy Systems · Power Generation"); How It Works (5 numbered steps); Benefits (5 items incl. 80% efficiency and 55% emission cut); Applications (manufacturing, chemical plants, hospitals, universities, district heating, data centers) | Hairline-divided `detail-row` list; carries the page's substance |
| 5 | Partners band | "Trusted by Industry Leaders" heading over four partner logos | Logos are local assets (`assets/img/partner-1.png` … `partner-4.png`) |
| 6 | CTA band | "Ready to Optimize Your Energy Systems?" plus a tailored-solution line and the white CTA button | Final conversion push above the footer |
| 7 | Footer (`#contact`) | Brand blurb, Quick Links, address / email / phone, contact form, legal row | Shared block; carries the `#contact` anchor target |

## SEO

- Baseline title: `Combined Head & Power — Rota Ventures`.
- Baseline meta description: "Aligning complex technical assets with global industry standards to ensure maximum safety, reliability, and maintenance efficiency."
- Suggested title: `Combined Heat & Power (CHP) Engineering | Rota Ventures` — "CHP" is the term buyers actually search, and the current title leads with the likely misspelling "Head".
- Suggested description: lead with the service and its numbers, e.g. "CHP engineering solutions delivering up to 80% efficiency and up to 55% lower emissions — from site assessment and design to installation and ongoing optimization."

## Cross-links

Receives links from:

- Home's engineering row (per the sitemap, both Engineering Solutions leaves are linked there directly).
- The Engineering Solutions dropdown in the nav on all 11 pages.
- The footer Quick Links block, whose "Engineering Solutions" entry points to this page from every page of the site.

Should link to:

- `industrial-remote-operations.html` — the sibling engineering offer, so evaluators can compare both.
- `strategic-leasing.html` — the financing path for the installation.
- `how-it-works.html` — the delivery methodology behind the five-step process.
- `#contact` — via the CTA band and header pill (already in place).

## Assets

- The three grid images are hotlinked from `images.unsplash.com` (photo IDs `1635277055420-230e79907552`, `1761115435501-bebf019aba54`, `1759159091682-3b98f4759367`). This is a production issue: external availability and performance are out of our control, licence terms can change, and two of the three photos are reused verbatim on the Industrial Remote Operations page.
- Recommendation: source owned or licensed photography and store it locally under `assets/img/` (e.g. `assets/img/chp-plant.jpg`, `chp-industrial.jpg`, `chp-machinery.jpg`), with distinct imagery per page.
- Partner logos and `logo.png` (favicon, header, footer) are already local; note the sitemap mentions up to six partner logos while this page ships four.

## Design Notes

How the EcoVolt language (`design-guidelines/design-system.json`, reference rules) applies to this page:

- **Two-tone H1:** one deliberate grey drop. Set "Combined" in grey (`#B9BDC4` on the light canvas) and "Head & Power" in near-black ink — the grey carries the qualifier, the ink carries the offer. If the "Heat" spelling is confirmed, an alternative is to keep the product words in ink and drop only the "&" to grey.
- **Heading style:** light weight (500), sentence case, tight tracking — hierarchy comes from scale and the two-tone device, never bold or all-caps.
- **Paired pill + circle CTA:** render "Contact Our Engineers" as a filled pill with a circular arrow button beside it; the circle rolls out from behind the pill on arrival. Same treatment for the header "Contact Us" pill.
- **Circular icon badges with dot indicators:** give each of the five detail-row headings (Description, Category, How It Works, Benefits, Applications) a perfect-circle line-icon badge with its small dot indicator in the royal-blue accent `#2F5BFF`.
- **Photo cards with large radius:** the three grid images as photo cards with ~16–26px radius — the only place radius is allowed; structural blocks stay square. Imagery wipes open upward on reveal.
- **Full-bleed hairline-divided rows:** the detail list reads as one full-bleed field cut by 1px horizontal rules, contents inset by padding; no margins anywhere, zero elevation, no gradients.
- **Tall heading band with circular icon button:** add a tall full-bleed band above the detail list (title and button pinned to the top, height from bottom padding, circular icon button far right) so the page keeps the language's rhythm between hero and content.
- **Dark partners / footer / marquee field:** the partners band, footer, and an optional closing marquee ("Combined Head & Power" at display scale) read as one continuous dark field with no rule between them; partner logos sit as a tight centred cluster knocked to one colour at low opacity.
- **Type check:** the page loads Karla for body text; the design system specifies Instrument Sans — align at production.
- **Motion:** display headings rise word by word, peer sets stagger ~70ms, scroll-triggered once — all disabled under `prefers-reduced-motion`.
