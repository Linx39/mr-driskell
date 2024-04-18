const CARD_CLASS = 'card';
const CARD_NO_JS_CLASS = 'card--no-js';

const cardElement = document.querySelector(`.${CARD_CLASS}`);

if (cardElement) {
  cardElement.classList.remove(CARD_NO_JS_CLASS);
}

const cardSlider = new Swiper('.card__slider', {
  direction: 'horizontal',
  loop: true,
  nested: true,//???

  pagination: {
    el: '.card__slider-pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'card-pagination__btn',
    bulletActiveClass: 'card-pagination__btn--active',
  },
});

