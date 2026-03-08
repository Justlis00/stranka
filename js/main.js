/* js/main.js — lightweight progressive enhancements
   ─────────────────────────────────────────────────
   Features:
     · Sticky header shadow on scroll
     · Mobile hamburger toggle (with X animation)
     · Smooth-scroll for all anchor links
     · Active nav link highlight on scroll
     · Footer copyright year
   ─────────────────────────────────────────────────
   TODO: Add your own custom JS below the existing code
*/

document.addEventListener('DOMContentLoaded', function () {

  /* ── Footer year ─────────────────────────────── */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Sticky header shadow ────────────────────── */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile menu toggle ──────────────────────── */
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  function openMenu(open) {
    if (!btn || !nav) return;
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    // Animate bars into X
    var bars = btn.querySelectorAll('.bar');
    if (open) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    }
  }

  if (btn) {
    btn.addEventListener('click', function () {
      openMenu(btn.getAttribute('aria-expanded') !== 'true');
    });
  }

  /* ── Smooth scroll + close mobile nav on click ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = a.getAttribute('href');
      if (target && target.length > 1) {
        var el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          openMenu(false); // close mobile nav
        }
      }
    });
  });

  /* ── Active nav link on scroll ───────────────── */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks  = document.querySelectorAll('.nav a[href^="#"]');

  function setActiveLink() {
    var scrollY = window.scrollY + 120; // offset for sticky header
    var current = '';
    sections.forEach(function (s) {
      if (scrollY >= s.offsetTop) current = s.getAttribute('id');
    });
    navLinks.forEach(function (a) {
      a.style.color = '';
      a.style.fontWeight = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--clr-primary)';
        a.style.fontWeight = '600';
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

});
