/* ═══════════════════════════════════════════════════════════════
   header.js — Spoločná hlavička pre všetky stránky
   ───────────────────────────────────────────────────────────────
   TODO: Zmeň nav položky tu — zmena sa prejaví na VŠETKÝCH stránkach
   TODO: Logo — zmeň src atribút
   TODO: Nav-CTA odkaz (Kontakt) — posledná položka v navItems
═══════════════════════════════════════════════════════════════ */

(function () {

  /* ── Nav položky — TODO: uprav podľa potreby ─────────────── */
  const navItems = [
    { label: 'Domov',           href: 'index.html#hero' },
    { label: 'Oblasti systému', href: 'index.html#features' },
    { label: 'Moduly',          href: 'index.html#services' },
    { label: 'O nás',           href: 'onas.html' },
    { label: 'Zákazníci',       href: 'index.html#testimonials' },
    { label: 'Partneri',        href: 'index.html#referencie' },
    { label: 'Verzie',          href: 'index.html#verzie' },
    { label: 'Kontakt',         href: 'kontakt.html', cta: true },
  ];

  /* ── Aktuálna stránka — zvýrazni aktívny odkaz ───────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── Zostav HTML hlavičky ─────────────────────────────────── */
  const navHTML = navItems.map(item => {
    const isActive = item.href.startsWith(currentPage);
    const cls = [
      item.cta    ? 'nav-cta'    : '',
      isActive && !item.cta ? 'nav-active' : '',
    ].filter(Boolean).join(' ');
    return `<li><a href="${item.href}"${cls ? ` class="${cls}"` : ''}>${item.label}</a></li>`;
  }).join('\n          ');

  const html = `
  <header class="site-header" id="site-header">
    <div class="container header-inner">

      <a class="logo" href="index.html">
        <img src="WebArat_LG_Horisontal.svg" alt="WebArat logo" height="28">
      </a>

      <button id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-label="Toggle navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav id="main-nav" class="nav" aria-label="Hlavná navigácia">
        <ul>
          <li class="nav-logo-item">
            <a href="index.html" aria-label="Domov — WebArat">
              <img src="WebArat_LG_Horisontal.svg" alt="WebArat logo" height="22">
            </a>
          </li>
          ${navHTML}
        </ul>
      </nav>

    </div>
  </header>`;

  /* ── Vlož pred <main> ─────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', html);

})();
