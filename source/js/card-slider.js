const cardSlider = new Swiper('.card__slider1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.card-pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'card-pagination__btn',
    bulletActiveClass: 'card-pagination__btn--active',
  },
});

