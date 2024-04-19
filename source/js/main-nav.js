import { activateBlur, deactivateBlur } from "./blur.js";

const MAIN_NAV_BOTTOM_CLASS = 'main-nav__bottom';
const MAIN_NAV_BOTTOM_OPENED_CLASS = 'main-nav__bottom--opened';

const SITE_TOGGLE_CLASS = 'main-nav__site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const CATALOG_TOGGLE_CLASS = 'main-nav__catalog-toggle';
const CATALOG_TOGGLE_CLOSED_CLASS = 'catalog-toggle--closed';
const CATALOG_TOGGLE_OPENED_CLASS = 'catalog-toggle--opened';

const CATALOG_CLASS = 'main-nav__catalog';
const CATALOG_OPENED_CLASS = 'main-nav__catalog--opened';

const catalogToogle = document.querySelector(`.${CATALOG_TOGGLE_CLASS}`);
const catalogList = document.querySelector(`.${CATALOG_CLASS}`)

const openCatalogList = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_CLOSED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_OPENED_CLASS);
  catalogList.classList.add(CATALOG_OPENED_CLASS);
}

const closeCatalogList = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_OPENED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_CLOSED_CLASS);
  catalogList.classList.remove(CATALOG_OPENED_CLASS);
}

catalogToogle.addEventListener('click', () => {
  if (catalogToogle.classList.contains(CATALOG_TOGGLE_CLOSED_CLASS)) {
    openCatalogList();
  } else {
    closeCatalogList();
  }
})

const mainNavBottom = document.querySelector(`.${MAIN_NAV_BOTTOM_CLASS}`);
const siteToogle = document.querySelector(`.${SITE_TOGGLE_CLASS}`);

const openMainNavBottom = () => {
  siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS);
  mainNavBottom.classList.add(MAIN_NAV_BOTTOM_OPENED_CLASS);
}

const closeMainNavBottom = () => {
  siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);
  mainNavBottom.classList.remove(MAIN_NAV_BOTTOM_OPENED_CLASS);
}

const resetMainNav = () => {
  if (catalogToogle.classList.contains(CATALOG_TOGGLE_OPENED_CLASS)) {
    closeCatalogList();
  }

  if (siteToogle.classList.contains(SITE_TOGGLE_OPENED_CLASS)) {
    closeMainNavBottom();
  }

  deactivateBlur();
}

siteToogle.addEventListener('click', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_CLOSED_CLASS)) {
    openMainNavBottom();
    activateBlur();
    return;
  }

  resetMainNav();
})

window.addEventListener('resize', () => {
  resetMainNav();
})
