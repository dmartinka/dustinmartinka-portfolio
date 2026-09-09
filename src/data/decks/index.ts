import { caseStudyDeck } from './case-study';
import { webElevationDeck } from './web-elevation';
import type { Deck } from './types';

// Heads up: webElevationDeck slide 6 references
// /deck/assets/web-elevation/homepage-mobile-1.png and -2.png, which have not
// been added yet, so that slide shows two broken images until they land.
// Registered anyway so the deck can be reviewed locally on `dev`.

export function getDecks(): Deck[] {
  return [caseStudyDeck, webElevationDeck];
}

export function getDeck(id: string): Deck | undefined {
  return getDecks().find(d => d.id === id);
}
