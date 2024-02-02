document.addEventListener('DOMContentLoaded', function() {
    
    async function fetchJSONData() {
      const response = await fetch('https://content.jusaninvest.kz/pifs/by-slug/dostar');
      const data = await response.json();
     
      return data;
    }
    
    async function displayData() {
      // Отрасли
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

        // Get a reference to the container element
        const assetsAllocationContainer = document.getElementById('assets-allocation-container');

        // Loop through the data and create the elements
        jsonData.assetsAllocation.pieChart1.forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'pifCommon-list-colored-item';

          // Create the title element using pieChart1.title_ru
          const titleDiv = document.createElement('div');
          titleDiv.className = 'pifCommon-list-colored-item-title';
          titleDiv.textContent = item.title_ru; // Use the title_ru property
          itemDiv.appendChild(titleDiv);

          const numberDiv = document.createElement('div');
          numberDiv.className = 'pifCommon-list-colored-item-number';
          const percentString = item.value % 1 === 0 ? item.value + ',0%' : item.value + '%';
          numberDiv.textContent = percentString;

          // Set the ID for the numberDiv
          numberDiv.id = `dostar-${item.id}`; // Use the item's ID as part of the ID
          itemDiv.appendChild(numberDiv);

          assetsAllocationContainer.appendChild(itemDiv);
        });

        // Дата
        const dostarDateString = 'Данные за ' + jsonData.income.date;
        const dostarDateElement = document.getElementById('dostar-date');
        dostarDateElement.innerHTML = dostarDateString;

        const portfolioContainer = document.getElementById('pif-common-list-container');

        // Loop through the portfolio items in your JSON data
        jsonData.portfolioStructure.forEach((item, index) => {
            // Create a <div> element with the specified classes
            const itemDiv = document.createElement('div');
            itemDiv.className = 'pifCommon-list-transparent-item';

            // Create the circle element
            //const circleDiv = document.createElement('div');
            //   circleDiv.className = 'pifCommon-list-transparent-item-circle';
            //   circleDiv.style.background = item.color; // Use the color from your data
            //   itemDiv.appendChild(circleDiv);
            // Create the title element

            const titleDiv = document.createElement('div');
            titleDiv.className = 'pifCommon-list-transparent-item-title';
            titleDiv.textContent = item.title; // Use the title from your data

            itemDiv.appendChild(titleDiv);

            // Create the number-fix element
            const numberFixDiv = document.createElement('div');
            numberFixDiv.className = 'pifCommon-list-transparent-item-number-fix';
            const percent = item.percent % 1 === 0 ? item.percent + ',0%' : item.percent + '%';
            numberFixDiv.textContent = percent; // Use the percent value from your data
            itemDiv.appendChild(numberFixDiv);

            // Append the itemDiv to the container
            portfolioContainer.appendChild(itemDiv);
          });

      // Расчетная стоимость
      let pifPrice = jsonData.fundParameters.params.currentPrice.value.single
      let trimmedPifPriceString = pifPrice
      const pifPriceElement = document.getElementById('pif-price')
      pifPriceElement.innerHTML = trimmedPifPriceString

      // Динамика стоимости пая в годовом выражении с учетом дивидендов
      // Дата
      const priceDateString = jsonData.income.date
      const priceDateElement = document.getElementById('dostar-price-date')
      priceDateElement.innerHTML = priceDateString

      // 1 месяц
      const oneMonthString = jsonData.income.oneMonth
      const oneMonthElement = document.getElementById('dostar-one-month-with-dividends')
      const oneMonthFloat = parseFloat(oneMonthString.replace(',', '.'));
      if (parseInt(oneMonthString) < 0) {
          oneMonthElement.style.color = '#fc3d39';
      } else {
          oneMonthElement.style.color = '#2da771';
      }
      oneMonthElement.innerHTML = oneMonthString

      // 3 месяца
      const threeMonthsString = jsonData.income.threeMonths
      const threeMonthsElement = document.getElementById('dostar-three-months-with-dividends')
      const threeMonthsFloat = parseFloat(threeMonthsString.replace(',', '.'));
      if (threeMonthsFloat < 0) {
          threeMonthsElement.style.color = '#fc3d39';
      } else {
          threeMonthsElement.style.color = '#2da771';
      }
      threeMonthsElement.innerHTML = threeMonthsString

      // Пол года 
      const halfYearString = jsonData.income.halfYear
      const halfYearElement = document.getElementById('dostar-half-year-with-dividends')
      const halfYearFloat = parseFloat(halfYearString.replace(',', '.'));
      if (halfYearFloat < 0) {
          halfYearElement.style.color = '#fc3d39';
      } else {
          halfYearElement.style.color = '#2da771';
      }
      halfYearElement.innerHTML = halfYearString

      // За 1 год
      const yearString = jsonData.income.year
      const yearElement = document.getElementById('dostar-year-with-dividends')
      const yearFloat = parseFloat(yearString.replace(',', '.'));
      if (yearFloat < 0) {
          yearElement.style.color = '#fc3d39';
      } else {
          yearElement.style.color = '#2da771';
      }
      yearElement.innerHTML = yearString
      
      // За все время
      const fromBeginningString = jsonData.income.fromBeginning
      const fromBeginningElement = document.getElementById('dostar-from-beginning-with-dividends')
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