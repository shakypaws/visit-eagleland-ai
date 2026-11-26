// Visit Eagleland: mobile nav toggle only.
// The "js" class lets the CSS hide the nav on small screens only when
// JavaScript is running, so the nav is always visible without it.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
}
