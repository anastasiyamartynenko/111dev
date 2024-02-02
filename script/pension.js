document.addEventListener('DOMContentLoaded', function() {
    async function fetchJSONData() {
        const response = await fetch('https://content.jusaninvest.kz/pifs/by-slug/pension');
        const data = await response.json();
       
        return data;
      }

    async function displayData() {
        const jsonData = await fetchJSONData(); 
        const activeWord = document.getElementById('actives-word')

        // Perfromance
        const performanseDate1 = document.getElementById("performanseDate1")
        performanseDate1.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `${jsonData.performanse.performanseDate} жағдай бойынша` : `По состоянию на ${jsonData.performanse.performanseDate}`;

        const performanseDate2 = document.getElementById("performanseDate2")
        performanseDate2.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `${jsonData.performanse.performanseDate} жағдай бойынша` : `По состоянию на ${jsonData.performanse.performanseDate}`;

        const performanseDate3 = document.getElementById("performanseDate3")
        performanseDate3.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `${jsonData.performanse.performanseDate} жағдай бойынша` : `По состоянию на ${jsonData.performanse.performanseDate}`;

        const actives = document.getElementById("actives")
        actives.innerText = jsonData.performanse.actives;

        const attractedFunding = document.getElementById("attractedFunding")
        attractedFunding.innerText = jsonData.performanse.attractedFunding;

        const turnover = document.getElementById("turnover")
        turnover.innerText = jsonData.performanse.turnover;

        const brokerageService = document.getElementById("brokerageService")
        brokerageService.innerText = jsonData.performanse.brokerageService;


        // Strategy
        const strategyDate2 = document.getElementById("strategyDate2")
        strategyDate2.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `${jsonData.strategy.strategyDate} жағдай бойынша` : `По состоянию на ${jsonData.strategy.strategyDate}`;

        const strategyDate3 = document.getElementById("strategyDate3")
        strategyDate3.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `${jsonData.strategy.strategyDate} ` : ` ${jsonData.strategy.strategyDate}`;

        const yearIncome = document.getElementById("yearIncome")
        yearIncome.innerText = jsonData.strategy.yearIncome;

        const monthIncome = document.getElementById("monthIncome");
        monthIncome.innerText = jsonData.strategy.monthIncome;

        const clearlyCost = document.getElementById("clearlyCost");
        clearlyCost.innerText = jsonData.strategy.clearlyCost;

        const fee = document.getElementById("fee");
        fee.innerText = jsonData.strategy.fee;

        // Fund Details
        const pieChart1 = document.getElementById('pieChart1');

        const colorsArray = [
            "#14508C",
            "#b1d1f1",
            "#699455",
            "#fe5000",
            "#21212b",
            "#4169e1",
            "#4683bf",
            "#F2CC8F",
            "#F2CC8F",
            "#699455",
            "#bc5090",
            "#777",
            "#75e393",
            "#5bdfdf",
            "#6ab8b4",
            "#FF5733",
            "#8A2BE2",
            "#FFD700",
            "#32CD32",
            "#FF6347",
            "#8B4513",
            "#9932CC",
            "#FFA07A",
            "#00CED1",
            "#800000",
            "#FF69B4",
            "#008080",
            "#2F4F4F",
            "#8B0000",
            "#7B68EE",
            "#D2691E",
            "#00FA9A",
            "#4B0082",
            "#8B008B",
            "#2E8B57",
            "#DAA520",
            "#6A5ACD",
            "#B22222",
            "#228B22",
            "#A52A2A",
            "#20B2AA",
            "#9370DB",
          ];

        // assets Allocation
        for (let index = 0; index < jsonData.assetsAllocation.pieChart1.length; index++) {
            const tr = document.createElement("tr");
            
            const tdColor = document.createElement("td");
            const coloredDiv = document.createElement("div");
            coloredDiv.className = "";
            coloredDiv.style.width = "10px";
            coloredDiv.style.height = "10px";
            coloredDiv.style.backgroundColor = colorsArray[index];
            tdColor.appendChild(coloredDiv);
            tr.appendChild(tdColor);
          
            const tdTitle = document.createElement("td");
            tdTitle.textContent = activeWord.innerText === 'Басқарудағы активтер' ? jsonData.assetsAllocation.pieChart1[index].title_kz : jsonData.assetsAllocation.pieChart1[index].title_ru;
            tr.appendChild(tdTitle);
          
            const tdValue = document.createElement("td");
            tdValue.textContent = jsonData.assetsAllocation.pieChart1[index].value + "%";
            tr.appendChild(tdValue);

            pieChart1.appendChild(tr);
        }

        // Pie chart 2
        const pieChart2 = document.getElementById('pieChart2');

        for (let index = 0; index < jsonData.assetsAllocation.pieChart2.length; index++) {
            const tr = document.createElement("tr");
            
            const tdColor = document.createElement("td");
            const coloredDiv = document.createElement("div");
            coloredDiv.className = "";
            coloredDiv.style.width = "10px";
            coloredDiv.style.height = "10px";
            coloredDiv.style.backgroundColor = colorsArray[index];
            tdColor.appendChild(coloredDiv);
            tr.appendChild(tdColor);
          
            const tdTitle = document.createElement("td");
            tdTitle.textContent = activeWord.innerText === 'Басқарудағы активтер' ? jsonData.assetsAllocation.pieChart2[index].title_kz : jsonData.assetsAllocation.pieChart2[index].title_ru;
            tr.appendChild(tdTitle);
          
            const tdValue = document.createElement("td");
            tdValue.textContent = jsonData.assetsAllocation.pieChart2[index].value + "%";
            tr.appendChild(tdValue);

            pieChart2.appendChild(tr);
        }

        const assetsDate = document.getElementById('assetsDate')
        assetsDate.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `*${jsonData.income.date} жағдай бойынша` : `*По состоянию на ${jsonData.income.date}`; 

        // Portfolio Structure
        const portfolioStructureTBody = document.getElementById('portfolioStructure');

        for (let index = 0; index < jsonData.portfolioStructure.length; index++) {
            const tr = document.createElement("tr");

            const tdImage = document.createElement("td");
            const img = document.createElement("img");
            const imgRequest = await fetch(`https://content.jusaninvest.kz/files/${jsonData.portfolioStructure[index].img}`)
            const imgBlob = await imgRequest.blob();

            const imgUrl = URL.createObjectURL(imgBlob);

            img.src = imgUrl;
            img.style.width = "35px";
            img.alt = "icon";
            tdImage.appendChild(img);
            tr.appendChild(tdImage);

            const tdTitle = document.createElement("td");
            tdTitle.textContent = jsonData.portfolioStructure[index].title;
            tr.appendChild(tdTitle);
          
            const tdValue = document.createElement("td");
            tdValue.textContent = jsonData.portfolioStructure[index].percent + "%";
            tr.appendChild(tdValue);
          
            portfolioStructureTBody.appendChild(tr);
        }

        if(activeWord.innerText !== 'Басқарудағы активтер') {
            const portfolioDate = document.getElementById('portfolioDate')
            portfolioDate.innerText = activeWord.innerText === 'Басқарудағы активтер' ? `*${jsonData.income.date} жағдай бойынша` : `*По состоянию на ${jsonData.income.date}`; 
        }
   
        // Links 
        const teaser = document.getElementById('teaser');
        teaser.href = `https://content.jusaninvest.kz/files/${jsonData.fundParameters.teaser.file}`;

        const investDeclaration = document.getElementById('investDeclaration');
        investDeclaration.href = `https://content.jusaninvest.kz/files/${jsonData.fundParameters.investDeclaration.file}`;

    }


    displayData()
})