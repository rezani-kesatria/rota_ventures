# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static, class-driven HTML/CSS/JS (per project brief in `design-guidelines/design-system.json`). No framework, no build step. Vendored libraries under `assets/js/vendor/`: GSAP, ScrollTrigger, Lenis, Motion.

## Users

Business decision-makers at industrial operators in Malaysia and Southeast Asia: plant owners, operations directors, and finance leads who need technical assets (power, pumping, water, compression) but are constrained on capital expenditure. They evaluate vendors on trust, engineering credibility, and cash-flow impact.

## Product Purpose

A corporate profile website for Rota Ventures that presents its engineering solutions, strategic leasing model, and product support lines, so potential clients and partners can understand the business and get in touch. Primary goal: a clear, simple presentation of the company's services that drives visitors to make contact.

## Positioning

Rota Ventures bridges technical necessity and financial flexibility: it removes the up-front capital barrier by leasing industrial assets (zero upfront cost, 100% tax-deductible payments, fixed terms) and wraps them in precision engineering services. A neighboring equipment vendor could not truthfully copy the leasing-plus-engineering combination.

## Operating Context

B2B evaluation: visitors compare against outright purchase and other leasing vendors. Contact is by email (usaid@rotaventures.com.my), phone (+6012-2575645), or the site's contact form, which composes a mailto: draft. Company address: 29, Jalan Perindustrian Suntrack Off Jalan P1/A, Seksyen 13, 43650 Bandar Baru Bangi, Selangor, Malaysia.

## Capabilities and Constraints

- 11 static pages: home, how-it-works, strategic-leasing, 2 engineering solutions, 6 product support lines.
- Contact form has no backend; it validates locally and hands off to the visitor's email client.
- Partner logos are placeholder-quality PNGs (`assets/img/partner-*.png`); all page photography is local under `assets/img/` — the old Unsplash hotlinks were removed during the 2026 inner-page refit (home, How It Works, Strategic Leasing, both Engineering Solutions, all six Product Supports). Stock imagery is generic; product-accurate photography is still wanted.
- Site naming defect on record: pages say "Combined Head & Power" where the product is Combined Heat & Power.
- No real customer names, testimonials, pricing, or benchmarks exist; none may be invented. The Strategic Leasing page carries an approved placeholder testimony section (three clearly marked placeholder quotes) pending real client quotes.

## Brand Commitments

- Name: Rota Ventures. Logo: `assets/img/logo.png`.
- Visual direction is pinned by `design-guidelines/design-system.json` (EcoVolt study recreation; original design by Irfanaffian for One Week Wonders — credit the original designer in shipped work where relevant).
- Fonts pinned: Space Grotesk (headings, weight 500) / Instrument Sans (body).
- Palette pinned: white canvas, near-black ink `#0B0B0C`, royal blue `#2F5BFF` as the single accent, grey `#B9BDC4` as second tone; flat colour, no gradients, no shadows.
- Both colour themes ship; dark blocks invert in dark mode.
- Accessibility: WCAG AA.
- Avoid: AI-slop-generated design.

## Evidence on Hand

- Published stats used across the site: 100% upfront financing, 80+ industrial assets, 55% emission reduction.
- Vision and mission statements (verbatim on the incumbent home page).
- Leasing benefit set: Zero Upfront Costs, 100% Tax Benefits, Fixed Payments, Latest Technology.
- 7-step delivery process: Problem Diagnosis, Strategic Design, Custom Procurement, Tailored Modification, Expert Installation, Commissioning, After Sales Support.
- 4 published FAQs with answers.
- Page briefs for all 11 pages under `docs/briefs/`; sitemap in `docs/sitemap.md`.

## Product Principles

1. The leasing model leads: every page funnels toward contact with leasing as the headline offer.
2. Prove, don't claim: use the real stats and the concrete process; no invented proof.
3. Clarity over decoration: minimal, flat, hairline-separated layout that loads fast and reads fast.
4. Trust through specifics: name the engineering disciplines and product lines precisely.

## Accessibility & Inclusion

WCAG AA required: body text ≥4.5:1, large display text ≥3:1, visible focus states, reduced-motion support (all scroll/marquee animation disabled under `prefers-reduced-motion`), semantic landmarks and keyboard-operable navigation/accordion.
