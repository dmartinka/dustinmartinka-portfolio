// Scales a fixed 1920×1080 .stage-fit element to fit the viewport, letterboxed on black.
(function () {
  function fit() {
    const el = document.querySelector('.stage-fit');
    if (!el) return;
    const w = window.innerWidth, h = window.innerHeight;
    const s = Math.min(w / 1920, h / 1080);
    el.style.transform = `translate(${(w - 1920 * s) / 2}px, ${(h - 1080 * s) / 2}px) scale(${s})`;
  }
  window.addEventListener('resize', fit);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fit);
  else fit();
  setTimeout(fit, 50);
})();
