import { Width } from "./const.js";

const PROMO_CLASS = 'promo';
const PROMO_NO_JS_CLASS = 'promo--no-js';

const promoElement = document.querySelector(`.${PROMO_CLASS}`);

promoElement.classList.remove(PROMO_NO_JS_CLASS);

const initSwiper = () => {
  const filterSlider = new Swiper('.promo__filter-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 17.5,
    initialSlide: 2,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,

    breakpoints: {
      [Width.TABLET]: {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      [Width.DESKTOP]: {
        maxBackfaceHiddenSlides: 0,
      },
    },
  });

  return filterSlider;
};

let isSliderInit = false;
let filterSlider = Swiper;

const setSliderMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.DESKTOP}px)`).matches;

  if (!isDesktopWidth && !isSliderInit){
    filterSlider = initSwiper();
    isSliderInit = true;
  }

  if (isDesktopWidth && isSliderInit) {
    filterSlider.destroy();
    isSliderInit = false;
  }
};

window.addEventListener('load', () => {
  setSliderMode();
});

window.addEventListener('resize', () => {
  setSliderMode();
});



