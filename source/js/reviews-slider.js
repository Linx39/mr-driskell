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
  spaceBetween: 0,
  watchSlidesProgress: true,
  slideFullyVisibleClass: 'reviews__item--visible',
  initialSlide: 1,
  centeredSlides: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  // },

  breakpoints: {
    [Width.MD]: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
    },

    [Width.XXL]: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
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
