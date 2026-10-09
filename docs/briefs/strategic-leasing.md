# Strategic Leasing — Page Brief

## Overview

The Strategic Leasing page (`strategic-leasing.html`) is the commercial heart of the site: it sells Rota Ventures' leasing model, which converts high-risk asset ownership into predictable operational utility with zero upfront costs. It serves finance-minded decision-makers — operations leads and business owners who need the equipment but not the capital expenditure. It is one of the three primary nav pages, and the design system names the leasing model as the headline feature of the conversion funnel.

## Goals

- Sell leasing as a strategic financial decision, not a fallback: reframe ownership risk into utility.
- Justify the model with hard benefits: zero upfront costs, tax deductibility, fixed payments, and access to current technology.
- Make "Cash Stuck in Operations" the memorable takeaway that separates this offer from ordinary equipment vendors.
- Conversion goal: move convinced readers to "Schedule a Consultation" and the footer contact form.

## Primary CTA

**"Schedule a Consultation"** — the white pill button in the closing CTA band, targeting `#contact`, the contact form in the site footer on the same page. The header's "Contact Us" pill and the footer form share the same endpoint.

## Key Messages

- "Why own the asset when you only need the output?" — the insight that frames the whole offer.
- The traditional model relies on high-risk CAPEX in a volatile economy; leasing turns that into manageable, predictable payments.
- Shifting from ownership to usage releases "Cash Stuck in Operations" for core innovation and market expansion.
- Four benefit pillars — Zero Upfront Costs, 100% Tax Benefits, Fixed Payments, Latest Technology — each carried by two supporting proofs.
- Fixed payments lock in today's rates and protect margins against inflation.

## Content Outline

| Order | Section | Content summary | Notes |
|------:|---------|-----------------|-------|
| 1 | Page hero | "Strategic Leasing" badge; long two-clause H1 on bridging technical necessity and financial flexibility; lead paragraph on the time value of money and redeployed capital. | Narrow centred container. |
| 2 | The Leasing Insight | Two alternating text/image blocks: "Why own the asset when you only need the output?" (CAPEX versus the leasing pivot) and "What would be the result?" (releasing cash stuck in operations, redeploying it). | Images currently hotlinked from Unsplash — see Assets. |
| 3 | How Strategic Leasing Benefits You | Four benefit boxes, each a heading, a summary line, and a two-column proof pair: Zero Upfront Costs (Immediate Access / Preserved Working Capital), 100% Tax Benefits (Operational Expense Deduction / Simplified Accounting), Fixed Payments (Predictable Budgeting / Inflation Protection), Latest Technology (Easy Upgrades / Competitive Advantage). | "Soft" background section, centred heading. |
| 4 | CTA band | "Ready to Transform Your Infrastructure Investment?" plus a supporting line and the "Schedule a Consultation" button. | Last conversion point before the footer. |
| 5 | Footer | Dark footer field carrying `#contact`: brand blurb, quick links, address/email/phone, contact form. | Shared component on all 11 pages. |

## SEO

**Baseline:**

- `<title>`: "Strategic Leasing — Rota Ventures"
- Meta description: "Our leasing model converts high-risk asset ownership into predictable operational utility with zero upfront costs."

**Suggested improvements:**

- Title: name the commercial search phrases, e.g. "Strategic Leasing — Zero Upfront Industrial Equipment | Rota Ventures".
- Description: the page's strongest keywords (tax benefits, fixed payments) are missing; suggest "Convert asset ownership into predictable utility: zero upfront costs, 100% tax benefits, and fixed payments." — all grounded in the page copy.

## Cross-links

**Links out:**

- `how-it-works.html` — once a reader believes the model, the process page answers "what happens after I sign?"; link it from the CTA band supporting line or the benefits section.
- The Product Supports pages (`biomethane-compression.html`, `economical-pumping.html`, `specialized-pumping.html`, `portable-water.html`, `water-matters.html`, `specialized-cables.html`) — the leasable equipment lines; contextual links show what can actually be leased.
- The Engineering Solutions pages (`combined-head-power.html`, `industrial-remote-operations.html`) — the delivery capability behind the model.
- `index.html` — the logo and nav already link home.

**Receives links from:**

- The main nav of every page (active state here) and every footer's "Leasing" quick link.
- Home, where the leasing row is the headline feature, and `how-it-works.html`, whose step 2 references leasing structures.

## Assets

- `assets/img/logo.png` — header wordmark, footer brand block, and favicon.
- Two insight images are hotlinked from `images.unsplash.com`: `photo-1627807452369-a2cd0b5ca56f` ("Industrial leasing equipment") and `photo-1758519289022-5f9dea0d8cdc` ("Financial planning"). Needed: license-safe local copies stored under `assets/img/` and referenced with relative paths, consistent with the rest of the site.

## Design Notes

This page carries the leasing model the design system calls the headline feature, so the signature components map onto it most naturally.

- **Two-tone headline:** in the H1 "Bridging The Gap Between Technical Necessity And Financial Flexibility", drop **"The Gap Between"** to grey — a single grey drop of connective tissue — while "Bridging", "Technical Necessity", and "Financial Flexibility" stay ink. Headings at weight 500, sentence case, tight tracking.
- **Benefits → leasing ring row:** the design system's leasing row is one full-bleed row cut into four cells by vertical rules — three ring columns, then the CTA column. The benefit pillars fit directly: large dashed rings around "0" (Upfront Costs), "100%" (Tax Benefits), and "Fixed" (Payments), with column labels carrying a trailing accent arrow above each ring, and the fourth cell becoming the paired CTA. The benefit boxes' proof pairs become the ring columns' supporting copy.
- **Oversized two-tone stat:** with rings in place, one benefit — "100%" is the natural pick — can also anchor an oversized stat at display scale, number in accent blue, unit in ink.
- **Insight blocks → about split:** rebuild the two alternating blocks as two cells of one full-bleed row divided by a vertical hairline (copy left, visual right), per the about-split anatomy. The photographs are the only elements that take the large 16–26px radius.
- **Heading band:** "How Strategic Leasing Benefits You" sits in its own tall full-bleed band with a circular icon button pinned to the far right.
- **CTA pair and motion:** "Schedule a Consultation" as a filled pill with a circular arrow that rolls out from behind it; the display H1 rises word by word; rings unwind into place before their badges land on the overshoot curve.
- **Dark field:** the footer stays continuous with the partners bar and a closing marquee — one dark field, no rule between the blocks.
