$(".ji-close").click(function(){
  $(".disclamer").hide();
  $('body').addClass('mt-80p');
});

// header
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){  
      $('header').addClass("sticky");
      $('header-link').addClass('text-white');
  }else{
    $('header').removeClass("sticky");
    $('header-link').removeClass('text-white');
  }
});

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(".three-step-head-pd").click(function(){
  $(".three-step-head-pd").removeClass('ji-active');
  $(this).addClass('ji-active')
});


$(".ji-choose-ipif").click(function(){
  $(".ji-choose-ipif").removeClass('ji-pif-active');
  $(this).addClass('ji-pif-active')
});

$(function() {
  let filter = $("[data-filter]");
  filter.on("click", function(event) {
  event.preventDefault();
  let cat = $(this).data('filter');
    $("[data-cat]").each(function() {
      let workCat = $(this).data('cat');
    
      if(workCat != cat) {
        $(this).addClass('hide');
      }else {
        $(this).removeClass('hide');
      }
    });
  });
});

// header menu

$(document).ready(function(){
  $('#nav-icon3').click(function(){
	  $(this).toggleClass('open');
   
    $('#myLinks').toggleClass('hide-mobileMenu')
    $('#myLinks').toggleClass('mobile-menu-animation')
    
	});
});
// calc

// //СУММА ИНВЕСТИРОВАНИЯ - ПОКАЗАТЬ
// var $value = $('#property-value').val();
// var $showValue = numberWithCommas($value);
// $('#show-property-value').html( '$ ' + $showValue);

// //ГОД - ПОКАЗАТЬ
// var $years = $('#years').val();
// var $showYear = numberWithCommas($years);
// $('#show-years').html($showYear);

// $(document).on('input change', '#property-value', function() {
// 	var $value = $('#property-value').val();
// 	var $showValue = numberWithCommas($value);
// 	$('#show-property-value').html( '$' + $showValue);
// 	totalSavings1();

// });

// $(document).on('input change', '#years', function() {
// 	var $years = $('#years').val();
// 	var $showYears = numberWithCommas($years);
//   $('#show-years').html($showYears);
//   if($showYears == 1){
// 	$(".show-yearss").html($showYears + " год");
//   }else
//   if($showYears == 5){
// 	$(".show-yearss").html($showYears + " лет");
//   }else
//   	$(".show-yearss").html($showYears + " года");
// 	totalSavings1();
// 	console.log($showYears)
// });




// function numberWithCommas(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }




// //ИПИФ 1
// function totalCost1(){
// 	var $property = $('#property-value').val();
// 	var $numberofYears = $('#years').val();
//   var $totalInterest = (1.015 ** $numberofYears);
// 	var $total = ($property * $totalInterest);
//   var $total = $total.toFixed(2);
// 	return $total;
// }

// function totalSavings1() {
// 	var $savings = totalCost1();
// 	$('#total-savings-1').html(numberWithCommas($savings));
// }

// totalSavings1();



$('.toggle').click(function(e) {
  e.preventDefault();
 /*   */
  if ($(this).hasClass('toggle-border-radius')) {
    document.querySelectorAll('.toggle').forEach(item => {
      item.classList.remove('toggle-border-radius');
    })
    $(this).removeClass('toggle-border-radius');
  } else {
    document.querySelectorAll('.toggle').forEach(item => {
      item.classList.remove('toggle-border-radius');
    })
    $(this).addClass('toggle-border-radius');
  }
  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


$('.blog-categories-title').on('click', function() {
  $(this).parent().toggleClass('active')
})

$('.blog-categories .close').on('click', function() {
  $('.blog-categories').removeClass('active')
})
// read more

$('.read-more').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Читать больше") {
      $(this).text("Читать меньше");
  } else {
      $(this).text("Читать больше");
  }
});
$('.read-more-kz').click(function() {
  $(this).prev().slideToggle();
  if (($(this).text()) == "Толығырақ оқу") {
      $(this).text("Аз оқу");
  } else {
      $(this).text("Толығырақ оқу");
  }
});


window.addEventListener('scroll', function() {
  var scrollHeader = document.getElementById('scroll-header');
  if (window.innerWidth > 767 && window.scrollY >= 500) {
    scrollHeader.style.display = 'block';
  } else {
    scrollHeader.style.display = 'none';
  }
});


