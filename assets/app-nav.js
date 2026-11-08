// Floating navigation on each screen of the new mobile version: gallery, previous / next step in the flow.
// Config via the script tag: data-data (data file) and data-var (global it defines). Defaults: the FIB_APP version.
(function () {
  const me = document.currentScript;
  const dataSrc = (me && me.dataset.data) || '../assets/client-app-data.js';
  const dataVar = (me && me.dataset.var) || 'FIB_CLIENT_APP';
  const s = document.createElement('script');
  s.src = dataSrc;
  s.onload = build;
  document.head.appendChild(s);

  function build() {
    const groups = window[dataVar] || [];
    const slug = location.pathname.split('/').pop().replace(/\.html$/, '');
    const flat = [];
    groups.forEach((g, gi) => g.items.forEach(i => flat.push({ slug: i[0], title: i[1], phase: gi + 1 })));
    const idx = flat.findIndex(i => i.slug === slug);
    if (idx >= 0 && /^FIB - [a-z-]+$/.test(document.title)) document.title = 'FIB — ' + flat[idx].title;

    const bar = document.createElement('nav');
    bar.setAttribute('aria-label', 'Screen navigation');
    bar.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:9999;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px;border-radius:16px;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border:1px solid rgba(15,23,42,.12);box-shadow:0 8px 24px rgba(15,23,42,.14);font:600 11px/1 "Plus Jakarta Sans",Inter,sans-serif;color:#475569';
    const btn = (href, icon, label) => {
      const a = document.createElement(href ? 'a' : 'span');
      if (href) a.href = href;
      a.title = label; a.setAttribute('aria-label', label);
      a.style.cssText = 'width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;text-decoration:none;color:' + (href ? '#047857' : '#cbd5e1');
      a.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px">' + icon + '</span>';
      if (href) { a.onmouseenter = () => a.style.background = '#ecfdf5'; a.onmouseleave = () => a.style.background = ''; }
      bar.appendChild(a);
    };
    btn('index.html', 'apps', 'All screens');
    btn(idx > 0 ? flat[idx - 1].slug + '.html' : '', 'arrow_upward', idx > 0 ? 'Previous: ' + flat[idx - 1].title : 'First screen');
    if (idx >= 0) {
      const pos = document.createElement('span');
      pos.textContent = (idx + 1) + '/' + flat.length;
      pos.title = 'Phase ' + flat[idx].phase + ' of ' + groups.length;
      pos.style.cssText = 'padding:4px 0;font-variant-numeric:tabular-nums';
      bar.appendChild(pos);
    }
    btn(idx >= 0 && idx < flat.length - 1 ? flat[idx + 1].slug + '.html' : '', 'arrow_downward', idx < flat.length - 1 ? 'Next: ' + (flat[idx + 1] || {}).title : 'Last screen');
    document.body.appendChild(bar);

    // On phones the bar would cover the screen's content: collapse it to a small handle on the right edge.
    if (window.innerWidth < 640) {
      const handle = document.createElement('button');
      handle.type = 'button';
      handle.setAttribute('aria-label', 'Show screen navigation');
      handle.setAttribute('aria-expanded', 'false');
      handle.style.cssText = 'position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:9999;width:22px;height:56px;border:1px solid rgba(15,23,42,.12);border-right:0;border-radius:12px 0 0 12px;background:rgba(255,255,255,.94);box-shadow:0 4px 12px rgba(15,23,42,.12);color:#047857;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer';
      handle.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px">chevron_left</span>';
      bar.style.display = 'none';
      bar.style.right = '28px';
      handle.addEventListener('click', () => {
        const open = bar.style.display === 'none';
        bar.style.display = open ? 'flex' : 'none';
        handle.setAttribute('aria-expanded', String(open));
        handle.firstElementChild.textContent = open ? 'chevron_right' : 'chevron_left';
      });
      document.body.appendChild(handle);
    }
  }
})();
