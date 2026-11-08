// FIB client app — makes the Stitch screens work as one clickable prototype.
// Navigation between screens, form validation, OTP entry, simple chat replies and demo state (localStorage).
// Leaves each screen's own inline scripts (password eye, timers, modals, chips) untouched.
(function () {
  'use strict';
  const page = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');

  // ---------- state ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('fib.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('fib.' + k, JSON.stringify(v)); } catch (e) {} },
  };

  // ---------- helpers ----------
  const go = (slug, delay) => { const f = () => { location.href = slug + '.html'; }; delay ? setTimeout(f, delay) : f(); };
  const sameOriginReferrer = () => { try { return document.referrer && new URL(document.referrer).origin === location.origin && !/\/index\.html$|\/$/.test(new URL(document.referrer).pathname); } catch (e) { return false; } };
  const back = fallback => { if (sameOriginReferrer() && history.length > 1) history.back(); else go(fallback); };

  let toastTimer;
  function toast(msg, ok) {
    let el = document.getElementById('fib-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'fib-toast';
      el.setAttribute('role', 'status');
      el.style.cssText = 'position:fixed;left:50%;bottom:96px;transform:translateX(-50%) translateY(12px);z-index:10000;max-width:calc(100vw - 32px);padding:10px 16px;border-radius:12px;background:#0b1f2e;color:#e2e8f0;border:1px solid #16324a;box-shadow:0 8px 24px rgba(0,0,0,.45);font:600 13px/1.4 "Noto Sans Georgian","Plus Jakarta Sans",sans-serif;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;text-align:center';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.borderColor = ok === false ? '#b4534d' : ok ? '#12A870' : '#16324a';
    requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(12px)'; }, 2400);
  }

  function markError(input, on) {
    const box = input && (input.closest('div[class*="rounded"]') || input);
    if (!box) return;
    box.style.boxShadow = on ? '0 0 0 2px #ef4444' : '';
    if (on) input.addEventListener('input', () => { box.style.boxShadow = ''; }, { once: true });
  }

  function pickFile(onPick) {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.multiple = true;
    inp.onchange = () => { if (inp.files.length) onPick([...inp.files].map(f => f.name)); };
    inp.click();
  }

  // Clickable elements of the screen itself (not the prototype's floating screen navigation).
  const clickables = () => [...document.querySelectorAll('a, button, [role="button"]')]
    .filter(el => !el.closest('nav[aria-label="Screen navigation"]') && !el.closest('[aria-label="Show screen navigation"]'));

  function describe(el) {
    const icons = [...el.querySelectorAll('.material-symbols-outlined')].map(i => i.textContent.trim());
    let text = el.textContent;
    icons.forEach(ic => { text = text.replace(ic, ' '); });
    return { icons, text: text.replace(/\s+/g, ' ').trim() };
  }

  // Matchers: text starts with, text contains, icon present / icon-only
  const T = t => d => d.text === t || d.text.startsWith(t);
  const has = t => d => d.text.includes(t);
  const I = ic => d => d.icons.includes(ic) && !d.text;
  const IT = ic => d => d.icons.includes(ic);

  function on(match, handler, root) {
    let n = 0;
    clickables().forEach(el => {
      if (root && !el.closest(root)) return;
      if (el.dataset.fibWired) return;
      if (!match(describe(el), el)) return;
      el.dataset.fibWired = '1';
      n++;
      el.addEventListener('click', e => {
        const href = el.getAttribute('href');
        if (el.tagName === 'A' && (!href || href.startsWith('#'))) e.preventDefault();
        if (el.closest('form') && el.type !== 'button') e.preventDefault();
        handler(e, el);
      });
    });
    return n;
  }

  // Make a non-button block (card) clickable.
  function cardTo(containsText, handler) {
    const leaf = [...document.querySelectorAll('main *')].find(el => el.children.length === 0 && el.textContent.includes(containsText));
    if (!leaf) return;
    const card = leaf.closest('[class*="rounded-2xl"], [class*="rounded-xl"], li, article') || leaf;
    if (card.dataset.fibWired) return;
    card.dataset.fibWired = '1';
    card.style.cursor = 'pointer';
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.addEventListener('click', e => { if (e.target.closest('a, button')) return; handler(e, card); });
    card.addEventListener('keydown', e => { if (e.key === 'Enter') handler(e, card); });
  }

  // ---------- chat with the FIB assistant (ready-made answers from assets/fib-bot.js) ----------
  (function loadBot() {
    if (window.FIBBot) return;
    const s = document.createElement('script');
    s.src = '../assets/fib-bot.js';
    document.head.appendChild(s);
  })();
  const botAnswer = q => (window.FIBBot ? window.FIBBot.answer(q) : 'ერთი წამით… სცადეთ კიდევ ერთხელ.');

  function bubble(text, mine) {
    const main = document.querySelector('main') || document.body;
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:flex-end;gap:8px;margin:10px 0;' + (mine ? 'justify-content:flex-end' : 'justify-content:flex-start');
    if (!mine) {
      const av = document.createElement('img');
      av.src = '../assets/logo.png';
      av.alt = 'FIB';
      av.style.cssText = 'width:28px;height:28px;object-fit:contain;flex:none';
      row.appendChild(av);
    }
    const b = document.createElement('div');
    b.textContent = text;
    b.style.cssText = 'max-width:80%;padding:10px 14px;border-radius:16px;font:400 14px/1.5 "Noto Sans Georgian","Plus Jakarta Sans",sans-serif;white-space:pre-line;' +
      (mine ? 'background:#12A870;color:#041421;border-bottom-right-radius:4px' : 'background:#0f2a3d;color:#e2e8f0;border:1px solid #16324a;border-bottom-left-radius:4px');
    row.appendChild(b);
    row._text = b;
    // Put messages above the composer (input + quick replies) when it sits inside the scrolling content.
    const inp = chatInput();
    let composer = null;
    if (inp && main.contains(inp)) {
      for (let a = inp.parentElement; a && a !== main; a = a.parentElement) {
        if (a.textContent.replace(/\s+/g, ' ').length < 400 && getComputedStyle(a).position !== 'fixed') composer = a; else break;
      }
    }
    if (composer && composer.parentElement) {
      const last = document.querySelectorAll('[data-fib-bubble]');
      const anchor = last.length ? last[last.length - 1].nextSibling : composer;
      composer.parentElement.insertBefore(row, last.length && last[last.length - 1].parentElement === composer.parentElement ? anchor : composer);
    } else main.appendChild(row);
    row.dataset.fibBubble = '1';
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return row;
  }
  function sendChat(text) {
    if (!text) { toast('დაწერე შეტყობინება'); return false; }
    bubble(text, true);
    const typing = bubble('FIB წერს…', false);
    typing._text.style.opacity = '.7';
    setTimeout(() => {
      typing._text.style.opacity = '';
      typing._text.textContent = botAnswer(text);
      typing.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 900);
    return true;
  }
  const chatInput = () => document.querySelector('input[type="text"]:not([readonly]), textarea');
  function wireChatSend(icons) {
    icons.forEach(ic => on(I(ic), () => { const inp = chatInput(); if (sendChat(inp && inp.value.trim())) inp.value = ''; }));
    const inp = chatInput();
    if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (sendChat(inp.value.trim())) inp.value = ''; } });
  }
  const chipToChat = match => on(match, (e, el) => sendChat(describe(el).text.replace(/^[„"“]|[„"“]$/g, '')));

  // ---------- personalise ----------
  const user = store.get('user', null);
  if (user && user.first && user.first !== 'გიორგი') {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    // Only greetings addressed to the client — other people in chats can also be called "გიორგი".
    const greet = /(გამარჯობა,?\s*|მოგესალმებით,?\s*)გიორგი/g;
    let node; while ((node = walker.nextNode())) if (greet.test(node.nodeValue)) { greet.lastIndex = 0; node.nodeValue = node.nodeValue.replace(greet, '$1' + user.first); }
  }

  // ---------- shared chrome (all app screens) ----------
  // Bottom tab bar
  document.querySelectorAll('nav').forEach(nav => {
    if (nav.getAttribute('aria-label') === 'Screen navigation') return;
    if (!/fixed/.test(nav.className) || !/bottom-0/.test(nav.className)) return;
    nav.dataset.fibTabbar = '1';
  });
  on(d => d.text === 'ინფო', () => go('home'), '[data-fib-tabbar]');
  on(d => d.text === 'პროგრესი', () => go('my-orders'), '[data-fib-tabbar]');
  on(d => d.icons.includes('auto_awesome'), () => go('brief-start'), '[data-fib-tabbar]');
  document.querySelectorAll('[data-path="info"]').forEach(a => { a.dataset.fibWired = '1'; a.onclick = e => { e.preventDefault(); go('home'); }; });
  document.querySelectorAll('[data-path="fib-ai"]').forEach(a => { a.dataset.fibWired = '1'; a.onclick = e => { e.preventDefault(); go('brief-start'); }; });
  document.querySelectorAll('[data-path="progress"]').forEach(a => { a.dataset.fibWired = '1'; a.onclick = e => { e.preventDefault(); go('my-orders'); }; });

  // Top section tabs on the "Info" area
  if (['home', 'inbox', 'notifications'].includes(page)) {
    on(T('მიმოხილვა'), () => page !== 'home' && go('home'));
    on(T('ჩატები'), () => page !== 'inbox' && go('inbox'));
    on(T('შეტყობინებები'), () => page !== 'notifications' && go('notifications'));
  }
  if (page !== 'notifications') on(I('notifications'), () => go('notifications'));

  // ---------- per-screen behaviour ----------
  const screens = {
    splash() {
      const next = () => go(store.get('user', null) ? 'log-in' : 'sign-up');
      const t = setTimeout(next, 2600);
      document.body.style.cursor = 'pointer';
      document.body.addEventListener('click', e => { if (e.target.closest('nav[aria-label="Screen navigation"], [aria-label="Show screen navigation"]')) return; clearTimeout(t); next(); });
    },

    'sign-up'() {
      on(I('arrow_back'), () => back('splash'));
      on(T('შესვლა'), () => go('log-in'));
      on(has('Google'), () => { store.set('user', { first: 'გიორგი', name: 'გიორგი ბერიძე', contact: 'Google' }); toast('Google ანგარიშით შესვლა (დემო)', true); go('home', 900); });
      on(T('წესებსა'), () => toast('მომსახურების წესები — დემო ვერსიაში ტექსტი არ არის'));
      on(T('კონფიდენციალურობის'), () => toast('კონფიდენციალურობის პოლიტიკა — დემო ვერსია'));
      const $ = id => document.getElementById(id);
      const submit = () => {
        const name = $('fullName'), contact = $('phoneOrEmail'), pw = $('password'), pw2 = $('confirmPassword'), terms = $('termsCheckbox');
        [name, contact, pw, pw2].forEach(i => markError(i, false));
        if (!name || name.value.trim().length < 2) { markError(name, true); return toast('შეიყვანე სახელი და გვარი', false); }
        const c = contact.value.trim();
        if (!/^\+?[\d\s]{9,}$/.test(c) && !/^\S+@\S+\.\S+$/.test(c)) { markError(contact, true); return toast('შეიყვანე სწორი ტელეფონი ან ელფოსტა', false); }
        if (pw.value.length < 6) { markError(pw, true); return toast('პაროლი მინიმუმ 6 სიმბოლო უნდა იყოს', false); }
        if (pw.value !== pw2.value) { markError(pw2, true); return toast('პაროლები არ ემთხვევა', false); }
        if (terms && !terms.checked) return toast('დაეთანხმე წესებს და პირობებს', false);
        const full = name.value.trim();
        store.set('user', { first: full.split(/\s+/)[0], name: full, contact: c });
        go('verification');
      };
      on(T('რეგისტრაცია'), submit);
      document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); submit(); }));
    },

    'log-in'() {
      on(I('arrow_back'), () => back('splash'));
      on(T('დაგავიწყდა პაროლი'), () => toast('პაროლის აღდგენის ბმული გამოგეგზავნა (დემო)', true));
      on(has('Google'), () => { if (!user) store.set('user', { first: 'გიორგი', name: 'გიორგი ბერიძე', contact: 'Google' }); go('home'); });
      on(T('დარეგისტრირდი'), () => go('sign-up'));
      const id = document.getElementById('login-identifier'), pw = document.getElementById('login-password');
      if (user && id && !id.value) id.value = user.contact || '';
      const submit = () => {
        markError(id, false); markError(pw, false);
        if (!id.value.trim()) { markError(id, true); return toast('შეიყვანე ელფოსტა ან ტელეფონი', false); }
        if (!pw.value) { markError(pw, true); return toast('შეიყვანე პაროლი', false); }
        if (!user) store.set('user', { first: 'გიორგი', name: 'გიორგი', contact: id.value.trim() });
        store.set('session', true);
        go('home');
      };
      on(T('შესვლა'), submit);
      document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); submit(); }));
      [id, pw].forEach(i => i && i.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); }));
    },

    verification() {
      on(I('arrow_back'), () => back('sign-up'));
      const input = document.getElementById('otp-native-input');
      const boxes = [...document.querySelectorAll('.otp-box')];
      const BOX = 'otp-box w-12 h-14 rounded-xl flex items-center justify-center select-none cursor-pointer transition-all ';
      const render = () => {
        const v = (input.value || '').replace(/\D/g, '').slice(0, 6);
        input.value = v;
        boxes.forEach((b, i) => {
          const active = i === v.length;
          b.className = BOX + (active ? 'bg-surface-container-high shadow-lg' : 'bg-surface-container shadow-sm');
          b.innerHTML = i < v.length ? `<span class="font-headline-md text-headline-md text-on-surface font-bold">${v[i]}</span>`
            : active ? '<span class="w-2.5 h-6 rounded-full bg-primary animate-pulse"></span>' : '<span class="w-2 h-2 rounded-full bg-outline-variant"></span>';
        });
      };
      if (input) {
        input.value = '';
        input.addEventListener('input', render);
        // keep typing working even if the hidden input lost focus
        document.addEventListener('keydown', e => {
          if (document.activeElement === input) return;
          if (/^\d$/.test(e.key) && input.value.length < 6) { input.value += e.key; render(); }
          else if (e.key === 'Backspace') { input.value = input.value.slice(0, -1); render(); }
        });
        boxes.forEach(b => b.addEventListener('click', () => input.focus()));
        render();
        setTimeout(() => input.focus(), 300);
      }
      if (user && user.contact && /\d{4,}/.test(user.contact)) {
        const masked = [...document.querySelectorAll('span')].find(s => /\+995/.test(s.textContent) && s.children.length === 0);
        if (masked) { const d = user.contact.replace(/\D/g, ''); masked.textContent = '+995 ' + d.slice(-9, -8) + '•• ••• •' + d.slice(-2); }
      }
      on(T('ხელახლა გაგზავნა'), () => { if (input) { input.value = ''; render(); input.focus(); } toast('ახალი კოდი გამოგზავნილია', true); });
      on(T('დადასტურება'), () => {
        if (!input || input.value.length < 6) return toast('შეიყვანე 6-ნიშნა კოდი', false);
        store.set('session', true);
        toast('ტელეფონი დადასტურებულია', true);
        go('home', 700);
      });
    },

    home() {
      on(T('ყველა'), () => go('my-orders'));
      cardTo('ახალი პროექტი AI-სთან', () => go('brief-start'));
      cardTo('დააგენერირე დეტალური ბრიფი', () => go('brief-start'));
    },

    inbox() {
      on(T('დაწყება'), () => go('brief-start'));
      on(T('AI ასისტენტი'), () => go('brief-start'));
      on(I('mic'), () => toast('ხმოვანი ძიება — დემო'));
      cardTo('3 ახალი შეთავაზება', () => go('ai-offers'));
      cardTo('Studio Apex', () => go('ai-negotiation'));
      const groups = ['ყველა', 'კომპანიები', 'გუნდები'];
      groups.forEach(g => on(d => d.text === g, (e, el) => {
        const sib = [...el.parentElement.children];
        const activeCls = (sib.find(s => s !== el && /bg-primary/.test(s.className)) || {}).className;
        if (activeCls) { const mine = el.className; sib.forEach(s => { if (s.className === activeCls) s.className = mine; }); el.className = activeCls; }
      }));
    },

    notifications() {
      on(T('ყველას წაკითხვა'), () => {
        document.querySelectorAll('main [class*="bg-primary"][class*="rounded-full"][class*="w-2"]').forEach(dot => dot.remove());
        toast('ყველა შეტყობინება წაკითხულია', true);
      });
      on(T('შეთავაზების ნახვა'), () => go('ai-offers'));
      on(I('close'), (e, el) => { const card = el.closest('[class*="rounded-2xl"], [class*="rounded-xl"]'); if (card) { card.style.transition = 'opacity .2s'; card.style.opacity = '0'; setTimeout(() => card.remove(), 200); } });
    },

    'brief-start'() {
      const input = document.getElementById('ai-prompt-input') || chatInput();
      // text handed over from search ("ბრიფის დაწყება" / a service result)
      const prefill = store.get('briefPrefill', null);
      if (prefill && input) { input.value = prefill; try { localStorage.removeItem('fib.briefPrefill'); } catch (e) {} setTimeout(() => { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }, 100); }
      const next = () => {
        const v = input && input.value.trim();
        if (!v) { if (input) input.focus(); return toast('აღწერე პროექტი ან აირჩიე კატეგორია', false); }
        store.set('brief', { prompt: v, at: Date.now() });
        go('brief-progress');
      };
      on(T('გაგრძელება'), next);
      on(I('arrow_upward'), next);
      if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); next(); } });
      on(T('გახსნა'), () => go('brief-summary'));
      on(T('ყველა'), () => go('my-orders'));
      on(I('history'), () => go('my-orders'));
      on(I('refresh'), () => { if (input) { input.value = ''; input.focus(); } });
      on(I('attach_file'), () => pickFile(n => toast('მიმაგრდა: ' + n.join(', '), true)));
      on(I('mic'), () => toast('ხმოვანი შეტყობინება — დემო'));
      on(I('tune'), () => toast('AI პარამეტრები — დემო'));
    },

    'brief-progress'() {
      on(I('arrow_upward'), () => go('brief-summary'));
      on(I('attach_file'), () => pickFile(n => toast('მიმაგრდა: ' + n.join(', '), true)));
      on(I('mic'), () => toast('ხმოვანი შეტყობინება — დემო'));
      const inp = chatInput();
      if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') go('brief-summary'); });
    },

    'brief-summary'() {
      on(T('დადასტურება და გაგზავნა'), () => { toast('ბრიფი დადასტურდა', true); go('execution-mode', 600); });
      on(T('რედაქტირება'), () => go('brief-progress'));
      wireChatSend(['arrow_upward']);
    },

    'execution-mode'() {
      on(T('არჩევა: გუნდი'), () => { store.set('mode', 'team'); go('ai-offers'); });
      on(T('არჩევა: კომპანია'), () => { store.set('mode', 'company'); go('ai-offers'); });
      on(T('ორივეს ნახვა'), () => { store.set('mode', 'both'); go('ai-offers'); });
      on(I('attach_file'), () => pickFile(n => toast('მიმაგრდა: ' + n.join(', '), true)));
      on(I('mic'), () => toast('ხმოვანი შეტყობინება — დემო'));
      wireChatSend(['send']);
    },

    'ai-offers'() {
      on(T('შეცვლა'), () => go('team-builder'));
      on(T('გუნდთან საუბარი'), () => go('team-chat'));
      on(T('დეტალურად'), () => go('company-profile'));
      on(T('საუბრის დაწყება'), () => go('ai-negotiation'));
      wireChatSend(['arrow_upward']);
    },

    'company-profile'() {
      on(T('უკან'), () => back('ai-offers'));
      on(T('კონტრაქტის პროექტი'), () => go('final-offer'));
      on(T('საუბრის დაწყება'), () => go('ai-negotiation'));
      on(I('share'), () => { const url = location.href; if (navigator.share) navigator.share({ title: document.title, url }).catch(() => {}); else if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast('ბმული დაკოპირდა', true)); });
      on(I('bookmark'), (e, el) => { const ic = el.querySelector('.material-symbols-outlined'); const saved = ic.style.fontVariationSettings.includes("'FILL' 1"); ic.style.fontVariationSettings = saved ? '' : "'FILL' 1"; toast(saved ? 'ამოიშალა შენახულებიდან' : 'შენახულია', !saved); });
      on(T('ყველა ('), () => toast('ყველა ნამუშევარი — დემო'));
    },

    'team-builder'() {
      on(I('close'), () => back('ai-offers'));
      on(T('შენახვა და გუნდის განახლება'), () => { toast('გუნდი განახლდა', true); go('ai-offers', 800); });
    },

    'ai-negotiation'() {
      on(I('arrow_back_ios_new'), () => back('ai-offers'));
      on(T('ფასი მისაღებია'), () => { toast('AI ამზადებს საბოლოო შეთავაზებას…', true); go('final-offer', 900); });
      chipToChat(T('რა შედის'));
      chipToChat(T('შედის თუ არა'));
      on(T('ბრიფის მიბმა'), () => toast('ბრიფი მიებმა საუბარს', true));
      on(T('ბიუჯეტის ლიმიტი'), () => toast('ბიუჯეტის ლიმიტი: ₾6,800', true));
      on(T('NDA მოთხოვნა'), () => toast('NDA მოთხოვნა გაიგზავნა', true));
      on(I('add'), () => pickFile(n => toast('მიმაგრდა: ' + n.join(', '), true)));
      on(I('mic'), () => toast('ხმოვანი შეტყობინება — დემო'));
      on(I('auto_awesome'), () => toast('AI ამზადებს პასუხის მონახაზს…'), 'main');
      on(I('more_vert'), () => toast('საუბრის პარამეტრები — დემო'));
      wireChatSend(['send']);
      on(T('გაგვიზიარეთ სპრინტების გეგმა'), () => { const inp = chatInput(); if (sendChat((inp && inp.value.trim()) || 'გაგვიზიარეთ სპრინტების გეგმა') && inp) inp.value = ''; });
    },

    'final-offer'() {
      on(I('arrow_back_ios_new'), () => back('ai-negotiation'));
      on(T('მიღება'), () => { store.set('order', { id: 'ORD-8942', status: 'active', at: Date.now() }); go('order-created'); });
      on(T('მოთხოვნის გაგზავნა'), () => toast('ცვლილების მოთხოვნა გაეგზავნა კომპანიას', true));
      on(T('შეთავაზების უარყოფა'), () => { if (confirm('ნამდვილად უარყოფ ამ შეთავაზებას?')) { toast('შეთავაზება უარყოფილია'); go('ai-offers', 800); } });
      on(I('more_vert'), () => toast('შეთავაზების პარამეტრები — დემო'));
    },

    'order-created'() {
      on(I('arrow_back_ios_new'), () => go('home'));
      on(T('პროგრესის ნახვა'), () => go('order-detail'));
      on(T('ჩატში დაბრუნება'), () => go('team-chat'));
      on(I('more_vert'), () => toast('დაკვეთის პარამეტრები — დემო'));
    },

    'team-chat'() {
      on(I('arrow_back_ios_new'), () => back('order-detail'));
      on(T('გამოგვიგზავნეთ საბოლოო შეთავაზება'), () => go('final-offer'));
      chipToChat(d => d.icons.includes('send') && d.text.length > 2);
      ['დააზუსტეთ ტესტირების ვადა', 'ავანსის ოდენობა', 'NDA ხელშეკრულება', 'დედლაინი'].forEach(t => chipToChat(T(t)));
      on(I('download'), () => toast('ფაილი ჩამოიტვირთა (დემო)', true));
      on(I('attach_file'), () => pickFile(n => sendChat('📎 ' + n.join(', '))));
      on(I('mic'), () => toast('ხმოვანი შეტყობინება — დემო'));
      on(I('more_vert'), () => toast('ჩატის პარამეტრები — დემო'));
      wireChatSend(['arrow_upward']);
    },

    'my-orders'() {
      on(I('sort'), () => go('orders-filter'));
      on(I('tune'), () => go('orders-filter'));
      on(T('დეტალები'), () => go('order-detail'));
      on(T('შემოწმება'), () => go('media'));
      on(T('ახალი ბრიფი'), () => go('brief-start'));
      on(I('more_vert'), () => toast('დაკვეთის მენიუ — დემო'));
      cardTo('Fintech B2B', () => go('order-detail'));
      const tabs = ['ყველა', 'აქტიური', 'გუნდები', 'კომპანიები', 'განსახილველი'];
      tabs.forEach(t => on(T(t + ' ('), (e, el) => {
        const sib = [...el.parentElement.children];
        const activeCls = (sib.find(s => s !== el && /bg-primary/.test(s.className)) || {}).className;
        if (activeCls) { const mine = el.className; sib.forEach(s => { if (s.className === activeCls) s.className = mine; }); el.className = activeCls; }
      }));
    },

    'orders-filter'() {
      on(I('close'), () => back('my-orders'));
      on(T('ჩვენება'), () => go('my-orders'));
      on(T('გასუფთავება'), () => toast('ფილტრები გასუფთავდა', true));
    },

    'order-detail'() {
      on(T('დაკვეთები'), () => go('my-orders'));
      on(d => d.text === 'ჩატი', () => go('team-chat'));
      on(T('მედია'), () => go('media-stream'));
      on(T('ფაილები'), () => go('media-stream'));
      on(T('ბრიფის სრული ნახვა'), () => go('brief-summary'));
      on(T('ცვლილება'), () => go('final-offer'));
      on(T('ეტაპის დადასტურება'), () => { if (confirm('დაადასტურო ეტაპი? Escrow-დან თანხა გადაერიცხება გუნდს.')) toast('ეტაპი დადასტურდა — თანხა გადაირიცხა', true); });
      on(I('more_horiz'), () => toast('დაკვეთის მენიუ — დემო'));
    },

    media() {
      on(I('close'), () => back('media-stream'));
      ['🔥', '⏱️', '✨'].forEach(em => on(T(em), (e, el) => toast('რეაქცია გაიგზავნა: ' + describe(el).text, true)));
      on(T('კომენტარი'), () => { const inp = chatInput(); if (inp) inp.focus(); });
      on(T('დადასტურება'), () => toast('ნამუშევარი დადასტურდა', true));
      on(I('share'), () => toast('ბმული დაკოპირდა', true));
      on(I('download'), () => toast('ფაილი ჩამოიტვირთა (დემო)', true));
      wireChatSend(['send']);
    },

    'media-stream'() {
      on(I('arrow_back'), () => back('order-detail'));
      on(d => d.text === 'ინფო', () => go('order-detail'), 'main');
      on(d => d.text === 'ჩატი', () => go('team-chat'));
      on(I('visibility'), () => go('media'));
      on(I('download'), () => toast('ფაილი ჩამოიტვირთა (დემო)', true));
      on(T('ატვირთვა'), () => pickFile(n => toast('აიტვირთა: ' + n.join(', '), true)));
      on(T('ცვლილების მოთხოვნა'), () => toast('ცვლილების მოთხოვნა გაეგზავნა გუნდს', true));
      on(T('ეტაპის დადასტურება'), () => { if (confirm('დაადასტურო ეტაპი?')) toast('ეტაპი დადასტურდა ✓', true); });
    },
  };

  (screens[page] || (() => {}))();

  // Search (🔍 in the top bar) — screens with a header only
  if (document.querySelector('header')) {
    const s = document.createElement('script');
    s.src = '../assets/fib-search.js';
    document.body.appendChild(s);
  }

  // Any remaining "#" link would jump to the top: stop that.
  document.querySelectorAll('a[href="#"], a:not([href])').forEach(a => {
    if (a.dataset.fibWired || a.onclick) return;
    a.addEventListener('click', e => e.preventDefault());
  });
})();
