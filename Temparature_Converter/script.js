const userInpt = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convertTemp() {
    if(toFahrenheit.checked) {
        temp = Number(userInpt.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if(toCelsius.checked) {
        temp = Number(userInpt.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Unit selection is mandatory";
    }
}