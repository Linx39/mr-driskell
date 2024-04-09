const brandsSlider = new Swiper('.brands__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centerInsufficientSlides: true,

  navigation: {
    prevEl: '.brands__slider-btn--prev',
    nextEl: '.brands__slider-btn--next',
    disabledClass: 'arrow-btn--disabled',
  },
});
