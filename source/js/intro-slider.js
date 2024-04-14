const INTRO_CLASS = 'intro';
const INTRO_NO_JS_CLASS = 'intro--no-js';

const introElement = document.querySelector(`.${INTRO_CLASS}`);

if (introElement) {
  introElement.classList.remove(INTRO_NO_JS_CLASS);
}

const introSlider = new Swiper('.intro__slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.intro__pagination',
    bulletElement: 'button',
    clickable: true,
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--current',
  },

  navigation: {
    prevEl: '.intro__arrow-btn--prev',
    nextEl: '.intro__arrow-btn--next',
    disabledClass: 'needle-btn--disabled'
  },
});
