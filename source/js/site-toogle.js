import { resetCatalogList } from "./catalog-toogle.js";
import { activateBlur, deactivateBlur } from "./blur.js";
import { isEscEvent } from "./utils.js";

const MAIN_NAV_BOTTOM_CLASS = 'main-nav__bottom';
const MAIN_NAV_BOTTOM_OPENED_CLASS = 'main-nav__bottom--opened';

const SITE_TOGGLE_CLASS = 'main-nav__site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const mainNavBottom = document.querySelector(`.${MAIN_NAV_BOTTOM_CLASS}`);
const siteToogle = document.querySelector(`.${SITE_TOGGLE_CLASS}`);

const openMainNavBottom = () => {
  siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS);
  mainNavBottom.classList.add(MAIN_NAV_BOTTOM_OPENED_CLASS);
  document.addEventListener(`keydown`, onEscKeydown)
  document.addEventListener('click', onDocumentClick)
}

const closeMainNavBottom = () => {
  siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);
  mainNavBottom.classList.remove(MAIN_NAV_BOTTOM_OPENED_CLASS);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const resetMainNav = () => {
  resetCatalogList();

  if (siteToogle.classList.contains(SITE_TOGGLE_OPENED_CLASS)) {
    closeMainNavBottom();
  }

  deactivateBlur();
}

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    resetMainNav();
  }
}

const isOutElementClick = (evt) => !mainNavBottom.contains(evt.target) && !siteToogle.contains(evt.target);

const onDocumentClick = (evt) => {
  if (isOutElementClick(evt)) {
    resetMainNav();
  }
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
