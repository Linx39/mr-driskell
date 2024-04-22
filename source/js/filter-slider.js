import { Width } from "./const.js";

const FILTER_SLIDER_CLASS = 'filter-slider';
const FILTER_SLIDER_NO_JS_CLASS = 'filter-slider--no-js';

const filterSliderElement = document.querySelector(`.${FILTER_SLIDER_CLASS}`);

filterSliderElement.classList.remove(FILTER_SLIDER_NO_JS_CLASS);

const initSwiper = () => {
  const filterSlider = new Swiper('.filter-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 18,
    initialSlide: 2,

    breakpoints: {
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
