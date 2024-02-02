async function fetchJSONData() {
  const response = await fetch('https://content.jusaninvest.kz/pifs/by-slug/abyroi');
  const data = await response.json();
 
  return data;
}

let pifData = [];

const updateGraphPointDate = e => {
  const tabs = document.querySelectorAll('.pifDynamic-chart-btns-item');
  tabs.forEach(item => {
    item.classList.remove('active');
  })
  e.classList.add('active');
  let days = e.dataset.days;
  console.log(days)
  return +days;
}

const  getData = (searchDate) => {
  let arr = []
  for(let i = 0; i < pifData.length; i++){                
    if(pifData[i].date === searchDate){
      let remove = arr.splice(pifData[i].date)
    } else{
      arr.push(pifData[i])
    }
  }
  return arr
}

abyroiDonutChart = async () => {
  const jsonData = await fetchJSONData(); 

  const data = {
    // labels: ['Денежные средства', 'AAPL 3.35 02/09/27', 'PYPL 3.9 06/01/27', 'JPM 4.08 04/26/26', 'AMZN 3.3 04/13/27', 'NFLX 5 7/8 02/15/25', 'Microsoft Corp', 'Alphabet', 'Facebook', 'UnitedHealth Group ', 'Verizon Communications Inc', 'Apple Inc', 'Monster Beverage Corp', '3M Company', 'Procter&Gamble Co', 'Southwest Airlines Co', 'BlackRock Inc', 'Johnson & Johnson', 'Taiwan Semiconductor Manufacturing Co', 'Pfizer Inc.'],
    datasets: [{
      label: 'Chart Data',
      data: [1.9,18.6,18.3,18.1,14.6,3.2,3.1,2.5,2.4,11.1,3.3,0.9,1.1,0.3],
      backgroundColor: [    
        '#0f7b8a',
        '#23adec',
        '#00ee8b',
        '#ff9166',
        '#f4fd6f',
        '#3c86f7',
        '#a87de2',
        '#00ffdc',
        '#FE5000',
        '#525a40',
        '#09c0ee',
        '#03b11a',
        '#f3d31e',
        '#0e3a97'      
      ],
      hoverOffset: 4,
      width: '50px',
      borderWidth: 0,
      cutout: '80%',

    }]
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        },
      }
    }
  };
  /* var myChart = new Chart(
    document.getElementById('myDonutChart'),
    config
  ); */
  document.querySelectorAll('.pifCommon-list-transparent-item-number').forEach((item, index) => {
    item.innerHTML = `${data.datasets[0].data[index].toFixed(1).toString().replace('.', ',')}%`
  })


const datasets = [
    { 
        // Облигации
        labels: [],
        datasets: [{
            label: 'Chart Data',
            data: [100-0, 0],
            backgroundColor: [
                '#EBEBEB',
                '#FE5000'
            ],
            hoverOffset: -4,
            width: '50px',
            borderWidth: 0,
            cutout: '80%',

        }]
    },
    {
        // Акции
        labels: [],
        datasets: [{
            label: 'Chart Data',
            data: [100-0, 0],
            backgroundColor: [
                '#EBEBEB',
                '#FE5000'
            ],
            hoverOffset: -4,
            width: '50px',
            borderWidth: 0,
            cutout: '80%',

        }]
    },
      
    {
        // Деньги
        labels: [],
        datasets: [{
            label: 'Chart Data',
            data: [100-0, 0],
            backgroundColor: [
                '#EBEBEB',
                '#FE5000'
            ],
            hoverOffset: -4,
            width: '50px',
            borderWidth: 0,
            cutout: '80%',

        }]
    }, 
];

fetch('https://content.jusaninvest.kz/pifs/by-slug/abyroi')
.then(response => response.json())
.then(data => {
  datasets.forEach((item, index) => {
    datasets[index].datasets[0].data =  [100-data.assetsAllocation.pieChart2[index].value, data.assetsAllocation.pieChart2[index].value]
  })
  
   allCharts = document.querySelectorAll('.pifCommon-countries-chart');
   myCharts = allCharts.forEach((item, index) => {
    charts[index].update();

    document.querySelectorAll('.pifCommon-countries-number').forEach((item, index) => {
        item.innerHTML = `${getCurrentConfig(index).data.datasets[0].data[1].toString().replace('.', ',')}%`
    })
})
});


