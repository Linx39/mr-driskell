import { Width } from "./const.js";

const initSwiper = () => {
  const cardsSlider = new Swiper('.promo__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    pagination: {
      el: '.pagination',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
    },

    breakpoints: {
      [Width.MOBILE]: {
        slidesPerView: 2,
        slidesPerGroup: 2,

      },

      [Width.TABLET]: {
        slidesPerView: 3,
        slidesPerGroup: 3,

      },
    }
  });

  return cardsSlider;
}

let isSliderInit = false;
let cardsSlider = Swiper;

const changeSliderMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.DESKTOP}px)`).matches;

  if (!isDesktopWidth && !isSliderInit){
    cardsSlider = initSwiper();
    isSliderInit = true;
  }

  if (isDesktopWidth && isSliderInit) {
    cardsSlider.destroy();
    isSliderInit = false;
  }

}

window.addEventListener('load', () => {
  changeSliderMode();
})

window.addEventListener('resize', () => {
  changeSliderMode();
})

