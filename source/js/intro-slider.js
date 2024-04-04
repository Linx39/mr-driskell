const introSlider = new Swiper('.intro__slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--current',
  },

  navigation: {
    prevEl: '.needle-btn--prev',
    nextEl: '.needle-btn--next',
  },
});