const getCurrentConfig = (index) => {
    return configs = {
        type: 'doughnut',
        data: datasets[index],
        options: {
            plugins: {
                legend: {
                    display: false
                },
            }
        }
    };
}

/* const renderPercent = (item) => {
    console.log(document.querySelectorAll('.pifCommon-countries-number'))
    return 
} */
const charts ={}
var allCharts = document.querySelectorAll('.pifCommon-countries-chart');
var myCharts = allCharts.forEach((item, index) => {
    charts[index] = new Chart(
        item,
        getCurrentConfig(index)
    )
    document.querySelectorAll('.pifCommon-countries-number').forEach((item, index) => {
        item.innerHTML = `${getCurrentConfig(index).data.datasets[0].data[1].toString().replace('.', ',')}%`
    })
})

const now = moment();
    const startOfTheYear = moment().startOf('year');
    const fromFirstDateOfYearBtn = document.querySelector('#fromFirstDateOfYear');
    const countDaysDiffrents = () => {
      return now.diff(startOfTheYear, 'days');
    }
    fromFirstDateOfYearBtn.attributes[2].value = countDaysDiffrents()



    const updateGraphPointDate = e => {
      const tabs = document.querySelectorAll('.pifDynamic-chart-btns-item');
      tabs.forEach(item => {
        item.classList.remove('active');
      })
      e.classList.add('active');
      let days = e.dataset.days;
      console.log(days)
      return +days;
    }
  
    var endDate = moment().subtract(updateGraphPointDate(document.querySelectorAll('.pifDynamic-chart-btns-item')[1]), 'days').format('DD.MM.YYYY')    


    var url = `https://content.jusaninvest.kz/files/${jsonData.fundParameters.historicalPrice.file}`;

    var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = function(e) {
            var arraybuffer = oReq.response;

            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");

            /* Call XLSX */
            var workbook = XLSX.read(bstr, {
                type: "binary",
                cellDates: true, 
                dateNF: 'dd"."mm"."yyyy'
            });

            /* DO SOMETHING WITH workbook HERE */
            var first_sheet_name = workbook.SheetNames[0];
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            pifData = XLSX.utils.sheet_to_json(worksheet, {header: ["date", "price"], raw:false})
            
            const dataLineChart = {
            labels: getData(endDate).map(item => item.date),
            datasets: [{
              label: 'abyROI',
              data: getData(endDate).map(item => +item.price.toString().replace(',', '')),
              fill: false,
              borderColor: '#FE5000',
              tension: 0.1
            }]
          };
          const configLineChart = {
              type: 'line',
              data: dataLineChart,
              options: {
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  xAxis: {
                    display: false,
                  },
                  yAxes: {
                    ticks: {
                      /* display: false */                      
                      maxTicksLimit: 6,
                      height: 10
                    },
                    grid: {
                      drawTicks: false,
                      color: '#afafaf',
                      borderWidth: 0,
                    }
                  }
                },
              }
            };
          lineChart = new Chart(
            document.getElementById('line-chart'),
            configLineChart        
          );

          // let today = dataLineChart.datasets[0].data
          // let todaysPrice = new Intl.NumberFormat('en-IN').format(today[today.length - 1].toFixed(2))
          // document.getElementById('today').innerHTML = todaysPrice.toString().replace(',', ' ')
          
        }
        oReq.send();
}

var lineChart;
const rerenderWithNewData = e => {
lineChart.destroy();
var fromDate = moment().subtract(updateGraphPointDate(e), 'days').format('DD.MM.YYYY')
  const dataLineChart = {
    labels:  getData(fromDate).map(item => item.date),
    datasets: [{
      label: 'abyROI',
      data:  getData(fromDate).map(item => +item.price.toString().replace(',', '')),
      fill: false,
      borderColor: '#FE5000',
      tension: 0.1
    }]
  };
  const configLineChart = {
    type: 'line',
    data: dataLineChart,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xAxis: {
          display: false,
        },
        yAxes: {
          ticks: {
            /* display: false */
            maxTicksLimit: 6,
            height: 10
          },
          grid: {
            drawTicks: false,
            color: '#afafaf',
            borderWidth: 0,
          }
        }
      },
    }
  };
  lineChart = new Chart(
    document.getElementById('line-chart'),
    configLineChart
  );
  
}
abyroiDonutChart()