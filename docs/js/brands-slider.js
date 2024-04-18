import { Width } from "./const.js";

const BRANDS_CLASS = 'brands';
const BRANDS_NO_JS_CLASS = 'brands--no-js';

const brandsElement = document.querySelector(`.${BRANDS_CLASS}`);

if (brandsElement) {
  brandsElement.classList.remove(BRANDS_NO_JS_CLASS);
}

const brandsSlider = new Swiper('.brands__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centerInsufficientSlides: true,
  slidesOffsetBefore: -7,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    [Width.TABLET]: {
      slidesOffsetBefore: -19.5,
    },
    [Width.DESKTOP]: {
      slidesOffsetBefore: -19.5,
    }
  },

  navigation: {
    prevEl: '.brands__slider-btn--prev',
    nextEl: '.brands__slider-btn--next',
    disabledClass: 'arrow-btn--disabled',
  },
});
