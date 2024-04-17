import { toogleBlur, activateBlur, deactivateBlur } from "./blur.js";

const MAIN_NAV_CLASS = 'main-nav';
const MAIN_NAV_OPENED_CLASS = 'main-nav--opened';

const SITE_TOGGLE_CLASS = 'site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const mainNav = document.querySelector(`.${MAIN_NAV_CLASS}`)
const siteToogle = mainNav.querySelector(`.${SITE_TOGGLE_CLASS}`);

siteToogle.addEventListener('click', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_CLOSED_CLASS)) {
    siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
    siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS)
    activateBlur();
  } else {
    siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
    siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);
    deactivateBlur();
  }

  mainNav.classList.toggle(MAIN_NAV_OPENED_CLASS);
})
