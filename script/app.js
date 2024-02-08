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

