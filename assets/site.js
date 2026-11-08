// Shared behaviour for the FIB pages exported from Stitch.
(function () {
  const isProvider = /provider\.html$/.test(location.pathname);

  // 1) Client / Provider role switcher (floating pill, bottom-left)
  const sw = document.createElement('div');
  sw.className = 'fixed bottom-4 left-4 z-[60] flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/50 shadow-lg text-label-md font-label-md';
  const pill = (href, label, icon, active) =>
    `<a href="${href}" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${active ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'}">
       <span class="material-symbols-outlined text-[18px]">${icon}</span>${label}</a>`;
  sw.innerHTML = pill('index.html', 'Client', 'business_center', !isProvider) +
                 pill('provider.html', 'Provider', 'work', isProvider) +
                 pill('app/index.html', 'Mobile', 'smartphone', false);
  document.body.appendChild(sw);

  // 2) Mobile menu: the desktop <nav> is hidden below md, so add a toggle that shows its links.
  const header = document.querySelector('header');
  const nav = header && header.querySelector('nav');
  if (header && nav) {
    // Hide the toggle at the same breakpoint where the desktop nav appears.
    const bp = nav.classList.contains('lg:flex') ? 'lg' : 'md';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.className = (bp === 'lg' ? 'lg:hidden' : 'md:hidden') + ' w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low';
    btn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    const brand = header.querySelector('a');
    brand.parentElement.insertBefore(btn, brand);

    const panel = document.createElement('div');
    panel.className = (bp === 'lg' ? 'lg:hidden' : 'md:hidden') + ' hidden border-t border-outline-variant/30 bg-surface-container-lowest px-5 py-3 flex-col gap-1';
    nav.querySelectorAll('a').forEach(a => {
      const c = a.cloneNode(true);
      c.className = 'flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-label-lg font-label-lg ' +
        (a.classList.contains('text-primary') ? 'bg-surface-container-low text-primary' : 'text-on-surface hover:bg-surface-container-low');
      panel.appendChild(c);
    });
    header.appendChild(panel);
    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('hidden') === false;
      panel.classList.toggle('flex', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.firstElementChild.textContent = open ? 'close' : 'menu';
    });
  }

  // 3) Small interactions: suggestion chips fill the AI prompt; tab buttons switch active state.
  const prompt = document.querySelector('textarea');
  document.querySelectorAll('button').forEach(b => {
    if (prompt && /^I need /.test(b.textContent.trim())) {
      b.addEventListener('click', () => { prompt.value = b.textContent.trim(); prompt.focus(); });
    }
  });
})();
