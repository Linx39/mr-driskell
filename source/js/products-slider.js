import { Width } from "./const.js";

const PRODUCTS_SLIDER_CLASS = 'products-slider';
const PRODUCTS_SLIDER_NO_JS_CLASS = 'products-slider--no-js';

const productsSliderElement = document.querySelector(`.${PRODUCTS_SLIDER_CLASS}`);

productsSliderElement.classList.remove(PRODUCTS_SLIDER_NO_JS_CLASS);

const initSwiper = () => {
  const productsSlider = new Swiper('.products-slider', {
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

      [Width.DESKTOP]: {
        maxBackfaceHiddenSlides: 0,
      },
    },

    pagination: {
      el: '.products-slider__pagination',
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
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.DESKTOP}px)`).matches;

  if (!isDesktopWidth && !isSliderInit){
    productsSlider = initSwiper();
    isSliderInit = true;
  }

  if (isDesktopWidth && isSliderInit) {
    productsSlider.destroy();
    isSliderInit = false;
  }
};

window.addEventListener('load', () => {
  setSliderMode();
});

window.addEventListener('resize', () => {
  setSliderMode();
});
