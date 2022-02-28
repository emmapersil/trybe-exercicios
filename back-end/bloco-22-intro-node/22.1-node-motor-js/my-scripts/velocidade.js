const { questionInt } = require('readline-sync');

const velocidade = () => {
  const distancia = questionInt('Qual é a distância em metros? ');
  const tempo = questionInt('Qual é o tempo em segundos? ');

  let velocidade = distancia / tempo

  return (`A velocidade médio é de ${velocidade}m/s.`)
}

console.log(velocidade());
