const prompt = require('prompt-sync')();
const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

const celcius = (fahrenheit - 32) * 5/9;

console.log(`A temperatura em Celcius é ${celcius.toFixed(2)}`);