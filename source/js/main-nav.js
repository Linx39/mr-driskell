const MAIN_NAV_CLASS = 'main-nav';
// const MAIN_NAV_CLOSED_CLASS = 'main-nav--closed';
const MAIN_NAV_OPENED_CLASS = 'main-nav--opened';

const SITE_TOGGLE_CLASS = 'site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const SITE_LIST_CLASS = 'site-list';
const SITE_LIST_DESKTOP_CLASS = 'site-list--desktop';

const mainNav = document.querySelector(`.${MAIN_NAV_CLASS}`)
const siteToogle = mainNav.querySelector(`.${SITE_TOGGLE_CLASS}`);
const siteList = mainNav.querySelector(`.${SITE_LIST_CLASS}`);


siteToogle.addEventListener('click', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_CLOSED_CLASS)) {
    siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
    siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS)
  } else {
    siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
    siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);
  }

  mainNav.classList.toggle(MAIN_NAV_OPENED_CLASS);

})
