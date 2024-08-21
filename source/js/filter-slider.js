import { Width } from "./const.js";

const filterSlider = new Swiper('.promo__filter-slider', {
  slidesPerView: 'auto',
  spaceBetween: 18,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,

  breakpoints: {
    [Width.MD]: {
      spaceBetween: 18,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
    },
    [Width.XL]: {
      spaceBetween: 46,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
  },
});
