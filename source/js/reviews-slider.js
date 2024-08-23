import { Width } from "./const.js";

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  watchSlidesProgress: true,
  slideFullyVisibleClass: 'reviews__item--visible',
  initialSlide: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

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
