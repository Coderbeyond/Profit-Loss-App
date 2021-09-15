var initialPrice = document.querySelector("#Initial");
var quantity = document.querySelector("#Quantity");
var currentPrice = document.querySelector("#Current");
var submitBtn = document.querySelector("#Submitbtn");
var outputBox = document.querySelector("#Output");

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    ip = initialPrice.value;
    qty = quantity.value;
    cp = currentPrice.value;

    calculateStocks(ip, qty, cp);

}

function calculateStocks(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * qty;
        var lossPercentage = (loss / initial) * 100;
        showOutput(
            `The loss is ${loss} and the loss percentage is ${lossPercentage} %`
        );
    } else if (current > initial) {
        var profit = (current - initial) * qty;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`The profit is ${ profit } and the profit Percentage is ${ profitPercentage } % ` );
  } else {
        showOutput("No Gains , No Losses");
    }
}

function showOutput(msg) {
    outputBox.innerHTML = msg;
}