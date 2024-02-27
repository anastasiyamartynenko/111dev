$(document).ready(function(){    
    var autoplayInterval = 4500; // Продолжительность интервала автовоспроизведения в миллисекундах
    var autoplayIntervalID; // Идентификатор интервала автовоспроизведения
    var animationStartTime; // Время начала анимации индикатора выполнения
    var progressAnimationDuration; // Продолжительность анимации индикатора выполнения
    var remainingAnimationTime; // Оставшееся время анимации индикатора выполнения
    var isPaused = false; // Флаг для отслеживания, если автовоспроизведение приостановлено из-за наведения мыши

    function showProgress($block) {
        $block.find(".block-sl-progress").show(); 

        progressAnimationDuration = autoplayInterval;
        $block.find(".block-sl-progress").css("animation-duration", progressAnimationDuration + "ms");

        // Установить время начала анимации
        animationStartTime = performance.now();
    }

    function hideProgress($block) {
        $block.find(".block-sl-progress").hide();
    }

    $(".block-sl-1-img").show();
    $(".block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide();
    $(".block-sl-1").addClass("active");
    showProgress($(".block-sl-1")); 

    $(".block-sl-progress").on("animationend", function(){
        var currentActive = $(".block-sl.active").index();
        var nextActive = (currentActive + 1) % $(".block-sl").length;

        $(".block-sl").removeClass("active");
        $(".block-sl").eq(nextActive).addClass("active");

        $(".block-sl-1-img, .block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide();
        $(".block-sl-" + (nextActive + 1) + "-img").show();

        var $nextBlock = $(".block-sl-" + (nextActive + 1));
        showProgress($nextBlock);

        // Скрыть индикатор выполнения предыдущего блока
        var $prevBlock = $(".block-sl-" + (currentActive + 1));
        hideProgress($prevBlock);

         // Для мобильных устройств
         if ($(window).width() <= 767) {
            $(".block-sl").hide();
            $(".block-sl-" + (nextActive + 1)).show();
        }
    });

    var progressAnimationTimer;
    
    $(".block-sl").mouseenter(function() {
        if (!$(this).hasClass("active")) {           
            return;
        }

        isPaused = true;
        var $progressBar = $(this).find(".block-sl-progress");
        $progressBar.data("wasRunning", $progressBar.css("animation-play-state") === "running");
        $progressBar.css("animation-play-state", "paused"); 
    }).mouseleave(function() {
        if (!$(this).hasClass("active")) {
            // Если блок не активен, то просто выходим из обработчика события
            return;
        }

        isPaused = false;
        var $progressBar = $(this).find(".block-sl-progress");
        if ($progressBar.data("wasRunning")) {
            $progressBar.css("animation-play-state", "running"); // Возобновить анимацию индикатора выполнения
        }
    });
    // Для мобильных устройств
    if ($(window).width() <= 767) {
        $(".block-sl").on('touchstart', function(event) {
            event.preventDefault(); // предотвращаем стандартное поведение при касании
            if ($(this).hasClass("active")) {
                isPaused = !isPaused;
                var $progressBar = $(this).find(".block-sl-progress");
                if (isPaused) {
                    $progressBar.data("wasRunning", $progressBar.css("animation-play-state") === "running");
                    $progressBar.css("animation-play-state", "paused");
                } else {
                    if ($progressBar.data("wasRunning")) {
                        $progressBar.css("animation-play-state", "running"); // Возобновить анимацию индикатора выполнения
                    }
                }
            }
        });
    }
    });

//* Слайд "Максимум возможностей" *//
// $(document).ready(function(){
//     // Показать и сделать активным block-sl-1-img при загрузке страницы
//     $(".block-sl-1-img").show();
//     $(".block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide(); // Скрыть остальные изображения
//     $(".block-sl-1").addClass("active");

//     // Обработчики событий hover для блоков
//     $(".block-sl").hover(function(){
//         $(".block-sl").removeClass("active"); // Удалить класс active у всех блоков
//         $(this).addClass("active"); // Добавить класс active блоку, на который навели курсор
//     });

//     $(".block-sl-2").hover(function(){
//         $(".block-sl-2-img").show();
//         $(".block-sl-1-img, .block-sl-3-img, .block-sl-4-img").hide();
//     });
//     $(".block-sl-3").hover(function(){
//         $(".block-sl-3-img").show();
//         $(".block-sl-1-img, .block-sl-2-img, .block-sl-4-img").hide();
//     });
//     $(".block-sl-4").hover(function(){
//         $(".block-sl-4-img").show();
//         $(".block-sl-1-img, .block-sl-2-img, .block-sl-3-img").hide();
//     });
//     $(".block-sl-1").hover(function(){
//         $(".block-sl-1-img").show();
//         $(".block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide();
//     });
// });


//* Слайд "Первое правило инвестиций *//
$(document).ready(function(){    
    var autoplayInterval = 4500; // Продолжительность интервала автовоспроизведения в миллисекундах
    var autoplayIntervalID; // Идентификатор интервала автовоспроизведения
    var animationStartTime; // Время начала анимации индикатора выполнения
    var progressAnimationDuration; // Продолжительность анимации индикатора выполнения
    var remainingAnimationTime; // Оставшееся время анимации индикатора выполнения
    var isPaused = false; // Флаг для отслеживания, если автовоспроизведение приостановлено из-за наведения мыши

    function showProgress($block) {
        $block.find(".block-sl2-progress").show(); // Показать индикатор выполнения для активного блока

        // Установите продолжительность анимации индикатора выполнения, равную продолжительности интервала автозапуска
        progressAnimationDuration = autoplayInterval;
        $block.find(".block-sl2-progress").css("animation-duration", progressAnimationDuration + "ms");

        // Установить время начала анимации
        animationStartTime = performance.now();
    }

    function hideProgress($block) {
        $block.find(".block-sl2-progress").hide(); // Скрыть индикатор выполнения для неактивного блока
    }
    $(".block-sl-5-img").show();
    $(".block-sl-6-img, .block-sl-7-img").hide();
    $(".block-sl-5").addClass("active");

    showProgress($(".block-sl-5")); // Показывать индикатор выполнения для первого блока при загрузке страницы

    $(".block-sl2-progress").on("animationend", function(){
        var currentActive = $(".block-sl2.active").index();
        var nextActive = (currentActive + 1) % $(".block-sl2").length;

        $(".block-sl2").removeClass("active");
        $(".block-sl2").eq(nextActive).addClass("active");

        $(".block-sl-5-img, .block-sl-6-img, .block-sl-7-img").hide();
        $(".block-sl-" + (nextActive + 5) + "-img").show();

        var $nextBlock = $(".block-sl-" + (nextActive + 5));
        showProgress($nextBlock);

        // Скрыть индикатор выполнения предыдущего блока
        var $prevBlock = $(".block-sl-" + (currentActive + 5));
        hideProgress($prevBlock);

         // Для мобильных устройств
         if ($(window).width() <= 767) {
            $(".block-sl2").hide();
            $(".block-sl-" + (nextActive + 5)).show();
        }
    })

    // autoplayIntervalID = setInterval(autoPlay, autoplayInterval);
    var progressAnimationTimer;    
    $(".block-sl2").mouseenter(function() {
            if (!$(this).hasClass("active")) {
                // Если блок не активен, то просто выходим из обработчика события
                return;
            }
            isPaused = true;
            // clearInterval(autoplayIntervalID); // Остановить автовоспроизведение при наведении курсора на активный блок
            var $progressBar = $(this).find(".block-sl2-progress");
            $progressBar.data("wasRunning", $progressBar.css("animation-play-state") === "running");
            $progressBar.css("animation-play-state", "paused"); // Приостановить анимацию индикатора выполнения
        }).mouseleave(function() {
            if (!$(this).hasClass("active")) {
                // Если блок не активен, то просто выходим из обработчика события
                return;
            }

            isPaused = false;
            var $progressBar = $(this).find(".block-sl2-progress");
            if ($progressBar.data("wasRunning")) {
                $progressBar.css("animation-play-state", "running"); // Возобновить анимацию индикатора выполнения
                // autoplayIntervalID = setInterval(autoPlay, autoplayInterval); // Возобновить автовоспроизведение
            }
        });
});


// КАЛЬКУЛЯТОР platform
document.addEventListener('DOMContentLoaded', function() {
    // Получение всех необходимых элементов
    var initialMoneyInput = document.getElementById('initialMoneyInput');
    var replenishmentMoneyInput = document.getElementById('replenishmentMoneyInput');
    var yearsSelect = document.querySelectorAll('.ul-filter li[data-years]');
    var interestSelect = document.querySelectorAll('.ul-filter li[data-interest]');
    var interestIncome = document.getElementById('interestIncome');

    // Обработчик события изменения значений
    var calculateInterest = function() {
        var P = parseFloat(initialMoneyInput.value); // Начальная сумма
        var PMT = parseFloat(replenishmentMoneyInput.value); // Ежемесячное пополнение
        var r = parseFloat(document.querySelector('.ul-filter li.active[data-interest]').getAttribute('data-interest')); // Годовая процентная ставка
        var t = parseFloat(document.querySelector('.ul-filter li.active[data-years]').getAttribute('data-years')); // Срок инвестирования в годах

        var n = 12; // Количество периодов в году (ежемесячное пополнение)
        var FV = P * Math.pow(1 + r / n, n * t) + PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n)); // Будущая стоимость

        // Вычисление процентного дохода
        var totalReplenishments = PMT * 12 * t;
        var totalInitialInvestment = P + totalReplenishments;
        var percentIncome = ((FV - totalInitialInvestment) / totalInitialInvestment) * 100;

        // Вывод результата
        interestIncome.textContent = percentIncome.toFixed(2) + ' ₸';
    };

    // Обработчики событий для изменения выбранных параметров
    yearsSelect.forEach(function(item) {
        item.addEventListener('click', function() {
            yearsSelect.forEach(function(elem) {
                elem.classList.remove('active');
            });
            this.classList.add('active');
            calculateInterest();
        });
    });

    interestSelect.forEach(function(item) {
        item.addEventListener('click', function() {
            interestSelect.forEach(function(elem) {
                elem.classList.remove('active');
            });
            this.classList.add('active');
            calculateInterest();
        });
    });

    // Обработчик события ввода значений в инпуты
    initialMoneyInput.addEventListener('input', calculateInterest);
    replenishmentMoneyInput.addEventListener('input', calculateInterest);

    // Изначально вычисляем процентный доход
    calculateInterest();
});




Highcharts.setOptions({
    colors: ['#FF4810', '#AAADB2']
  });
  
  Highcharts.chart('container', {
      chart: {
          type: 'column'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      xAxis: {
          categories: ['5 лет', '10 лет',  '20 лет', '30 лет']
      },
      yAxis: {
        tickPositions: [20, 25, 52], // Задаем конкретные значения для оси Y
        labels: {
            enabled: false // Отключаем отображение текста на оси Y
        },
        gridLineWidth: 0, // Скрываем полоски сетки
        title: {
            text: null
        }
    },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
          shared: true
      },
      legend: {
        enabled: false // Убираем легенду (серии под графиком)
    },
      plotOptions: {
          column: {
              stacking: 'percent'
          }
      },
      series: [
          {
            name: 'Процентный доход',
              data: [1.8,  3.4,  5.7, 6.4]
          },
          {
            name: 'Сберегательный счет',
              data: [0.2, 3.8, 5.1, 6]
          },
      ]
  });

