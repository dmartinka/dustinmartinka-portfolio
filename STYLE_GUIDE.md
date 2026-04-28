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
