import type { Deck } from './types';

// To add a passcode: SHA-256 hash it in the browser console:
//   await crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourpassword'))
//     .then(b => Array.from(new Uint8Array(b)).map(n => n.toString(16).padStart(2,'0')).join(''))
// Then add the resulting hex string to passwordHashes below.
//
// Current passcode: "dustin2026"
// Replace with your real passcode before sharing.

export const webElevationDeck: Deck = {
  id: 'web-elevation',
  title: 'Web Experience Elevation',
  defaultTheme: 'light',
  passwordHashes: [
    // Same passcode as the gated work case studies (src/pages/work/tlife.astro)
    'd405e342c33ea8e0e1e65c2d94e5e8eeb8329e4d15fa6a7627de3e47f6cf1406',
  ],
  slides: [
    // 1 — Cover
    {
      type: 'cover',
      theme: 'light',
      label: 'Title',
      name: 'T-Mobile · Web Experience Elevation',
      headline: 'A vague two-sentence ask. Six months to turn it into <em>something real</em>.',
      meta: 'Confidential',
    },

    // 2 — The situation
    {
      type: 'bullets',
      theme: 'light',
      label: 'The situation',
      eyebrow: 'Context',
      headline: 'Web was the forgotten surface.',
      bullets: [
        'The app had the attention. Web was inconsistent, under-resourced, and no one owned the quality bar across teams.',
        'This had been the state for roughly two years when my VP gave me two sentences: take it over.',
        'No playbook. I built one.',
      ],
    },

    // 3 — Strategy (3 cards)
    {
      type: 'values',
      theme: 'light',
      label: 'The strategy',
      eyebrow: 'Approach',
      headline: "I didn't just take over. I built a three-part strategy.",
      cols: [
        {
          title: 'Build accountability',
          body: 'Rallied the right principals to set the bar — before asking anyone else to meet it.',
        },
        {
          title: 'Create standards + governance',
          body: 'Gave teams a new role, a toolkit, and a quality bar they could actually work from.',
        },
        {
          title: 'Define the vision',
          body: 'Hired for what web could become, not just what it was.',
        },
      ],
    },

    // 4A — Cross-team accountability
    {
      type: 'bullets',
      theme: 'light',
      label: 'Cross-team accountability',
      eyebrow: 'Part one',
      headline: 'I rallied the bar raisers before I raised the bar.',
      bullets: [
        'Built a group of 7 principals across 6 teams: Foundations, Design Systems, Commerce, T-Mobile for Business, Frontline/Assisted, and Service.',
        'Weekly web design crit: principal-led, open to all designers across teams.',
        "Result: 100% participation. Cross-team accountability that didn't exist before.",
      ],
    },

    // 4B — Standards + governance
    {
      type: 'bullets',
      theme: 'light',
      label: 'Standards + governance',
      eyebrow: 'Part two',
      headline: 'I built the infrastructure that let better web design happen at scale.',
      bullets: [
        'Created a Principal of Web Governance + IA role — owning standards, components, and information architecture.',
        'The Web Governance + IA Lead partnered with the design system team to audit gaps and build the plan.',
        'v1 Web Toolkit shipped within 90 days. 15 new/refined components added to the design system.',
        '100% of new web designs on standardized responsive breakpoints.',
        'Launched a global nav redesign — building alignment across business, product, and marketing on a system that could scale with new products and AI-driven entry points.',
      ],
    },

    // 4C — Web vision
    {
      type: 'bullets',
      theme: 'light',
      label: 'Web vision',
      eyebrow: 'Part three',
      headline: 'I hired a Principal whose only job was to define what T-Mobile web could become.',
      bullets: [
        'Brought in Vidal Men with a specific mandate: define what web could be.',
        'Month one: established the web design principles the entire surface should work from.',
        'Evolved into a forward-looking prospect journey vision.',
        'Research-grounded, stakeholder-aligned, and used as the north star for future web investments.',
      ],
    },

    // 5 — What it unlocked
    {
      type: 'unlock',
      theme: 'light',
      label: 'What it unlocked',
      headline: 'Six months from a two-sentence ask to VP-level momentum.',
      bullets: [
        "Vidal's vision work got the attention of my VP.",
        'Design earned a seat with Marketing to lead the t-mobile.com homepage redesign.',
        'That led to something bigger: a formal tiger team to build the next-generation T-Mobile web system.',
      ],
      subsection: {
        title: 'The Web Vision Tiger Team',
        items: [
          '6-week sprint cadence',
          '4 flagship web experiences in scope',
          'Weekly VP review · Daily Director alignment',
          'Multi-brand: T-Mobile, Mint, Metro',
        ],
      },
    },

    // 6 — The work (homepage redesign screenshots)
    // Add images to public/deck/assets/web-elevation/ and update the paths below.
    {
      type: 'product',
      theme: 'light',
      label: 'The work',
      eyebrow: 'Web Vision Tiger Team · in progress',
      headline: 'Some of the most ambitious design work of my T-Mobile tenure.',
      body: 'Modern, cohesive design direction for the full t-mobile.com experience — AI-integrated search, responsive-first, modular system built to scale across brands. In progress at time of layoff.',
      footer: 'Design direction shown. Not representative of final shipped direction.',
      images: [
        '/deck/assets/web-elevation/homepage-mobile-1.png',
        '/deck/assets/web-elevation/homepage-mobile-2.png',
      ],
    },

    // 7 — Key outcomes
    {
      type: 'metrics',
      theme: 'light',
      label: 'Key outcomes',
      eyebrow: 'Results',
      headline: 'Craft + culture + momentum.',
      cards: [
        {
          number: '90',
          label: 'Days to ship',
          description: 'v1 Web Toolkit built and shipped within 90 days of kickoff.',
        },
        {
          number: '100%',
          label: 'Crit participation',
          description: 'Weekly web crits running with full participation across all teams.',
        },
        {
          number: '6 mo',
          label: 'Vague ask → VP seat',
          description: 'Two-sentence ask to VP involvement and a seat on the t-mobile.com homepage redesign.',
        },
      ],
    },
  ],
};
