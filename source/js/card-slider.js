import { Width } from "./const.js";

const initCardSwiper = () => {
  const cardSlider = new Swiper('.card__slider', {
    slidesPerView: 1,

    pagination: {
      el: '.card__slider-pagination',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'card-pagination__btn',
      bulletActiveClass: 'card-pagination__btn--active',
    },
  });

  return cardSlider;
}

initCardSwiper();

// const cardSlidersElement = document.querySelectorAll('.card__slider');

// let cardSliders = [...cardSlidersElement].map(() => Swiper);
// console.log(cardSliders);

// let isCardSliderInit = false;

// const setCardSliderMode = () => {
//   const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

//   if (isDesktopWidth && !isCardSliderInit) {
//     cardSliders.forEach((card) => {
//       card = initCardSwiper();
//     }
//   );
//     isCardSliderInit = true;
//   }

//   if (!isDesktopWidth && isCardSliderInit){
//     cardSliders.forEach(card => {
//       card.destroy()
//     });
//     isCardSliderInit = false;
//   }
// };

// window.addEventListener("DOMContentLoaded", () => {
//   setCardSliderMode();
// });

// window.addEventListener("resize", () => {
//   setCardSliderMode();
// });

