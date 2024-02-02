// Слайдер на главной
const swiperMain = new Swiper('.main-page-slider', {
  slidesPerView: 1, 
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  }, 
  on: {
    slideChange: function (sw) {
      let slide = $('.main-page-slider .swiper-slide:not(.swiper-slide-duplicate)')
      let total = slide.length < 9 ? ('0' + slide.length) : slide.length
      $('.main-page-slider__total').text(total)
      let curret = sw.realIndex < 9 ?  ('0' + (sw.realIndex + 1)) : (sw.realIndex + 1)
      $('.main-page-slider__current').text(curret)
    },
  },
  loopedSLides: 1,
  loop: true,
  simulateTouch: true,
  spaceBetween: 100,
  direction: 'horizontal',
  centeredSlides: true,
  grabCursor: true,
  speed: 1000,
  pagination: {
      el: '.swiper-paginat',
      clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 1500,
  // }
})

var swiper = new Swiper(".main-page-second-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  // autoplay: true
});

// slider on smi block
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});


let ticker = document.querySelectorAll('.ticker-animation')
if(ticker) {
ticker.forEach( el => {  
  let list = Array.from(el.querySelectorAll('.ticker-animation__list'))

  list.forEach(elem => {
    let clone = elem.cloneNode(true)
    el.appendChild(clone) 
  })
})
}


