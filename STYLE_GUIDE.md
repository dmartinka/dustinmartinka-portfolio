# Style Guide — dustinmartinka.com

## Colors

| Name  | Token           | Hex       | Use |
|-------|-----------------|-----------|-----|
| Dark  | `--color-dark`  | `#2B2B2B` | Default text, nav, labels |
| Beige | `--color-beige` | `#F5F4F0` | Page background |
| Black | `--color-black` | `#000000` | Headlines, high-emphasis text |
| White | `--color-white` | `#FFFFFF` | Cards, hero text on dark |

---

## Typography

### Fonts
| Role      | Font             | CSS Variable    | Weights     |
|-----------|------------------|-----------------|-------------|
| Headlines | IBM Plex Serif   | `--font-serif`  | 400 600 700 |
| Body / UI | Work Sans        | `--font-sans`   | 400 500 600 |

**Rule:** IBM Plex Serif for anything display or editorial (h1–h4, hero, pull quotes). Work Sans for everything else (body, nav, labels, captions, buttons, UI text).

### Type Scale
| Token          | Size    | Use |
|----------------|---------|-----|
| `--text-xs`    | 12px    | Labels, eyebrows, fine print |
| `--text-sm`    | 14px    | Captions, metadata |
| `--text-base`  | 16px    | Body copy |
| `--text-lg`    | 18px    | Lead text, intro paragraphs |
| `--text-xl`    | 20px    | Subheadings, large UI |
| `--text-2xl`   | 24px    | H5–H6 |
| `--text-3xl`   | 32px    | H3–H4, section headings |
| `--text-4xl`   | 44px    | H2 |
| `--text-5xl`   | 60px    | H1 |
| `--text-6xl`   | 80px    | Hero display |

### Line Heights
- Headlines: `1.15`
- Body: `1.6`
- Pull quotes / blockquotes: `1.5`

---

## Spacing

4px base unit. All spacing tokens:

| Token        | Value | px  |
|--------------|-------|-----|
| `--space-1`  | 0.25rem | 4px |
| `--space-2`  | 0.5rem  | 8px |
| `--space-3`  | 0.75rem | 12px |
| `--space-4`  | 1rem    | 16px |
| `--space-6`  | 1.5rem  | 24px |
| `--space-8`  | 2rem    | 32px |
| `--space-12` | 3rem    | 48px |
| `--space-16` | 4rem    | 64px |
| `--space-24` | 6rem    | 96px |

---

## Layout

| Token            | Value  | Use |
|------------------|--------|-----|
| `--width-content`| 720px  | Reading-heavy pages (About, case study body) |
| `--width-wide`   | 1100px | Work index, case study layouts with visuals |

Add `class="wide"` to `<main>` to use the wide container.

---

## Shadows

| Token        | Use |
|--------------|-----|
| `--shadow-sm`| Cards at rest |
| `--shadow-md`| Cards on hover, elevated elements |

---

## Component Patterns

### Links
- Default: underlined, `--color-dark`
- Hover: `--color-black`
- Nav links: no underline, border-bottom on active

### Cards (bento grid)
- Background: `--color-white`
- Border radius: `8px`
- Shadow: `--shadow-sm`
- Hover: `--shadow-md`

### Dark sections (hero)
- Background: `--color-black`
- Text: `--color-white`
- Subtext: 60% opacity white

### Password-protected badge
- Small label, Work Sans, `--text-xs`
- Muted styling — doesn't distract from the work

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use IBM Plex Serif for headlines | Mix serif into body text |
| Keep backgrounds beige or white | Use the blue accent from the old template |
| Let whitespace do the work | Crowd elements together |
| Lead with outcomes in case studies | Start with process |

---

## Case Study Decks (`/deck/*`)

*Approved by Dustin 2026-09-15. Applies to every deck section, including the flagship work.*

Canvas is 1920×1080. Every content slide uses one of two layouts. The deciding question: does the content sit **under** the headline, or **beside** it?

### Headline punctuation

*Approved by Dustin 2026-09-22. Applies across every deck section.*

**No terminal period on a slide headline.** All 30 headlines across `case-study.ts` and `web-elevation.ts` were stripped in one pass. Internal punctuation stays: the web elevation cover keeps the period between its two sentences ("Nobody asked me to fix web. I made the case until it was mine"), and "Twenty years, one throughline: the craft" keeps its colon. Eyebrows, image labels, body copy and bullets are unaffected.

### Layout 1: Full width

Content spans the full width under the headline: stat rows, three-up columns, result cards, side-by-side pairs.

- Eyebrow and headline pinned to the top (eyebrow 135px from the top).
- Content pinned to the bottom (130px from the bottom edge).
- All leftover space falls between the headline and the content.
- Examples: flagship "What we know", web elevation "The playbook came down to three things"

### Layout 2: Split

A text column beside a visual column.

- Eyebrow, headline, and body stay together as one block. No stretched gap between them.
- The text block is vertically centered on the slide, and so is the visual column.
- The eyebrow's height therefore varies slide to slide. That is expected for this layout.
- Columns are halves (1:1) or thirds (1:2 or 2:1). Never arbitrary pixel widths. Classes: `.we-1-1`, `.we-1-2`, `.we-2-1`.
- The visual may bleed off the outer edge. Allowed, not required.
- Example: flagship "Learning to think in apps, not pages."

### Shared rules

| Element | Rule |
|---|---|
| Side margins | 140px |
| Top and bottom padding | 130px |
| Column gap | 80px |
| Eyebrow | Gold (`--gold-deep` on light, `--gold` on dark), 22px, uppercase, 0.14em tracking, 26px above the headline, one per slide |
| Headline | IBM Plex Serif 300, 60px. Up to 2 lines full width, up to 3 lines split. |
| Labels above images | 15px, uppercase, gray. Never gold, so they never compete with the eyebrow. |
