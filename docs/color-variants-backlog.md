# Accent colour variants — client review backlog

Status: **pending client decision**. The site ships with the leaf green accent
below. Sky and Cyan are prepared alternates, kept in `css/accent-test.css` and
retrievable at any time with a URL parameter on `index.html`.

All three candidates pass WCAG AA in both themes and were screenshot-verified
across the hero, about/stat grid, leasing rings, and closing dark field.

## How to demo

Serve the site root and append the `accent` parameter:

| Variant | URL |
|---------|-----|
| Leaf Green (shipped) | `index.html` |
| Sky | `index.html?accent=sky` |
| Cyan | `index.html?accent=cyan` |

(For completeness, `?accent=petrol` and `?accent=mono` also still resolve from
the earlier exploration round.)

## Candidate 1 — Leaf Green (shipped default)

Sourced from the leaf cluster in the brand mark (`assets/img/logo.png`).

| Token | Light | Dark |
|-------|-------|------|
| `--accent` (fills, badges, chart) | `#44821f` | `#44821f` |
| `--accent-ink` (text) | `#44821f` | `#6db944` |
| `.field` text re-scope | `#85bf55` | `#3d7419` |
| CTA bloom | `#6db944 → #a3d17c → #44821f` | same |

Contrast: 4.7:1 on white; dark text tint 7.8:1 on near-black.

Character: on-brand with the logo leaves; ties directly to the emissions story
(−55%, "Engineering that cuts emissions").

## Candidate 2 — Sky (bright azure, ~Tailwind sky-500/700)

| Token | Light | Dark |
|-------|-------|------|
| `--accent` (fills) | `#0b9bd6` | `#0b9bd6` |
| `--accent-ink` (text) | `#0369a1` | `#38bdf8` |
| `.field` text re-scope | `#38bdf8` | `#0369a1` |
| CTA bloom | `#7dd3fc → #38bdf8 → #0b9bd6` | same |

Contrast: fill holds white glyphs at 3.2:1 (UI graphics); text 5.9:1 on white;
dark text tint 8.8:1 on near-black.

Character: the most vivid of the three. Reads energetic and tech-forward; the
hue drifts farthest from the brand mark's green.

## Candidate 3 — Cyan (brand petrol hue, brightened, ~cyan-500/600)

| Token | Light | Dark |
|-------|-------|------|
| `--accent` (fills) | `#0891b2` | `#0891b2` |
| `--accent-ink` (text) | `#0e7490` | `#22d3ee` |
| `.field` text re-scope | `#22d3ee` | `#0e7490` |
| CTA bloom | `#67e8f9 → #22d3ee → #0891b2` | same |

Contrast: fill holds white glyphs at 3.7:1; text 5.4:1 on white; dark text tint
10.5:1 on near-black.

Character: the logo wordmark's petrol tone (#1c576e) lifted to a brighter step.
Brand-true hue with a livelier temperature than the shipped green.

## Decision notes for the client

- Whichever wins, the swap is a one-parameter fold into `css/home.css` — same
  places the leaf green now lives (tokens, bloom circles, mobile-menu current
  page, `.field` re-scope).
- Text can never run at a true 400/500 brightness on white (AA caps at 4.5:1);
  every candidate therefore pairs a bright fill tone with a one-step-darker
  text tone. Dark mode uses the bright tone for text, where it passes easily.
- Petrol (#1c576e, exact wordmark colour) and mono (ink-only) remain available
  from the earlier round if the client asks for a darker or hue-less option.
