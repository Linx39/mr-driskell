import { Width } from "./const.js";

const REVIEWS_CLASS = 'reviews';
const REVIEWS_NO_JS_CLASS = 'reviews--no-js';

const reviewsElement = document.querySelector(`.${REVIEWS_CLASS}`);

if (reviewsElement) {
  reviewsElement.classList.remove(REVIEWS_NO_JS_CLASS);
}

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  watchSlidesProgress: true,
  slideFullyVisibleClass: 'reviews__item--visible',
  initialSlide: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    [Width.TABLET]: {
      slidesPerView: 'auto',
      spaceBetween: -60,
      centeredSlides: true,
    },

    [Width.DESKTOP]: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },

  pagination: {
    el: '.reviews__pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--current',
    lockClass: 'pagination--disabled',
  },

  navigation: {
    prevEl: '.reviews__slider-btn--prev',
    nextEl: '.reviews__slider-btn--next',
    disabledClass: 'arrow-btn--disabled',
  },
});
