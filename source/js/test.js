const mySwiper = new Swiper('.test__slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.test__pagination',
    bulletElement: 'button',
    clickable: true,
  },

  navigation: {
    nextEl: '.test__button-next',
    prevEl: '.test__button-prev',
  },
});
