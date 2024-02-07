var canvas = document.getElementById('growthChart');
var context = canvas.getContext('2d');

var dataPoints1 = [
    { x: 0, y: 0 },
    { x: 100, y: 5 },
    { x: 200, y: 20 },
    { x: 300, y: 50 },
    { x: 300, y: 70 },
    { x: 600, y: 80 }
];

var dataPoints2 = [
    { x: 0, y: 0 },
    { x: 100, y: 15 },
    { x: 200, y: 40 },
    { x: 300, y: 90 },
    { x: 300, y: 170 },
    { x: 600, y: 650 }
];

// Рисование первой линии
drawLine(dataPoints1, 'blue', 1);

// Рисование второй линии
drawLine(dataPoints2, 'red', 2);

function drawLine(dataPoints, color, lineWidth) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.moveTo(dataPoints[0].x, canvas.height - dataPoints[0].y);

    for (var i = 1; i < dataPoints.length - 2; i++) {
        var xc = (dataPoints[i].x + dataPoints[i + 1].x) / 2;
        var yc = (canvas.height - dataPoints[i].y + canvas.height - dataPoints[i + 1].y) / 2;
        context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, xc, yc);
    }

    context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, dataPoints[i + 1].x, canvas.height - dataPoints[i + 1].y);

    context.stroke();
}


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