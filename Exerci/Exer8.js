const prompt = require('prompt-sync')();
const base = parseFloat(prompt("Digite a base: "));
const expoente = parseFloat(prompt("Digite o expoente: "));

const baseExpoente = Math.pow(base, expoente);

console.log(`O resultado de ${base} elevado a ${expoente} é ${baseExpoente}`);