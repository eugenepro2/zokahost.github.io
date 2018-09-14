import Swiper from 'swiper';


//intro
var swiper = new Swiper('.swiper-intro', {
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
});


//technology
var swiper = new Swiper('.swiper-technology', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination-technology',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-technology-next',
    prevEl: '.swiper-technology-prev',
  },
});


//reviews
var swiper = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  spaceBetween: 75,
  loop: true,
  pagination: {
    el: '.swiper-pagination-reviews',
    clickable: true,
  },
  breakpoints: {
    767: {
      spaceBetween: 15
    },
  }
});
