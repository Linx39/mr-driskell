const cardSlider = new Swiper('.card__slider', {
  direction: 'horizontal',
  loop: true,
  // nested: true,

  pagination: {
    el: '.card__slider-pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'card-pagination__btn',
    bulletActiveClass: 'card-pagination__btn--active',
  },
});

