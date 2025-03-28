import './App.css';
import Botao from './components/botao';
import Texto from './components/texto';
import React, { useState } from 'react';

function App() {

  const [valor1, setValor1] = useState('');

  const [valor2, setValor2] = useState('');

  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const [temp, setTemp] = useState('');

  const [temp2, setTemp2] = useState('');

  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');

  const [raio, setRaio] = useState('');

  const [peso, setPeso] = useState('');
  const [alturaImc, setAlturaImc] = useState('');

  const [km, setKm] = useState('');

  const [metros, setMetros] = useState('');

  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');

  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempoTaxa, setTempoTaxa] = useState('');

  const [capital2, setCapital2] = useState('');
  const [taxa2, setTaxa2] = useState('');
  const [tempoTaxa2, setTempoTaxa2] = useState('');

  const [dia, setDia] = useState('');

  const TransformarDia = () => {
    const hora = parseInt(dia) * 24;
    const minuto = parseInt(dia) * 1440;
    const segundo = parseInt(dia) * 86400;

    alert(`A quantidade de horas é: ${hora} horas, a quantidade de minutos é: ${minuto} minutos e a quantidade de segundos é: ${segundo} segundos`);
  }


  const calcularMontante = () => {
    const montante = (parseInt(capital2) * (1 + (parseInt(taxa2) / 100) * parseInt(tempoTaxa2))).toFixed(2);
    alert(`O montante é: ${montante}`);
  }


  const calcularTaxaJuros = () => {
    const juros = ((parseInt(capital) * parseInt(taxa) * parseInt(tempoTaxa)) / 100).toFixed(2);
    alert(`O valor dos juros é: ${juros}`);
  }

  const calcularPrecoComDesconto = () => {
    const precoComDesconto = (parseInt(preco) - (parseInt(preco) * parseInt(desconto) / 100)).toFixed(2);
    alert(`O preço com desconto é: ${precoComDesconto}`);
  }


  const calcularIMC = () => {
    const imc = parseInt(peso) / Math.pow(parseInt(alturaImc), 2);
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    }
    else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    }

    alert(`Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${classificacao}`);
  }


  const CalcularBaseExpoente = () => {
    const resultado = Math.pow(parseInt(valor1), parseInt(valor2));
    alert(resultado);
  }

  const converterMilhas = () => {
    const milhas = (parseInt(km) * 0.621371).toFixed(2);
    alert(milhas);
  }

  const converterMedida = () => {
    const metro = parseInt(metros) * 100;
    alert(metro);
  }



  const CalcularAreaCirculo = () => {
    const area = Math.PI * Math.pow(parseInt(raio), 2);
    alert(area.toFixed(2));
  }

  const CalcularPerimetroCirculo = () => {
    const perimetro = 2 * Math.PI * parseInt(raio);
    alert(perimetro.toFixed(2));
  }

  const calcularArea = () => {
    const area = parseInt(base) * parseInt(altura);
    alert(area);
  }

  const calcularPerimetro = () => {
    const perimetro = (parseInt(base) + parseInt(altura)) * 2;
    alert(perimetro);
  }


  const converterFahrenheit = () => {
    const tempFahrenheit = ((parseInt(temp) - 32) * 5 / 9).toFixed(2);
    alert(tempFahrenheit);
  }

  const converterCelcius = () => {
    const tempCelcius = ((parseInt(temp2) * 9 / 5) + 32).toFixed(2);
    alert(tempCelcius);
  }

  const media = () => {
    const resultado = ((parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3).toFixed(2);
    alert(`A média das notas é: ${resultado}`);
  }


  return (

    <body>
      <Texto />
      <div className='container'>
        
        <div className='container-exer'>
          <h1>Exercicio 1</h1>

          <h2>Media de Nota</h2>
          <div className='aling-itens'>
            <p>Digite a Primara Nota</p>
            <input type="text" placeholder='Digite a Primara Nota' value={nota1} onChange={(e) => setNota1(e.target.value)} />

            <p>Digite a Segunda Nota</p>
            <input type="text" placeholder='Digite a Segunda Nota' value={nota2} onChange={(e) => setNota2(e.target.value)} />

            <p>Digite a Terceira Nota</p>
            <input type="text" placeholder='Digite a Terceira Nota' value={nota3} onChange={(e) => setNota3(e.target.value)} /><br />
          </div>


          <Botao className="btn" texto="Clique aqui" aoClicar={media} />
        </div>



        <div className='container-exer'>
          <h1>Exercicio 2</h1>
          <h2>Transformar Temperatura Fahrenheit</h2>
          <div className='aling-itens'>
            <p>Digite a Temperatura em Fahrenheit</p>
            <input type="text" placeholder='Digite a Temperatura em celcius' value={temp} onChange={(e) => setTemp(e.target.value)} />
          </div>


          <Botao texto="Clique aqui" aoClicar={converterFahrenheit} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 3</h1>
          <h2>Transformar Fahrenheit em Celcius</h2>
          <div className='aling-itens'>
            <p>Digite a Temperatura em Fahrenheit</p>
            <input type="text" placeholder='Digite a Temperatura em Fahrenheit' value={temp2} onChange={(e) => setTemp2(e.target.value)} />
          </div>

          <Botao texto="Clique aqui" aoClicar={converterCelcius} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 4/6</h1>

          <h2>Calcular Area Retangulo</h2>

          <p>Digite a Base do Retangulo</p>
          <div className='aling-itens'>
            <input type="text" placeholder='Digite a Base do Retangulo' value={base} onChange={(e) => setBase(e.target.value)} />
            <p>Digite a Altura do Retangulo</p>
            <input type="text" placeholder='Digite a Altura do Retangulo' value={altura} onChange={(e) => setAltura(e.target.value)} /><br />
          </div>

          <Botao texto="Area" aoClicar={calcularArea} />
          <Botao texto="Perimetro" aoClicar={calcularPerimetro} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 5/7</h1>

          <h2>Calcular area do Circulo</h2>
          <div className='aling-itens'>
            <p>Digite o Raio do Circulo</p>
            <input type="text" placeholder='Digite o Raio do Circulo' value={raio} onChange={(e) => setRaio(e.target.value)} />
          </div>

          <Botao texto="Area" aoClicar={CalcularAreaCirculo} />
          <Botao texto="Perimetro" aoClicar={CalcularPerimetroCirculo} />
        </div>
        <div className='container-exer'>
          <h1>Exercicio 8</h1>
          <h2>Calcular Base Expoente</h2>
          <div className='aling-itens'>
            <p>Digite a Base</p>
            <input type="text" placeholder='Digite a Base' value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <p>Digite o Expoente</p>
            <input type="text" placeholder='Digite o Expoente' value={valor2} onChange={(e) => setValor2(e.target.value)} /><br />
          </div>

          <Botao texto="Calcular" aoClicar={CalcularBaseExpoente} />

        </div>

        <div className='container-exer'>
          <h1>Exercicio 9</h1>
          <h2>Coverter Medidas</h2>
          <div className='aling-itens'>
            <p>Digite a Medida em metros</p>
            <input type="text" placeholder='Digite a Medida em metros' value={metros} onChange={(e) => setMetros(e.target.value)} /><br />
          </div>

          <Botao texto="Converter" aoClicar={converterMedida} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 10</h1>
          <h2>Transformar de Km para Milhas</h2>

          <div className='aling-itens'>
            <p>Digite a Medida em Km</p>
            <input type="text" placeholder='Digite a Medida em Km' value={km} onChange={(e) => setKm(e.target.value)} /><br />
          </div>

          <Botao texto="Converter" aoClicar={converterMilhas} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 11</h1>
          <h2>Calcular IMC</h2>
          <div className='aling-itens'>
            <p>Digite o Peso</p>
            <input type="text" placeholder='Digite o Peso' value={peso} onChange={(e) => setPeso(e.target.value)} />
            <p>Digite a Altura</p>
            <input type="text" placeholder='Digite a Altura' value={alturaImc} onChange={(e) => setAlturaImc(e.target.value)} /><br />
          </div>

          <Botao texto="Calcular" aoClicar={calcularIMC} />
        </div>

        <div className='container-exer'>
          <h1>Exercicio 12</h1>
          <h2>Calcular Preço com desconto</h2>

          <div className='aling-itens'>
            <p>Digite o preço</p>
            <input type="text" placeholder='Digite o preço' value={preco} onChange={(e) => setPreco(e.target.value)} />
            <p>Digite o desconto</p>
            <input type="text" placeholder='Digite o desconto' value={desconto} onChange={(e) => setDesconto(e.target.value)} /><br />
          </div>
          <Botao texto="Calcular" aoClicar={calcularPrecoComDesconto} />

        </div>

        <div className='container-exer'>
          <h1>Exercicio 13</h1>
          <h2>Calcular taxa de juros Capital</h2>
          <div className='aling-itens'>
            <p>Digite a capital</p>
            <input type="text" placeholder='Digite a capital' value={capital} onChange={(e) => setCapital(e.target.value)} />
            <p>Digite a taxa de juros</p>
            <input type="text" placeholder='Digite a taxa de juros' value={taxa} onChange={(e) => setTaxa(e.target.value)} />
            <p>Digite o tempo</p>
            <input type="text" placeholder='Digite o tempo' value={tempoTaxa} onChange={(e) => setTempoTaxa(e.target.value)} /><br />
          </div>

          <Botao texto="Calcular" aoClicar={calcularTaxaJuros} />

        </div>

        <div className='container-exer'>
          <h1>Exercicio 14</h1>
          <h2>Calcular Montante</h2>

          <div className='aling-itens'>
            <p>Digite uma Capital</p>
            <input type="text" placeholder='Digite uma Capital' value={capital2} onChange={(e) => setCapital2(e.target.value)} />
            <p>Digite uma taxa de juros</p>
            <input type="text" placeholder='Digite uma taxa de juros' value={taxa2} onChange={(e) => setTaxa2(e.target.value)} />
            <p>Digite um tempo</p>
            <input type="text" placeholder='Digite um tempo' value={tempoTaxa2} onChange={(e) => setTempoTaxa2(e.target.value)} /><br />
          </div>

          <Botao texto="Calcular" aoClicar={calcularMontante} />

        </div>

        <div className='container-exer'>
          <h1>Exercicio 15</h1>
          <h2>Converter Dia</h2>

          <div className='aling-itens'>
            <p>Digite uma quantidade de dias</p>
            <input type="text" placeholder='Digite uma quantidade de dias' value={dia} onChange={(e) => setDia(e.target.value)} />
          </div>

          <Botao texto="Converter" aoClicar={TransformarDia} />



        </div>

      </div>
    </body>





  );
}

export default App;
