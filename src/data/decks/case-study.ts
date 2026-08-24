import type { Deck } from './types';

const _d = `<span style="width:16px;height:16px;border-radius:50%;background:var(--gold);display:inline-block;flex-shrink:0"></span>`;
const _dots = (n: number) => Array(n).fill(_d).join('');
const _cDot = (clr: string) => `<span style="width:90px;height:90px;border-radius:50%;background:${clr};display:block;flex-shrink:0"></span>`;
const _gDot = `<span style="width:90px;height:90px;border-radius:50%;background:rgba(43,43,43,0.1);display:block;flex-shrink:0"></span>`;
const _cDotSm = (clr: string) => `<span style="width:56px;height:56px;border-radius:50%;background:${clr};display:block;flex-shrink:0"></span>`;
const _gDotSm = `<span style="width:56px;height:56px;border-radius:50%;background:rgba(43,43,43,0.1);display:block;flex-shrink:0"></span>`;
const _row = (rank: number, task: string, t: number, c: number, g: number) => `<div style="display:grid;grid-template-columns:220px 28px 1fr;align-items:center;gap:14px"><span style="text-align:right;font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.8);white-space:nowrap">${task}</span><span style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;font-weight:600;color:rgba(242,237,232,0.9);flex-shrink:0">${rank}</span><div style="display:flex;flex-direction:row;align-items:center;gap:3px">${t>0?`<div style="width:${t}%;height:9px;border-radius:5px;background:rgba(242,237,232,0.85);flex-shrink:0"></div>`:''} ${c>0?`<div style="width:${c}%;height:9px;border-radius:5px;background:var(--gold);flex-shrink:0"></div>`:''} ${g>0?`<div style="width:${g}%;height:9px;border-radius:5px;background:rgba(242,237,232,0.32);flex-shrink:0"></div>`:''}</div></div>`;

