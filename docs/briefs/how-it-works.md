# How It Works — Page Brief

## Overview

The How It Works page (`how-it-works.html`) explains how Rota Ventures takes an engagement from first conversation to long-term operation through a five-step delivery methodology. It serves prospective clients and partners who are already interested in the engineering, leasing, or product support offers and now need confidence that the work will actually be delivered well. It is one of the three primary nav pages, alongside Home and Strategic Leasing.

## Goals

- Convert evaluation-stage visitors into enquiries by showing a structured, low-risk delivery process.
- Build trust through concrete deliverables at each step: site surveys, engineering blueprints, certification programs, 24/7 support.
- Set expectations for the full engagement lifecycle so contact enquiries arrive better qualified.
- Conversion goal: every reader reaches the closing CTA band and submits the footer contact form.

## Primary CTA

**"Contact Us Today"** — the white pill button in the closing CTA band, targeting `#contact`, the contact form in the site footer on the same page. The header's "Contact Us" pill shares this target, so the footer form is the single conversion endpoint.

## Key Messages

- A proven methodology covers everything "from initial consultation to ongoing support," tailored to each operation.
- Every engagement starts with a comprehensive assessment: facility audits, efficiency analysis, and safety/compliance gap checks.
- Recommendations are tailored to the objective, whether the outcome is engineering design, equipment leasing, or product support.
- The partnership does not end at deployment: continuous monitoring, preventive maintenance, and 24/7 support back every system.
- The process works because of proven expertise, a customized approach, and long-term partnership.

## Content Outline

| Order | Section | Content summary | Notes |
|------:|---------|-----------------|-------|
| 1 | Page hero | "Our Process" badge; H1 "How It Works"; lead paragraph promising seamless delivery of engineering, leasing, and product support services. | Narrow centred container. |
| 2 | Process list | Five numbered split rows, Runlayer-style: copy left (heading, one-line summary, three proof bullets below it), decorative illustration panel right mocking the step's deliverables: (1) Discovery & Assessment, (2) Custom Solution Design, (3) Implementation & Deployment, (4) Training & Knowledge Transfer, (5) Ongoing Support & Optimization. | Numbered circles joined by a connector line; panels mirror the row's own bullets so no outside claims are invented. `sitemap.md` calls this a "7-step" methodology while the page shows five steps — reconcile before launch. |
| 3 | Why Our Process Works | Three value cards: Proven Expertise, Customized Approach, Long-Term Partnership. | "Soft" background section with centred display heading. |
| 4 | CTA band | "Ready to Get Started?" plus a supporting line and the "Contact Us Today" button. | Last conversion point before the footer. |
| 5 | Footer | Dark footer field carrying `#contact`: brand blurb, quick links, address/email/phone, and the contact form. | Shared component on all 11 pages. |

## SEO

**Baseline:**

- `<title>`: "How It Works — Rota Ventures"
- Meta description: "From initial consultation to ongoing support, our proven methodology ensures seamless delivery of engineering solutions, strategic leasing, and product support services."

**Suggested improvements:**

- Title: the current title ranks only for brand-plus-generic phrasing; add service keywords, e.g. "Our Process — Engineering, Leasing & Product Support | Rota Ventures".
- Description: close with a reason to act, e.g. append "…with 24/7 support at every step." Both claims come straight from the page copy.

## Cross-links

**Links out (recommended additions):**

- `strategic-leasing.html` — step 2 already mentions "leasing structure recommendations"; that phrase should link through.
- The Engineering Solutions pages (`combined-head-power.html`, `industrial-remote-operations.html`) and Product Supports pages — the methodology applies to all eight offers, and contextual links keep visitors moving toward a specific offer.
- `index.html` — the logo and nav already link home.

**Receives links from:**

- The main nav of every page (active state on this page).
- The footer quick links of every page, currently labelled "About" — consider relabelling to "How It Works" for clarity.
- Home and Strategic Leasing, per the sitemap's linking model.

## Assets

- `assets/img/logo.png` — header wordmark, footer brand block, and favicon. No photography is used on the page today.
- Needed if the design language is fully applied: a small set of line icons for the five process-step circular badges, plus one icon for the heading-band circular button (see Design Notes).

## Design Notes

The page follows the EcoVolt language loosely today; these notes align it fully with `design-guidelines/design-system.json`.

- **Two-tone headline:** the H1 "How It Works" is short, so the single grey drop lands on **"Works"** — "How It" stays ink, "Works" goes grey. The section heading is the better canvas: "Why **Our Process** Works", with "Our Process" in grey, so the non-essential qualifier recedes while "Why … Works" carries the sentence in ink. Headings stay at weight 500, sentence case, tight tracking.
- **Process list → signature rows:** the five steps are full-bleed hairline-divided rows — no card boxes, zero radius — separated by 1px rules that run edge to edge. Each row splits copy left (number, heading, one-line summary, proof bullets) and an illustration panel right: a line-drawing artifact of the step's deliverable, drawn in the site's 1.5px stroke language with accent highlights — (1) floor plan with a survey magnifier, (2) pump-and-tank schematic on a dot grid, (3) install timeline with milestone checks and a "Your site" terminus, (4) certificate card with ribbon seal, (5) "24/7" sparkline dashboard with a pulsing live dot. All SVGs inherit theme tokens, so dark mode needs no variants; panels are `aria-hidden` and the pulse dies under `prefers-reduced-motion`.
- **Value cards:** the three "Why Our Process Works" cards should become three cells of one full-bleed row divided by vertical 1px rules, not floating cards.
- **Heading band:** give "Why Our Process Works" its own tall full-bleed band with a circular icon button pinned to the far right — band height comes from bottom padding, content pinned to the top.
- **CTA pair:** "Contact Us Today" should be a filled pill paired with a circular arrow button that rolls out from behind the pill on arrival.
- **Dark field:** the footer already sits on the dark block; keep it continuous with any partners bar and a closing marquee — one dark field, no rule between them.
- **Stats:** the page makes no quantified claims, so dashed stat rings and the oversized two-tone stat do not fit today. Add them only if real figures exist (years of experience, industries served) — do not invent numbers.
