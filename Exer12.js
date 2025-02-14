const prompt = require('prompt-sync')();
const preco = parseFloat(prompt("Digite o preço do produto: "));
const desconto = parseFloat(prompt("Digite o desconto: "));

const precoDesconto = preco - (preco *(desconto/ 100));

console.log(`O preço do produto com desconto é ${precoDesconto.toFixed(2)}`);