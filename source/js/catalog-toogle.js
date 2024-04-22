import { isEscEvent } from "./utils.js";

const CATALOG_TOGGLE_CLASS = 'main-nav__catalog-toggle';
const CATALOG_TOGGLE_CLOSED_CLASS = 'catalog-toggle--closed';
const CATALOG_TOGGLE_OPENED_CLASS = 'catalog-toggle--opened';

const CATALOG_CLASS = 'main-nav__catalog';
const CATALOG_OPENED_CLASS = 'main-nav__catalog--opened';

const catalogToogle = document.querySelector(`.${CATALOG_TOGGLE_CLASS}`);
const catalogList = document.querySelector(`.${CATALOG_CLASS}`);

const openCatalogList = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_CLOSED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_OPENED_CLASS);
  catalogList.classList.add(CATALOG_OPENED_CLASS);
  document.addEventListener(`keydown`, onEscKeydown)
  document.addEventListener('click', onDocumentClick);
}

export const closeCatalogList = () => {
  catalogToogle.classList.remove(CATALOG_TOGGLE_OPENED_CLASS);
  catalogToogle.classList.add(CATALOG_TOGGLE_CLOSED_CLASS);
  catalogList.classList.remove(CATALOG_OPENED_CLASS);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onDocumentClick);
}

export const resetCatalogList = () => {
  if (catalogToogle.classList.contains(CATALOG_TOGGLE_OPENED_CLASS)) {
    closeCatalogList();
  }
}

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    resetCatalogList();
  }
}

const isOutElementClick = (evt) => !catalogList.contains(evt.target) && !catalogToogle.contains(evt.target);

const onDocumentClick = (evt) => {
  if (isOutElementClick(evt)) {
    resetCatalogList();
  }
}

catalogToogle.addEventListener('click', () => {
  if (catalogToogle.classList.contains(CATALOG_TOGGLE_CLOSED_CLASS)) {
    openCatalogList();
    return;
  }

  closeCatalogList();
})
