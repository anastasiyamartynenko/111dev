document.addEventListener('DOMContentLoaded', function() {
    
    async function fetchJSONData() {
      const response = await fetch('https://content.jusaninvest.kz/pifs/by-slug/abyroi');
      const data = await response.json();
     
      return data;
    }
    
    async function displayData() {    
        const jsonData = await fetchJSONData();

        console.log(jsonData)
    // Расчетная стоимость Файлы
    const historicalPrice = document.getElementById('historical-price-link')
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `https://content.jusaninvest.kz/files/${jsonData.fundParameters.historicalPrice.file}`);
    linkElement.setAttribute("style", "color: rgb(141, 141, 141);");
    linkElement.innerText = jsonData.fundParameters.historicalPrice.title.ru;
    historicalPrice.appendChild(linkElement);

     // Тизер
     const teaser = document.getElementById('teaser-link')
     const linkElement2 = document.createElement("a");
     linkElement2.setAttribute("href", `https://content.jusaninvest.kz/files/${jsonData.fundParameters.teaser.file}`);
     linkElement2.setAttribute("style", "color: rgb(141, 141, 141);");
     linkElement2.innerText = jsonData.fundParameters.teaser.title.ru;
     teaser.appendChild(linkElement2);

     // Отчетность 
     const accountability = document.getElementById('accountability-link')
     const linkElement3 = document.createElement("a");
     linkElement3.setAttribute("href", `https://content.jusaninvest.kz/files/${jsonData.fundParameters.accountability.file}`);
     linkElement3.setAttribute("style", "color: rgb(141, 141, 141);");
     linkElement3.innerText = jsonData.fundParameters.accountability.title.ru;
     accountability.appendChild(linkElement3); 

            // Расчетная стоимость
            let pifPrice = jsonData.fundParameters.params.currentPrice.value.single
            let trimmedPifPriceString = pifPrice.substring(0, pifPrice.length - 2)
            const pifPriceElement = document.getElementById('pif-price')
            pifPriceElement.innerHTML = trimmedPifPriceString

      // Динамика стоимости пая в годовом выражении с учетом дивидендов
      // Дата
      const priceDateString = jsonData.income.date
      const priceDateElement = document.getElementById('abyroi-price-date')
      priceDateElement.innerHTML = priceDateString

      // 1 месяц
      const oneMonthString = jsonData.income.oneMonth
      const oneMonthElement = document.getElementById('abyroi-one-month-with-dividends')
      const oneMonthFloat = parseFloat(oneMonthString.replace(',', '.'));
      if (oneMonthFloat < 0) {
          oneMonthElement.style.color = '#fc3d39';
      } else {
          oneMonthElement.style.color = '#2da771';
      }
      oneMonthElement.innerHTML = oneMonthString

      // 3 месяца
      const threeMonthsString = jsonData.income.threeMonths
      const threeMonthsElement = document.getElementById('abyroi-three-months-with-dividends')
      const threeMonthsFloat = parseFloat(threeMonthsString.replace(',', '.'));
      if (threeMonthsFloat < 0) {
          threeMonthsElement.style.color = '#fc3d39';
      } else {
          threeMonthsElement.style.color = '#2da771';
      }
      threeMonthsElement.innerHTML = threeMonthsString

      // Пол года 
      const halfYearString = jsonData.income.halfYear
      const halfYearElement = document.getElementById('abyroi-half-year-with-dividends')
      const halfYearFloat = parseFloat(halfYearString.replace(',', '.'));
      if (halfYearFloat < 0) {
          halfYearElement.style.color = '#fc3d39';
      } else {
          halfYearElement.style.color = '#2da771';
      }
      halfYearElement.innerHTML = halfYearString

      // За 1 год
      const yearString = jsonData.income.year
      const yearElement = document.getElementById('abyroi-year-with-dividends')
      const yearFloat = parseFloat(yearString.replace(',', '.'));
      if (yearFloat < 0) {
          yearElement.style.color = '#fc3d39';
      } else {
          yearElement.style.color = '#2da771';
      }
      yearElement.innerHTML = yearString

      // За все время
      const fromBeginningString = jsonData.income.fromBeginning
      const fromBeginningElement = document.getElementById('abyroi-from-beginning-with-dividends')
      const fromBeginningFloat = parseFloat(fromBeginningString.replace(',', '.'));
      if (fromBeginningFloat < 0) {
          fromBeginningElement.style.color = '#fc3d39';
      } else {
          fromBeginningElement.style.color = '#2da771';
      }
      fromBeginningElement.innerHTML = fromBeginningString
  
    }

    displayData();
}); 
