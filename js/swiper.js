'use strict';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  // slidesPerView: 4,
  // spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
});
