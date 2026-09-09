import type {
  Slide, Theme,
  CoverSlide, SectionSlide, BulletsSlide, ValuesSlide, UnlockSlide,
  ProductSlide, MetricsSlide, QuoteSlide, AgendaSlide, TimelineSlide,
  PrinciplesSlide, StatementSlide, CapabilitySlide, CompareSlide,
  AnnotatedSlide, ClosingSlide,
} from './types';

// Strings come from our own TypeScript data files — no user input, so raw HTML is safe.
const atm = () => '<div class="orbs"></div><div class="grain"></div>';

function wrap(theme: Theme, classes: string, label: string, inner: string): string {
  return `<section class="slide ${theme} ${classes}"${label}>${inner}</section>`;
}

// --- Renderers ---

function cover(s: CoverSlide, theme: Theme, label: string): string {
  const photo = s.photo
    ? `<div class="cover-photo"><img src="${s.photo}" alt="Dustin Martinka"></div>`
    : s.visual
      ? `<div class="cover-visual"><div class="cv-wrap"><img class="cv-main" src="${s.visual}" alt="">${
          s.badge ? `<img class="cv-badge" src="${s.badge}" alt="">` : ''
        }</div></div>`
      : '';
  return wrap(theme, 'cover', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <div class="cover-text">
        ${s.name ? `<p class="name rise">${s.name}</p>` : ''}
        <h1 class="headline rise d2">${s.headline}</h1>
        <div class="cover-divider rise d3"></div>
        ${s.meta ? `<p class="meta rise d3">${s.meta}</p>` : ''}
      </div>
      ${photo}
    </div>`);
}

function section(s: SectionSlide, theme: Theme, label: string): string {
  const items = s.items?.map((item, i) => `
      <div class="sec-item rise d${i + 3}">
        <span class="sec-n">${item.num}</span>
        <div class="sec-body">
          <p class="sec-t">${item.title}</p>
          ${item.sub ? `<p class="sec-s">${item.sub}</p>` : ''}
        </div>
      </div>`).join('') ?? '';
  return wrap(theme, 'section', label, `
    ${atm()}
    <div class="content">
      ${s.num ? `<p class="num rise">${s.num}</p>` : ''}
      <h2 class="title rise d2">${s.title}</h2>
      ${s.sub ? `<p class="sub rise d3">${s.sub}</p>` : ''}
      ${items ? `<div class="sec-items">${items}</div>` : ''}
    </div>`);
}

function bullets(s: BulletsSlide, theme: Theme, label: string): string {
  const items = s.bullets.map((b, i) => {
    const inner = typeof b === 'string'
      ? b
      : `<span class="bl-t">${b.title}</span>${b.body}`;
    return `<li class="rise d${i + 3}">${inner}</li>`;
  }).join('');
  const body = `
      ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
      <h2 class="bl-headline rise d2">${s.headline}</h2>
      ${s.sub ? `<p class="bl-sub rise d2">${s.sub}</p>` : ''}
      <ul class="bl-list${s.cards ? ' bl-cards' : ''}">${items}</ul>`;
  const stats = s.stats?.map((st, i) => `
      <div class="bl-stat rise d${i + 3}">
        <p class="bl-n">${st.value}</p>
        <p class="bl-l">${st.label}</p>
      </div>`).join('') ?? '';
  const artifact = s.artifact ? `
      <figure class="bl-artifact rise d3">
        <img src="${s.artifact.src}" alt="">
        ${s.artifact.caption ? `<figcaption>${s.artifact.caption}</figcaption>` : ''}
      </figure>` : '';
  const rail = stats
    ? `<div class="bl-stats">${stats}</div>`
    : artifact;
  return wrap(theme, 'bullets-slide', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      ${rail ? `<div class="bl-main">${body}</div>${rail}` : body}
    </div>`);
}