export const caseStudyDeck: Deck = {
  id: 'case-study',
  title: 'Dustin Martinka — Case Study',
  defaultTheme: 'dark',
  passwordHashes: [
    // Same passcode as the gated work case studies (src/pages/work/tlife.astro)
    'd405e342c33ea8e0e1e65c2d94e5e8eeb8329e4d15fa6a7627de3e47f6cf1406',
  ],
  slides: [

    // 1 · COVER
    {
      type: 'cover',
      theme: 'dark',
      label: 'Title',
      name: 'Product design leadership',
      headline: 'Dustin Martinka <em>meets you</em>.',
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
        { num: '02', title: 'My impact' },
        { num: '03', title: 'Beyond leadership' },
      ],
    },

    // 3 · ABOUT ME
    {
      type: 'values',
      theme: 'light',
      label: 'About me',
      eyebrow: 'PART ONE · ABOUT ME',
      headline: 'A designer at heart.',
      photo: '/deck/assets/about/dustin-kids.png',
      cols: [
        {
          title: 'A love for building',
          body: "Products, teams, cultures, home projects — if I can design or build it, I will. I got into this field because I love making things, and nothing has changed.",
        },
        {
          title: 'Husband and father',
          body: 'Recently married to Shelley. Father of Felicity (12) and Toby (9) and our dog Buchi. They\'ve taught me more about patience and perspective than any management training ever did.',
        },
        {
          title: 'Happiest outdoors',
          body: 'Snowboarding, baseball, hiking, traveling and watching Seattle sports (all of them). Getting outside is how I reset.',
        },
      ],
    },

    // 4 · TIMELINE
    {
      type: 'raw',
      html: `
  <section class="slide light timeline" data-label="Designer to leader">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Designer to leader</p>
        <h2 class="head-lg rise d2">Twenty years, one throughline: the craft.</h2>
      </div>
      <div class="tl-alt rise d3">

        <!-- ABOVE LINE: 2014, 2020, 2024 -->
        <div class="tl-above-row">
          <div></div>
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Manager / Lead Designer</p>
            <p style="font-family:var(--sans);font-size:16px;font-weight:400;color:rgba(43,43,43,0.65);margin:2px 0 5px">MoxiWorks</p>
            <p class="tl-desc-v2">IC and lead simultaneously. Built the design practice, the team, and the culture from zero.</p>
          </div>
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Manager</p>
            <p style="font-family:var(--sans);font-size:16px;font-weight:400;color:rgba(43,43,43,0.65);margin:2px 0 5px">T-Mobile</p>
            <p class="tl-desc-v2">Built the team, set the operating model, developed mid and senior designers.</p>
          </div>
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Journey into AI</p>
            <p class="tl-desc-v2">AI Product Design certified · ELVTR</p>
          </div>
        </div>

        <!-- DOTS + YEARS -->
        <div class="tl-dot-row">
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2005</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2009</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2014</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2019</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2020</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2022</p></div>
          <div class="tl-dc"><span class="tl-d2"></span><p class="tl-yr">2024</p></div>
        </div>

        <!-- BELOW LINE: 2009, 2019, 2022 -->
        <div class="tl-below-row">
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Sr. Designer</p>
            <p style="font-family:var(--sans);font-size:16px;font-weight:400;color:rgba(43,43,43,0.65);margin:2px 0 5px">Clearwire</p>
            <p class="tl-desc-v2">Led a small design team for the first time.</p>
          </div>
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Sr. Designer</p>
            <p style="font-family:var(--sans);font-size:16px;font-weight:400;color:rgba(43,43,43,0.65);margin:2px 0 5px">T-Mobile</p>
            <p class="tl-desc-v2">Designing at scale for over 100 million customers.</p>
          </div>
          <div></div>
          <div class="tl-cb">
            <p class="tl-role-v2">Sr. Manager</p>
            <p style="font-family:var(--sans);font-size:16px;font-weight:400;color:rgba(43,43,43,0.65);margin:2px 0 5px">T-Mobile</p>
            <p class="tl-desc-v2">Scaled to 37 designers across 7 product areas.</p>
          </div>
          <div></div>
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
        <h2 class="head-lg rise d2">Things that show up in every room I'm in.</h2>
      </div>
      <div class="rise d3" style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:28px;margin-top:auto">
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Clarity through chaos</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">Reorgs, ambiguous mandates, platform migrations. I make the path clear and keep the work moving. It's the thing people mention most.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Lead with empathy and curiosity</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">We're all human, driven by different factors. Each person requires a unique approach, and I adjust how I communicate and lead accordingly.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Foster a culture of learning</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">When you're learning, you're growing, whether it's a new skill or learning from where you failed. I create space for both.</p>
        </div>
        <div style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:36px 40px">
          <p style="font-family:var(--serif);font-size:28px;color:var(--gold);margin:0 0 14px;font-weight:400">Stay close to the craft</p>
          <p style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.55;color:rgba(242,237,232,0.65);margin:0">I still design. I stay close enough to the work to know when direction is landing, and when it isn't. Leading and making aren't mutually exclusive.</p>
        </div>
      </div>
    </div>
  </section>`,
    },

    // 6 · SECTION: Delivering impact
    {
      type: 'section',
      theme: 'dark',
      label: 'Part two',
      num: 'PART TWO',
      title: 'Delivering impact',
    },

    // 7 · SKILLS DOT CHART (raw)
    {
      type: 'raw',
      html: `
  <section class="slide" data-label="Skill assessment" style="display:grid;grid-template-columns:2fr 3fr;padding:0">

    <!-- LEFT: dark panel -->
    <div style="background:#0d0d0d;display:flex;flex-direction:column;justify-content:center;padding:80px 72px;position:relative;overflow:hidden">
      <div class="orbs"></div>
      <div class="grain"></div>
      <div style="position:relative;z-index:1">
        <p class="eyebrow rise" style="color:var(--gold)">Assessing the team</p>
        <p class="rise d2" style="font-family:var(--serif);font-size:46px;font-weight:300;color:rgba(242,237,232,0.9);line-height:1.25;letter-spacing:-0.02em;margin:24px 0 0">As demand for UX grew, it was clear we needed to <em>assess the team's skillsets</em> to optimize performance.</p>
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
  <section class="slide light competency" data-label="Competencies">
    <div class="cap-aside rise"><p class="n">16</p><p class="l">competencies across 5 categories, identified for T-Mobile</p></div>
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise">Team assessment</p>
        <h2 class="head-lg rise d2" style="font-size:38px">A competency assessment was created to identify strengths and opportunities across the teams.</h2>
      </div>
      <div class="grid5">
        <div class="cat-col rise d3"><p class="cat-h">Craft</p><ul><li>Product thinking</li><li>Agile processes</li><li>User-centered processes</li><li>Systems thinking</li><li>Visual design</li><li>Interaction design</li></ul></div>
        <div class="cat-col rise d3"><p class="cat-h">Communication</p><ul><li>Storytelling &amp; presentation</li><li>Participation</li><li>Receiving feedback</li></ul></div>
        <div class="cat-col rise d4"><p class="cat-h">Influence</p><ul><li>Mentoring</li><li>Cultural stewardship</li><li>Influencer</li></ul></div>
        <div class="cat-col rise d4"><p class="cat-h">Engagement</p><ul><li>Relationships</li><li>Collaboration</li></ul></div>
        <div class="cat-col rise d5"><p class="cat-h">Ownership</p><ul><li>Manages priorities</li><li>Decision making</li></ul></div>
      </div>
      <p style="font-family:var(--sans);font-size:14px;color:rgba(43,43,43,0.4);margin:36px 0 0">Based on The Design Career Journey by Todd Zaki Warfel</p>
    </div>
  </section>`,
    },

    // 9 · STRENGTHS / GAPS — bubble bar chart
    {
      type: 'raw',
      html: `
  <section class="slide light" data-label="Strengths &amp; gaps" style="display:flex;flex-direction:column;justify-content:space-between;padding:72px 100px">

    <!-- HEADLINE -->
    <div>
      <p class="eyebrow rise" style="color:var(--gold-deep)">Team assessment</p>
      <h2 class="head-lg rise d2">Staffing to strengths, hiring against gaps.</h2>
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
        <h2 class="head-lg rise d2">Enable customers to do everything our frontline teams can.</h2>
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
      <div class="slide-head"><p class="eyebrow rise">Navigating headwinds</p><h2 class="head-lg rise d2" style="color:#fff">Everything that made this hard.</h2></div>
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
        <h2 class="head-lg rise d2">I had to find ways to give my team the confidence that we could accomplish it.</h2>
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

    // 15 · RESEARCH FINDINGS (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Research findings">
    <div class="orbs"></div>
    <div class="grain"></div>
    <div class="content" style="padding:100px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">UX strategy · what we know</p>
        <h2 class="head-lg rise d2" style="font-size:50px">The app wasn't fulfilling our promise of fast, effortless account management.</h2>
        <p class="rise d3" style="font-family:var(--sans);font-size:21px;font-weight:300;color:rgba(242,237,232,0.65);margin:16px 0 0;line-height:1.5">We started by naming exactly what was not working, grounding the redesign in evidence, not assumption.</p>
      </div>
      <div class="rise d3" style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:44px">
        <div style="border-top:2px solid var(--gold);padding-top:18px"><p style="font-family:var(--serif);font-weight:700;font-size:80px;color:var(--gold);line-height:1;margin:0 0 14px">52%</p><p style="font-family:var(--sans);font-size:18px;font-weight:300;color:rgba(242,237,232,0.65);line-height:1.45;margin:0">less than satisfied with the overall app experience</p></div>
        <div style="border-top:2px solid var(--gold);padding-top:18px"><p style="font-family:var(--serif);font-weight:700;font-size:80px;color:var(--gold);line-height:1;margin:0 0 14px">53%</p><p style="font-family:var(--sans);font-size:18px;font-weight:300;color:rgba(242,237,232,0.65);line-height:1.45;margin:0">able to successfully complete their task</p></div>
        <div style="border-top:2px solid var(--gold);padding-top:18px"><p style="font-family:var(--serif);font-weight:700;font-size:80px;color:var(--gold);line-height:1;margin:0 0 14px">30%</p><p style="font-family:var(--sans);font-size:18px;font-weight:300;color:rgba(242,237,232,0.65);line-height:1.45;margin:0">unable to complete the task they came to do</p></div>
        <div style="border-top:2px solid var(--gold);padding-top:18px"><p style="font-family:var(--serif);font-weight:700;font-size:80px;color:var(--gold);line-height:1;margin:0 0 14px">16%</p><p style="font-family:var(--sans);font-size:18px;font-weight:300;color:rgba(242,237,232,0.65);line-height:1.45;margin:0">only partially able to complete their task</p></div>
      </div>
      <div class="rise d4" style="margin-top:32px">
        <p style="font-family:var(--sans);font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(242,237,232,0.38);margin:0 0 12px">Top sentiment topics</p>
        <div style="display:flex;flex-wrap:wrap;gap:9px">
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Relevant features missing</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Authentication</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Password</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Performance</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Lack of prepaid support</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">App-to-web redirects</span>
          <span style="font-family:var(--sans);font-size:16px;color:rgba(242,237,232,0.7);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:999px;padding:7px 16px">Brand perception</span>
        </div>
      </div>
      <p class="rise d4" style="font-family:var(--sans);font-size:14px;color:rgba(242,237,232,0.38);margin:20px 0 0">Credit to Lara Kocab for the research summary</p>
    </div>
  </section>`,
    },

    // 16 · UX FOCUS AREAS (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark focus" data-label="Focus areas">
    <div class="content">
      <div class="slide-head">
        <p class="eyebrow rise" style="color:var(--gold-deep)">UX strategy</p>
        <h2 class="head-lg rise d2">Eight focus areas to anchor the work.</h2>
      </div>
      <div class="grid-focus" style="margin-top:36px">
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Authentication</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Make sign-in as simple, secure, and reliable as possible.</p></div>
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Billing &amp; payments</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Don't lose focus on the driver for 30% of app visits. Clarity and transparency in billing.</p></div>
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Streamline upgrades</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Make it easier for existing customers to get a new phone.</p></div>
        <div class="rise d3" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">UX consistency</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Simplify the experience and standardize it across channels.</p></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Support &amp; troubleshooting</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Decrease Care calls with more self-service options.</p></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Perceived speed</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Make it feel instantly responsive, every action met with immediate feedback.</p></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Privacy &amp; security</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Enhance information and tools to raise customer trust and confidence.</p></div>
        <div class="rise d4" style="background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(255,255,255,0.07);border-top:3px solid var(--gold);padding:28px 30px"><p style="font-family:var(--sans);font-weight:700;font-size:21px;color:var(--gold);margin:0 0 12px">Accessibility</p><p style="font-family:var(--sans);font-weight:300;font-size:17px;line-height:1.5;color:rgba(242,237,232,0.65);margin:0">Meet or exceed all accessibility standards.</p></div>
      </div>
    </div>
  </section>`,
    },

    // 17 · RE-ORGANIZE TEAM (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Re-organize">
    <div class="content" style="display:grid;grid-template-columns:1fr 2.4fr;align-items:center;gap:0;padding:90px 0 90px 140px;height:100%">
      <div style="padding-right:56px">
        <p class="eyebrow rise">Re-organize my team</p>
        <p class="lead-stmt rise d2" style="font-family:var(--serif);font-weight:300;font-size:44px;line-height:1.2;letter-spacing:-0.02em;color:rgba(242,237,232,0.9);margin:24px 0 0">Aligning team structure to product goals.</p>
        <p class="rise d3" style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.5;color:rgba(242,237,232,0.65);margin:22px 0 0">I mapped people to surfaces, built parity across pods, and defined clear roles and responsibilities for every member.</p>
      </div>
      <div style="height:100%;overflow:hidden">
        <img src="/deck/assets/casestudy/team-mapping.png" alt="Team mapping" style="width:100%;height:100%;object-fit:cover;object-position:left center">
      </div>
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
        <p class="lead-stmt rise d2" style="font-family:var(--serif);font-weight:300;font-size:46px;line-height:1.2;letter-spacing:-0.02em;color:rgba(242,237,232,0.9);margin:24px 0 0">Learning to think in apps, not pages.</p>
        <p class="rise d3" style="font-family:var(--sans);font-size:20px;font-weight:300;line-height:1.5;color:rgba(242,237,232,0.65);margin:22px 0 0">A team rooted in web needed a new vocabulary. We built benchmarking collections, studying best-in-class apps like Airbnb, to calibrate the bar.</p>
      </div>
      <div style="position:relative;height:100%;overflow:hidden">
        <img src="/deck/assets/casestudy/benchmarking.png" alt="Airbnb app benchmarking collection" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:left center">
      </div>
    </div>
  </section>`,
    },

    // 19 · ACCOUNT COMPLEXITY (raw)
    {
      type: 'raw',
      html: `
  <section class="slide dark split" data-label="Account complexity">
    <div class="content">
      <div class="sp-text">
        <p class="eyebrow rise" style="color:var(--gold-deep)">The hardest surface</p>
        <p class="lead-stmt rise d2">Account management was the most complex area to address.</p>
        <p class="sp-note rise d3">Plans, devices, add-ons, financing, settings, benefits, and more — all colliding in one place.</p>
      </div>
      <div class="sp-visual rise d2">
        <img class="sp-device-shot" src="/deck/assets/casestudy/current-app-account.png" alt="Current app — account screen">
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
        <p class="eyebrow rise" style="color:var(--gold-deep)">Account management · exploration</p>
        <h2 class="head-lg rise d2">Many versions before the right one.</h2>
      </div>
      <div class="grid-iter">
        <div class="iter-col rise d3"><img class="iter-shot" src="/deck/assets/casestudy/account-v1.png" alt="Account version 1"><p class="iter-v">Version 1</p><p class="iter-d">Pushes down key features.</p></div>
        <div class="iter-col rise d4"><img class="iter-shot" src="/deck/assets/casestudy/account-v2.png" alt="Account version 2"><p class="iter-v">Version 2</p><p class="iter-d">Too many redundancies.</p></div>
        <div class="iter-col rise d5"><img class="iter-shot" src="/deck/assets/casestudy/account-v5.png" alt="Account version 5"><p class="iter-v">Version 5</p><p class="iter-d">Lack of priority.</p></div>
      </div>
    </div>
  </section>`,
    },

    // 21 · DATA TABLE — horizontal bar chart
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Task data" style="padding:0">
    <div style="display:grid;grid-template-columns:1fr 280px;height:100%;padding:72px 72px 72px 100px;gap:60px">

      <!-- CHART AREA -->
      <div style="display:flex;flex-direction:column;min-width:0">
        <div style="margin-bottom:28px">
          <p class="eyebrow rise">Account management · prioritization</p>
          <h2 class="head-lg rise d2" style="font-size:44px">Ranking 19 tasks by what matters.</h2>
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
        <h2 class="head-lg rise d2">Testing told us it worked.</h2>
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
        <h2 class="pr-head rise d2">Managing your account has never been easier.</h2>
        <p class="pr-body rise d3">Our new account landing page offers a streamlined, glanceable interface that helps customers navigate their account, take meaningful actions, and understand key statuses at a glance.</p>
      </div>
      <div class="pr-visual">
        <img class="pr-screen-shot rise d2" src="/deck/assets/casestudy/upgrade.png" alt="Account overview">
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
        <h2 class="pr-head rise d2">Upgrade with ease.</h2>
        <p class="pr-body rise d3">Say goodbye to complicated promotion paths. Our new promo-first flow makes finding the right device a breeze — see available promotions upfront, before browsing devices, streamlining the whole upgrade.</p>
        <p class="pr-body rise d3" style="font-size:15px;color:rgba(242,237,232,0.35);margin-top:18px">Upgrade from home</p>
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
        <h2 class="pr-head rise d2">Quick access to the help you need.</h2>
        <p class="pr-body rise d3">Our support page highlights the top-visited support pages for easy access. With new search and device-specific support, finding solutions is faster than ever — and Care is one tap away by chat or scheduled call.</p>
        <p class="pr-body rise d3" style="font-size:15px;color:rgba(242,237,232,0.35);margin-top:18px">Home · Account · Benefits · Shop · Support</p>
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
      <p class="stmt rise d2">Despite setbacks and leadership changes, applying our UX improvements to the web experience drove a <em>12% lift</em> in the upper funnel for phone upgrades.</p>
      <p class="stmt-sub rise d3">A fragmented launch — but the work proved itself where it shipped.</p>
      <div class="rise d4" style="display:flex;align-items:baseline;gap:32px;margin-top:48px;padding-top:48px;border-top:1px solid rgba(242,237,232,0.14)">
        <p style="font-family:var(--serif);font-weight:700;font-size:72px;line-height:1;color:var(--gold);margin:0;white-space:nowrap;letter-spacing:-0.02em">5.5 → 6.0</p>
        <p style="font-family:var(--sans);font-weight:300;font-size:22px;color:rgba(242,237,232,0.6);margin:0;line-height:1.5;max-width:500px">Average task ease out of 7, climbed across all account management testing rounds.</p>
      </div>
    </div>
  </section>`,
    },

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
        { title: 'Figma Make', body: 'Pushed adoption T-Mobile before it was on the roadmap. Built the internal case and rolled it out to my team.' },
      ],
    },

    // 29 · SECTION: Beyond leadership
    {
      type: 'section',
      theme: 'dark',
      label: 'Part three',
      num: 'PART THREE',
      title: 'Beyond leadership',
      sub: 'Creating lasting connections. There\'s more to managing a team than delivering great results.',
    },

    // 30 · MENTORSHIP (raw — overlapping photo cards)
    {
      type: 'raw',
      html: `
  <section class="slide dark" data-label="Mentorship">
    <div class="grain"></div>
    <div class="content" style="padding:124px 140px;display:flex;flex-direction:column">
      <div class="slide-head">
        <p class="eyebrow rise">Mentorship</p>
        <h2 class="head-lg rise d2" style="color:#fff">Investing in the next generation.</h2>
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
        <h2 class="head-lg rise d2" style="color:#fff">Sharing the craft beyond my own team.</h2>
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
        <h2 class="head-lg rise d2" style="color:#fff">There's more to a team than results.</h2>
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

  ],
};
