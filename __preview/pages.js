// Preview, all pages: 4-category Services menu (desktop + mobile), WhatsApp CTAs, optional image bands.
(function () {
  const IMG = '/__preview/images/ai/';
  // Owner-supplied AI images (docs/image-sources.md): '/path': ['file-basename', 'alt text FR', 'object-position'].
  const heroes = {
    '/formations': ['formation-atelier', 'Une formatrice présente des schémas sur un paperboard à un petit groupe de participants autour d’une table.', '50% 40%'],
    '/acceleration-entreprises': ['accompagnement', 'Une conseillère et un dirigeant étudient ensemble des documents imprimés autour d’une table de travail.', '50% 35%']
  };
  const ABOUT = null;
  const img = (file, alt, pos, sizes, w, h) =>
    `<img src="${IMG}${file}.webp" sizes="${sizes}" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async" style="object-position:${pos}">`;

  // WhatsApp — +213 542 99 93 01, confirmed by the owner 20/11/2026.
  const WA_HREF = 'https://wa.me/213542999301';
  const WA_ICON = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>';

  // Services menu: the 4 categories requested by the owner. Existing URLs only.
  const groups = [
    ['Prospection commerciale', [['Prospection B2B — Algérie et international', '/services/prospection-b2b'], ['Assistance commerciale', '/services/assistance-commerciale']]],
    ['Communication et présence digitale', [['Création de site web', '/services/site-web'], ['Réseaux sociaux et image de marque', '/services/community-management'], ['Publicité et campagnes sponsorisées', '/services/publicite-digitale']]],
    ['Digitalisation', [['Site web d’entreprise', '/services/site-web']]],   // no CRM page exists yet
    ['Formation et accompagnement', [['Formations', '/formations'], ['Programme d’Accélération', '/acceleration-entreprises']]]
  ];
  const resources = [['Tous les services', '/services'], ['Réalisations', '/realisations'], ['Blog', '/blog'], ['Événements', '/evenements']];
  // Desktop panel, from the owner's mockup (20/11/2026): intro + 4 category cards. Taglines are the owner's.
  const ICONS = {
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15 8a5 5 0 0 1 0 8"/><path d="M18 5a9 9 0 0 1 0 14"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>'
  };
  const tiles = [
    ['target', 'Prospection commerciale', 'Développez votre portefeuille client.', '/services/prospection-b2b'],
    ['megaphone', 'Communication digitale', 'Renforcez votre présence en ligne.', '/services/community-management'],
    ['laptop', 'Digitalisation', 'Simplifiez et optimisez vos process.', '/services/site-web'],
    ['cap', 'Formation et accompagnement', 'Montez en compétences et accélérez votre croissance.', '/formations']
  ];
  const svg = d => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const arrowSvg = svg('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>');
  const panelHtml = `
    <div class="ipm-intro">
      <p class="ipm-h">Nos services</p>
      <p class="ipm-sub">Des solutions concrètes pour développer votre activité.</p>
      <a class="ipm-all" href="/services">Tous les services ${arrowSvg}</a>
    </div>
    <ul class="ipm-tiles">${tiles.map(t => `<li><a href="${t[3]}"><span class="ipm-ico">${svg(ICONS[t[0]])}</span><span class="ipm-txt"><strong>${t[1]}</strong><span>${t[2]}</span></span><span class="ipm-go">${arrowSvg}</span></a></li>`).join('')}</ul>`;
  const groupsHtml = groups.map(g => `<div class="ipm-group"><p class="ipm-title">${g[0]}</p><ul>${g[1].map(l => `<li><a href="${l[1]}">${l[0]}</a></li>`).join('')}</ul></div>`).join('');
  const resHtml = resources.map(r => `<a href="${r[1]}">${r[0]}</a>`).join('');

  function desktopMenu() {
    const btn = document.querySelector('header nav button[aria-label="Ouvrir le menu Services"]');
    if (!btn || btn.dataset.ip) return;
    btn.dataset.ip = '1';
    // Hide the live Radix popup tied to this button (rendered in a portal).
    document.head.insertAdjacentHTML('beforeend', `<style>[data-radix-popper-content-wrapper]:has([aria-labelledby="${btn.id}"]){display:none!important}</style>`);
    const wrap = btn.closest('div.relative');
    wrap.classList.add('ipm-wrap');
    wrap.insertAdjacentHTML('beforeend', `<div class="ipm-panel" id="ipm-panel" hidden>${panelHtml}</div>`);
    const panel = wrap.querySelector('.ipm-panel');
    btn.setAttribute('aria-controls', 'ipm-panel');
    btn.setAttribute('aria-expanded', 'false');
    let t;
    const open = v => { clearTimeout(t); panel.hidden = !v; btn.setAttribute('aria-expanded', String(v)); wrap.classList.toggle('is-open', v); if (v) panel.style.top = (wrap.closest('header').getBoundingClientRect().bottom - 4) + 'px'; };
    // The live menu is a Radix dropdown (opens on pointerdown/keys): block it, open ours instead.
    ['pointerdown', 'mousedown'].forEach(ev => btn.addEventListener(ev, e => { e.preventDefault(); e.stopImmediatePropagation(); }, true));
    btn.addEventListener('click', e => { e.preventDefault(); e.stopImmediatePropagation(); open(true); }, true);
    btn.addEventListener('keydown', e => { if (['Enter', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); e.stopImmediatePropagation(); open(true); panel.querySelector('a').focus(); } }, true);
    wrap.addEventListener('mouseenter', () => open(true));
    wrap.addEventListener('mouseleave', () => { t = setTimeout(() => open(false), 150); });
    wrap.addEventListener('keydown', e => { if (e.key === 'Escape') { open(false); btn.focus(); } });
    wrap.addEventListener('focusout', e => { if (!wrap.contains(e.relatedTarget)) open(false); });
  }

  function mobileMenu() {
    const burger = document.querySelector('header button.xl\\:hidden');
    if (!burger || burger.dataset.ip) return;
    burger.dataset.ip = '1';
    burger.setAttribute('aria-label', 'Ouvrir le menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'ipm-drawer');
    document.body.insertAdjacentHTML('beforeend', `
      <div class="ipm-drawer" id="ipm-drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden>
        <div class="ipm-drawer-head"><a href="/" class="ipm-home">Accueil</a><button type="button" class="ipm-close" aria-label="Fermer le menu">×</button></div>
        <nav>
          <details open><summary>Services</summary>${groupsHtml}</details>
          <a class="ipm-top" href="/tarifs">Tarifs</a><a class="ipm-top" href="/a-propos">À propos</a><a class="ipm-top" href="/contact">Contact</a>
          <div class="ipm-res">${resHtml}</div>
        </nav>
        <div class="ipm-drawer-cta"><a class="ipm-cta" href="/contact">Diagnostic gratuit</a><a class="ipm-wa" href="${WA_HREF}" target="_blank" rel="noopener">${WA_ICON}WhatsApp</a></div>
      </div>`);
    const d = document.getElementById('ipm-drawer');
    const set = v => { d.hidden = !v; burger.setAttribute('aria-expanded', String(v)); document.documentElement.style.overflow = v ? 'hidden' : ''; if (v) d.querySelector('.ipm-close').focus(); else burger.focus(); };
    burger.addEventListener('click', e => { e.preventDefault(); e.stopImmediatePropagation(); set(true); }, true);
    d.querySelector('.ipm-close').addEventListener('click', () => set(false));
    d.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  function whatsapp() {
    if (!document.querySelector('.ip-wa-float'))
      document.body.insertAdjacentHTML('beforeend', `<a class="ip-wa-float" href="${WA_HREF}" target="_blank" rel="noopener" aria-label="Écrire à Incubia sur WhatsApp">${WA_ICON}<span>WhatsApp</span></a>`);
  }

  // Phone changed by the owner 20/11/2026 → 042 05 51 88. The site re-renders from its JS bundle,
  // so fix tel: links and their text after hydration too. WhatsApp links are untouched.
  function phone() {
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      if (a.getAttribute('href') !== 'tel:042055188') a.setAttribute('href', 'tel:042055188');
      const w = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
      for (let n; (n = w.nextNode());)
        if (/542\s?99\s?93\s?01/.test(n.nodeValue))
          n.nodeValue = n.nodeValue.replace(/\+213\s?(\(0\)\s?)?542\s?99\s?93\s?01/, '042 05 51 88');
    });
  }

  // ---------- À propos: rebuilt with the owner's inspiration (20/11/2026). All text comes from the live page. ----------
  const AI = '/__preview/images/ai/';
  const ic = d => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const ABOUT_ICONS = {
    'Prospection B2B': ICONS.target, 'Site Web': ICONS.laptop, 'Publicité Digitale': ICONS.megaphone,
    'Community Management': '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
    'Produit Digital': '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
    'Accompagnement PME': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>'
  };
  const ABOUT_LINKS = { 'Prospection B2B': '/services/prospection-b2b', 'Site Web': '/services/site-web', 'Publicité Digitale': '/services/publicite-digitale', 'Community Management': '/services/community-management', 'Produit Digital': '/services', 'Accompagnement PME': '/acceleration-entreprises' };
  const VALUE_ICONS = ['<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9Z"/>', '<path d="M12 21s-7-4.4-7-11a7 7 0 0 1 14 0c0 6.6-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>', '<path d="M8 12h8"/><path d="M3 12a5 5 0 0 1 5-5h2"/><path d="M21 12a5 5 0 0 1-5 5h-2"/><path d="M14 7h2a5 5 0 0 1 2 .4"/><path d="M10 17H8a5 5 0 0 1-2-.4"/>', '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>'];

  function aboutPage() {
    if (document.querySelector('.ipa')) return;
    const secs = [...document.querySelectorAll('main section')].filter(s => s.parentElement.closest('section') === null);
    const find = re => secs.find(s => re.test(s.innerText));
    const intro = find(/Qui Sommes-Nous/i), mission = find(/Positionnement/i), figures = find(/En Chiffres/i),
          values = find(/Ce qui nous guide/i), story = find(/Notre Histoire/i);
    if (!intro || !mission || !values || !story) return;
    // Description = the first <p> found in the nearest ancestor of the <h3> that contains one.
    const pairs = s => [...s.querySelectorAll('h3')].map(h => {
      let el = h.parentElement;
      while (el && el !== s && !el.querySelector('p')) el = el.parentElement;
      const p = el && [...el.querySelectorAll('p')].find(p => h.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING);
      return [h.textContent.trim(), p?.textContent.trim() || ''];
    });
    const services = pairs(intro).filter(p => ABOUT_LINKS[p[0]]);
    if (services.length < 6 || services.some(p => !p[1])) return;   // wait for hydration
    const lead = intro.querySelector('p')?.textContent.trim();
    const pillars = pairs(mission), vals = pairs(values), steps = pairs(story);
    const pillarTexts = pillars.map(p => p[1]);
    const mParas = [...mission.querySelectorAll('p')].map(p => p.textContent.trim()).filter(t => t.length > 60 && !pillarTexts.includes(t));
    const band = `<div class="ipa-band" aria-hidden="true"><div class="ipa-band-track">${[0, 1].map(() => services.map(s => `<span>${s[0]}</span><i>✳</i>`).join('')).join('')}</div></div>`;

    intro.insertAdjacentHTML('beforebegin', `
    <div class="ipa">
      <section class="ipa-hero" aria-labelledby="ipa-h1">
        <div class="ipa-wrap ipa-hero-grid">
          <div class="ipa-hero-copy">
            <p class="ipa-eyebrow"><span>//</span> Qui sommes-nous</p>
            <h1 id="ipa-h1">À propos d’<span>Incubia</span></h1>
            <p class="ipa-lead">${lead}</p>
            <div class="ipa-ctas"><a class="ipa-btn" href="/contact">Demander un diagnostic gratuit ${arrowSvg}</a><a class="ipa-link" href="/services">Voir tous les services</a></div>
          </div>
          <figure class="ipa-hero-media"><img src="${AI}accompagnement.webp" width="1536" height="1024" fetchpriority="high" alt="Une conseillère et un dirigeant étudient ensemble des documents autour d’une table de travail."></figure>
        </div>
      </section>
      <section class="ipa-mission" aria-labelledby="ipa-mission-t">
        <div class="ipa-wrap ipa-mission-grid">
          <div class="ipa-collage" aria-hidden="true">
            <img class="c1" src="${AI}formation-atelier.webp" alt="" loading="lazy">
            <img class="c2" src="${AI}teleprospection.webp" alt="" loading="lazy">
            <img class="c3" src="${AI}contenus-visuels.webp" alt="" loading="lazy">
            <img class="c4" src="${AI}reseaux-sociaux.webp" alt="" loading="lazy">
          </div>
          <div>
            <p class="ipa-eyebrow"><span>//</span> Positionnement</p>
            <h2 id="ipa-mission-t" class="ipa-h2">Notre <span>mission</span></h2>
            ${mParas.map(p => `<p class="ipa-p">${p}</p>`).join('')}
            <ul class="ipa-pillars">${pillars.map(p => `<li><strong>${p[0]}</strong><span>${p[1]}</span></li>`).join('')}</ul>
          </div>
        </div>
      </section>
      <section class="ipa-services" aria-labelledby="ipa-serv-t">
        <div class="ipa-wrap">
          <div class="ipa-head-row">
            <div><p class="ipa-eyebrow"><span>//</span> Nos services</p><h2 id="ipa-serv-t" class="ipa-h2">Ce que nous faisons <span>pour votre entreprise</span></h2></div>
            <a class="ipa-btn" href="/services">Tous les services ${arrowSvg}</a>
          </div>
          <ul class="ipa-cards">${services.map(s => `<li><a href="${ABOUT_LINKS[s[0]]}"><span class="ipa-ico">${ic(ABOUT_ICONS[s[0]])}</span><h3>${s[0]}</h3><p>${s[1]}</p><span class="ipa-more">En savoir plus ${arrowSvg}</span></a></li>`).join('')}</ul>
        </div>
      </section>
      <section class="ipa-story" aria-labelledby="ipa-story-t">
        <div class="ipa-wrap">
          <p class="ipa-eyebrow ipa-center"><span>//</span> Notre histoire</p>
          <h2 id="ipa-story-t" class="ipa-h2 ipa-center">Notre <span>parcours</span></h2>
          <ol class="ipa-steps">${steps.map((s, i) => `<li><span class="ipa-step-n"><b>${String(i + 1).padStart(2, '0')}</b></span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol>
        </div>
      </section>
      <section class="ipa-values" aria-labelledby="ipa-val-t">
        <div class="ipa-wrap">
          <p class="ipa-eyebrow"><span>//</span> Ce qui nous guide</p>
          <h2 id="ipa-val-t" class="ipa-h2">Nos <span>valeurs</span></h2>
          <ul class="ipa-vals">${vals.map((v, i) => `<li><span class="ipa-ico ipa-ico--soft">${ic(VALUE_ICONS[i % 4])}</span><h3>${v[0]}</h3><p>${v[1]}</p></li>`).join('')}</ul>
        </div>
      </section>
    </div>`);
    // The rebuilt blocks replace these live sections (figures are hidden until the owner confirms them).
    [intro, mission, figures, values, story].forEach(s => s && (s.style.display = 'none'));
  }

  function apply() {
    const path = location.pathname.replace(/\/$/, '') || '/';
    desktopMenu(); mobileMenu(); whatsapp(); phone();
    // Tarifs: restyle the existing offer cards (inspiration: centred pricing cards). Content untouched.
    if (path === '/tarifs') {
      const sec = [...document.querySelectorAll('main section')].find(s => s.querySelectorAll('article h3').length > 2);
      if (sec && !sec.classList.contains('ip-tarifs')) sec.classList.add('ip-tarifs');
    }
    const hero = heroes[path];
    if (hero && !document.querySelector('.ip-band')) {
      const h1 = document.querySelector('main section h1');
      const block = h1 && h1.closest('.text-center');
      if (block) block.insertAdjacentHTML('afterend',
        `<figure class="ip-band">${img(hero[0], hero[1], hero[2], '(min-width: 1140px) 1080px, calc(100vw - 32px)', 1600, 1067)}</figure>`);
    }
    if (path === '/a-propos') aboutPage();
    if (path === '/a-propos' && ABOUT) {
      const u = document.querySelector('img[src*="images.unsplash.com"]');
      if (u) u.outerHTML = img(ABOUT[0], ABOUT[1], '40% 40%', '(min-width: 640px) 320px, 100vw', 1600, 1067).replace('<img', '<img class="w-full h-full object-cover"');
    }
  }

  setTimeout(apply, 300);
  setInterval(apply, 1000);
})();

/* Horaires : le vendredi n'est plus travaillé (demande du propriétaire, 20/11/2026) */
(function () {
  function hideFriday() {
    document.querySelectorAll('span').forEach(s => {
      const t = s.textContent.trim();
      if (t === 'Vendredi' && s.parentElement) s.parentElement.style.display = 'none';
      if (t === 'Samedi - Dimanche') s.textContent = 'Vendredi - Dimanche';
    });
  }
  hideFriday();
  setInterval(hideFriday, 1000);
})();