function values(s: ValuesSlide, theme: Theme, label: string): string {
  if (s.photo) {
    // Photo variant: stacked text left, full-height image right
    const cols = s.cols.map((c, i) => `
      <div class="vp-col rise d${i + 3}">
        <div class="val-rule"></div>
        <p class="val-t">${c.title}</p>
        <p class="val-b">${c.body}</p>
      </div>`).join('');
    return wrap(theme, 'values values-photo', label, `
      <div class="content">
        <div class="vp-left">
          ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
          <h2 class="head-lg rise d2">${s.headline}</h2>
          <div class="vp-cols">${cols}</div>
        </div>
        <div class="vp-right">
          <img src="${s.photo}" alt="" class="vp-img">
        </div>
      </div>`);
  }
  const cols = s.cols.map((c, i) => `
    <div class="val-col rise d${i + 3}">
      ${c.graphic ? `<div class="val-graphic">${c.graphic}</div>` : '<div class="val-rule"></div>'}
      <p class="val-t">${c.title}</p>
      <p class="val-b">${c.body}</p>
    </div>`).join('');
  return wrap(theme, 'values', label, `
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
        <h2 class="head-lg rise d2">${s.headline}</h2>
      </div>
      <div class="grid3">${cols}</div>
    </div>`);
}

function unlock(s: UnlockSlide, theme: Theme, label: string): string {
  const bullets = s.bullets.map((b, i) => `<li class="rise d${i + 3}">${b}</li>`).join('');
  const items = s.subsection.items.map(item => `<li>${item}</li>`).join('');
  return wrap(theme, 'unlock-slide', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <div class="ul-left">
        <h2 class="ul-headline rise d2">${s.headline}</h2>
        <ul class="ul-list">${bullets}</ul>
      </div>
      <div class="ul-right rise d5">
        <p class="ul-sub-title">${s.subsection.title}</p>
        <ul class="ul-sub-list">${items}</ul>
      </div>
    </div>`);
}

function product(s: ProductSlide, theme: Theme, label: string): string {
  const imgs = s.images.map(src =>
    `<div class="pr-phone-wrap"><img src="${src}" alt="" class="pr-phone-img"></div>`
  ).join('');
  return wrap(theme, 'product-slide', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <div class="pr-text">
        ${s.eyebrow ? `<p class="eyebrow pr-eyebrow rise">${s.eyebrow}</p>` : ''}
        <h2 class="pr-head rise d2">${s.headline}</h2>
        <p class="pr-body rise d3">${s.body}</p>
        ${s.footer ? `<p class="pr-footer rise d4">${s.footer}</p>` : ''}
      </div>
      <div class="pr-visual">${imgs}</div>
    </div>`);
}

function metrics(s: MetricsSlide, theme: Theme, label: string): string {
  const cards = s.cards.map((c, i) => `
    <div class="metric-card rise d${i + 2}">
      <p class="n">${c.number}</p>
      <p class="l">${c.label}</p>
      <p class="d">${c.description}</p>
    </div>`).join('');
  return wrap(theme, 'metrics', label, `
    <div class="content">
      ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
      <h2 class="headline rise d2">${s.headline}</h2>
      <div class="grid">${cards}</div>
    </div>`);
}

function quote(s: QuoteSlide, theme: Theme, label: string): string {
  return wrap(theme, 'quote', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <p class="mark rise">&ldquo;</p>
      <p class="q rise d2">${s.quote}</p>
      ${s.attribution ? `<p class="attr rise d3">${s.attribution}</p>` : ''}
    </div>`);
}

function agenda(s: AgendaSlide, theme: Theme, label: string): string {
  const items = s.items.map((item, i) => `
    <div class="ag-item rise d${i + 2}">
      <span class="ag-n">${item.num}</span>
      <p class="ag-t">${item.title}</p>
    </div>`).join('');
  return wrap(theme, 'agenda', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
      </div>
      <div class="items">${items}</div>
    </div>`);
}

function timeline(s: TimelineSlide, theme: Theme, label: string): string {
  const nodes = s.nodes.map(n => `
    <div class="tl-node">
      <span class="tl-dot"></span>
      <p class="tl-year">${n.year}</p>
      <p class="tl-role">${n.role}</p>
      <p class="tl-d">${n.description}</p>
    </div>`).join('');
  return wrap(theme, 'timeline', label, `
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
        <h2 class="head-lg rise d2">${s.headline}</h2>
      </div>
      <div class="tl-track rise d3">
        <div class="tl-line"></div>
        <div class="tl-nodes">${nodes}</div>
      </div>
    </div>`);
}

