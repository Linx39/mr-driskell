import { resetCatalogList } from "./catalog-toogle.js";
import { activateBlur, deactivateBlur } from "./blur.js";
import { isEscEvent } from "./utils.js";

const MODAL_CLASS = 'modal';
const MODAL_WRAPPER_CLASS ='modal__wrapper';
const MODAL_OPENED_CLASS = 'modal--opened';

const SITE_TOGGLE_CLASS = 'site-toggle';
const SITE_TOGGLE_CLOSED_CLASS = 'site-toggle--closed';
const SITE_TOGGLE_OPENED_CLASS = 'site-toggle--opened';

const body = document.querySelector('.page__body');
const modal = document.querySelector(`.${MODAL_CLASS}`);
const modalWrapper = modal.querySelector(`.${MODAL_WRAPPER_CLASS}`);
const siteToogle = document.querySelector(`.${SITE_TOGGLE_CLASS}`);

const openModal = () => {
  const documentWidth = document.documentElement.clientWidth;
  const scrollYWidth = window.innerWidth - documentWidth;

  body.style.overflowY = 'hidden';
  body.style.marginRight = `${scrollYWidth}px`;

  siteToogle.classList.remove(SITE_TOGGLE_CLOSED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_OPENED_CLASS);

  modal.classList.add(MODAL_OPENED_CLASS);
  modal.style.marginRight = `${scrollYWidth}px`;

  document.addEventListener(`keydown`, onEscKeydown)
  document.addEventListener('click', onDocumentClick)
}

const closeModal = () => {
  body.removeAttribute('style');

  siteToogle.classList.remove(SITE_TOGGLE_OPENED_CLASS);
  siteToogle.classList.add(SITE_TOGGLE_CLOSED_CLASS);

  modal.classList.remove(MODAL_OPENED_CLASS);

  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const resetMainNav = () => {
  resetCatalogList();

  if (siteToogle.classList.contains(SITE_TOGGLE_OPENED_CLASS)) {
    closeModal();
  }

  deactivateBlur();
}

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    resetMainNav();
  }
}

const onDocumentClick = (evt) => {
  if (modal.contains(evt.target) && !modalWrapper.contains(evt.target)) {
    resetMainNav();
  }
}

siteToogle.addEventListener('click', () => {
  if (siteToogle.classList.contains(SITE_TOGGLE_CLOSED_CLASS)) {
    openModal();
    activateBlur();
    return;
  }

  resetMainNav();
})

// window.addEventListener('resize', () => {
//   resetMainNav();
// })
