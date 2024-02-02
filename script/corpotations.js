const tableContainer = document.getElementById('table-container');
const paginationContainer = $('#pagination-container');
let allData = [];

function fetchAndDisplayData(action) {
    fetchJSONData(action)
        .then(data => {
            displayData(data);
            initPagination();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function fetchJSONData(selectedAction) {
    const month = document.getElementById('month').value;

    const [year, currentMonth] = month.split('-');
    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(currentMonth, 10);
    const nextMonth = (monthInt % 12) + 1;
    const nextYear = yearInt + Math.floor((monthInt + 1) / 13);
    const nextMonthString = `${nextYear}-${nextMonth.toString().padStart(2, '0')}`;

    const currentDate = new Date();
    const monthNow = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    const previousMonthDate = new Date(currentDate);
    previousMonthDate.setMonth(currentDate.getMonth() - 1);
    const previousMonth = `${previousMonthDate.getFullYear()}-${(previousMonthDate.getMonth() + 1).toString().padStart(2, '0')}`;

    const url = `https://dev-server.jusaninvest.kz/api/v1/securities/actions?cursorId=&from=${month ? month : monthNow}&to=${month ? nextMonthString : previousMonth}&action=${selectedAction ? selectedAction : ''}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            allData = data.datatable.data; 
            return allData.slice(0, 50); 
        });
}

function displayData(data) {
    const table = document.createElement('table');
    table.className = 'uk-table uk-table-divider';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ["date", "action", "ticker", "name", "value", "contraticker", "contraname"];

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

function initPagination() {
    const itemsPerPage = 50;

    $('#pagination-container').pagination({
        dataSource: function (done) {
            done(allData);
        },
        pageSize: itemsPerPage,
        callback: function (data, pagination) {
            displayData(data);
        },
        showPageNumbers: true,
        ulClassName: 'pagination',
        activeClassName: 'active',
        prevText: '«',
        nextText: '»',
        pageRange: 2,
        afterPageOnClick: function (event, pageNumber) {
        },
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Set the default value for the month input to the current month
    const currentDate = new Date();
    const defaultMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    document.getElementById('month').value = defaultMonth;

    // Set the max attribute of the month input to the current month
    const maxMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    document.getElementById('month').setAttribute('max', maxMonth);

    // Fetch and display data on page load
    fetchAndDisplayData();

    // Event listener for month change
    document.getElementById('month').addEventListener('change', function () {
        const activeButton = document.querySelector('.action-btn.active');
        const selectedAction = activeButton ? activeButton.getAttribute('data-action') : '';
        fetchAndDisplayData(selectedAction);
    });

    // Event listeners for action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function () {
            actionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const selectedAction = this.getAttribute('data-action');
            fetchAndDisplayData(selectedAction);
        });
    });
});


