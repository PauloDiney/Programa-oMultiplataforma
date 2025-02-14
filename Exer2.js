const prompt = require('prompt-sync')();
const celcius = parseFloat(prompt("Digite a temperatura em Celcius: "));

const fahrenheit = (celcius * 9/5) + 32;

console.log(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}`);