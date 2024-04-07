const brandsSlider = new Swiper('.brands__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  centerInsufficientSlides: true,

  navigation: {
    prevEl: '.arrow-btn--prev',
    nextEl: '.arrow-btn--next',
  },
});
