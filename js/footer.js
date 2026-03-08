/* ═══════════════════════════════════════════════════════════════
   footer.js — Spoločná päta pre všetky stránky
   ───────────────────────────────────────────────────────────────
   TODO: Zmeň text, odkaz alebo sociálne siete tu —
         zmena sa prejaví na VŠETKÝCH stránkach naraz
═══════════════════════════════════════════════════════════════ */

(function () {

  const html = `
  <footer class="site-footer">
    <div class="container footer-inner">

      <!-- Stĺpec značky -->
      <div class="footer-col footer-brand">
        <a class="logo" href="index.html">
          <img src="WebArat_LG_Horisontal.svg" alt="WebArat logo" height="32">
        </a>
        <!-- TODO: Zmeň popis -->
        <p>Dodávame riešenia, ktoré skutočne fungujú. Od roku 2012.</p>
        <!-- TODO: Zmeň href na skutočné profily -->
        <div class="social-links">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Twitter / X">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3 4.89a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.19-6.53 12.19-12.19l-.01-.55A8.7 8.7 0 0 0 22.46 6z"/></svg>
          </a>
        </div>
      </div>

      <!-- Stĺpec Spoločnosť — TODO: zmeň položky a href -->
      <div class="footer-col">
        <h4>Spoločnosť</h4>
        <ul>
          <li><a href="onas.html">O nás</a></li>
          <li><a href="#">Kariéra</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <!-- Stĺpec Produkt -->
      <div class="footer-col">
        <h4>Produkt</h4>
        <ul>
          <li><a href="index.html#features">Oblasti systému</a></li>
          <li><a href="index.html#services">Moduly</a></li>
          <li><a href="index.html#pricing">Partneri</a></li>
        </ul>
      </div>

      <!-- Stĺpec Právne -->
      <div class="footer-col">
        <h4>Právne</h4>
        <ul>
          <li><a href="#">Ochrana súkromia</a></li>
          <li><a href="#">Obchodné podmienky</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="year"></span> WebArat. Všetky práva vyhradené.</p>
    </div>
  </footer>`;

  /* ── Vlož na koniec <body> ────────────────────────────────── */
  document.body.insertAdjacentHTML('beforeend', html);

})();
