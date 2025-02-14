const prompt = require('prompt-sync')();
const largura = parseFloat(prompt("Digite a largura do retângulo: "));
const altura = parseFloat(prompt("Digite a altura do retângulo: "));

const perimetro = 2 * (largura + altura);

console.log(`O perimetro do retangulo é de ${perimetro.toFixed(2)}`);