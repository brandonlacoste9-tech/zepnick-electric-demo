const i18n = { en: {"nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.faq": "FAQ", "nav.reviews": "Reviews", "nav.contact": "Contact"} };

document.addEventListener('DOMContentLoaded', function () {
  var dict = i18n[(document.documentElement.getAttribute('lang') || 'en').slice(0, 2)] || i18n.en || {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = dict[el.getAttribute('data-i18n')];
    if (typeof val === 'string') el.textContent = val;
  });
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }
});
