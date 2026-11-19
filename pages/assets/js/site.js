const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
if (menuButton && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '開啟導覽選單');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? '開啟導覽選單' : '關閉導覽選單');
    siteNav.classList.toggle('open', !isOpen);
  });
  siteNav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
}
