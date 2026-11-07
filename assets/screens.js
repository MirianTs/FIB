// Floating navigation added to every mobile screen: back to the gallery, prev/next in flow, light/dark variant.
(function () {
  const s = document.createElement('script');
  s.src = '../assets/screens-data.js';
  s.onload = build;
  document.head.appendChild(s);

  function build() {
    const file = location.pathname.split('/').pop().replace(/\.html$/, '');
    const isDark = /-dark$/.test(file);
    const slug = file.replace(/-dark$/, '');
    const flat = [];
    window.FIB_SCREENS.forEach(g => g.items.forEach(i => flat.push(i)));
    const idx = flat.findIndex(i => i[0] === slug);
    const item = flat[idx];
    const url = (it, dark) => it[0] + ((dark && it[2]) || !it[3] ? '-dark' : '') + '.html';

    const bar = document.createElement('nav');
    bar.setAttribute('aria-label', 'Screen navigation');
    bar.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:9999;display:flex;flex-direction:column;gap:6px;padding:6px;border-radius:16px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border:1px solid rgba(15,23,42,.12);box-shadow:0 8px 24px rgba(15,23,42,.14);font-family:"Plus Jakarta Sans",sans-serif';
    const btn = (href, icon, label, disabled) => {
      const a = document.createElement(disabled ? 'span' : 'a');
      if (!disabled) a.href = href;
      a.title = label; a.setAttribute('aria-label', label);
      a.style.cssText = 'width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;color:' + (disabled ? '#bdc8ce' : '#00647c') + ';text-decoration:none';
      a.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px">' + icon + '</span>';
      if (!disabled) { a.onmouseenter = () => a.style.background = '#eaedff'; a.onmouseleave = () => a.style.background = ''; }
      bar.appendChild(a);
    };
    btn('index.html', 'apps', 'All screens');
    btn(idx > 0 ? url(flat[idx - 1], isDark) : '', 'arrow_upward', 'Previous screen', idx <= 0);
    btn(idx < flat.length - 1 ? url(flat[idx + 1], isDark) : '', 'arrow_downward', 'Next screen', idx < 0 || idx >= flat.length - 1);
    if (item) {
      const other = isDark ? item[3] : item[2];
      btn(other ? item[0] + (isDark ? '' : '-dark') + '.html' : '', isDark ? 'light_mode' : 'dark_mode', other ? (isDark ? 'Light version' : 'Dark version') : 'No other theme for this screen', !other);
    }
    document.body.appendChild(bar);
  }
})();
