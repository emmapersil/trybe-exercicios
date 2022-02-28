const { questionFloat } = require('readline-sync');

const imc = () => {
let peso = questionFloat('Qual é o seu peso? ');
let altura = questionFloat('Qual é a sua altura em metros? ');

let imc = peso / (altura * altura);

if (imc <= 18.5) {
  return (`Seu é IMC é de ${imc}, isso é abaixo do peso.`)
} else if (imc > 18.5 && imc <= 24.9) {
  return (`Seu é IMC é de ${imc}, este é o peso normal.`)
} else if (imc > 24.9 && imc <= 29.9) {
  return (`Seu é IMC é de ${imc}, isso é acima do peso`)
} else if (imc > 29.9 && imc <= 34.9) {
  return (`Seu é IMC é de ${imc}, isso é Obesidade grau I`)
} else if (imc > 34.9 && imc <= 39.9) {
  return (`Seu é IMC é de ${imc}, isso é Obesidade grau II`)
} else {
  return (`Seu é IMC é de ${imc}, isso é Obesidade Mórbida`)
}
}

console.log(imc());