function principles(s: PrinciplesSlide, theme: Theme, label: string): string {
  const cols = s.cols.map((c, i) => `
    <div class="pr-col rise d${i + 3}">
      <p class="pr-t">${c.title}</p>
      <p class="pr-b">${c.body}</p>
    </div>`).join('');
  return wrap(theme, 'principles', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
        ${s.leadSub ? `<p class="lead-sub rise d2">${s.leadSub}</p>` : ''}
      </div>
      <div class="grid4">${cols}</div>
    </div>`);
}

function statement(s: StatementSlide, theme: Theme, label: string): string {
  return wrap(theme, 'statement', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      ${s.bigStat ? `<p class="big-stat rise">${s.bigStat}</p>` : ''}
      <p class="stmt rise d2">${s.statement}</p>
      ${s.sub ? `<p class="stmt-sub rise d3">${s.sub}</p>` : ''}
    </div>`);
}

function capability(s: CapabilitySlide, theme: Theme, label: string): string {
  const cards = s.cards.map((c, i) => `
    <div class="cap-card rise d${i + 3}">
      <p class="cap-t">${c.title}</p>
      <ul>${c.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>`).join('');
  return wrap(theme, 'capability', label, `
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
        <h2 class="head-lg rise d2">${s.headline}</h2>
        ${s.mission ? `<p class="mission rise d2">${s.mission}</p>` : ''}
      </div>
      <div class="grid-cap">${cards}</div>
    </div>`);
}

function compare(s: CompareSlide, theme: Theme, label: string): string {
  return wrap(theme, 'compare', label, `
    <div class="content">
      <div class="slide-head">
        ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
        <h2 class="head-lg rise d2">${s.headline}</h2>
      </div>
      <div class="grid2">
        <div class="cmp-card pos rise d3">
          <p class="cmp-h">${s.pos.heading}</p>
          <ul>${s.pos.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="cmp-card neg rise d4">
          <p class="cmp-h">${s.neg.heading}</p>
          <ul>${s.neg.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`);
}

function annotated(s: AnnotatedSlide, theme: Theme, label: string): string {
  const annotations = s.annotations.map((a, i) => `
    <div class="ann-item rise d${i + 3}">
      <span class="ann-n">${a.num}</span>
      <div>
        <p class="ann-t">${a.title}</p>
        <p class="ann-b">${a.body}</p>
      </div>
    </div>`).join('');
  const img = s.image
    ? `<img src="${s.image}" alt="" class="ann-screen-img">`
    : `<div class="deviceph ann-screen imgph"><span class="ph-label">Screen</span></div>`;
  return wrap(theme, 'annotated', label, `
    <div class="content">
      <div class="ann-visual rise">${img}</div>
      <div class="ann-list">
        <div class="slide-head" style="margin-bottom:14px">
          ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
          <h2 class="head-lg rise d2" style="font-size:46px">${s.headline}</h2>
        </div>
        ${annotations}
      </div>
    </div>`);
}

function closing(s: ClosingSlide, theme: Theme, label: string): string {
  const contacts = s.contacts.map(c => `<span>${c}</span>`).join('');
  return wrap(theme, 'closing', label, `
    ${theme === 'dark' ? atm() : ''}
    <div class="content">
      ${s.eyebrow ? `<p class="eyebrow rise">${s.eyebrow}</p>` : ''}
      <h2 class="big rise d2">${s.headline}</h2>
      <div class="contact rise d3">${contacts}</div>
    </div>`);
}

// --- Main export ---

export function renderSlide(slide: Slide, defaultTheme: Theme = 'dark'): string {
  const theme: Theme = slide.theme ?? defaultTheme;
  const label = slide.label ? ` data-label="${slide.label}"` : '';

  switch (slide.type) {
    case 'raw':        return slide.html;
    case 'cover':      return cover(slide, theme, label);
    case 'section':    return section(slide, theme, label);
    case 'bullets':    return bullets(slide, theme, label);
    case 'values':     return values(slide, theme, label);
    case 'unlock':     return unlock(slide, theme, label);
    case 'product':    return product(slide, theme, label);
    case 'metrics':    return metrics(slide, theme, label);
    case 'quote':      return quote(slide, theme, label);
    case 'agenda':     return agenda(slide, theme, label);
    case 'timeline':   return timeline(slide, theme, label);
    case 'principles': return principles(slide, theme, label);
    case 'statement':  return statement(slide, theme, label);
    case 'capability': return capability(slide, theme, label);
    case 'compare':    return compare(slide, theme, label);
    case 'annotated':  return annotated(slide, theme, label);
    case 'closing':    return closing(slide, theme, label);
    default:           return '';
  }
}
