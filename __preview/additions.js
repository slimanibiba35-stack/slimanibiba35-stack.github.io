// Homepage preview (round 2): prospecting hero + the 4 B2B service categories.
// Reuses live INCUBIA patterns only (see DESIGN-SYSTEM.md + CLAUDE.md). Copy in French.
(function () {
  const arrow = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  // WhatsApp +213 542 99 93 01 — confirmed by the owner 20/11/2026. No prefilled message.
  const WA = {
    href: 'https://wa.me/213542999301',
    icon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>'
  };

  // ALL copy below comes only from the owner's brief (service list). No invented descriptions.
  const steps = ['Prospection en Algérie et à l’international', 'Téléprospection B2B', 'Prise de rendez-vous', 'Suivi commercial'];

  // Owner-supplied AI images (see docs/image-sources.md).
  const IMG = '/__preview/images/ai/';
  // [colour key, category, title, text ('' = none), url of an existing page, image or null, alt]
  const cards = [
    ['blue', 'Prospection commerciale', 'Prospection en Algérie et à l’international', '', '/services/prospection-b2b', 'unsplash/prospection-international', 'Un homme participe à une visioconférence avec plusieurs interlocuteurs sur son ordinateur portable.'],
    ['blue', 'Prospection commerciale', 'Téléprospection B2B', '', '/services/prospection-b2b', 'teleprospection', 'Une conseillère en téléprospection avec un casque prend un appel devant son ordinateur portable.'],
    ['blue', 'Prospection commerciale', 'Prise de rendez-vous et suivi commercial', '', '/services/assistance-commerciale', 'accompagnement', 'Une conseillère et un dirigeant font le point sur des documents imprimés autour d’une table.'],
    ['violet', 'Communication et présence digitale', 'Création de site web', '', '/services/site-web', 'unsplash/site-web', 'Un designer dessine des maquettes d’écrans sur une tablette devant un grand moniteur.'],
    ['violet', 'Communication et présence digitale', 'Communication et gestion des réseaux sociaux', '', '/services/community-management', 'reseaux-sociaux', 'Une femme photographie une tasse en céramique avec son téléphone pour une publication sur les réseaux sociaux.'],
    ['violet', 'Communication et présence digitale', 'Publicité et campagnes boostées', '', '/services/publicite-digitale', 'unsplash/publicite', 'Une équipe organise des notes adhésives sur un grand plan imprimé pour préparer une campagne.'],
    ['violet', 'Communication et présence digitale', 'Image de marque et contenus visuels', '', '/services/community-management', 'contenus-visuels', 'Une graphiste compare des épreuves imprimées de visuels sur une grande table de travail.'],
    ['ink', 'Digitalisation', 'Site web d’entreprise, CRM et digitalisation des processus commerciaux', '', '/services', 'unsplash/digitalisation', 'Quatre collègues regardent ensemble un écran d’ordinateur portable autour d’une table de travail.'],
    ['green', 'Formation et accompagnement', 'Dirigeants et équipes commerciales', 'Techniques de vente, organisation, commercialisation.', '/formations', 'formation-vente', 'Un formateur explique un entonnoir de vente dessiné au tableau devant des participants qui lèvent la main.']
  ];

  const html = `
  <div data-incubia-preview>
    <section class="ip-hero" aria-labelledby="ip-hero-title">
      <div class="ip-container ip-hero-grid">
        <div class="ip-hero-copy">
          <span class="ip-pill">Prospection commerciale B2B</span>
          <h1 id="ip-hero-title" class="ip-h1">De nouveaux clients <span class="ip-grad">en Algérie <span class="ip-u">et à l’international<svg viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14c70-8 160-11 250-8 50 2 98 5 144 9"/></svg></span></span></h1>
          <p class="ip-lead">Incubia vous accompagne pour acquérir de nouveaux clients en Algérie ou à l’international.</p>
          <ul class="ip-chips" aria-label="Prospection commerciale">${steps.map(s => `<li>${s}</li>`).join('')}</ul>
          <div class="ip-ctas">
            <a class="ip-btn ip-btn--primary" href="/contact">Demander un diagnostic gratuit${arrow}</a>
            <a class="ip-btn ip-btn--outline ip-btn--wa" href="${WA.href}" target="_blank" rel="noopener">${WA.icon}Nous écrire sur WhatsApp</a>
          </div>
        </div>
        <div class="ip-stage">
        <figure class="ip-hero-media">
          <img src="${IMG}hero-teleprospecteur.webp" width="1536" height="1024" fetchpriority="high" decoding="async"
            alt="Un téléprospecteur équipé d’un casque suit un appel devant son écran d’ordinateur.">
        </figure>
        <svg width="0" height="0" style="position:absolute" aria-hidden="true">
          <symbol id="ipi-entreprise" viewBox="0 0 24 24"><path class="ipf" d="M4 9.5h16l-1.2-4.3a1 1 0 0 0-1-.7H6.2a1 1 0 0 0-1 .7z"/><path class="ips" d="M4 9.5h16M4.6 9.6c.2 1.5 1.3 2.4 2.6 2.4s2.3-.9 2.5-2.4c.2 1.5 1.2 2.4 2.4 2.4s2.2-.9 2.4-2.4c.2 1.5 1.2 2.4 2.5 2.4s2.4-.9 2.5-2.4M5.5 12v7.5h13V12M10 19.5v-4.2h4v4.2"/></symbol>
          <symbol id="ipi-prospection" viewBox="0 0 24 24"><path class="ips" d="M6.3 4.2 8.6 4c.5 0 .9.3 1 .7l.9 3.1c.1.4 0 .8-.3 1.1L8.9 10.1c1 2.2 2.8 4 5 5l1.2-1.3c.3-.3.7-.4 1.1-.3l3.1.9c.4.1.7.5.7 1l-.2 2.3c-.1.8-.8 1.4-1.6 1.3C11 18.5 5.5 13 5 5.8c0-.8.5-1.5 1.3-1.6z"/><circle class="ipf" cx="18" cy="5.8" r="2.3"/><path class="ips" d="M14.6 3.2c.9.3 1.7.9 2.2 1.7"/></symbol>
          <symbol id="ipi-communication" viewBox="0 0 24 24"><path class="ipf" d="M15.5 5.2v13.4L9 15.3V8.6z" opacity=".18"/><path class="ips" d="M4.5 9h4.4l6.6-3.8v13.6L8.9 15H4.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM7 15l1.3 4.3h2.3L9.6 15.4M18.4 9.2c.7.7 1.1 1.7 1.1 2.8s-.4 2-1.1 2.8"/><circle class="ipf" cx="20.6" cy="6.4" r="1.2"/></symbol>
          <symbol id="ipi-digitalisation" viewBox="0 0 24 24"><rect class="ips" x="3" y="4.5" width="18" height="14" rx="2"/><path class="ips" d="M3 8.3h18M6.5 15.2l3-3 2.3 2 3.7-3.8"/><circle class="ipf" cx="5.6" cy="6.4" r=".9"/><path class="ipf" d="M14.3 10.1l2.9-.6-.6 2.9z"/></symbol>
          <symbol id="ipi-formation" viewBox="0 0 24 24"><path class="ips" d="M5 4.5h10.5a1 1 0 0 1 1 1v14H6a1 1 0 0 1-1-1zM7.8 4.5v15M10.3 8.5h3.6M10.3 11h2.4m5.9-3.4 1.6 1.6"/><path class="ipf" d="m18.2 7.6 1.6 1.6-6.1 6.1-2.1.5.5-2.1z"/></symbol>
          <symbol id="ipi-clients" viewBox="0 0 24 24"><circle class="ips" cx="9" cy="8.5" r="3"/><path class="ips" d="M3.5 19c.4-3 2.6-5 5.5-5s5.1 2 5.5 5M15.6 14.2c2.4-.2 4.4 1.5 4.9 4.8"/><circle class="ipf" cx="16.8" cy="9.2" r="2.4"/></symbol>
          <symbol id="ipi-check" viewBox="0 0 24 24"><path d="m5 12.5 4.3 4.3L19 7.2" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
        </svg>
        <div class="ip-win" aria-hidden="true">
          <div class="ip-win-bar"><i></i><i></i><i></i><span>Plan de développement</span></div>
          <div class="ip-win-co"><svg class="ip-ic"><use href="#ipi-entreprise"/></svg><div><b>Votre entreprise</b><small>4 leviers activés avec Incubia</small></div></div>
          <ul class="ip-win-rows">${[['prospection','Prospection commerciale'],['communication','Communication digitale'],['digitalisation','Digitalisation'],['formation','Formation et accompagnement']].map(r => `<li><svg class="ip-ic"><use href="#ipi-${r[0]}"/></svg><span class="n">${r[1]}</span><span class="st"><span class="a">En préparation…</span><span class="b"><svg width="13" height="13"><use href="#ipi-check"/></svg>Lancé</span></span></li>`).join('')}</ul>
        </div>
        <svg class="ip-link" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M72 52 C 80 52, 82 46, 84 42" vector-effect="non-scaling-stroke"/></svg>
        <div class="ip-out" aria-hidden="true"><svg class="ip-ic"><use href="#ipi-clients"/></svg><div><b>Nouveaux clients</b><small>en Algérie et à l’international</small></div></div>
        </div>
      </div>
    </section>


    <!-- Stage 2: horizontal service rail driven by vertical scroll (reference: "card rail") -->
    <section class="ip-rows" aria-labelledby="ip-rows-title">
      <div class="ip-pin">
        <div class="ip-container ip-rows-head">
          <h2 id="ip-rows-title" class="ip-rows-title" data-split>Nos services</h2>
          <div class="ip-rows-meter" aria-hidden="true"><span class="ip-rows-count">01 / ${cards.length}</span><span class="ip-rows-track"><span></span></span></div>
        </div>
        <div class="ip-rail-viewport" role="region" aria-label="Services Incubia" tabindex="0">
          <ol class="ip-rail">
            ${cards.map((c, i) => `
            <li class="ip-card2 ip-${c[0]}${c[5] ? ' has-img' : ''}" style="--i:${i}">
              <a href="${c[4]}">
                ${c[5] ? `<span class="ip-card2-media"><img src="${c[5].includes('/') ? '/__preview/images/' + c[5] : IMG + c[5]}.webp" width="1200" height="900" loading="lazy" decoding="async" alt="${c[6]}"></span>` : ''}
                <span class="ip-card2-top"><span class="ip-card2-n">${String(i + 1).padStart(2, '0')}</span><span class="ip-card2-cat">${c[1]}</span></span>
                <span class="ip-card2-title">${c[2]}</span>
                ${c[3] ? `<span class="ip-card2-text">${c[3]}</span>` : ''}
                <span class="ip-card2-link">Découvrir ${arrow}</span>
              </a>
            </li>`).join('')}
          </ol>
        </div>
        <div class="ip-rail-nav ip-container">
          <button type="button" class="ip-rail-btn" data-dir="-1" aria-label="Service précédent">${arrow}</button>
          <button type="button" class="ip-rail-btn" data-dir="1" aria-label="Service suivant">${arrow}</button>
        </div>
      </div>
    </section>
  </div>`;

  function insert() {
    // The live site changes pages without reloading (Next.js), so this script keeps running
    // after the visitor leaves the homepage: only act on '/', and clean up anywhere else.
    const existing = document.querySelector('[data-incubia-preview]');
    if (location.pathname !== '/') {
      if (existing) { if (teardown) { teardown(); teardown = null; } existing.remove(); }
      return;
    }
    if (existing) return;
    const hero = document.querySelector('main section');
    if (!hero) return;
    hero.insertAdjacentHTML('beforebegin', html);
    hero.style.display = 'none'; // old hero replaced
    // The old "Trois Leviers" block is replaced by the 4-category section above.
    const old = [...document.querySelectorAll('main section h2')].find(h => /Trois Leviers/i.test(h.textContent));
    if (old) old.closest('section').style.display = 'none';
    initMotion(document.querySelector('[data-incubia-preview]'));
  }

  // ---------- Structure inspired by suzaliconseil.com (owner request 20/11/2026) ----------
  // Icons: only thin arrows (↗ for service links, → for actions), + for FAQ, numbers for steps.
  const ne = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  // Panels: owner's category taglines (Services menu mockup) + owner's service list. Existing URLs only.
  const poles = [
    ['dark', 'Prospection commerciale', 'Développez votre portefeuille client.', [['Prospection en Algérie et à l’international', '/services/prospection-b2b'], ['Téléprospection B2B', '/services/prospection-b2b'], ['Prise de rendez-vous et suivi commercial', '/services/assistance-commerciale']], ['Découvrir la prospection', '/services/prospection-b2b']],
    ['light', 'Communication digitale', 'Renforcez votre présence en ligne.', [['Création de site web', '/services/site-web'], ['Communication et gestion des réseaux sociaux', '/services/community-management'], ['Publicité et campagnes boostées', '/services/publicite-digitale'], ['Image de marque et contenus visuels', '/services/community-management']], ['Voir nos services digitaux', '/services']],
    ['light', 'Digitalisation', 'Simplifiez et optimisez vos process.', [['Site web d’entreprise', '/services/site-web'], ['CRM et processus commerciaux', '/services']], ['Tous les services', '/services']],
    ['light', 'Formation et accompagnement', 'Montez en compétences et accélérez votre croissance.', [['Dirigeants et équipes commerciales', '/formations'], ['Techniques de vente, organisation, commercialisation', '/formations'], ['Programme d’Accélération', '/acceleration-entreprises']], ['Voir les formations', '/formations']]
  ];
  const polesHtml = `
    <section class="ip-poles" aria-labelledby="ip-poles-title" data-ip-extra>
      <div class="ip-container">
        <div class="ip-split-head">
          <h2 id="ip-poles-title" class="ip-big">Nos pôles d’expertise</h2>
          <p>Prospection, communication digitale, digitalisation, formation et accompagnement.</p>
        </div>
        <div class="ip-poles-grid">
          ${poles.map(p => `
          <article class="ip-pole ip-pole--${p[0]}">
            <h3>${p[1]}</h3>
            <p class="ip-pole-sub">${p[2]}</p>
            <ul>${p[3].map(l => `<li><a href="${l[1]}"><span>${l[0]}</span>${ne}</a></li>`).join('')}</ul>
            <a class="ip-pole-cta" href="${p[4][1]}">${p[4][0]}${arrow}</a>
          </article>`).join('')}
        </div>
      </div>
    </section>`;

  // Rebuild two live sections with their own text (read from the page, so wording stays the site's).
  function liveSection(re) {
    return [...document.querySelectorAll('main section')].find(s => !s.closest('[data-incubia-preview]') && !s.hasAttribute('data-ip-extra') && re.test(s.querySelector('h2')?.textContent || ''));
  }
  const items = s => [...s.querySelectorAll('h3')].map(h => [h.textContent.trim(), (h.parentElement.querySelector('p') || h.nextElementSibling)?.textContent.trim() || '']);

  function buildExtras() {
    const root = document.querySelector('[data-incubia-preview]');
    if (!root || root.dataset.extras) return;
    const method = liveSection(/Comment On Travaille/i);
    const why = liveSection(/Pourquoi Choisir/i);
    if (!method || !why || items(method).some(i => !i[1])) return;   // wait until hydrated
    root.dataset.extras = '1';
    root.querySelector('.ip-rows').insertAdjacentHTML('afterend', polesHtml);

    const m = items(method);
    method.insertAdjacentHTML('beforebegin', `
      <section class="ip-method" aria-labelledby="ip-method-title" data-ip-extra>
        <div class="ip-container ip-method-grid">
          <div class="ip-method-head">
            <h2 id="ip-method-title" class="ip-big">Comment on travaille ensemble</h2>
            <a class="ip-btn ip-btn--primary" href="/contact">Demander un diagnostic gratuit${arrow}</a>
          </div>
          <ol class="ip-steps2">${m.map((it, i) => `<li><span class="ip-steps2-n" aria-hidden="true">${i + 1}</span><div><h3>${it[0]}</h3><p>${it[1]}</p></div></li>`).join('')}</ol>
        </div>
      </section>`);
    method.style.display = 'none';

    const w = items(why);
    why.insertAdjacentHTML('beforebegin', `
      <section class="ip-why" aria-labelledby="ip-why-title" data-ip-extra>
        <div class="ip-container">
          <h2 id="ip-why-title" class="ip-big">Pourquoi choisir Incubia ?</h2>
          <ul class="ip-why-rows">${w.map((it, i) => `<li><span class="ip-why-n">${String(i + 1).padStart(2, '0')}</span><h3>${it[0]}</h3><p>${it[1]}</p></li>`).join('')}</ul>
        </div>
      </section>`);
    why.style.display = 'none';
    document.getElementById('faq')?.classList.add('ip-faq');
  }
  setInterval(() => { if (location.pathname === '/') buildExtras(); }, 700);

  // ---------- Motion: one rAF-throttled scroll handler writing CSS custom properties ----------
  // Mechanics adapted from the reference (no animation library). Desktop + motion allowed only.
  let teardown = null;
  function initMotion(root) {
    if (teardown) teardown();
    const mq = matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
    const noMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const hero = root.querySelector('.ip-hero');
    const rows = root.querySelector('.ip-rows');
    const vp = rows.querySelector('.ip-rail-viewport');
    const rail = rows.querySelector('.ip-rail');
    const count = rows.querySelector('.ip-rows-count');
    const n = rail.children.length;
    const clamp = v => Math.min(1, Math.max(0, v));
    const prog = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };

    // Per-word split for reveals (38 ms stagger, as in the reference).
    root.querySelectorAll('[data-split]:not(.is-split)').forEach(el => {
      el.classList.add('is-split');
      el.setAttribute('aria-label', el.textContent);
      el.innerHTML = el.textContent.trim().split(/\s+/).map((w, i) =>
        `<span class="ipw" aria-hidden="true"><span style="--d:${i * 38}ms">${w}</span></span>`).join(' ');
    });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .3 });
    root.querySelectorAll('[data-split], .ip-card2').forEach(el => io.observe(el));
    // Hero photo is above the fold (and fully clipped, so IntersectionObserver can't see it): reveal on load.
    requestAnimationFrame(() => requestAnimationFrame(() => root.querySelector('.ip-hero-media').classList.add('is-in')));

    let raf = 0, overflow = 0;
    const measure = () => { overflow = Math.max(0, rail.scrollWidth - vp.clientWidth); };
    function frame() {
      raf = 0;
      const s = root.style;
      const ph = clamp(scrollY / (hero.offsetHeight || 1));       // hero: lift, shrink, fade on separate curves
      s.setProperty('--hero-y', `${-70 * ph}px`);
      s.setProperty('--hero-scale', 1 - .05 * ph * ph);
      s.setProperty('--hero-alpha', 1 - .7 * Math.pow(ph, 1.6));
      // (statement section removed at the owner's request, 20/11/2026)
      const pr = prog(rows);                                       // rail: translate by exactly its overflow
      s.setProperty('--rows-x', `${-overflow * pr}px`);
      s.setProperty('--rows-p', pr);
      count.textContent = `${String(Math.min(n, 1 + Math.round(pr * (n - 1)))).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const onResize = () => { measure(); onScroll(); };

    // Keyboard: focusing an off-screen card scrolls the page to the point where it is visible.
    const onFocus = e => {
      const li = e.target.closest('.ip-card2'); if (!li || !root.classList.contains('ip-motion')) return;
      const p = clamp((li.offsetLeft - 24) / (overflow || 1));
      const top = rows.getBoundingClientRect().top + scrollY + p * (rows.offsetHeight - innerHeight);
      scrollTo({ top, behavior: noMotion.matches ? 'auto' : 'smooth' });
    };
    // Prev/next buttons (touch / no-pin mode): scroll the rail by one card.
    const onBtn = e => {
      const b = e.target.closest('.ip-rail-btn'); if (!b) return;
      const step = rail.children[0].getBoundingClientRect().width + 16;
      vp.scrollBy({ left: step * +b.dataset.dir, behavior: noMotion.matches ? 'auto' : 'smooth' });
    };

    function setMode() {
      root.classList.toggle('ip-motion', mq.matches);
      if (mq.matches) { measure(); addEventListener('scroll', onScroll, { passive: true }); frame(); }
      else { removeEventListener('scroll', onScroll); ['--hero-y', '--hero-scale', '--hero-alpha', '--wipe', '--man-scale', '--rows-x'].forEach(p => root.style.removeProperty(p)); }
    }
    setMode();
    mq.addEventListener('change', setMode);
    addEventListener('resize', onResize);
    rail.addEventListener('focusin', onFocus);
    rows.addEventListener('click', onBtn);
    teardown = () => {   // cleanup of every listener/observer
      removeEventListener('scroll', onScroll); removeEventListener('resize', onResize);
      mq.removeEventListener('change', setMode); io.disconnect(); if (raf) cancelAnimationFrame(raf);
      rail.removeEventListener('focusin', onFocus); rows.removeEventListener('click', onBtn);
    };
  }

  setTimeout(insert, 350);
  setInterval(insert, 1000);
})();