const activeImages = document.querySelectorAll(".active");
const newBlElements = document.querySelectorAll(".new-bl");

activeImages.forEach((activeImage, index) => {
  activeImage.addEventListener("click", function() {
    if (newBlElements[index].style.display === "block") {
      newBlElements[index].style.display = "none";
    } else {
      newBlElements[index].style.display = "block";
    }
  });
});



// // Добавляем класс "scrolled" к <body> при прокрутке страницы
// window.addEventListener("scroll", function() {
//   const fixedButton = document.getElementById("fixedButton");
//   if (window.scrollY > 2000) { // Измените это значение по необходимости
//     fixedButton.classList.add("hidden");
//   } else {
//     fixedButton.classList.remove("hidden");
//   }
// });




// const countdownBlock = document.querySelector('.countdown');
// // Запоминаем начальную позицию страницы
// let previousScrollPosition = window.scrollY;
// // Функция, которая будет вызываться при скролле
// function handleScroll() {
//     const currentScrollPosition = window.scrollY;
//     // Если текущая позиция больше предыдущей, скрываем блок
//     if (currentScrollPosition > previousScrollPosition) {
//         countdownBlock.classList.add('hidden');
//     } else {
//         countdownBlock.classList.remove('hidden');
//     }
//     previousScrollPosition = currentScrollPosition;
// }
// // Добавляем обработчик события скролла
// window.addEventListener('scroll', handleScroll);
// function viewDiv(){
//   document.getElementById("div1").style.display = "block";
// };




document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('toggleButton');
  const rowsToToggle = document.querySelectorAll('.mb-n');
  const img = button.querySelector('img');

  let isOpen = false;

  button.addEventListener('click', function() {
    isOpen = !isOpen;

    if (isOpen) {
      img.style.transform = 'rotate(180deg)';
    } else {
      img.style.transform = 'rotate(0deg)';
    }

    rowsToToggle.forEach(function(row) {
      row.style.display = isOpen ? 'table-row' : 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('toggleButton2');
  const rowsToToggle = document.querySelectorAll('.mb-n');
  const img = button.querySelector('img');

  let isOpen = false;

  button.addEventListener('click', function() {
    isOpen = !isOpen;

    if (isOpen) {
      img.style.transform = 'rotate(180deg)';
    } else {
      img.style.transform = 'rotate(0deg)';
    }

    rowsToToggle.forEach(function(row) {
      row.style.display = isOpen ? 'table-row' : 'none';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Получаем элемент canvas
  var canvas = document.getElementById('growthChart');
  var context = canvas.getContext('2d');

  // Данные для графика (пример)
  var data = [
      { x: 0, y: 0 },
      { x: 1, y: 5 },
      { x: 2, y: 7 },
      { x: 3, y: 10 },
      { x: 4, y: 12 },
      { x: 5, y: 15 },
      { x: 6, y: 20 },
      { x: 7, y: 25 },
      { x: 8, y: 35 },
      { x: 9, y: 55 },
      { x: 10, y: 70 },
      { x: 11, y: 120 },
      { x: 12, y: 150 },
      // Добавьте свои данные
  ];

  // Масштабирование осей
  var scaleX = canvas.width / (data.length - 1);
  var scaleY = canvas.height / Math.max(...data.map(point => point.y));

  // Рисуем график с использованием кривой Безье
  context.beginPath();
  context.moveTo(data[0].x * scaleX, canvas.height - data[0].y * scaleY);

  for (var i = 1; i < data.length - 2; i++) {
      var xc = (data[i].x * scaleX + data[i + 1].x * scaleX) / 2;
      var yc = (canvas.height - data[i].y * scaleY + canvas.height - data[i + 1].y * scaleY) / 2;
      context.quadraticCurveTo(data[i].x * scaleX, canvas.height - data[i].y * scaleY, xc, yc);
  }

  // Окончательная линия к последней точке
  context.quadraticCurveTo(data[i].x * scaleX, canvas.height - data[i].y * scaleY, data[i + 1].x * scaleX, canvas.height - data[i + 1].y * scaleY);

  // Линия графика
  context.strokeStyle = '#3498db';
  context.lineWidth = 2;
  context.stroke();



});