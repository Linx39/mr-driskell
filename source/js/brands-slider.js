import { Width } from "./const.js";

const brandsSlider = new Swiper('.brands__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centerInsufficientSlides: true,
  slidesOffsetBefore: -7,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    [Width.MD]: {
      slidesOffsetBefore: -19.5,
    },
    [Width.XL]: {
      slidesOffsetBefore: -19.5,
    }
  },

  navigation: {
    prevEl: '.brands__slider-btn--prev',
    nextEl: '.brands__slider-btn--next',
    disabledClass: 'arrow-btn--disabled',
  },
});
