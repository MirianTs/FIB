// FIB client app — search with recent searches and recommendations based on them.
// Adds a 🔍 button to the top bar of every app screen; opens a full-screen search sheet.
// Demo data only: CATALOG below lists what can be found and where each result leads.
(function () {
  'use strict';
  const KEY = 'fib.recentSearches';
  const DEMO_RECENT = ['მობილური აპი', 'ლოგოს დიზაინი', 'Studio Apex'];   // shown until the user searches for real

  // type: service → starts an AI brief with this text; company/team/order/page → opens that screen
  const CATALOG = [
    { type: 'service', icon: 'phone_iphone', title: 'მობილური აპლიკაცია', sub: 'iOS / Android, UX', tags: ['მობილ', 'აპ', 'app', 'ios', 'android', 'ux', 'fintech'] },
    { type: 'service', icon: 'language', title: 'ვებგვერდი', sub: 'Landing, პორტალი', tags: ['ვებ', 'საიტ', 'web', 'landing', 'პორტალ'] },
    { type: 'service', icon: 'draw', title: 'ლოგო და ბრენდინგი', sub: 'ვიზუალური სტილი', tags: ['ლოგო', 'ბრენდ', 'დიზაინ', 'ვიზუალ', 'რებრენდ'] },
    { type: 'service', icon: 'palette', title: 'UI/UX დიზაინი', sub: 'Figma, Design System', tags: ['ui', 'ux', 'დიზაინ', 'figma', 'ინტერფეის', 'აპ'] },
    { type: 'service', icon: 'code', title: 'ვებ-დეველოპმენტი', sub: 'Frontend / Backend', tags: ['დეველოპ', 'პროგრამ', 'კოდ', 'ვებ', 'backend', 'frontend'] },
    { type: 'service', icon: 'shopping_cart', title: 'ონლაინ მაღაზია', sub: 'B2B / B2C ეკომერცია', tags: ['მაღაზ', 'ონლაინ', 'ecommerce', 'გაყიდვ', 'b2b', 'ვებ'] },
    { type: 'service', icon: 'campaign', title: 'SMM კამპანია', sub: 'კონტენტ სტრატეგია', tags: ['smm', 'მარკეტინგ', 'სოციალ', 'კამპანი', 'კონტენტ', 'ბრენდ'] },
    { type: 'service', icon: 'play_circle', title: 'ვიდეო / რეკლამა', sub: 'Motion, Reels', tags: ['ვიდეო', 'რეკლამ', 'motion', 'reels', 'ანიმაც', 'კამპანი'] },
    { type: 'service', icon: 'bolt', title: 'MVP 2 კვირაში', sub: 'სწრაფი პროტოტიპი', tags: ['mvp', 'სტარტაპ', 'პროტოტიპ', 'სწრაფ', 'აპ'] },
    { type: 'company', icon: 'domain', title: 'Studio Apex', sub: 'სააგენტო • მობილური და Fintech', go: 'company-profile', tags: ['apex', 'სტუდი', 'სააგენტ', 'კომპანი', 'მობილ', 'fintech', 'აპ'] },
    { type: 'company', icon: 'domain', title: 'Nexus Studio', sub: 'UI/UX & Dev', go: 'company-profile', tags: ['nexus', 'დიზაინ', 'ui', 'ux', 'დეველოპ', 'კომპანი', 'ვებ'] },
    { type: 'company', icon: 'domain', title: 'Vector Collective', sub: 'ბრენდინგი', go: 'company-profile', tags: ['vector', 'ბრენდ', 'ლოგო', 'დიზაინ', 'კომპანი'] },
    { type: 'team', icon: 'group', title: 'შენთვის აწყობილი გუნდი', sub: 'AI-ს მიერ შერჩეული ფრილანსერები', go: 'team-builder', tags: ['გუნდ', 'ფრილანს', 'დიზაინერ', 'დეველოპერ', 'აპ'] },
    { type: 'team', icon: 'forum', title: 'Fintech Core Team', sub: 'გუნდის ჩატი • 3 ექსპერტი', go: 'team-chat', tags: ['fintech', 'გუნდ', 'ჩატ', 'მობილ', 'აპ'] },
    { type: 'order', icon: 'receipt_long', title: 'Fintech B2B Mobile MVP', sub: '#ORD-8942 • 65% შესრულებული', go: 'order-detail', tags: ['fintech', 'b2b', 'mvp', 'მობილ', 'დაკვეთ', 'აპ', '8942'] },
    { type: 'order', icon: 'receipt_long', title: 'ფინტექ პლატფორმის რებრენდინგი', sub: 'Vector Collective • განხილვა', go: 'my-orders', tags: ['რებრენდ', 'ბრენდ', 'ლოგო', 'fintech', 'დაკვეთ'] },
    { type: 'page', icon: 'local_offer', title: 'AI შეთავაზებები', sub: '3 ახალი შეთავაზება', go: 'ai-offers', tags: ['შეთავაზ', 'offer', 'ფას', 'კომპანი'] },
    { type: 'page', icon: 'shield', title: 'Escrow და გადახდები', sub: 'დაბლოკილი ₾5,200', go: 'order-detail', tags: ['escrow', 'გადახდ', 'თანხ', 'ფას', 'ბიუჯეტ'] },
    { type: 'page', icon: 'perm_media', title: 'მედია და ფაილები', sub: '8 მედია • 4 ფაილი', go: 'media-stream', tags: ['მედია', 'ფაილ', 'ფოტო', 'ვიდეო', 'დოკუმენტ'] },
    { type: 'page', icon: 'notifications', title: 'შეტყობინებები', sub: '5 ახალი', go: 'notifications', tags: ['შეტყობინ', 'notif'] },
  ];
  const TYPE_LABEL = { service: 'სერვისები', company: 'კომპანიები', team: 'გუნდები', order: 'ჩემი დაკვეთები', page: 'გვერდები' };

  const norm = s => String(s || '').toLowerCase().trim();
  const recent = {
    get() { try { const v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : DEMO_RECENT.slice(); } catch (e) { return DEMO_RECENT.slice(); } },
    set(list) { try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 6))); } catch (e) {} },
    add(q) { q = q.trim(); if (!q) return; this.set([q].concat(this.get().filter(x => norm(x) !== norm(q)))); },
    remove(q) { this.set(this.get().filter(x => x !== q)); },
  };

  // how well an item matches one query: title/sub text match counts most, then shared tags
  function score(item, q) {
    const nq = norm(q); if (!nq) return 0;
    const words = nq.split(/\s+/).filter(w => w.length > 1);
    const hay = norm(item.title + ' ' + item.sub);
    let s = hay.includes(nq) ? 5 : 0;
    words.forEach(w => {
      if (hay.includes(w)) s += 2;
      item.tags.forEach(t => { if (w.includes(t) || t.includes(w)) s += 1; });
    });
    return s;
  }
  const search = q => CATALOG.map(i => ({ i, s: score(i, q) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).map(x => x.i);
  // recommendations: items related to recent searches (newer searches weigh more), excluding exact title hits
  function recommend() {
    const r = recent.get(); const totals = new Map(); const because = new Map();
    const searched = new Set(r.map(norm));
    r.forEach((q, idx) => CATALOG.forEach(i => {
      const s = score(i, q); if (!s || searched.has(norm(i.title))) return;
      const w = s * (r.length - idx);
      totals.set(i, (totals.get(i) || 0) + w);
      if (!because.has(i) || because.get(i).w < w) because.set(i, { q, w });
    }));
    const list = [...totals.entries()].sort((a, b) => b[1] - a[1]).map(e => e[0]);
    if (!list.length) return CATALOG.filter(i => i.type === 'service').slice(0, 5).map(i => ({ i, why: '' }));
    return list.slice(0, 5).map(i => ({ i, why: 'რადგან ეძებდი „' + because.get(i).q + '“' }));
  }

  function open(item, q) {
    if (q) recent.add(q);
    if (item.type === 'service') {
      try { localStorage.setItem('fib.briefPrefill', JSON.stringify('მინდა: ' + item.title + '. ')); } catch (e) {}
      location.href = 'brief-start.html';
    } else location.href = item.go + '.html';
  }

  // ---------- UI ----------
  const css = `
  #fib-search{position:fixed;inset:0;z-index:10001;background:rgba(2,10,18,.6);backdrop-filter:blur(6px);display:none}
  #fib-search.open{display:block}
  #fib-search .sheet{position:absolute;inset:0;max-width:480px;margin:0 auto;background:#041421;color:#e2e8f0;display:flex;flex-direction:column;font-family:"Noto Sans Georgian","Plus Jakarta Sans",sans-serif;animation:fibIn .18s ease-out}
  @keyframes fibIn{from{transform:translateY(-12px);opacity:0}to{transform:none;opacity:1}}
  #fib-search .bar{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #16324a}
  #fib-search .field{flex:1;display:flex;align-items:center;gap:8px;background:#0b1f2e;border:1px solid #16324a;border-radius:14px;padding:0 12px;height:46px}
  #fib-search .field:focus-within{border-color:#12A870}
  #fib-search input{flex:1;background:transparent;border:0;outline:0;color:#fff;font:400 15px/1 inherit;font-family:inherit;min-width:0}
  #fib-search input::placeholder{color:#64748b}
  #fib-search .cancel{background:none;border:0;color:#8BFAC1;font:600 14px inherit;font-family:inherit;cursor:pointer;padding:8px 2px}
  #fib-search .body{flex:1;overflow:auto;padding:8px 16px 32px}
  #fib-search h3{display:flex;justify-content:space-between;align-items:center;margin:18px 0 10px;font-size:13px;font-weight:700;color:#94a3b8;letter-spacing:.02em}
  #fib-search h3 button{background:none;border:0;color:#8BFAC1;font:600 12px inherit;font-family:inherit;cursor:pointer}
  #fib-search .chips{display:flex;flex-wrap:wrap;gap:8px}
  #fib-search .chip{display:inline-flex;align-items:center;gap:6px;padding:7px 8px 7px 12px;border-radius:999px;background:#0b1f2e;border:1px solid #16324a;color:#e2e8f0;font:500 13px inherit;font-family:inherit;cursor:pointer}
  #fib-search .chip:hover{border-color:#12A870}
  #fib-search .chip .x{font-size:16px;color:#64748b;border-radius:50%;padding:0 2px}
  #fib-search .chip .x:hover{color:#fff}
  #fib-search .item{display:flex;align-items:center;gap:12px;width:100%;padding:10px;border-radius:14px;background:none;border:0;color:inherit;text-align:left;cursor:pointer;font-family:inherit}
  #fib-search .item:hover,#fib-search .item:focus-visible{background:#0b1f2e;outline:none}
  #fib-search .ic{width:40px;height:40px;flex:none;border-radius:12px;background:rgba(18,168,112,.14);color:#8BFAC1;display:flex;align-items:center;justify-content:center}
  #fib-search .t{font-size:14px;font-weight:600;color:#fff}
  #fib-search .s{font-size:12px;color:#94a3b8;margin-top:2px}
  #fib-search .why{font-size:11px;color:#12A870;margin-top:3px}
  #fib-search .go{margin-left:auto;color:#475569}
  #fib-search .empty{text-align:center;padding:36px 12px;color:#94a3b8;font-size:14px}
  #fib-search .cta{margin-top:14px;display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:12px;border:0;background:#12A870;color:#041421;font:700 14px inherit;font-family:inherit;cursor:pointer}
  `;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = n => `<span class="material-symbols-outlined" style="font-size:20px">${n}</span>`;

  let root, input, body;
  function build() {
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    root = document.createElement('div');
    root.id = 'fib-search';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'ძიება');
    root.innerHTML = `<div class="sheet"><div class="bar"><label class="field">${icon('search')}<input type="search" enterkeyhint="search" placeholder="სერვისი, კომპანია, დაკვეთა…" aria-label="ძიება"></label><button class="cancel" type="button">გაუქმება</button></div><div class="body"></div></div>`;
    document.body.appendChild(root);
    input = root.querySelector('input'); body = root.querySelector('.body');
    root.querySelector('.cancel').onclick = close;
    root.addEventListener('click', e => { if (e.target === root) close(); });
    input.addEventListener('input', render);
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
      if (e.key === 'Enter') { const q = input.value.trim(); if (!q) return; recent.add(q); const first = search(q)[0]; if (first) open(first); else render(); }
    });
  }

  function row(item, q, why) {
    return `<button class="item" type="button" data-i="${CATALOG.indexOf(item)}" data-q="${esc(q || '')}"><span class="ic">${icon(item.icon)}</span><span><div class="t">${esc(item.title)}</div><div class="s">${esc(item.sub)}</div>${why ? `<div class="why">${esc(why)}</div>` : ''}</span><span class="go">${icon(item.type === 'service' ? 'auto_awesome' : 'chevron_right')}</span></button>`;
  }

  function render() {
    const q = input.value.trim();
    let html = '';
    if (!q) {
      const r = recent.get();
      if (r.length) html += `<h3>ბოლო ძიებები <button type="button" data-clear>გასუფთავება</button></h3><div class="chips">${r.map(x => `<span class="chip" role="button" tabindex="0" data-recent="${esc(x)}">${icon('history')}${esc(x)}<span class="x material-symbols-outlined" role="button" aria-label="წაშლა" data-del="${esc(x)}">close</span></span>`).join('')}</div>`;
      const recs = recommend();
      html += `<h3>${r.length ? 'შენთვის რეკომენდებული' : 'პოპულარული'}</h3>` + recs.map(x => row(x.i, '', x.why)).join('');
    } else {
      const res = search(q);
      if (!res.length) {
        html = `<div class="empty">„${esc(q)}“ — ვერაფერი მოიძებნა.<br>AI დაგეხმარება ამ მოთხოვნით ბრიფის შედგენაში.<br><button class="cta" type="button" data-brief="${esc(q)}">${icon('auto_awesome')} ბრიფის დაწყება</button></div>`;
      } else {
        const groups = {};
        res.forEach(i => (groups[i.type] = groups[i.type] || []).push(i));
        Object.keys(TYPE_LABEL).forEach(t => { if (groups[t]) html += `<h3>${TYPE_LABEL[t]}</h3>` + groups[t].map(i => row(i, q)).join(''); });
      }
    }
    body.innerHTML = html;
  }

  function onBodyClick(e) {
    const del = e.target.closest('[data-del]'); if (del) { e.stopPropagation(); recent.remove(del.dataset.del); render(); return; }
    if (e.target.closest('[data-clear]')) { recent.set([]); render(); return; }
    const chip = e.target.closest('[data-recent]'); if (chip) { input.value = chip.dataset.recent; render(); input.focus(); return; }
    const b = e.target.closest('[data-brief]'); if (b) { recent.add(b.dataset.brief); try { localStorage.setItem('fib.briefPrefill', JSON.stringify(b.dataset.brief)); } catch (x) {} location.href = 'brief-start.html'; return; }
    const it = e.target.closest('[data-i]'); if (it) open(CATALOG[+it.dataset.i], it.dataset.q);
  }

  function openSheet(prefill) {
    if (!root) { build(); body.addEventListener('click', onBodyClick); body.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('[data-recent]')) onBodyClick(e); }); }
    input.value = prefill || '';
    render();
    root.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 50);
  }
  function close() { root.classList.remove('open'); document.documentElement.style.overflow = ''; }

  // ---------- 🔍 button in the top bar ----------
  const header = document.querySelector('header');
  const rowEl = header && header.firstElementChild;
  const right = rowEl && rowEl.lastElementChild;
  if (right) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'ძიება');
    btn.dataset.fibWired = '1';
    btn.className = 'w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors';
    btn.innerHTML = icon('search').replace('font-size:20px', 'font-size:22px');
    btn.addEventListener('click', () => openSheet());
    right.insertBefore(btn, right.firstChild);
  }
  // an existing search box on the page (inbox) opens the same sheet
  document.querySelectorAll('main input[type="text"], main input[type="search"]').forEach(inp => {
    const box = inp.closest('div');
    if (!box || !/search/.test(box.textContent)) return;
    inp.readOnly = true;
    inp.addEventListener('focus', () => { inp.blur(); openSheet(); });
  });
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSheet(); } });

  window.FIBSearch = { open: openSheet, search, recommend };
})();
