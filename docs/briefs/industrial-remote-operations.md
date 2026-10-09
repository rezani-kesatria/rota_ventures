# Industrial Remote Operations — Page Brief

## Overview

Industrial Remote Operations is a leaf page under the Engineering Solutions group (`industrial-remote-operations.html`), sharing the standard leaf template with its sibling Combined Head & Power. It details Rota Ventures' remote monitoring and retrofit offer for operators of legacy motor and piping infrastructure: IoT sensors, SCADA integration, and analytics that turn manual processes into connected, remotely controllable systems. The page explains what the service covers, how the five-step retrofit runs, the measured downtime and asset-life outcomes, and the industries it applies to. Everything funnels to the footer contact form. Note: the sitemap lists this page's primary CTA as "Contact Our Engineers", but the live CTA band button reads "Get Started Today" — this brief follows the live page.

## Goals

- Show technical and operations evaluators that existing legacy equipment can be retrofitted rather than replaced, at measurable gain.
- Build credibility around real-time visibility, predictive maintenance, and safety improvements for hazardous environments.
- Convert qualified visitors into enquiries via the footer contact form (`#contact`).
- Connect the offer to Strategic Leasing so monitoring and control upgrades can be financed without upfront capital.

## Primary CTA

**"Get Started Today"** — the white button in the CTA band, targeting `#contact` (the footer contact form). Reinforced by the global header "Contact Us" pill, which targets the same anchor.

## Key Messages

- Traditional manual processes become intelligent, connected systems: IoT sensors, SCADA systems, and advanced analytics.
- Real-time monitoring and control of critical infrastructure from anywhere in the world, 24/7.
- **Unplanned downtime reduced by up to 70%** through predictive maintenance that identifies failures before they occur.
- **Equipment lifespan extended by 20–30%** through optimal operating conditions and timely maintenance.
- Retrofit-first approach: existing equipment is upgraded with modern technology, extending asset life while improving efficiency and safety, with remote operation reducing personnel exposure to hazardous environments.

## Content Outline

| Order | Section | Content summary | Notes |
|------:|---------|-----------------|-------|
| 1 | Header / nav | Logo, Home, How It Works, Strategic Leasing, Engineering Solutions and Product Supports dropdowns, Contact Us pill | Shared block on all pages |
| 2 | Page hero | Badge "Engineering Solutions", H1 "Industrial Remote Operations", lead on upgrading legacy motor and piping infrastructure for throughput and energy efficiency | Badge + H1 + lead pattern shared with the sibling leaf page |
| 3 | Image grid | Three photos: remote operations control room, industrial monitoring technology, modern industrial systems | Currently hotlinked from Unsplash (see Assets) |
| 4 | Detail rows | Description; Category ("Engineering Solutions · Remote Monitoring · Industrial Automation"); How It Works (5 steps: Infrastructure Assessment, Sensor Deployment, Network Integration, Control System Upgrade, Analytics & Optimization); Benefits (6 items incl. 70% downtime cut and 20–30% asset-life gain); Applications (oil & gas, water treatment, manufacturing, chemical processing, mining, renewables, distributed assets) | Hairline-divided `detail-row` list; six benefits vs the sibling page's five |
| 5 | Partners band | "Trusted by Industry Leaders" heading over four partner logos | Logos are local assets (`assets/img/partner-1.png` … `partner-4.png`) |
| 6 | CTA band | "Ready to Modernize Your Operations?" plus a transform-your-infrastructure line and the white CTA button | Final conversion push above the footer |
| 7 | Footer (`#contact`) | Brand blurb, Quick Links, address / email / phone, contact form, legal row | Shared block; carries the `#contact` anchor target |

## SEO

- Baseline title: `Industrial Remote Operations — Rota Ventures`.
- Baseline meta description: "Upgrading legacy motor and piping infrastructure with advanced monitoring technology to optimize operational throughput and energy efficiency."
- Suggested title: `Industrial Remote Operations & Retrofit Monitoring | Rota Ventures` — adds the retrofit and monitoring terms buyers search for.
- Suggested description: lead with the outcomes, e.g. "Retrofit legacy plants with IoT sensing, SCADA, and analytics — cut unplanned downtime by up to 70% and extend equipment life by 20–30%."

## Cross-links

Receives links from:

- Home's engineering row (per the sitemap, both Engineering Solutions leaves are linked there directly).
- The Engineering Solutions dropdown in the nav on all 11 pages.

Should link to:

- `combined-head-power.html` — the sibling engineering offer; note the footer Quick Links "Engineering Solutions" entry currently points to the sibling instead of this page, an asymmetry to resolve.
- `strategic-leasing.html` — financing path for the monitoring and control upgrade.
- `how-it-works.html` — the delivery methodology behind the five-step retrofit.
- `#contact` — via the CTA band and header pill (already in place).

## Assets

- The three grid images are hotlinked from `images.unsplash.com` (photo IDs `1635340038191-96eea7fbd056`, `1761115435501-bebf019aba54`, `1759159091682-3b98f4759367`). This is a production issue: external availability and performance are out of our control, licence terms can change, and the last two photos are reused verbatim on the Combined Head & Power page — the control-room shot is the only image unique to this page.
- Recommendation: source owned or licensed photography and store it locally under `assets/img/` (e.g. `assets/img/iro-control-room.jpg`, `iro-monitoring.jpg`, `iro-systems.jpg`), with distinct imagery per page.
- Partner logos and `logo.png` (favicon, header, footer) are already local; note the sitemap mentions up to six partner logos while this page ships four.

## Design Notes

How the EcoVolt language (`design-guidelines/design-system.json`, reference rules) applies to this page:

- **Two-tone H1:** one deliberate grey drop. Set "Industrial" in grey (`#B9BDC4` on the light canvas) and "Remote Operations" in near-black ink — the grey carries the market qualifier, the ink carries the service. This page has no ampersand, so the qualifier is the natural single drop.
- **Heading style:** light weight (500), sentence case, tight tracking — hierarchy comes from scale and the two-tone device, never bold or all-caps.
- **Paired pill + circle CTA:** render "Get Started Today" as a filled pill with a circular arrow button beside it; the circle rolls out from behind the pill on arrival. Same treatment for the header "Contact Us" pill.
- **Circular icon badges with dot indicators:** give each of the six detail-row headings (Description, Category, How It Works, Benefits, Applications) a perfect-circle line-icon badge with its small dot indicator in the royal-blue accent `#2F5BFF`; sensor-network line icons suit the IoT subject matter.
- **Photo cards with large radius:** the three grid images as photo cards with ~16–26px radius — the only place radius is allowed; structural blocks stay square. Imagery wipes open upward on reveal.
- **Full-bleed hairline-divided rows:** the detail list reads as one full-bleed field cut by 1px horizontal rules, contents inset by padding; no margins anywhere, zero elevation, no gradients.
- **Tall heading band with circular icon button:** add a tall full-bleed band above the detail list (title and button pinned to the top, height from bottom padding, circular icon button far right) so the page keeps the language's rhythm between hero and content.
- **Dark partners / footer / marquee field:** the partners band, footer, and an optional closing marquee ("Industrial Remote Operations" at display scale) read as one continuous dark field with no rule between them; partner logos sit as a tight centred cluster knocked to one colour at low opacity.
- **Type check:** the page loads Karla for body text; the design system specifies Instrument Sans — align at production.
- **Motion:** display headings rise word by word, peer sets stagger ~70ms, scroll-triggered once — all disabled under `prefers-reduced-motion`.
