import { caseStudyDeck } from './case-study';
import type { Deck } from './types';

// webElevationDeck is intentionally not registered yet. Slide 6 references
// /deck/assets/web-elevation/homepage-mobile-1.png and -2.png, which were never
// added, so the deck would publish with two broken images. Add those two
// screenshots, then import the deck and add it to the array below.

export function getDecks(): Deck[] {
  return [caseStudyDeck];
}

export function getDeck(id: string): Deck | undefined {
  return getDecks().find(d => d.id === id);
}
