const prompt = require('prompt-sync')();
const km = parseFloat(prompt("Digite a distância em km: "));

const milhas = km / 1.62137;

console.log(`A distância em milhas é ${milhas.toFixed(2)}`);