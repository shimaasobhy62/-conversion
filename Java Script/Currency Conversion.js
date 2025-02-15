var input_amount = document.getElementById("amount");
var from_currency = document.getElementById("from_currency");
var to_currency = document.getElementById("to_currency");
var output_word = document.getElementById("word");
var exchange = document.getElementById("exchange");
var output_amount = document.getElementById("output-text");
var output_from = document.getElementById("from");
var output_to = document.getElementById("to");


exchange.addEventListener("click",()=>{
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})

var to_amount = 0;
function calculate(){
    const from_currency_value = from_currency.options[from_currency.selectedIndex].text;
    const to_currency_value = to_currency.options[to_currency.selectedIndex].text;
    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency_value];
        to_amount = (input_amount.value * rate).toFixed(3);
        output_from.innerText= `${input_amount.value} ${from_currency_value}`;
        output_to.innerText = `${to_amount} ${to_currency_value}`;
        output_word.innerText = ` = `;
    })
}


document.getElementById("exchange_button").addEventListener("click",()=>{
    calculate();
});

function FromFlag(element){
    let imgTag = document.querySelector(".from-flag");
    imgTag.src = `https://flagcdn.com/48x36/${element.toLowerCase()}.png`;
}

function ToFlag(element){
    let imgTag = document.querySelector(".to-flag");
    imgTag.src = `https://flagcdn.com/48x36/${element.toLowerCase()}.png`;
}