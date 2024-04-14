import { Width } from "./const.js";

const PROMO_FILTER_CLASS = 'promo-filter';
const PROMO_FILTER_NO_JS_CLASS = 'promo-filter--no-js';

const promoFilterElement = document.querySelector(`.${PROMO_FILTER_CLASS}`);

if (promoFilterElement) {
  promoFilterElement.classList.remove(PROMO_FILTER_NO_JS_CLASS);
}

const promoFilterSlider = new Swiper('.promo-filter__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 18,
  initialSlide: 2,

  breakpoints: {
    [Width.DESKTOP]: {
      spaceBetween: 46,
    },
  }
});

