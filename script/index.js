/**На главной слайдер**/
let findElements = [...document.getElementsByClassName('main-img')]   
      let input = document.getElementById('main-page-slider'); 
      let parallaxParams = {
          hoverOnly: true,
          relativeInput: true,
          inputElement: input,
          originX:0,
          originY:1
      }
      let foundElement = findElements.map( id => {
        new Parallax(id, parallaxParams)
      })  
      
      
/**На главной почему «Jusan Invest» бордер слева при клике на кнопки**/
$(document).ready(function () {
    $('.teh').hasClass('uk-active')
        $('.border-l').hide();
        $('.border-r').show();

    $('.teh').on('click', function () {
         $('.border-l').hide();
         $('.border-r').show();
    });
    $('.flex').on('click', function () {
      $('.border-l').hide();
      $('.border-r').hide();
    });

    $('.act').on('click', function () {
      $('.border-l').show();
      $('.border-r').hide();
    });
  });


 /**О нас пишут свайпер**/   
  var splide = new Splide( '.splide',{
    type  : 'loop',
    drag   : 'free',
    pagination: true,
    arrows : false,
    autoWidth: true,
    perPage: 5,
    autoplay: true,
    focus: window.innerWidth === 768 ? 'center' : 'left', // Изменено значение focus в зависимости от ширины экрана

  } );splide.mount();


   /**Каталог инвестиционных инструментов переключение инвестирование и готовые регения**/
  $(document).ready(function() {
    // Hide all content blocks initially
    $('.tab-2').hide();

    $('#tab-1').click(function () {
        $('.tab-1').show();
        $('.tab-2').hide();
    });
    // Handle click events on tabs
    $('#tab-1').click(function(e) {
      e.preventDefault();
      $('.tab-2').hide();
      $('.tab-1').show();
      // Add or remove active class as needed
      $(this).addClass('active-tab');
      $('#tab-2').removeClass('active-tab');
    });
    $('#tab-2').click(function(e) {
      e.preventDefault();
      $('.tab-1').hide();
      $('.tab-2').show();
      // Add or remove active class as needed
      $(this).addClass('active-tab');
      $('#tab-1').removeClass('active-tab');
    });
  });


/**Скрол в хедер Открыть счет
  window.addEventListener('scroll', function() {
    var scrollHeader = document.getElementById('scroll-header');
    if (window.innerWidth > 767 && window.scrollY >= 500) {
      scrollHeader.style.display = 'block';
    } else {
      scrollHeader.style.display = 'none';
    }
  });**/


