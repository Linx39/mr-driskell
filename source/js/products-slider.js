import { Width } from "./const.js";

const PRODUCTS_SLIDER_CLASS = 'products-slider';
const PRODUCTS_SLIDER_NO_JS_CLASS = 'products-slider--no-js';

const productsSliderElement = document.querySelector(`.${PRODUCTS_SLIDER_CLASS}`);

productsSliderElement.classList.remove(PRODUCTS_SLIDER_NO_JS_CLASS);

const initSwiper = () => {
  const productsSlider = new Swiper('.products-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    // slidesPerGroup: 1,
    spaceBetween: 20,

    breakpoints: {
      [Width.XL]: {
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
