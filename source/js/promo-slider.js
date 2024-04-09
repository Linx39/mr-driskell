import { Width } from "./const.js";

const initSwiper = () => {
  const promoSlider = new Swiper('.promo__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    breakpoints: {
      [Width.MOBILE]: {
        slidesPerView: 2,
        slidesPerGroup: 2,

      },

      [Width.TABLET]: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    pagination: {
      el: '.promo__pagination',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
    },
  });

  return promoSlider;
};

let isSliderInit = false;
let promoSlider = Swiper;

const setSliderMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.DESKTOP}px)`).matches;

  if (!isDesktopWidth && !isSliderInit){
    promoSlider = initSwiper();
    isSliderInit = true;
  }

  if (isDesktopWidth && isSliderInit) {
    promoSlider.destroy();
    isSliderInit = false;
  }
};

window.addEventListener('load', () => {
  setSliderMode();
});

window.addEventListener('resize', () => {
  setSliderMode();
});
