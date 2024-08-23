import { Width } from "./const.js";

const initCardSwiper = () => {
  const cardSwiper = new Swiper('.card__slider', {
    slidesPerView: 1,

    pagination: {
      el: '.card__slider-pagination',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'card-pagination__btn',
      bulletActiveClass: 'card-pagination__btn--active',
    },
  });

  return cardSwiper;
}

let isCardSwiperInit = false;
let cardSwiper = Swiper;

const setCardSwiperMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

  if (isDesktopWidth && !isCardSwiperInit) {
    cardSwiper = initCardSwiper();
    isCardSwiperInit = true;
  }

  if (!isDesktopWidth && isCardSwiperInit){
    cardSwiper.forEach(swiper => {
      swiper.destroy();
    });
    isCardSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setCardSwiperMode();
});

window.addEventListener("resize", () => {
  setCardSwiperMode();
});

