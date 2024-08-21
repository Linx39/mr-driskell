import { Width } from "./const.js";

const initSwiper = () => {
  const productsSlider = new Swiper('.promo__products-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,

    breakpoints: {
      [Width.XS]: {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      [Width.MD]: {
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
      },
      [Width.XL]: {
        maxBackfaceHiddenSlides: 0,
      },
    },

    pagination: {
      el: '.promo__products-pagination',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
      lockClass: 'pagination--disabled',
    },
  });

  return productsSlider;
};

let isSliderInit = false;
let productsSlider = Swiper;

const setSliderMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

  if (!isDesktopWidth && !isSliderInit){
    productsSlider = initSwiper();
    isSliderInit = true;
  }

  if (isDesktopWidth && isSliderInit) {
    productsSlider.destroy();
    isSliderInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setSliderMode();
});

window.addEventListener("resize", () => {
  setSliderMode();
});
