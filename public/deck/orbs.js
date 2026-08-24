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
  function fill(el) {
    if (el.dataset.filled) return;
    el.dataset.filled = '1';
    ORBS.forEach((o, i) => {
      const d = document.createElement('div');
      d.className = 'orb ' + o.k;
      d.style.cssText = `width:${o.s}px;height:${o.s}px;top:${o.t};left:${o.l};background:${o.c};filter:blur(${o.b}px);animation-delay:${(i * 0.27).toFixed(2)}s`;
      el.appendChild(d);
    });
  }
  function run() { document.querySelectorAll('.orbs').forEach(fill); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
