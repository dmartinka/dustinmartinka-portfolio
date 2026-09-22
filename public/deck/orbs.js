// Populates every <div class="orbs"></div> with the signature orb field.
// Gold + cream, screen blend, heavy blur, clustered upper-right.
(function () {
  const ORBS = [
    { s: 66, t: '8%',  l: '56%', c: '#f2ede8', b: 5,  k: 'a' },
    { s: 72, t: '4%',  l: '84%', c: '#C9A96E', b: 6,  k: 'b' },
    { s: 48, t: '7%',  l: '46%', c: '#C9A96E', b: 7,  k: 'b' },
    { s: 42, t: '20%', l: '60%', c: '#f2ede8', b: 7,  k: 'c' },
    { s: 52, t: '5%',  l: '80%', c: '#f2ede8', b: 6,  k: 'a' },
    { s: 36, t: '16%', l: '42%', c: '#C9A96E', b: 7,  k: 'b' },
    { s: 44, t: '11%', l: '88%', c: '#C9A96E', b: 6,  k: 'c' },
    { s: 28, t: '12%', l: '26%', c: '#f2ede8', b: 10, k: 'd' },
    { s: 20, t: '6%',  l: '16%', c: '#C9A96E', b: 12, k: 'd' },
    { s: 24, t: '19%', l: '33%', c: '#f2ede8', b: 9,  k: 'd' },
    { s: 16, t: '5%',  l: '68%', c: '#f2ede8', b: 8,  k: 'c' },
    { s: 12, t: '15%', l: '52%', c: '#C9A96E', b: 10, k: 'c' },
  ];
  // Light-ground palette. Screen blend needs a dark backdrop to read, so on a
  // beige slide the orbs switch to multiply (see deck.css) and these tints take
  // over: near the background colour, so multiplying stays gentle.
  const LIGHT = { '#f2ede8': '#EDE7DC', '#C9A96E': '#E4D8BC' };

  // Ink palette for the crisp styles. Blur and low contrast cancel each other
  // out on beige, so these two styles drop the blur and darken the colour
  // instead, borrowing the dot-and-circle vocabulary of the strategy slide.
  const INK = { '#f2ede8': '#C9BFA9', '#C9A96E': '#B09055' };

  // Rings carry their own alpha so they can never reach full strength, however
  // high the pulse goes. Peak works out around 0.5 for the gold, less for the
  // stone: present, never drawn-on.
  const RING = { '#f2ede8': 'rgba(201,191,169,0.60)', '#C9A96E': 'rgba(176,144,85,0.55)' };

  // data-orb-tone="light"   swaps the palette and (via CSS) the blend mode
  // data-orb-side="left"    mirrors the cluster, for slides whose right side
  //                         is occupied. The mask flips to match in CSS.
  // data-orb-style=         light-ground forms, all keeping the same positions,
  //                         cluster, mask and stagger as the dark field:
  //     bloom   the soft field scaled up, since low contrast needs area
  //     dots    small solid gold marks, no blur
  //     rings   outlined circles, no blur
  // No attributes at all means the original dark field, unchanged.
  function fill(el) {
    if (el.dataset.filled) return;
    el.dataset.filled = '1';
    const light = el.dataset.orbTone === 'light';
    const mirror = el.dataset.orbSide === 'left';
    const style = el.dataset.orbStyle || '';
    ORBS.forEach((o, i) => {
      const d = document.createElement('div');
      d.className = 'orb ' + o.k;
      const l = mirror ? (100 - parseFloat(o.l)) + '%' : o.l;
      let size = o.s, paint;
      if (style === 'bloom') {
        size = Math.round(o.s * 3.2);
        paint = `background:${LIGHT[o.c]};filter:blur(${Math.round(o.b * 3.2)}px)`;
      } else if (style === 'dots') {
        size = Math.max(7, Math.round(o.s * 0.24));
        paint = `background:${INK[o.c]}`;
      } else if (style === 'rings') {
        size = Math.round(o.s * 1.8);
        paint = `background:transparent;box-sizing:border-box;border:1.5px solid ${RING[o.c]}`;
      } else {
        paint = `background:${light ? LIGHT[o.c] : o.c};filter:blur(${o.b}px)`;
      }
      d.style.cssText = `width:${size}px;height:${size}px;top:${o.t};left:${l};${paint};animation-delay:${(i * 0.27).toFixed(2)}s`;
      el.appendChild(d);
    });
  }
  function run() { document.querySelectorAll('.orbs').forEach(fill); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
