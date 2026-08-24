export type Theme = 'dark' | 'light';

// --- Slide interfaces ---

export interface CoverSlide {
  type: 'cover';
  theme?: Theme;
  label?: string;
  name?: string;
  headline: string;
  meta?: string;
  photo?: string;
}

export interface SectionSlide {
  type: 'section';
  theme?: Theme;
  label?: string;
  num?: string;
  title: string;
  sub?: string;
}

export interface BulletsSlide {
  type: 'bullets';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  bullets: string[];
}

export interface ValuesSlide {
  type: 'values';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  cols: Array<{ title: string; body: string }>;
  photo?: string; // optional: stacks text left, image fills right half
}

export interface UnlockSlide {
  type: 'unlock';
  theme?: Theme;
  label?: string;
  headline: string;
  bullets: string[];
  subsection: {
    title: string;
    items: string[];
  };
}

export interface ProductSlide {
  type: 'product';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  body: string;
  footer?: string;
  images: string[];
}

export interface MetricsSlide {
  type: 'metrics';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  cards: Array<{ number: string; label: string; description: string }>;
}

export interface QuoteSlide {
  type: 'quote';
  theme?: Theme;
  label?: string;
  quote: string;
  attribution?: string;
}

export interface AgendaSlide {
  type: 'agenda';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  items: Array<{ num: string; title: string }>;
}

export interface TimelineSlide {
  type: 'timeline';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  nodes: Array<{ year: string; role: string; description: string }>;
}

export interface PrinciplesSlide {
  type: 'principles';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  leadSub?: string;
  cols: Array<{ title: string; body: string }>;
}

export interface StatementSlide {
  type: 'statement';
  theme?: Theme;
  label?: string;
  bigStat?: string;
  statement: string;
  sub?: string;
}

export interface CapabilitySlide {
  type: 'capability';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  mission?: string;
  cards: Array<{ title: string; items: string[] }>;
}

export interface CompareSlide {
  type: 'compare';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  pos: { heading: string; items: string[] };
  neg: { heading: string; items: string[] };
}

export interface AnnotatedSlide {
  type: 'annotated';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  image?: string;
  annotations: Array<{ num: number; title: string; body: string }>;
}

export interface ClosingSlide {
  type: 'closing';
  theme?: Theme;
  label?: string;
  eyebrow?: string;
  headline: string;
  contacts: string[];
}

// Escape hatch for complex one-off layouts that don't fit a named type.
// Pass the complete <section> element as a string.
export interface RawSlide {
  type: 'raw';
  html: string;
}

export type Slide =
  | RawSlide
  | CoverSlide
  | SectionSlide
  | BulletsSlide
  | ValuesSlide
  | UnlockSlide
  | ProductSlide
  | MetricsSlide
  | QuoteSlide
  | AgendaSlide
  | TimelineSlide
  | PrinciplesSlide
  | StatementSlide
  | CapabilitySlide
  | CompareSlide
  | AnnotatedSlide
  | ClosingSlide;

export interface Deck {
  id: string;
  title: string;
  defaultTheme: Theme;
  // SHA-256 hex hashes of valid passcodes.
  // Generate in browser console:
  //   await crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourpassword'))
  //     .then(b => Array.from(new Uint8Array(b)).map(n => n.toString(16).padStart(2,'0')).join(''))
  passwordHashes: string[];
  slides: Slide[];
}
