import type { Deck, Slide } from './types';
import { webElevationDeck } from './web-elevation';

const _d = `<span style="width:16px;height:16px;border-radius:50%;background:var(--gold);display:inline-block;flex-shrink:0"></span>`;
const _dots = (n: number) => Array(n).fill(_d).join('');
const _cDot = (clr: string) => `<span style="width:90px;height:90px;border-radius:50%;background:${clr};display:block;flex-shrink:0"></span>`;
const _gDot = `<span style="width:90px;height:90px;border-radius:50%;background:rgba(43,43,43,0.1);display:block;flex-shrink:0"></span>`;
const _cDotSm = (clr: string) => `<span style="width:56px;height:56px;border-radius:50%;background:${clr};display:block;flex-shrink:0"></span>`;
const _gDotSm = `<span style="width:56px;height:56px;border-radius:50%;background:rgba(43,43,43,0.1);display:block;flex-shrink:0"></span>`;
const _row = (rank: number, task: string, t: number, c: number, g: number) => `<div style="display:grid;grid-template-columns:220px 28px 1fr;align-items:center;gap:14px"><span style="text-align:right;font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.8);white-space:nowrap">${task}</span><span style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:600;color:rgba(242,237,232,0.9);flex-shrink:0">${rank}</span><div style="display:flex;flex-direction:row;align-items:center;gap:3px">${t>0?`<div style="width:${t}%;height:9px;border-radius:5px;background:rgba(242,237,232,0.85);flex-shrink:0"></div>`:''} ${c>0?`<div style="width:${c}%;height:9px;border-radius:5px;background:var(--gold);flex-shrink:0"></div>`:''} ${g>0?`<div style="width:${g}%;height:9px;border-radius:5px;background:rgba(242,237,232,0.32);flex-shrink:0"></div>`:''}</div></div>`;

// ── About me circle cluster (slide 3) ──
// Positions come straight from the Figma pass (2026-09-24): x/y are the
// top-left corner in px inside the 780x820 right column, d is the diameter.
// That matches what Figma reports, so layout changes copy across one to one.
// Order is stacking order, bottom to top, also as in Figma.
// Leave src empty and the circle renders as a labelled placeholder.
const A_ = '/deck/assets/about';
const _aboutCircles: { label: string; x: number; y: number; d: number; src?: string; me?: boolean; logo?: boolean }[] = [
  { label: 'Huskies',      x: 355, y: 175, d: 80, src: `${A_}/huskies-logo.svg`, logo: true },
  { label: 'Mariners',     x: 58, y: 309, d: 80, src: `${A_}/mariners-logo.svg`, logo: true },
  { label: 'Bobcats',      x: 38, y: 598, d: 80, src: `${A_}/msu-bobcats-logo.svg`, logo: true },
  { label: 'Shelley',      x: 94, y: 160, d: 220, src: `${A_}/shelley-sq.jpg` },
  { label: 'Toby',         x: 453, y: 111, d: 210, src: `${A_}/toby-sq.jpg` },
  { label: 'Buchi',        x: 80, y: 365, d: 150, src: `${A_}/buchi-sq.jpg` },
  { label: 'Guitar',       x: 590, y: 393, d: 140, src: `${A_}/guitar-sq.jpg` },
  // Moved clear of Felicity and hiking, which had buried it
  { label: 'Seahawks',     x: 670, y: 620, d: 80, src: `${A_}/seahawks-logo.svg`, logo: true },
  { label: 'Hiking',       x: 274, y: 589, d: 149, src: `${A_}/hiking-sq.jpg` },
  { label: 'Snowboarding', x: 143, y: 490, d: 190, src: `${A_}/snowboarding-sq.jpg` },
  { label: 'Felicity',     x: 450, y: 509, d: 203, src: `${A_}/felicity-sq.jpg` },
  // Me, the largest, in the middle of everything
  { label: 'Dustin',       x: 230, y: 250, d: 320, src: `${A_}/dustin-sq.jpg`, me: true },
  { label: 'Kraken',       x: 591, y: 304, d: 80, src: `${A_}/kraken-logo.svg`, logo: true },
];
// Empty rings in the gaps, the same outlined orbs as web elevation slide 2.
// They carry the orb pulse classes (a to d), so they breathe with the deck.
const _aboutRings: { x: number; y: number; d: number; k: string; gold?: boolean }[] = [
  { x: 360, y: 72, d: 70,  k: 'a', gold: true },
  { x: 15, y: 132, d: 110, k: 'b' },
  { x: 671, y: 73, d: 90,  k: 'c' },
  { x: 11, y: 525, d: 60,  k: 'd', gold: true },
  { x: 649, y: 495, d: 90,  k: 'b' },
  { x: 340, y: 683, d: 100, k: 'c', gold: true },
  { x: 63, y: 696, d: 70,  k: 'a' },
  { x: 667, y: 726, d: 50,  k: 'd', gold: true },
  { x: 219, y: 116, d: 39,  k: 'c' },
  { x: 221, y: 699, d: 36,  k: 'b', gold: true },
  { x: 590, y: 98, d: 36,  k: 'a' },
];
// Motion, all set per circle here so nothing is hand tuned in CSS:
//   arrival  circles settle in outward from mine, delay grows with distance
//   drift    x and y sway on separate loops whose lengths never line up, plus
//            a slow tilt on a third. Together they trace a wandering path that
//            takes minutes to repeat, instead of a line. Negative delays start
//            each loop mid-swing, so nothing begins from rest in unison.
//            Smaller circles drift further and quicker, the way lighter
//            things do. Mine stays still as the anchor.
const _me = _aboutCircles.find(c => c.me)!;
const _mx = _me.x + _me.d / 2, _my = _me.y + _me.d / 2;
// Deterministic 0 to 1 noise per circle and channel, so renders are stable
const _rnd = (i: number, k: number) => { const v = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return v - Math.floor(v); };
const _aboutCluster = _aboutRings.map((r, i) =>
  `<div class="ab-ring orb ${r.k}${r.gold ? ' gold' : ''}" style="left:${r.x}px;top:${r.y}px;width:${r.d}px;height:${r.d}px;animation-delay:${(i * 0.31).toFixed(2)}s"></div>`
).join('') + _aboutCircles.map((c, i) => {
  const cls = ['ab-c', c.me ? 'ab-me' : '', c.d <= 90 ? 'ab-sm' : '', c.logo ? 'ab-logo' : ''].filter(Boolean).join(' ');
  const inner = c.src ? `<img src="${c.src}" alt="${c.label}">` : `<span>${c.label}</span>`;
  const dist = Math.hypot(c.x + c.d / 2 - _mx, c.y + c.d / 2 - _my);
  const inDelay = c.me ? 0 : 0.2 + dist / 700;
  const amp = c.me ? 0 : c.d <= 90 ? 12 : c.d <= 160 ? 9 : 7;
  const tilt = c.me ? 0 : c.d <= 90 ? 3 : 1.5;
  const base = c.d <= 90 ? 6 : 8;
  const dx = base * (0.9 + _rnd(i, 1) * 0.4), dy = base * (1.35 + _rnd(i, 2) * 0.4), dr = base * (2.1 + _rnd(i, 3) * 0.6);
  const motion = [
    `--in:${inDelay.toFixed(2)}s`,
    `--ax:${(amp * (0.7 + _rnd(i, 4) * 0.3)).toFixed(1)}px`, `--ay:${(amp * (0.7 + _rnd(i, 5) * 0.3)).toFixed(1)}px`, `--ar:${tilt}deg`,
    `--dx:${dx.toFixed(1)}s`, `--dy:${dy.toFixed(1)}s`, `--dr:${dr.toFixed(1)}s`,
    `--px:-${(_rnd(i, 6) * dx).toFixed(1)}s`, `--py:-${(_rnd(i, 7) * dy).toFixed(1)}s`, `--pr:-${(_rnd(i, 8) * dr).toFixed(1)}s`,
  ].join(';');
  return `<div class="${cls}" style="left:${c.x}px;top:${c.y}px;width:${c.d}px;height:${c.d}px;${motion}">${inner}</div>`;
}).join('');

