const PROMO_CLASS = 'promo';
const PROMO_NO_JS_CLASS = 'promo--no-js';

const promoElement = document.querySelector(`.${PROMO_CLASS}`);

promoElement.classList.remove(PROMO_NO_JS_CLASS);
