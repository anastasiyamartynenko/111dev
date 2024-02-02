document.addEventListener('DOMContentLoaded', function() {
    
    async function fetchJSONData() {
      const response = await fetch('https://content.jusaninvest.kz/pifs/by-slug/allga');
      const data = await response.json();
     
      return data;
    }
    
    async function displayData() {
      // Отрасли
      const jsonData = await fetchJSONData(); 
      console.log(jsonData, ' json data ')

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

  //   // Денежные средства
  //   const allemMoneyString = jsonData.assetsAllocation.pieChart1[0].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[0].value + ',0%' : jsonData.assetsAllocation.pieChart1[0].value + '%'
  //   const allemMoneyElement = document.getElementById('allem-money');
  //   allemMoneyElement.innerHTML = allemMoneyString;
  //   // Финансы
  //   const allemFinancesString = jsonData.assetsAllocation.pieChart1[1].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[1].value + ',0%' : jsonData.assetsAllocation.pieChart1[1].value + '%'
  //   const allemFinancesElement = document.getElementById('allem-finances');
  //   allemFinancesElement.innerHTML = allemFinancesString;
  //   // ГЦБ
  //   const allemGCBString = jsonData.assetsAllocation.pieChart1[2].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[2].value + ',0%' : jsonData.assetsAllocation.pieChart1[2].value + '%'
  //   const allemGCBElement = document.getElementById('allem-gcb');
  //   allemGCBElement.innerHTML = allemGCBString;
  //   // Информационные технологии
  //   const allemInformationTechnologyString = jsonData.assetsAllocation.pieChart1[3].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[3].value + ',0%' : jsonData.assetsAllocation.pieChart1[3].value + '%'
  //   const allemInformationTechnologyElement = document.getElementById('allem-information-technology');
  //   allemInformationTechnologyElement.innerHTML = allemInformationTechnologyString;
  //   // Базовые материалы
  //   const allemBasicMaterialsString = jsonData.assetsAllocation.pieChart1[4].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[4].value + ',0%' : jsonData.assetsAllocation.pieChart1[4].value + '%'
  //   const allemBasicMaterialsElement = document.getElementById('allem-basic-materials');
  //   allemBasicMaterialsElement.innerHTML = allemBasicMaterialsString;
  //   // Энергетика
  //   const allemEnergyString = jsonData.assetsAllocation.pieChart1[6].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[6].value + ',0%' : jsonData.assetsAllocation.pieChart1[6].value + '%'
  //   const allemEnergyElement = document.getElementById('allem-energy');
  //   allemEnergyElement.innerHTML = allemEnergyString;
  //   // Коммунальный сектор
  //   const allemCommunalString = jsonData.assetsAllocation.pieChart1[5].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[5].value + ',0%' : jsonData.assetsAllocation.pieChart1[5].value + '%'
  //   const allemCommunalElement = document.getElementById('allem-communal');
  //   allemCommunalElement.innerHTML = allemCommunalString;
  //   // Потребительские товары
  //   const allemСonsumerString = jsonData.assetsAllocation.pieChart1[7].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[7].value + ',0%' : jsonData.assetsAllocation.pieChart1[7].value + '%'
  //   const allemСonsumerElement = document.getElementById('allem-consumer-materials');
  //   allemСonsumerElement.innerHTML = allemСonsumerString;
  //   // Телекоммуникации
  //   const allemTelecomunicationString = jsonData.assetsAllocation.pieChart1[8].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[8].value + ',0%' : jsonData.assetsAllocation.pieChart1[8].value + '%'
  //   const allemTelecomunicationElement = document.getElementById('allem-telecomunication');
  //   allemTelecomunicationElement.innerHTML = allemTelecomunicationString;
  //   // Циклические товары
  //   const allemCiklString = jsonData.assetsAllocation.pieChart1[9].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[9].value + ',0%' : jsonData.assetsAllocation.pieChart1[9].value + '%'
  //   const allemCiklElement = document.getElementById('allem-cikl-materials');
  //   allemCiklElement.innerHTML = allemCiklString;
  //    // Промышленность
  //    const allemIndustryString = jsonData.assetsAllocation.pieChart1[10].value % 1 === 0 ? jsonData.assetsAllocation.pieChart1[10].value + ',0%' : jsonData.assetsAllocation.pieChart1[10].value + '%'
  //    const allemIndustryElement = document.getElementById('allem-industry-materials');
  //    allemIndustryElement.innerHTML = allemIndustryString;


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
        numberDiv.id = `allem-${item.id}`; // Use the item's ID as part of the ID
        itemDiv.appendChild(numberDiv);

        assetsAllocationContainer.appendChild(itemDiv);
      });

      // Дата
      const allemDateString = 'Данные за ' + jsonData.income.date;
      const allemDateElement = document.getElementById('allga-date');
      allemDateElement.innerHTML = allemDateString;


    // Денежные средства 
  //   const cashString = jsonData.portfolioStructure[0].percent % 1 === 0 ? jsonData.portfolioStructure[0].percent + ',0%' : jsonData.portfolioStructure[0].percent + '%'
  //   const cashElement = document.getElementById('allem-cash');
  //   cashElement.innerHTML = cashString;
  //   // US TREASURY NB"
  //   const mosaicNbString = jsonData.portfolioStructure[1].percent % 1 === 0 ? jsonData.portfolioStructure[1].percent + ',0%' : jsonData.portfolioStructure[1].percent + '%'
  //   const mosaicNbElement = document.getElementById('allem-us-treasury-nb');
  //   mosaicNbElement.innerHTML = mosaicNbString;
  //   // Pakuwon Jati Tbk
  //   const pakuwonString = jsonData.portfolioStructure[2].percent % 1 === 0 ? jsonData.portfolioStructure[2].percent + ',0%' : jsonData.portfolioStructure[2].percent + '%'
  //   const pakuwonElement = document.getElementById('allem-pakuwon');
  //   pakuwonElement.innerHTML = pakuwonString
  //   // Goldman  
  //   const goldmanString = jsonData.portfolioStructure[3].percent % 1 === 0 ? jsonData.portfolioStructure[3].percent + ',0%' : jsonData.portfolioStructure[3].percent + '%'
  //   const goldmanElement = document.getElementById('allem-goldman');
  //   goldmanElement.innerHTML = goldmanString
  //   // MOSAIC CO
  //   const mosaicString = jsonData.portfolioStructure[4].percent % 1 === 0 ? jsonData.portfolioStructure[4].percent + ',0%' : jsonData.portfolioStructure[4].percent + '%'
  //   const mosaicElement = document.getElementById('allem-mosaic');
  //   mosaicElement.innerHTML = mosaicString
  //   // Adaro Indonesia
  //   const adaroString = jsonData.portfolioStructure[5].percent % 1 === 0 ? jsonData.portfolioStructure[5].percent + ',0%' : jsonData.portfolioStructure[5].percent + '%'
  //   const adaroElement = document.getElementById('allem-adaro');
  //   adaroElement.innerHTML = adaroString
  //   // Microsoft Corp
  //   const microsoftCorpString = jsonData.portfolioStructure[6].percent % 1 === 0 ? jsonData.portfolioStructure[6].percent + ',0%' : jsonData.portfolioStructure[6].percent + '%'
  //   const microsoftCorpElement = document.getElementById('allem-microsoft-corp');
  //   microsoftCorpElement.innerHTML = microsoftCorpString
  //   // Turk Telekomunikasyon
  //   const turkTelekomunikasyonString = jsonData.portfolioStructure[7].percent % 1 === 0 ? jsonData.portfolioStructure[7].percent + ',0%' : jsonData.portfolioStructure[7].percent + '%'
  //   const turkTelekomunikasyonElement = document.getElementById('allem-turk-telekomunikasyon');
  //   turkTelekomunikasyonElement.innerHTML = turkTelekomunikasyonString
  //   // Volkswagen Group
  //   const turkVolkswagenString = jsonData.portfolioStructure[8].percent % 1 === 0 ? jsonData.portfolioStructure[8].percent + ',0%' : jsonData.portfolioStructure[8].percent + '%'
  //   const turkVolkswagenElement = document.getElementById('allem-volkswagen');
  //   turkVolkswagenElement.innerHTML = turkVolkswagenString




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
      const priceDateElement = document.getElementById('allga-price-date')
      priceDateElement.innerHTML = priceDateString

      // 1 месяц
      const oneMonthString = jsonData.income.oneMonth
      const oneMonthElement = document.getElementById('allga-one-month-with-dividends')
      const oneMonthFloat = parseFloat(oneMonthString.replace(',', '.'));
      if (oneMonthFloat < 0) {
          oneMonthElement.style.color = '#fc3d39';
      } else {
          oneMonthElement.style.color = '#2da771';
      }
      oneMonthElement.innerHTML = oneMonthString

      // 3 месяца
      const threeMonthsString = jsonData.income.threeMonths
      const threeMonthsElement = document.getElementById('allga-three-months-with-dividends')
      const threeMonthsFloat = parseFloat(threeMonthsString.replace(',', '.'));
      if (threeMonthsFloat < 0) {
          threeMonthsElement.style.color = '#fc3d39';
      } else {
          threeMonthsElement.style.color = '#2da771';
      }
      threeMonthsElement.innerHTML = threeMonthsString

      // Пол года 
      const halfYearString = jsonData.income.halfYear
      const halfYearElement = document.getElementById('allga-half-year-with-dividends')
      const halfYearFloat = parseFloat(halfYearString.replace(',', '.'));
      if (halfYearFloat < 0) {
          halfYearElement.style.color = '#fc3d39';
      } else {
          halfYearElement.style.color = '#2da771';
      }
      halfYearElement.innerHTML = halfYearString


      // За 1 год
      const yearString = jsonData.income.year
      const yearElement = document.getElementById('allga-year-with-dividends')
      const yearFloat = parseFloat(yearString.replace(',', '.'));
      if (yearFloat < 0) {
          yearElement.style.color = '#fc3d39';
      } else {
          yearElement.style.color = '#2da771';
      }
      yearElement.innerHTML = yearString


      // За все время
      const fromBeginningString = jsonData.income.fromBeginning;
      const fromBeginningElement = document.getElementById('allga-from-beginning-with-dividends');      
      const fromBeginningFloat = parseFloat(fromBeginningString.replace(',', '.'));
      if (fromBeginningFloat < 0) {
          fromBeginningElement.style.color = '#fc3d39';
      } else {
          fromBeginningElement.style.color = '#2da771';
      }      
      fromBeginningElement.innerHTML = fromBeginningString;
      
  
      // Динамика стоимости пая в годовом выражении без учета дивидендов
      // 1 месяц
      const oneMonthWithoutDividendsString = jsonData.incomeWithoutDividends.oneMonthWithoutDividends
      const oneMonthWithoutDividendsElement = document.getElementById('allga-one-month-without-dividends')
      const oneMonthWithoutDividendsFloat = parseFloat(oneMonthWithoutDividendsString.replace(',', '.'));
      if (oneMonthWithoutDividendsFloat < 0) {
          oneMonthWithoutDividendsElement.style.color = '#fc3d39';
      } else {
          oneMonthWithoutDividendsElement.style.color = '#2da771';
      }
      oneMonthWithoutDividendsElement.innerHTML = oneMonthWithoutDividendsString


      // 3 месяца
      const threeMonthsWithoutDividendsString = jsonData.incomeWithoutDividends.threeMonthsWithoutDividends
      const threeMonthsWithoutDividendsElement = document.getElementById('allga-three-months-without-dividends')
      const threeMonthsWithoutDividendsFloat = parseFloat(threeMonthsWithoutDividendsString.replace(',', '.'));
      if (threeMonthsWithoutDividendsFloat < 0) {
          threeMonthsWithoutDividendsElement.style.color = '#fc3d39';
      } else {
          threeMonthsWithoutDividendsElement.style.color = '#2da771';
      }
      threeMonthsWithoutDividendsElement.innerHTML = threeMonthsWithoutDividendsString


      // Пол года
      const halfYearWithoutDividendsString = jsonData.incomeWithoutDividends.halfYearWithoutDividends
      const halfYearWithoutDividendsElement = document.getElementById('allga-half-year-without-dividends')
      const halfYearWithoutDividendsFloat = parseFloat(halfYearWithoutDividendsString.replace(',', '.'));
      if (halfYearWithoutDividendsFloat < 0) {
          halfYearWithoutDividendsElement.style.color = '#fc3d39';
      } else {
          halfYearWithoutDividendsElement.style.color = '#2da771';
      }
      halfYearWithoutDividendsElement.innerHTML = halfYearWithoutDividendsString


      // За 1 год
      const yearWithoutDividendsString = jsonData.incomeWithoutDividends.yearWithoutDividends
      const yearWithoutDividendsElement = document.getElementById('allga-year-without-dividends')
      const yearWithoutDividendsFloat = parseFloat(yearWithoutDividendsString.replace(',', '.'));
      if (yearWithoutDividendsFloat < 0) {
          yearWithoutDividendsElement.style.color = '#fc3d39';
      } else {
          yearWithoutDividendsElement.style.color = '#2da771';
      }
      yearWithoutDividendsElement.innerHTML = yearWithoutDividendsString

      
      // За все время
      const fromBeginningWithoutDividendsString = jsonData.incomeWithoutDividends.fromBeginningWithoutDividends
      const fromBeginningWithoutDividendsElement = document.getElementById('allga-from-beginning-without-dividends')
      const fromBeginningWithoutDividendsFloat = parseFloat(fromBeginningWithoutDividendsString.replace(',', '.'));
      if (fromBeginningWithoutDividendsFloat < 0) {
          fromBeginningWithoutDividendsElement.style.color = '#fc3d39';
      } else {
          fromBeginningWithoutDividendsElement.style.color = '#2da771';
      }
      fromBeginningWithoutDividendsElement.innerHTML = fromBeginningWithoutDividendsString
  
    }
    
    displayData();
  
  });