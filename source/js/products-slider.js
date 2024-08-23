import { Width } from "./const.js";

const initProductsSwiper = () => {
  const productsSwiper = new Swiper('.promo__products-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,

    breakpoints: {
      [Width.XS]: {
        slidesPerView: 'auto',
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      [Width.MD]: {
        slidesPerView: 'auto',
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
      },
    },

    pagination: {
      el: '.promo__products-pagination',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
      lockClass: 'pagination--disabled',
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
  });

  return productsSwiper;
};

let isProductsSwiperInit = false;
let productsSwiper = Swiper;

const setProductsSwiperMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

  if (!isDesktopWidth && !isProductsSwiperInit){
    productsSwiper = initProductsSwiper();
    isProductsSwiperInit = true;
  }

  if (isDesktopWidth && isProductsSwiperInit) {
    productsSwiper.destroy();
    isProductsSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setProductsSwiperMode();
});

window.addEventListener("resize", () => {
  setProductsSwiperMode();
});
