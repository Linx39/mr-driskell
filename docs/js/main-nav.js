import { activateBlur, deactivateBlur } from "./blur.js";

const MAIN_NAV_CLASS = 'main-nav';
const MAIN_NAV_OPENED_CLASS = 'main-nav--opened';

const SITE_TOGGLE_CLASS = 'site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const CATALOG_TOGGLE_CLASS = 'main-nav__catalog-toggle';
const CATALOG_TOGGLE_CLOSED_CLASS = 'catalog-toggle--closed';
const CATALOG_TOGGLE_OPENED_CLASS = 'catalog-toggle--opened';

const CATALOG_CLASS = 'main-nav__catalog';
const CATALOG_OPENED_CLASS = 'main-nav__catalog--opened';

const mainNav = document.querySelector(`.${MAIN_NAV_CLASS}`)

const siteToogle = mainNav.querySelector(`.${SITE_TOGGLE_CLASS}`);

const activateSiteToogle = () => {
  siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS)
}

const deactivateSiteToogle = () => {
  siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);
}

siteToogle.addEventListener('click', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_CLOSED_CLASS)) {
    activateSiteToogle();
    activateBlur();
  } else {
    deactivateSiteToogle();
    deactivateBlur();
  }

  mainNav.classList.toggle(MAIN_NAV_OPENED_CLASS);
})

const catalogToogle = mainNav.querySelector(`.${CATALOG_TOGGLE_CLASS}`);
const catalogList = mainNav.querySelector(`.${CATALOG_CLASS}`)

const activateCatalogToogle = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_CLOSED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_OPENED_CLASS);
}

const deactivateCatalogToogle = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_OPENED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_CLOSED_CLASS);
}

catalogToogle.addEventListener('click', () => {
  if (catalogToogle.classList.contains(CATALOG_TOGGLE_CLOSED_CLASS)) {
    activateCatalogToogle();
  } else {
    deactivateCatalogToogle();
  }

  catalogList.classList.toggle(CATALOG_OPENED_CLASS);
})

document.addEventListener('resize', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_OPENED_CLASS)) {
    deactivateSiteToogle();
    mainNav.classList.remove(CATALOG_OPENED_CLASS);
  }

  if (catalogToogle.classList.contains(CATALOG_TOGGLE_OPENED_CLASS)) {
    deactivateCatalogToogle();
    catalogList.classList.remove(CATALOG_OPENED_CLASS);
  }
})
