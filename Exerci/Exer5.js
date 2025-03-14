const prompt = require('prompt-sync')();
const raioCirculo = parseFloat(prompt("Digite o raio do círculo: "));

const areaCirculo = Math.PI * Math.pow(raioCirculo, 2);

console.log(`A área do círculo é ${areaCirculo.toFixed(2)}`);

