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
    // Показать и сделать активным block-sl-1-img при загрузке страницы
    $(".block-sl-5-img").show();
    $(".block-sl-6-img, .block-sl-7-img").hide(); // Скрыть остальные изображения
    $(".block-sl-5").addClass("active");

    // Обработчики событий hover для блоков
    $(".block-sl2").hover(function(){
        $(".block-sl2").removeClass("active"); // Удалить класс active у всех блоков
        $(this).addClass("active"); // Добавить класс active блоку, на который навели курсор
    });

    $(".block-sl-6").hover(function(){
        $(".block-sl-6-img").show();
        $(".block-sl-5-img, .block-sl-7-img").hide();
    });
    $(".block-sl-7").hover(function(){
        $(".block-sl-7-img").show();
        $(".block-sl-5-img, .block-sl-6-img").hide();
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