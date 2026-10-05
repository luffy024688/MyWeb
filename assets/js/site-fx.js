/* 背景：細格線緩緩下移，游標附近一層很淡的光。 */
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.getElementById('particles');
  if (!cv) return;
  const cx = cv.getContext('2d');
  let W, H, shift = 0;
  const mouse = {x: -9999, y: -9999};
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const GAP = 84;
  function isDark(){ return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function resize(){
    W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  addEventListener('resize', resize);
  resize();
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
  function tick(){
    shift = (shift + 0.18) % GAP;
    cx.clearRect(0, 0, W, H);
    const dark = isDark();
    cx.beginPath();
    for (let x = 0; x <= W; x += GAP){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, H); }
    for (let y = -GAP + shift; y < H + GAP; y += GAP){ cx.moveTo(0, y + .5); cx.lineTo(W, y + .5); }
    cx.strokeStyle = dark ? 'rgba(176,196,214,.09)' : 'rgba(35,51,99,.07)';
    cx.lineWidth = 1;
    cx.stroke();
    if (mouse.x > -100){
      const g = cx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
      g.addColorStop(0, dark ? 'rgba(186,210,230,.10)' : 'rgba(46,126,166,.09)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      cx.fillStyle = g;
      cx.fillRect(0, 0, W, H);
    }
    if (!document.hidden) requestAnimationFrame(tick); else setTimeout(tick, 300);
  }
  tick();
})();
(function(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold: .1, rootMargin: '0px 0px -40px 0px'});
  const sels = '.pillar,.course-card,.book,.stats-row,.logo-cell,details.year-block,.photo-strip img,.about-grid > *,.edu-list,section h2,.section-lead,.contact-inner';
  document.querySelectorAll(sels).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 5) * 70 + 'ms';
    io.observe(el);
  });
})();

/* 點擊複製（data-copy="要複製的文字"）＋ 底部提示 */
(function(){
  let toast, timer;
  function showToast(msg, anchor){
    if (!toast){
      toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    /* 貼在被點的元素正上方（空間不夠就放下方），一定看得到 */
    toast.classList.remove('show', 'below');
    if (anchor){
      const r = anchor.getBoundingClientRect();
      toast.style.left = (r.left + r.width / 2) + 'px';
      const above = r.top > 64;
      toast.style.top = (above ? r.top - 12 : r.bottom + 12) + 'px';
      toast.classList.toggle('below', !above);
    } else {
      toast.style.left = '50%';
      toast.style.top = (innerHeight - 40) + 'px';
    }
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 2200);
  }
  async function copyText(text){
    try { await navigator.clipboard.writeText(text); return true; }
    catch(e){
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch(_){}
      ta.remove(); return ok;
    }
  }
  document.addEventListener('click', async e => {
    const el = e.target.closest('[data-copy]');
    if (!el) return;
    e.preventDefault();
    const text = el.getAttribute('data-copy');
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 1200);
    showToast('已複製 ' + text + ' ✓', el);
    const ok = await copyText(text);
    if (!ok) showToast('複製失敗，請手動選取：' + text, el);
  });
})();
