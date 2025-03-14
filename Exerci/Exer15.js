const prompt = require('prompt-sync')();
const dia = parseFloat(prompt("Digite o dia: "));

const horas = dia * 24;
const minutos = horas * 60;
const segundos = minutos * 60;

if(dia === 1){
    console.log(`${dia} dia tem ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
}else{
    console.log(`${dia} dias tem ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
}