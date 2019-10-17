'use strict';

// variables: 
var button = document.getElementById('greeter-button');
var output = document.getElementById('greeter-output');
var buttonFahr = document.getElementById('greeter-button-1');
var output = document.getElementById('greeter-output-1');
var waterState = document.getElementById('greeter-output-2')
output.innerHTML = 'check the temperature!' + '<br><br>';

// condition
function checkState(temperatureInCelsius) {
    if (temperatureInCelsius <= 0) {
        //stable
        waterState.innerHTML = '<br><br>' + 'eau à état stable';
    } else if (temperatureInCelsius > 0 && temperatureInCelsius < 100) {
        //liquide
        waterState.innerHTML = '<br><br>' + 'eau à état liquide';
    } else {
        //gazeux
        waterState.innerHTML = '<br><br>' + 'à état gazeux';
    }
}

//Celsius to Fahrenheit
output.innerHTML = 'Cliquez sur le bouton et verifier la meteo!' + '<br><br>';
button.addEventListener('click', function () {
    var celsius;
    var numberC;
    var celsiusToFahrenheit;
    celsius = window.prompt('Mettre ici la température en degrés Celsius:');

    function numberC(celsiusToFahrenheit) {
        return (1.8 * celsiusToFahrenheit) + 32;
    }
    celsiusToFahrenheit = numberC(celsius);
    if (isNaN(celsius)) {
        alert('Ecrivez le bon numéro.')
        return;
    }
    output.innerHTML = 'Température en Celsius: ' + celsius + '<br><br>' + 'Température en Farenheits:' + celsiusToFahrenheit + '<br><br>';
    checkState(celsius);
});
//Fahrenheit to Celsius

buttonFahr.addEventListener('click', function () {
    var fahrenheit;
    var numberF;
    var fahrenheitToCelsius;
    fahrenheit = window.prompt('Put here temperature Fahrenheit');

    function numberF(fahrenheiToCelsius) {
        return (fahrenheiToCelsius - 32) / 1.8;
    }
    fahrenheitToCelsius = numberF(fahrenheit);
    if (isNaN(fahrenheit)) {
        alert('Ecrivez le bon numéro.')
        return;
    }
    if (fahrenheitToCelsius == fahrenheitToCelsius);
    output.innerHTML = 'Température en Fareheits:' + fahrenheit + '<br><br>' + 'Température en Celsius:: ' + fahrenheitToCelsius + '<br><br>';
    checkState(fahrenheitToCelsius);
});
// Text: 
function addText(text) {
    document.write('<br><br>' + text);
}
addText('Cliquez sur le bouton et verifier la meteo!');