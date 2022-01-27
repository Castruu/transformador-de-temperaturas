function celsiusToFahrenheit() {
    let celsius = document.getElementById("cDegrees").value;
    let resultTitle = document.getElementById("cResult");
    resultTitle.innerText = convertCelsiusToFahrenheit(celsius).toFixed(2) + "°F";
}

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

function fahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fDegrees").value;
    let resultTitle = document.getElementById("fResult");
    resultTitle.innerText = convertFahrenheitToCelsius(fahrenheit).toFixed(2)  + "°C";
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
