const prompt = require('prompt-sync')();

function convertCelsiusToFahrenheit(gC) {
    gF = (gC * 9/5) + 32;
    return gF;
}
var gCin = prompt("Ingrece la temperatura en celcius: ");
gCin = parseInt(gCin);
console.log("La temperatura en Fahrenheit es: " + convertCelsiusToFahrenheit(gCin) + "°F.");