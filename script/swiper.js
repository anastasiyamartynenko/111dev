$(document).ready(function () {
    var swiperWrapper = $('.swiper-wrapper');
    var slideWidth = $('.catalog-item').width();
    var currentTranslate = 0;
  
    $('.catalog-block').on('click', function () {
      // Calculate the new translate value
      var index = $(this).index();
      var newTranslate = -index * slideWidth;
  
      // Update the translate value
      currentTranslate = newTranslate;
      swiperWrapper.css('transform', 'translateX(' + currentTranslate + 'px)');
    });
  });