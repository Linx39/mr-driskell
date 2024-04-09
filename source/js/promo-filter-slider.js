import { Width } from "./const.js";

const promoFilterSlider = new Swiper('.promo-filter__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 18,
  centerInsufficientSlides: true,
  initialSlide: 2,

  breakpoints: {
    [Width.DESKTOP]: {
      spaceBetween: 46,
    },
  }
});

