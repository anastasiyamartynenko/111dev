var targetDate = new Date("2023-11-02T11:30:00").getTime();

// Обновляем обратный отсчет каждую секунду
var x = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = targetDate - now;

    // Рассчитываем дни, часы, минуты и секунды
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Выводим обратный отсчет на страницу
    document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
    document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

    // Если достигнута целевая дата, останавливаем обратный отсчет
    if (timeLeft <= 0) {
        clearInterval(x);
    }
}, 1000);