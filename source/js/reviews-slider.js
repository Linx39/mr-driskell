import { Width } from "./const.js";


const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  watchSlidesProgress: true,
  slideFullyVisibleClass: 'reviews__item--visible',
  initialSlide: 1,
  // centerInsufficientSlides: true,
  centeredSlides: true,

  breakpoints: {
    [Width.TABLET]: {
      spaceBetween: -60,
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
  },

  navigation: {
    prevEl: '.reviews__slider-btn--prev',
    nextEl: '.reviews__slider-btn--next',
    disabledClass: 'arrow-btn--disabled',
  },
});
