const prompt = require('prompt-sync')();
const capital = parseFloat(prompt("Digite o capital inicial: "));
const taxa = parseFloat(prompt("Digite a taxa de juros: "));
const tempo = parseFloat(prompt("Digite o tempo de aplicação: "));

const jurosSimples = capital * (taxa / 100) * tempo;

console.log(`O juros simples é de ${jurosSimples.toFixed(2)}`);