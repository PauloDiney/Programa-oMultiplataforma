const prompt = require('prompt-sync')();
const raioCirculo = parseFloat(prompt("Digite o raio do círculo: "));

const perimetroCirculo = 2 * Math.PI * raioCirculo;

console.log(`O perimetro do círculo é ${perimetroCirculo.toFixed(2)}`);