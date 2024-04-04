const promoFilterSlider = new Swiper('.promo-filter__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 18,
  centerInsufficientSlides: true,
  // centeredSlidesBounds: true,
  initialSlide: 2,

  breakpoints: {
    1280: {
      spaceBetween: 46,
    },
  }
});

