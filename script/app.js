//* Слайд "Максимум возможностей" *//
$(document).ready(function(){
    // Показать и сделать активным block-sl-1-img при загрузке страницы
    $(".block-sl-1-img").show();
    $(".block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide(); // Скрыть остальные изображения
    $(".block-sl-1").addClass("active");

    // Обработчики событий hover для блоков
    $(".block-sl").hover(function(){
        $(".block-sl").removeClass("active"); // Удалить класс active у всех блоков
        $(this).addClass("active"); // Добавить класс active блоку, на который навели курсор
    });

    $(".block-sl-2").hover(function(){
        $(".block-sl-2-img").show();
        $(".block-sl-1-img, .block-sl-3-img, .block-sl-4-img").hide();
    });
    $(".block-sl-3").hover(function(){
        $(".block-sl-3-img").show();
        $(".block-sl-1-img, .block-sl-2-img, .block-sl-4-img").hide();
    });
    $(".block-sl-4").hover(function(){
        $(".block-sl-4-img").show();
        $(".block-sl-1-img, .block-sl-2-img, .block-sl-3-img").hide();
    });
    $(".block-sl-1").hover(function(){
        $(".block-sl-1-img").show();
        $(".block-sl-2-img, .block-sl-3-img, .block-sl-4-img").hide();
    });
});


//* Слайд "Первое правило инвестиций *//
$(document).ready(function(){
    var autoplayInterval = 3000; // Продолжительность интервала автовоспроизведения в миллисекундах
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

    function autoPlay() {
        if (!isPaused) {
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
        }
    }

    autoplayIntervalID = setInterval(autoPlay, autoplayInterval);

    $(".block-sl2").click(function() {
        clearInterval(autoplayIntervalID);
        $(".block-sl2").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".block-sl-5-img, .block-sl-6-img, .block-sl-7-img").hide();
        $(".block-sl-" + (index + 5) + "-img").show();
        showProgress($(this));
        autoplayIntervalID = setInterval(autoPlay, autoplayInterval);
    });

    var progressAnimationTimer;
    
    $(".block-sl2").mouseenter(function() {
        if (!$(this).hasClass("active")) {
            // Если блок не активен, то просто выходим из обработчика события
            return;
        }
    
        isPaused = true;
        clearInterval(autoplayIntervalID); // Остановить автовоспроизведение при наведении курсора на активный блок
        progressAnimationDuration = parseInt($(this).find(".block-sl2-progress").css("animation-duration")); // Сохранить текущую продолжительность анимации индикатора выполнения
        $(this).find(".block-sl2-progress").css("animation-play-state", "paused"); // Приостановить анимацию индикатора выполнения
    }).mouseleave(function() {
        if (!$(this).hasClass("active")) {
            // Если блок не активен, то просто выходим из обработчика события
            return;
        }
    
        isPaused = false;
        autoplayIntervalID = setInterval(autoPlay, autoplayInterval); // Возобновить автовоспроизведение, когда мышь покидает активный блок
    
        // Рассчитать оставшееся время анимации индикатора выполнения
        remainingAnimationTime = progressAnimationDuration - (performance.now() - animationStartTime);
        if (remainingAnimationTime > 0) {
            // Установить оставшуюся продолжительность анимации
            $(this).find(".block-sl2-progress").css("animation-duration", remainingAnimationTime + "ms");
            // Установить время начала анимации на текущее время минус оставшееся время анимации
            animationStartTime = performance.now() - remainingAnimationTime;
        }
    
        $(this).find(".block-sl2-progress").css("animation-play-state", "running"); // Возобновить анимацию индикатора выполнения
        
        // Запустить автовоспроизведение после возобновления анимации
        autoplayIntervalID = setInterval(autoPlay, autoplayInterval);
    });
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

