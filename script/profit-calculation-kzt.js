document.getElementById('investedMoneyRange').addEventListener('input', (e) => {
    document.getElementById('investedMoneyInput').value = `${formatAmountPlain(e.target.value, 0)} KZT`;
    document.getElementById('investedMoneyFormInput').value = e.target.value;
    calculateProfit(+e.target.value);
});
function calculateProfit(investedMoney) {
    const profit = investedMoney * 0.200;
    document.getElementById('coupon-first').innerHTML = `${formatAmountPlain(profit / 2)} KZT`;
    document.getElementById('coupon-second').innerHTML = `${formatAmountPlain(profit / 2)} KZT`;
    document.getElementById('coupon-double').innerHTML = `${formatAmountPlain(profit)} KZT`;
    document.getElementById('final').innerHTML = `${formatAmountPlain(profit + investedMoney)} KZT`;
}

const formatAmountPlain = (amount, toFixed = 2) => {
    if (!amount) return 0;
    const [integerPart, decimalPart] = (+amount).toFixed(toFixed).toString().split(".");
    if (decimalPart) {
        return `${integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.${decimalPart}`;
    }
    return `${integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}