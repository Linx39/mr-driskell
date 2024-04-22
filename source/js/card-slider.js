const CARD_CLASS = 'card';
const CARD_NO_JS_CLASS = 'card--no-js';

const cardElements = document.querySelectorAll(`.${CARD_CLASS}`);

cardElements.forEach(card => card.classList.remove(CARD_NO_JS_CLASS));

const cardSlider = new Swiper('.card__slider', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.card__slider-pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'card-pagination__btn',
    bulletActiveClass: 'card-pagination__btn--active',
  },
});