// ── PART ONE · Get to know me ──
const partOne: Slide[] = [

    // 1 · COVER
    {
      type: 'cover',
      theme: 'dark',
      label: 'Title',
      name: 'Product design leadership',
      headline: 'Dustin Martinka <em>meets you</em>',
      meta: 'A look at my work, my team, and my craft',
    },

    // 2 · AGENDA
    {
      type: 'agenda',
      theme: 'dark',
      label: 'Agenda',
      eyebrow: 'Today\'s agenda',
      items: [
        { num: '01', title: 'Get to know me' },
        { num: '02', title: 'Delivering impact' },
        { num: '03', title: 'Building teams' },
      ],
    },

    // 3 · ABOUT ME
    // Split slide, halves: text block left, circle cluster right.
    {
      type: 'raw',
      html: `
  <section class="slide light we about" data-label="About me">
    <div class="content">
      <div class="we-cols we-1-1">
        <div class="we-text">
          <p class="eyebrow rise">About me</p>
          <h2 class="head-lg rise d2" style="margin-top:26px">A designer at heart</h2>
          <div class="ab-items">
            <div class="ab-item rise d3"><p class="t">A love for building</p><p>Products, teams, home projects. If I can design it or build it, I will. It's why I got into this field, and that hasn't changed.</p></div>
            <div class="ab-item rise d4"><p class="t">Husband and father</p><p>Recently married to Shelley. Dad to Felicity (12), Toby (10) and our dog Buchi. They've taught me more about patience than any management training ever did.</p></div>
            <div class="ab-item rise d5"><p class="t">Happiest outdoors</p><p>Snowboarding, baseball, hiking, guitar, travel, and every Seattle team. Getting outside is how I reset.</p></div>
          </div>
        </div>
        <div class="we-vis"><div class="ab-cluster">${_aboutCluster}</div></div>
      </div>
    </div>
  </section>`,
    },

    // 4 · TIMELINE
    {
      type: 'raw',
      html: `
  <section class="slide light timeline" data-label="Designer to leader">
    <div class="orbs" data-orb-tone="light" data-orb-style="rings"></div>
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Designer to leader</p>
        <h2 class="head-lg rise d2">Twenty years, one throughline: the craft</h2>
      </div>
      <!-- Stops sit at hand-set x positions (from the Figma pass, 2026-09-24):
           each year shares its left edge with the role text beside it, so the
           spacing is deliberately uneven. -->
      <div class="tl-alt tl-free rise d3">

        <div class="tl-above-row">
          <div class="tl-cb" style="left:257px">
            <p class="tl-role-v2">Manager / Lead Designer</p>
            <p class="tl-org">MoxiWorks</p>
            <p class="tl-desc-v2">IC and lead simultaneously. Built the design practice, the team, and the culture from zero.</p>
          </div>
          <div class="tl-cb" style="left:858px">
            <p class="tl-role-v2">Manager</p>
            <p class="tl-org">T-Mobile</p>
            <p class="tl-desc-v2">Built the team, set the operating model, developed mid and senior designers.</p>
          </div>
          <div class="tl-cb" style="left:1295px"><p class="tl-note">* AI Product Design certified via ELVTR</p></div>
        </div>

        <div class="tl-dot-row">
          <div class="tl-dc" style="left:80px"><span class="tl-d2"></span><p class="tl-yr">2005</p></div>
          <div class="tl-dc" style="left:257px"><span class="tl-d2"></span><p class="tl-yr">2014</p></div>
          <div class="tl-dc" style="left:553px"><span class="tl-d2"></span><p class="tl-yr">2019</p></div>
          <div class="tl-dc" style="left:858px"><span class="tl-d2"></span><p class="tl-yr">2020</p></div>
          <div class="tl-dc" style="left:1106px"><span class="tl-d2"></span><p class="tl-yr">2022</p></div>
          <div class="tl-dc" style="left:1295px"><span class="tl-d2"></span><p class="tl-yr">2024</p></div>
          <div class="tl-dc" style="left:1418px"><span class="tl-d2"></span><p class="tl-yr">2026</p></div>
        </div>

        <div class="tl-below-row">
          <div class="tl-cb" style="left:553px">
            <p class="tl-role-v2">Sr. Designer</p>
            <p class="tl-org">T-Mobile</p>
            <p class="tl-desc-v2">Designing at scale for over 100 million customers.</p>
          </div>
          <div class="tl-cb" style="left:1106px">
            <p class="tl-role-v2">Sr. Manager</p>
            <p class="tl-org">T-Mobile</p>
            <p class="tl-desc-v2">Scaled to 35 designers across 7 product areas.</p>
          </div>
          <div class="tl-cb" style="left:1418px">
            <p class="tl-role-v2">Co-founder / Head of Design</p>
            <p class="tl-org">Paavis</p>
            <p class="tl-desc-v2">Building a trust intelligence product from zero. Designing and prototyping in code with AI.</p>
          </div>
        </div>

      </div>
    </div>
  </section>`,
    },

    // 5 · HOW I WORK (4 principles)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="How I work">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">How I work</p>
        <h2 class="head-lg rise d2">Leadership philosophies</h2>
        <p class="rise d3" style="font-family:var(--sans);font-size:21px;font-weight:300;color:rgba(242,237,232,0.65);margin:18px 0 0;line-height:1.5;max-width:900px">These principles have helped me navigate the many challenges I've faced as a manager. I find myself coming back to them time and time again.</p>
      </div>
      <div class="rise d3" style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:28px;margin-top:auto">
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Bring clarity to the chaos</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">Reorgs, migrations, mandates that shift halfway through. Someone has to make the path clear so the work keeps moving, and that's usually where I end up.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Raise the level of thinking</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">Solving the problem in front of you is the easy part. The harder and more useful thing is helping the team get sharper, so the next problem doesn't need you in the room.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Culture is part of the work</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">A team is more than the people on it. It's the critique, the standards, the autonomy, and whether people feel safe enough to say the hard thing out loud. That doesn't happen by accident.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Stay close to the craft</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">I still design. Leading and making aren't mutually exclusive, and staying close to the work is how I know when a direction is landing and when it isn't.</p>
        </div>
      </div>
    </div>
  </section>`,
    },

];

// ── TEAM ASSESSMENT · moved into Part Three ──
const teamAssessment: Slide[] = [

    // 7 · SKILLS DOT CHART (raw)
    {
      type: 'raw',
      html: `
  <section class="slide light" data-label="Skill assessment" style="display:grid;grid-template-columns:2fr 3fr;padding:0">

    <!-- LEFT: dark panel -->
    <div style="background:var(--espresso);display:flex;flex-direction:column;justify-content:center;padding:80px 72px;position:relative;overflow:hidden">
      <div class="orbs"></div>
      <div class="grain"></div>
      <div style="position:relative;z-index:1">
        <p class="eyebrow rise" style="color:var(--gold)">Assessing the team · first pass</p>
        <p class="rise d2" style="font-family:var(--serif);font-size:46px;font-weight:300;color:rgba(242,237,232,0.9);line-height:1.25;letter-spacing:-0.02em;margin:24px 0 0">As demand for UX grew, it was clear we needed to <em>assess the team's skillsets</em> to optimize performance</p>
      </div>
    </div>

    <!-- RIGHT: skill chart + annotation -->
    <div style="display:grid;grid-template-columns:1fr 210px;gap:40px;padding:48px 56px 48px 64px;align-items:center">

      <div class="rise d3" style="display:grid;grid-template-columns:auto 1fr;column-gap:16px;row-gap:9px;align-items:center">
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">UX research</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Usability testing</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Heuristic evaluation</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Surveys</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Content audit</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">User personas</span><div style="display:flex;gap:5px">${_dots(1)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">User stories</span><div style="display:flex;gap:5px">${_dots(1)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Customer journey maps</span><div style="display:flex;gap:5px">${_dots(1)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Service blueprinting</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Design thinking workshops</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Information architecture</span><div style="display:flex;gap:5px">${_dots(2)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Site maps</span><div style="display:flex;gap:5px">${_dots(2)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">User flows</span><div style="display:flex;gap:5px">${_dots(6)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Wireframes</span><div style="display:flex;gap:5px">${_dots(7)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Design mockups</span><div style="display:flex;gap:5px">${_dots(7)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">UI design</span><div style="display:flex;gap:5px">${_dots(3)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Prototypes</span><div style="display:flex;gap:5px">${_dots(2)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Design systems</span><div style="display:flex;gap:5px">${_dots(1)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Branding</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Animation</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Graphic design</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Illustration</span><div style="display:flex;gap:5px">${_dots(0)}</div>
        <span style="font-family:var(--sans);font-size:22px;color:rgba(43,43,43,0.75);text-align:right">Content strategy</span><div style="display:flex;gap:5px">${_dots(0)}</div>
      </div>

      <div style="display:flex;align-items:center;border-left:2px solid var(--gold);padding-left:28px">
        <p style="font-family:var(--sans);font-size:22px;font-weight:300;color:rgba(43,43,43,0.65);line-height:1.45">Majority of team were I-shaped designers, with strengths in a few areas.</p>
      </div>

    </div>
  </section>`,
    },

    // 8 · COMPETENCY MODEL (raw)
    {
      type: 'raw',
      html: `
  <section class="slide light competency cmp" data-label="Competencies">
    <div class="orbs" data-orb-tone="light" data-orb-style="rings"></div>
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Team assessment</p>
        <h2 class="head-lg rise d2" style="margin-top:26px">Skills were only part of the picture, so I widened the lens</h2>
        <p class="cmp-src rise d3">16 competencies in 5 categories, based on The Design Career Journey by Todd Zaki Warfel</p>
      </div>
      <!-- Each competency carries a dot in its category colour, matching the
           columns on the next slide -->
      <div class="cmp-grid">
        <div class="cmp-card rise d3"><p class="cmp-h">Craft</p><ul style="--dot:#C9A96E"><li>Product thinking</li><li>Agile processes</li><li>User-centered processes</li><li>Systems thinking</li><li>Visual design</li><li>Interaction design</li></ul></div>
        <div class="cmp-card rise d3"><p class="cmp-h">Communication</p><ul style="--dot:#888680"><li>Storytelling &amp; presentation</li><li>Participation</li><li>Receiving feedback</li></ul></div>
        <div class="cmp-card rise d4"><p class="cmp-h">Influence</p><ul style="--dot:#2B2B2B"><li>Mentoring</li><li>Cultural stewardship</li><li>Influencer</li></ul></div>
        <div class="cmp-card rise d4"><p class="cmp-h">Engagement</p><ul style="--dot:#9E9891"><li>Relationships</li><li>Collaboration</li></ul></div>
        <div class="cmp-card rise d5"><p class="cmp-h">Ownership</p><ul style="--dot:#403c38"><li>Manages priorities</li><li>Decision making</li></ul></div>
      </div>
    </div>
  </section>`,
    },

    // 9 · STRENGTHS / GAPS — bubble bar chart
    {
      type: 'raw',
      html: `
  <section class="slide light" data-label="Strengths &amp; gaps" style="display:flex;flex-direction:column;justify-content:space-between;padding:130px 140px">
    <div class="orbs" data-orb-tone="light" data-orb-style="rings"></div>

    <!-- HEADLINE -->
    <div>
      <p class="eyebrow rise" style="color:var(--gold-deep)">Team assessment</p>
      <h2 class="head-lg rise d2">Staffing to strengths, hiring against gaps</h2>
      <p class="rise d3" style="font-family:var(--sans);font-size:22px;font-weight:300;color:rgba(43,43,43,0.65);line-height:1.5;margin:20px 0 0;max-width:1100px">Addressing strengths let us staff work with the right people. Identifying gaps surfaced clear opportunities for training and hiring.</p>
    </div>

    <!-- CHART + SIDEBAR -->
    <div style="display:flex;gap:80px;align-items:flex-start">

      <!-- BUBBLE BAR CHART: each sub-category gets its own column, 5 rows each -->
      <div style="display:flex;gap:40px;align-items:flex-end;flex:1">

        <!-- CRAFT: 6 sub-categories (#C9A96E) -->
        <!-- Product thinking, Agile processes, User-centered processes, Systems thinking, Visual design, Interaction design -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#C9A96E').repeat(3)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(4)}${_cDotSm('#C9A96E').repeat(1)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(1)}${_cDotSm('#C9A96E').repeat(4)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(3)}${_cDotSm('#C9A96E').repeat(2)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(3)}${_cDotSm('#C9A96E').repeat(2)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(1)}${_cDotSm('#C9A96E').repeat(4)}</div>
          </div>
          <p style="font-family:var(--sans);font-size:20px;font-weight:400;color:rgba(43,43,43,0.65)">Craft</p>
        </div>

        <!-- COMMUNICATION: 3 sub-categories (#888680) -->
        <!-- Storytelling, Participation, Receiving feedback -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(4)}${_cDotSm('#888680').repeat(1)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#888680').repeat(3)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#888680').repeat(3)}</div>
          </div>
          <p style="font-family:var(--sans);font-size:20px;font-weight:400;color:rgba(43,43,43,0.65)">Communication</p>
        </div>

        <!-- INFLUENCE: 3 sub-categories (#2B2B2B) -->
        <!-- Mentoring, Cultural stewardship, Influencer -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(3)}${_cDotSm('#2B2B2B').repeat(2)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(3)}${_cDotSm('#2B2B2B').repeat(2)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(3)}${_cDotSm('#2B2B2B').repeat(2)}</div>
          </div>
          <p style="font-family:var(--sans);font-size:20px;font-weight:400;color:rgba(43,43,43,0.65)">Influence</p>
        </div>

        <!-- ENGAGEMENT: 2 sub-categories (#9E9891) -->
        <!-- Relationships, Collaboration -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#9E9891').repeat(3)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(1)}${_cDotSm('#9E9891').repeat(4)}</div>
          </div>
          <p style="font-family:var(--sans);font-size:20px;font-weight:400;color:rgba(43,43,43,0.65)">Engagement</p>
        </div>

        <!-- OWNERSHIP: 2 sub-categories (#403c38) -->
        <!-- Manages priorities, Decision making -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#403c38').repeat(3)}</div>
            <div style="display:flex;flex-direction:column;gap:8px">${_gDotSm.repeat(2)}${_cDotSm('#403c38').repeat(3)}</div>
          </div>
          <p style="font-family:var(--sans);font-size:20px;font-weight:400;color:rgba(43,43,43,0.65)">Ownership</p>
        </div>

      </div>

      <!-- STRENGTHS & GAPS (unchanged) -->
      <div style="width:320px;display:flex;flex-direction:column;gap:48px">
        <div>
          <p style="font-family:var(--sans);font-size:32px;font-weight:700;color:rgba(43,43,43,0.9);margin:0 0 20px;letter-spacing:-0.01em">Strengths</p>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px">
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>User-centered processes</li>
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>Interaction design</li>
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0"></span>Collaboration</li>
          </ul>
        </div>
        <div>
          <p style="font-family:var(--sans);font-size:32px;font-weight:700;color:rgba(43,43,43,0.9);margin:0 0 20px;letter-spacing:-0.01em">Gaps</p>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px">
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:rgba(43,43,43,0.3);flex-shrink:0"></span>Storytelling &amp; presentation</li>
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:rgba(43,43,43,0.3);flex-shrink:0"></span>Visual design</li>
            <li style="font-family:var(--sans);font-size:20px;font-weight:300;color:rgba(43,43,43,0.75);display:flex;align-items:center;gap:12px"><span style="width:8px;height:8px;border-radius:50%;background:rgba(43,43,43,0.3);flex-shrink:0"></span>Agile processes</li>
          </ul>
        </div>
      </div>

    </div>

  </section>`,
    },

    // 10 · RETENTION QUOTE
    {
      type: 'raw',
      html: `
  <section class="slide dark quote" data-label="Retention">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <p class="eyebrow rise" style="margin-bottom:30px">Impact</p>
      <p class="q rise d2">I achieved <em style="color:var(--gold);font-style:normal">100% retention</em> and facilitated <em style="color:var(--gold);font-style:normal">four promotions</em> through a turbulent, ambiguous digital transformation.</p>
      <p class="attr rise d3">— By listening, aligning people with the right work, and growing their abilities</p>
    </div>
  </section>`,
    },

];

// ── FLAGSHIP APP case study · Part Two ──
const flagshipApp: Slide[] = [

    // 11 · FLAGSHIP APP STATEMENT
    {
      type: 'raw',
      html: `
  <section class="slide dark statement" data-label="Flagship app">
    <div class="grain"></div>
    <img class="stmt-phone-full" src="/deck/assets/casestudy/current-app-overview.png" alt="The current T-Mobile app">
    <div class="content" style="padding:0 56% 0 140px;position:relative;z-index:2">
      <p class="stmt rise">The flagship app was our customers' <em>top touchpoint</em>, yet it was never a priority for the business.</p>
      <p class="stmt-sub rise d2">In a six-month span, only one major feature shipped. That had to change.</p>
    </div>
  </section>`,
    },

    // 12 · CAPABILITY (5 surfaces)
    {
      type: 'raw',
      html: `
  <section class="slide dark capability" data-label="Flagship redesign">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Flagship app redesign</p>
        <h2 class="head-lg rise d2">Enable customers to do everything our frontline teams can</h2>
        <p class="mission rise d2" style="color:rgba(242,237,232,0.7)">One hero mission, broken into <b style="font-weight:600;color:rgba(242,237,232,0.9)">five surfaces</b> the team could own end to end.</p>
      </div>
      <div class="grid-cap" style="grid-template-columns:repeat(5,1fr)">
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:32px 30px"><p style="font-family:var(--sans);font-weight:800;font-size:22px;color:var(--gold);margin:0 0 20px">eCommerce</p><ul style="list-style:none;margin:0;padding:0"><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Upgrades</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Add a line</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">P360 &amp; accessories</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Trade-in</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Promotions</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Plans</li></ul></div>
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:32px 30px"><p style="font-family:var(--sans);font-weight:800;font-size:22px;color:var(--gold);margin:0 0 20px">Switch</p><ul style="list-style:none;margin:0;padding:0"><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Network pass</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Easy switch</li></ul></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:32px 30px"><p style="font-family:var(--sans);font-weight:800;font-size:22px;color:var(--gold);margin:0 0 20px">Payments &amp; billing</p><ul style="list-style:none;margin:0;padding:0"><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">One-time payment</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Guest pay</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">AutoPay</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Payment arrangements</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Bill presentment</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Usage</li></ul></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:32px 30px"><p style="font-family:var(--sans);font-weight:800;font-size:22px;color:var(--gold);margin:0 0 20px">Account</p><ul style="list-style:none;margin:0;padding:0"><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Change plan</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Manage add-ons</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Settings</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Benefits</li></ul></div>
        <div class="rise d5" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:32px 30px"><p style="font-family:var(--sans);font-weight:800;font-size:22px;color:var(--gold);margin:0 0 20px">Foundations</p><ul style="list-style:none;margin:0;padding:0"><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Sign up &amp; login</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Network auth</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Search &amp; support</li><li style="font-family:var(--sans);font-weight:300;font-size:19px;line-height:1.5;color:rgba(242,237,232,0.65);padding:5px 0">Onboarding</li></ul></div>
      </div>
    </div>
  </section>`,
    },

    // 13 · HEADWINDS (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark headwinds" data-label="Headwinds">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <div class="slide-head"><p class="eyebrow rise">Navigating headwinds</p><h2 class="head-lg rise d2" style="color:#fff">Everything that made this hard</h2></div>
      <div class="grid-hw">
        <div class="hw-item rise d3"><span class="hw-x">✕</span><p class="hw-t">Tight timelines (NPI)</p></div>
        <div class="hw-item rise d3"><span class="hw-x">✕</span><p class="hw-t">Lost my director</p></div>
        <div class="hw-item rise d4"><span class="hw-x">✕</span><p class="hw-t">No app designers</p></div>
        <div class="hw-item rise d4"><span class="hw-x">✕</span><p class="hw-t">Lack of VP trust</p></div>
        <div class="hw-item rise d5"><span class="hw-x">✕</span><p class="hw-t">Limited budget</p></div>
        <div class="hw-item rise d5"><span class="hw-x">✕</span><p class="hw-t">New dev team</p></div>
        <div class="hw-item rise d6"><span class="hw-x">✕</span><p class="hw-t">Design system in progress</p></div>
        <div class="hw-item rise d6"><span class="hw-x">✕</span><p class="hw-t">Lost 4 designers</p></div>
      </div>
    </div>
  </section>`,
    },

    // 14 · TEAM STRATEGY (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Team strategy">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">Team strategy</p>
        <h2 class="head-lg rise d2">I had to find ways to give my team the confidence that we could accomplish it</h2>
      </div>
      <div class="rise d3" style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:28px;margin-top:auto">
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px"><p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Form a UX strategy</p><p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">A clear business strategy existed, but the customer POV was lacking. The team needed a user-centered perspective to work from.</p></div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px"><p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Re-organize my team</p><p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">Align the team structure with product goals, ensure parity across teams, and define clear roles and responsibilities.</p></div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px"><p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Make time for research</p><p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">Research wasn't in the original timeline. I pushed to add it where I could, and ran usability studies alongside development elsewhere.</p></div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px"><p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">App design training</p><p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">The team had focused on web. They needed a crash course in designing for apps.</p></div>
      </div>
    </div>
  </section>`,
    },

    // 15 · UX STRATEGY: what we knew, and the eight focus areas it led to.
    // Research findings and focus areas merged 2026-09-24. The sentiment
    // topics and the focus area one-liners moved to speaking notes.
    {
      type: 'raw',
      html: `
  <section class="slide dark uxs" data-label="UX strategy">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <div class="uxs-cols">
        <div class="uxs-text">
          <p class="eyebrow rise">UX strategy</p>
          <h2 class="head-lg rise d2" style="margin-top:26px">The app wasn't fulfilling our promise of fast, effortless account management</h2>
          <div class="uxs-stats rise d3">
            <div class="uxs-stat"><p class="n">52%</p><p>less than satisfied with the overall app experience</p></div>
            <div class="uxs-stat"><p class="n">53%</p><p>able to successfully complete their task</p></div>
            <div class="uxs-stat"><p class="n">30%</p><p>unable to complete the task they came to do</p></div>
            <div class="uxs-stat"><p class="n">16%</p><p>only partially able to complete their task</p></div>
          </div>
          <p class="uxs-credit rise d4">Research summary by Lara Kocab</p>
        </div>
        <div class="uxs-out rise d4">
          <p class="uxs-label">Product areas to fix</p>
          <ul class="uxs-focus">
            <li>Authentication</li>
            <li>Billing &amp; payments</li>
            <li>Streamline upgrades</li>
            <li>Support &amp; troubleshooting</li>
          </ul>
          <p class="uxs-label uxs-label-2">Principles across all of it</p>
          <ul class="uxs-focus uxs-princ">
            <li>UX consistency</li>
            <li>Perceived speed</li>
            <li>Privacy &amp; security</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`,
    },

    // 17 · RE-ORGANIZE TEAM (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark reorg" data-label="Re-organize">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Re-organize my team</p>
        <h2 class="head-lg rise d2" style="margin-top:26px">Aligning team structure to product goals</h2>
        <p class="reorg-sub rise d3">I mapped people to surfaces, built parity across pods, and defined clear roles and responsibilities for every member.</p>
      </div>
      <div class="reorg-card rise d3"><img src="/deck/assets/casestudy/team-mapping-trim.png" alt="Team mapping: portfolios, workstreams, squad leads, designers and partners"></div>
    </div>
  </section>`,
    },

    // 18 · APP DESIGN TRAINING (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="App training">
    <div class="content" style="display:grid;grid-template-columns:1fr 1.3fr;align-items:center;gap:0;padding:90px 0 90px 140px;height:100%">
      <div style="padding-right:64px">
        <p class="eyebrow rise">App design training</p>
        <p class="lead-stmt rise d2" style="font-family:var(--serif);font-weight:300;font-size:46px;line-height:1.2;letter-spacing:-0.02em;color:rgba(242,237,232,0.9);margin:24px 0 0">Learning to think in apps, not pages</p>
        <p class="rise d3" style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.5;color:rgba(242,237,232,0.65);margin:22px 0 0">A team rooted in web needed a new vocabulary. We built benchmarking collections, studying best-in-class apps like Airbnb, to calibrate the bar.</p>
      </div>
      <div style="position:relative;height:100%;overflow:hidden">
        <img src="/deck/assets/casestudy/benchmarking.png" alt="Airbnb app benchmarking collection" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:left center">
      </div>
    </div>
  </section>`,
    },

    // 20 · VERSION ITERATIONS (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark iterations" data-label="Iterations">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise" style="color:var(--gold-deep)">Account management</p>
        <h2 class="head-lg rise d2">The hardest surface took many versions</h2>
        <p class="iter-sub rise d3">Plans, devices, add-ons, financing, settings, benefits, and more, all colliding in one place</p>
      </div>
      <div class="grid-iter grid-iter-4">
        <div class="iter-col rise d3"><img class="iter-shot" src="/deck/assets/casestudy/current-app-account.png" alt="Current app, account screen"><p class="iter-v">Before</p><p class="iter-d">Everything colliding</p></div>
        <div class="iter-col rise d4"><img class="iter-shot" src="/deck/assets/casestudy/account-v1.png" alt="Account version 1"><p class="iter-v">Version 1</p><p class="iter-d">Pushes down key features</p></div>
        <div class="iter-col rise d5"><img class="iter-shot" src="/deck/assets/casestudy/account-v2.png" alt="Account version 2"><p class="iter-v">Version 2</p><p class="iter-d">Too many redundancies</p></div>
        <div class="iter-col rise d6"><img class="iter-shot" src="/deck/assets/casestudy/account-v5.png" alt="Account version 5"><p class="iter-v">Version 5</p><p class="iter-d">Lack of priority</p></div>
      </div>
    </div>
  </section>`,
    },

    // 21 · DATA TABLE — horizontal bar chart
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Task data" style="padding:0">
    <div style="display:grid;grid-template-columns:1fr 280px;height:100%;padding:130px 140px;gap:60px;box-sizing:border-box">

      <!-- CHART AREA -->
      <div style="display:flex;flex-direction:column;min-width:0">
        <div style="margin-bottom:44px">
          <p class="eyebrow rise">Account management · prioritization</p>
          <h2 class="head-lg rise d2" style="margin-top:26px">Ranking 19 tasks by what matters</h2>
        </div>
        <div class="rise d2" style="display:flex;flex-direction:column;justify-content:space-between;flex:1">
          ${_row(1,'Upgrade',48,20,13)}
          ${_row(2,'Check usage',37,0,0)}
          ${_row(3,'Check EIP or lease',28,0,35)}
          ${_row(4,'Manage current add-ons',22,15,10)}
          ${_row(5,'Unlock status',18,2,0)}
          ${_row(6,'Plan information',16,40,3)}
          ${_row(7,'Manage settings',13,28,0)}
          ${_row(8,'Change nickname',10,0,0)}
          ${_row(9,'Manage protection (insurance)',9,0,0)}
          ${_row(10,'Suspend line (voluntary)',8,22,22)}
          ${_row(11,'Check order status',7,0,0)}
          ${_row(12,'See current add-ons',6,5,0)}
          ${_row(13,'See another line',5,22,18)}
          ${_row(14,'Contact T-Mobile',4,0,0)}
          ${_row(15,'5G Compatibility',3,0,0)}
          ${_row(16,'Check voicemail',3,22,0)}
          ${_row(17,'Update SIM',2,0,0)}
          ${_row(18,'Report lost or stolen',2,32,0)}
          ${_row(19,'Protection — file claim',0,0,30)}
        </div>
      </div>

      <!-- LEGEND -->
      <div style="display:flex;flex-direction:column;justify-content:center;gap:32px">
        <div style="display:flex;gap:14px;align-items:flex-start">
          <span style="width:14px;height:14px;border-radius:50%;background:rgba(242,237,232,0.85);flex-shrink:0;margin-top:3px"></span>
          <div><p style="font-family:var(--sans);font-weight:700;font-size:18px;color:rgba(242,237,232,0.9);margin:0 0 5px">Page traffic</p><p style="font-family:var(--sans);font-weight:300;font-size:15px;color:rgba(242,237,232,0.5);margin:0;line-height:1.4">Percentage of page traffic</p></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start">
          <span style="width:14px;height:14px;border-radius:50%;background:var(--gold);flex-shrink:0;margin-top:3px"></span>
          <div><p style="font-family:var(--sans);font-weight:700;font-size:18px;color:rgba(242,237,232,0.9);margin:0 0 5px">Customer calls</p><p style="font-family:var(--sans);font-weight:300;font-size:15px;color:rgba(242,237,232,0.5);margin:0;line-height:1.4">Percentage of calls where task is mentioned</p></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start">
          <span style="width:14px;height:14px;border-radius:50%;background:rgba(242,237,232,0.32);flex-shrink:0;margin-top:3px"></span>
          <div><p style="font-family:var(--sans);font-weight:700;font-size:18px;color:rgba(242,237,232,0.9);margin:0 0 5px">Satisfaction gap</p><p style="font-family:var(--sans);font-weight:300;font-size:15px;color:rgba(242,237,232,0.5);margin:0;line-height:1.4">Gap percentage of what customers say is important vs. their ability to accomplish</p></div>
        </div>
        <p style="font-family:var(--sans);font-size:13px;color:rgba(242,237,232,0.3);margin:16px 0 0;line-height:1.4">Illustrative ranking · credit to Rob Sumner for compiling data</p>
      </div>

    </div>
  </section>`,
    },

    // 22 · ANNOTATED SCREEN — two-phone layout
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Account overview" style="padding:0;overflow:hidden">
    <div class="grain"></div>
    <div style="display:flex;align-items:center;height:100%;padding:0 44px;gap:24px">

      <!-- LEFT ANNOTATIONS: Account overview -->
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:0">
        <p style="font-family:var(--sans);font-weight:700;font-size:24px;color:#fff;margin:0 0 20px;letter-spacing:-0.01em">Account overview</p>
        <div style="display:flex;flex-direction:column;gap:20px">
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">7. Manage settings</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Centralized controls for privacy, security, billing, and permissions. Customers are comfortable with this construct after user testing.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">2. Check usage</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Most used feature of account. Customers want to see their usage for 2 reasons: curiosity and ensuring they don't get throttled.</p>
          </div>
          <div style="border-left:2px solid var(--gold);padding-left:12px;display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">1. Upgrade</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Most clicked link. Customers use this to find deals, costs, and first steps to purchasing a device. Importance led us to include it in multiple areas.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">6. Plan information</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Key customer concern. Improvements make it easier to get a summary of plan basics and explore add-ons.</p>
          </div>
        </div>
      </div>

      <!-- PHONE: Account overview — 370px = ~19% of slide -->
      <div style="width:370px;height:832px;flex-shrink:0;position:relative;overflow:hidden;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,0.7)">
        <img src="/deck/assets/casestudy/account-overview.png" style="width:100%;height:100%;object-fit:cover;object-position:top" alt="Account overview">
        <span style="position:absolute;top:7%;left:87%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">7</span>
        <span style="position:absolute;top:21%;left:56%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">2</span>
        <span style="position:absolute;top:50%;left:72%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">1</span>
        <span style="position:absolute;top:76%;left:53%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">6</span>
      </div>

      <!-- PHONE: Device details — 370px = ~19% of slide -->
      <div style="width:370px;height:832px;flex-shrink:0;position:relative;overflow:hidden;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,0.7)">
        <img src="/deck/assets/casestudy/account-details.png" style="width:100%;height:100%;object-fit:cover;object-position:top" alt="Device details">
        <span style="position:absolute;top:12%;left:47%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">8</span>
        <span style="position:absolute;top:38%;left:63%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">5</span>
        <span style="position:absolute;top:38%;left:25%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">17</span>
        <span style="position:absolute;top:68%;left:27%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">3</span>
        <span style="position:absolute;top:77%;left:17%;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:700;color:#1a1411">1</span>
      </div>

      <!-- RIGHT ANNOTATIONS: Device details -->
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:0">
        <p style="font-family:var(--sans);font-weight:700;font-size:24px;color:#fff;margin:0 0 20px;letter-spacing:-0.01em">Device details</p>
        <div style="display:flex;flex-direction:column;gap:20px">
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">8. Change Nickname</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Top 10 feature in account management. Device name is now agnostic from billing name and easier to update.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">5. Unlock Status</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Essential info for traveling or upgrading. Displays device unlock status at a glance now.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">17. Block Scam Calls</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Customers lack awareness on this feature. Updates show status and allow for quick action.</p>
          </div>
          <div style="border-left:2px solid var(--gold);padding-left:12px;display:flex;flex-direction:column;gap:5px">
            <p style="font-family:var(--sans);font-weight:700;font-size:20px;color:rgba(242,237,232,0.9);margin:0">3. Check EIP or Lease</p>
            <p style="font-family:var(--sans);font-weight:300;font-size:16px;color:rgba(242,237,232,0.55);line-height:1.45;margin:0">Customers ranked understanding costs as the most important aspect in a study of current account experiences. Previously not included with device charges, reducing overall customer satisfaction.</p>
          </div>
        </div>
      </div>

    </div>
  </section>`,
    },

    // 23 · USABILITY FINDINGS (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark findings" data-label="Findings">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise" style="color:var(--gold-deep)">Account management · validation</p>
        <h2 class="head-lg rise d2">Testing told us it worked</h2>
      </div>
      <div class="grid-fd">
        <div class="fd-card rise d3"><p class="fd-k">Key finding #1</p><p class="fd-b">Participants were <em>significantly more successful</em> finding and navigating account pages than in previous designs.</p></div>
        <div class="fd-card rise d4"><p class="fd-k">Key finding #2</p><p class="fd-b">Average task ease climbed from <em>5.5</em> in round 2 to <em>6.0</em> out of 7.</p></div>
      </div>
    </div>
  </section>`,
    },

    // 24 · PRODUCT: Account (raw — custom multi-screen layout)
    {
      type: 'raw',
      html: `
  <section class="slide dark product" data-label="Account">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <div class="pr-text">
        <p class="eyebrow pr-eyebrow rise">Account</p>
        <h2 class="pr-head rise d2">Managing your account has never been easier</h2>
        <p class="pr-body rise d3">Our new account landing page offers a streamlined, glanceable interface that helps customers navigate their account, take meaningful actions, and understand key statuses at a glance.</p>
      </div>
      <div class="pr-visual">
        <img class="pr-screen-shot rise d2" src="/work/flagship/flagship-account.png" alt="Redesigned account page">
      </div>
    </div>
  </section>`,
    },

    // 25 · PRODUCT: eCommerce
    {
      type: 'raw',
      html: `
  <section class="slide dark product" data-label="eCommerce">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <div class="pr-text">
        <p class="eyebrow pr-eyebrow rise">eCommerce</p>
        <h2 class="pr-head rise d2">Upgrades start with the deal</h2>
        <p class="pr-body rise d3">Customers told us cost was the first thing they wanted to understand. So the offers they qualify for show up first, before they ever browse a phone, and the path to upgrading starts right from home.</p>
      </div>
      <div class="pr-visual">
        <img class="pr-screen-shot rise d2" src="/deck/assets/casestudy/upgrade.png" alt="Promo-first upgrade flow">
      </div>
    </div>
  </section>`,
    },

    // 26 · PRODUCT: Support
    {
      type: 'raw',
      html: `
  <section class="slide dark product" data-label="Support">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <div class="pr-text">
        <p class="eyebrow pr-eyebrow rise">Support</p>
        <h2 class="pr-head rise d2">Quick access to the help you need</h2>
        <p class="pr-body rise d3">Search, the most visited help topics, and support for each device on the account, all on one screen. Chat or a scheduled call is one tap away when self-service isn't enough.</p>
      </div>
      <div class="pr-visual">
        <img class="pr-screen-shot rise d2" src="/deck/assets/casestudy/support.png" alt="Redesigned support page">
      </div>
    </div>
  </section>`,
    },

    // 27 · RESULTS (raw — custom task ease stat layout)
    {
      type: 'raw',
      html: `
  <section class="slide dark statement" data-label="Results">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content">
      <p class="big-stat rise">+12%</p>
      <p class="stmt rise d2">We shipped into all eight of those headwinds at once. The UX improvements we applied to the web experience still drove a <em>12% lift</em> in the upper funnel for phone upgrades.</p>
      <p class="stmt-sub rise d3">The launch was messier than any of us wanted, and the work still proved itself where it shipped.</p>
    </div>
  </section>`,
    },

];

// ── AI IN PRACTICE · still to be reworked around Paavis ──
const aiInPractice: Slide[] = [

    // 28 · AI IN PRACTICE
    {
      type: 'principles',
      theme: 'dark',
      label: 'AI in practice',
      eyebrow: 'AI · in practice',
      leadSub: "Because the future belongs to designers who are curious enough to try.",
      cols: [
        { title: 'ELVTR certified', body: 'Completed the AI Product Design course. I think about AI-first product experiences, not just AI features bolted on.' },
        { title: 'AI guitar teacher app', body: 'Built a working prototype during the ELVTR course. Real-time feedback on playing technique, designed for a real human need.' },
        { title: 'DustAIn', body: 'An AI-powered second brain I built for myself. Claude + Todoist + Calendar + GitHub. I run my job search and daily work out of it.' },
        { title: 'Figma Make', body: 'Pushed adoption at T-Mobile before it was on the roadmap. Built the internal case and rolled it out to my team.' },
      ],
    },

];

// ── PEOPLE AND CULTURE · Part Three, after the team assessment ──
const peopleAndCulture: Slide[] = [

    // 30 · MENTORSHIP (raw — overlapping photo cards)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Mentorship">
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">Mentorship</p>
        <h2 class="head-lg rise d2" style="color:#fff">Investing in the next generation</h2>
      </div>
      <div class="card-pile rise d3">
        <div class="card-item" style="transform:rotate(-2.5deg);z-index:1">
          <img src="/deck/assets/casestudy/mentor-1.png" alt="Explorer Prep">
          <span class="card-cap">2023 &amp; 2024 Explorer Prep manager</span>
        </div>
        <div class="card-item" style="transform:rotate(1.5deg);z-index:2">
          <img src="/deck/assets/casestudy/mentor-2.png" alt="Ride-Along host">
          <span class="card-cap">2024 Ride-Along host</span>
        </div>
        <div class="card-item" style="transform:rotate(-1deg);z-index:3">
          <img src="/deck/assets/casestudy/mentor-3.png" alt="Letter of recommendation">
          <span class="card-cap">Letter of recommendation to grad school</span>
        </div>
      </div>
    </div>
  </section>`,
    },

    // 31 · THOUGHT LEADERSHIP (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Thought leadership">
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">Thought leadership</p>
        <h2 class="head-lg rise d2" style="color:#fff">Sharing the craft beyond my own team</h2>
      </div>
      <div class="card-pile rise d3">
        <div class="card-item" style="transform:rotate(-2deg);z-index:1">
          <img src="/deck/assets/casestudy/frankfurt.png" alt="Deutsche Telekom Design Summit, Frankfurt">
          <span class="card-cap">Deutsche Telekom Design Summit — Frankfurt, Germany</span>
        </div>
        <div class="card-item" style="transform:rotate(2deg);z-index:2">
          <div style="width:480px;height:320px;background:var(--espresso);display:flex;flex-direction:column;justify-content:center;padding:44px;border:1px solid rgba(242,237,232,0.1)">
            <p style="font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold);margin:0 0 18px">Advisory Board</p>
            <p style="font-family:var(--serif);font-size:34px;font-weight:300;color:#fff;line-height:1.2;margin:0">Tombolo Institute</p>
            <p style="font-family:var(--sans);font-size:19px;font-weight:300;color:rgba(242,237,232,0.6);margin:14px 0 0;line-height:1.5">Design Thinking program<br>Bellevue College</p>
          </div>
          <span class="card-cap">Tombolo Institute advisory board</span>
        </div>
      </div>
    </div>
  </section>`,
    },

    // 32 · TEAM CULTURE (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Team culture">
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">Team culture</p>
        <h2 class="head-lg rise d2" style="color:#fff">There's more to a team than results</h2>
      </div>
      <div class="card-pile four rise d3">
        <div class="card-item" style="transform:rotate(-2deg);z-index:1">
          <img src="/deck/assets/casestudy/culture-1.png" alt="MoxiWorks design team">
          <span class="card-cap">Small but mighty MoxiWorks design team</span>
        </div>
        <div class="card-item" style="transform:rotate(2.5deg);z-index:2">
          <img src="/deck/assets/casestudy/culture-3.png" alt="T-Mobile team dinner">
          <span class="card-cap">1st T-Mobile team dinner after COVID</span>
        </div>
        <div class="card-item" style="transform:rotate(-1.5deg);z-index:3">
          <img src="/deck/assets/casestudy/culture-4.png" alt="Vigil">
          <span class="card-cap">My vigil after leaving MoxiWorks</span>
        </div>
        <div class="card-item" style="transform:rotate(1deg);z-index:4">
          <img src="/deck/assets/casestudy/culture-2.png" alt="Team taco night">
          <span class="card-cap">Team taco night in my backyard</span>
        </div>
      </div>
    </div>
  </section>`,
    },

    // 33 · CLOSING
    {
      type: 'closing',
      theme: 'dark',
      label: 'Thank you',
      eyebrow: 'Thank you',
      headline: "Let's make something <em>worth making</em>.",
      contacts: ['dustinmartinka.com', '<b>in</b> /in/dustinmartinka'],
    },

];

// ── SECTION DIVIDERS ──
const sectionTwo: Slide = {
  type: 'section',
  theme: 'dark',
  label: 'Part two',
  num: 'PART TWO',
  title: 'Delivering impact',
  items: [
    { num: '01', title: 'Web Experience Elevation', sub: 'Taking on the web experience nobody owned' },
    { num: '02', title: 'The Flagship App Redesign', sub: 'Deep-dive into the redesign of our flagship app' },
  ],
};

const sectionThree: Slide = {
  type: 'section',
  theme: 'dark',
  label: 'Part three',
  num: 'PART THREE',
  title: 'Building teams',
  items: [
    { num: '01', title: 'Team Growth and Development', sub: 'Growing my T-Mobile Product Design team' },
    { num: '02', title: 'Culture and Mentorship', sub: 'Investing in people beyond the work' },
  ],
};

export const caseStudyDeck: Deck = {
  id: 'case-study',
  title: 'Dustin Martinka — Case Study',
  defaultTheme: 'dark',
  passwordHashes: [
    // Same passcode as the gated work case studies (src/pages/work/tlife.astro)
    'd405e342c33ea8e0e1e65c2d94e5e8eeb8329e4d15fa6a7627de3e47f6cf1406',
  ],
  // No deck-level runningHead on purpose. The footer marks "you are inside a
  // case study", so only the two case study chapters stamp one below. Part
  // one, part three and the section dividers stay bare.
  slides: [
    ...partOne,
    sectionTwo,
    // Stamped with the web elevation deck's own running head so the chapter
    // keeps its name here, instead of inheriting this deck's.
    ...webElevationDeck.slides.map(s => ({ ...s, runningHead: webElevationDeck.runningHead })),
    ...flagshipApp.map(s => ({ ...s, runningHead: 'Flagship app redesign' })),
    // aiInPractice pulled from the running order 2026-09-08. The AI story is
    // carried by the Paavis card on the timeline instead. Re-add this line to
    // bring the slide back.
    sectionThree,
    // Part three chapters stamp their own names, like the two case studies.
    // The closing thank you slide stays bare.
    ...teamAssessment.map(s => ({ ...s, runningHead: 'Team growth and development' })),
    ...peopleAndCulture.map(s => (s.label === 'Thank you' ? s : { ...s, runningHead: 'Culture and mentorship' })),
  ],
};
