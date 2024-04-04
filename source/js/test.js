const mySwiper = new Swiper('.test__slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.test__pagination',
    bulletElement: 'button',
    clickable: true,
    // bulletClass: 'pagination__btn',
    // bulletActiveClass: 'pagination__btn--current',
  },

  navigation: {
    nextEl: '.test__button-next',
    prevEl: '.test__button-prev',
  },
});
