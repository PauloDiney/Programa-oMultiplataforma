const prompt = require('prompt-sync')();
const metros = parseFloat(prompt("Digite a distância em metros: "));

const centimetros = metros * 100; 

console.log(`A distância em centímetros é ${centimetros.toFixed(2)}`);
