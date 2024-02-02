// Обновление отсчета каждую секунду
const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Получение текущей даты и времени
  const now = new Date();
  const currentDay = now.getDay();

  if (currentDay >= 1 && currentDay <= 5) {
    // Если текущий день является будним днем
    let countdownDate = new Date(now);
    countdownDate.setHours(0, 0, 0, 0); // Установка времени на 0:00
    countdownDate.setDate(countdownDate.getDate() + ((1 + 7 - countdownDate.getDay()) % 7)); // Установка текущего понедельника

    // Установка времени окончания на пятницу 17:30
    const countdownEnd = new Date(countdownDate);
    countdownEnd.setHours(17, 30, 0, 0);

    // Разница между текущим временем и временем окончания отсчета
    let timeDifference = countdownEnd - now;

    if (timeDifference <= 0) {
      // Если текущее время находится после времени окончания отсчета на текущий день, установить новое время окончания на следующую пятницу 17:30
      countdownEnd.setDate(countdownEnd.getDate() + ((5 + 7 - countdownEnd.getDay()) % 7));
      countdownEnd.setHours(17, 30, 0, 0);
      timeDifference = countdownEnd - now;
    }

    // Вычисление оставшегося времени
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновление элементов отсчета времени на странице
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  } else {
    // Если текущий день является выходным, отключить отсчет и обновить элементы на странице
    clearInterval(countdown);
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';

    // Установка интервала для запуска отсчета в следующий понедельник
    const nextMonday = new Date(now);
    nextMonday.setDate(nextMonday.getDate() + ((1 + 7 - nextMonday.getDay()) % 7) + 7);
    nextMonday.setHours(0, 0, 0, 0);
    const timeUntilNextMonday = nextMonday - now;

    setTimeout(() => {
      // Инициализация отсчета времени при наступлении следующего понедельника
      countdown = setInterval(updateCountdown, 1000);
      updateCountdown();
    }, timeUntilNextMonday);
  }
}

// Функция для форматирования времени в формате "00"
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Инициализация отсчета времени при загрузке страницы
updateCountdown();