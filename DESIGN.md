# Design Brief

## Direction

Seenu Arjunan Portfolio — Premium dark showcase for graphic design work with refined luxury aesthetic and vibrant gold accents.

## Tone

Luxury refined with bold typography. Commits to deep blacks and true golds to position Seenu as a high-end creative professional, not a generic portfolio template.

## Differentiation

Gold underlines accent section headings and create visual rhythm; smooth scroll-reveal animations build anticipation through the single-page narrative without overwhelming.

## Color Palette

| Token           | OKLCH          | Role                                  |
| --------------- | -------------- | ------------------------------------- |
| background      | 0.08 0 0       | Deep black page background            |
| foreground      | 0.95 0 0       | Off-white text on dark                |
| card            | 0.12 0 0       | Slightly raised card surfaces         |
| primary         | 0.78 0.2 56    | Gold/yellow accent — buttons, links   |
| secondary       | 0.18 0 0       | Dark charcoal—section dividers        |
| muted           | 0.18 0 0       | Muted text on backgrounds             |
| muted-foreground| 0.6 0 0        | Lighter muted text for labels         |
| border          | 0.22 0 0       | Subtle dividers and input borders     |

## Typography

- Display: Space Grotesk — bold geometric sans for headings, hero, section titles
- Body: DM Sans — clean, readable sans for paragraphs, descriptions, timeline labels
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tighter`, h2 `text-3xl md:text-5xl font-bold`, label `text-xs md:text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Layered dark surfaces with subtle shadows; cards elevated slightly from background via `shadow-card-dark`; gold-glow on hover states adds dimensionality without excess.

## Structural Zones

| Zone    | Background        | Border                    | Notes                                              |
| ------- | ----------------- | ------------------------- | -------------------------------------------------- |
| Header  | 0.08 0 0          | 0.22 0 0, bottom          | Sticky/fixed navigation with logo + smooth scroll |
| Hero    | 0.08 0 0          | —                         | Full-viewport section with title + accent         |
| Content | 0.08/0.12 alternating | —                         | Sections alternate bg for rhythm                  |
| Footer  | 0.12 0 0          | 0.22 0 0, top             | Contact links + gold accent on hover              |

## Spacing & Rhythm

Generous vertical gaps (6rem–8rem) between sections; tight internal padding (1.5rem–2rem) inside cards; gold underlines on headings create visual anchors throughout.

## Component Patterns

- Buttons: Gold background (`primary`), black text, rounded-sm, hover gold-glow shadow
- Cards: Charcoal background (`card`), subtle border, `shadow-card-dark`, hover transform scale
- Section Headings: Space Grotesk bold with gold underline accent via `.accent-underline` utility
- Timeline: Vertical line with nodes; nodes gold on active/hover, muted on inactive
- Badges/Tags: Charcoal bg, gold text, small rounded-full, no shadow

## Motion

- Entrance: Fade-in-up (0.6s) on section scroll via `.scroll-appear` utility and intersection observer
- Hover: Scale (1.02) + shadow enhance on cards; gold-glow on buttons via `shadow-gold-glow`
- Decorative: Subtle pulse on hero CTA; smooth scroll snap between sections

## Constraints

- Dark theme only; all text must maintain 4.5:1 contrast on 0.08 0 0 background
- Gold accent used sparingly — underlines, CTAs, hovers only; never background fills
- No gradients except subtle text gradients on hero tagline via `.gradient-text`
- Single-page layout with anchor navigation; smooth scroll behavior throughout

## Signature Detail

Gold underline accents on all section headings — typographic detail that ties visual hierarchy to the brand color and creates rhythm through repetition across the portfolio.

