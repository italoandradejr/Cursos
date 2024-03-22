/*
const xNumeros = [0, 1, 2, 3]
const numero = Math.floor(Math.random() * xNumeros.length)
const buscaDiv = document.getElementById(numero)


if (buscaDiv.style.display == "none") {
    document.getElementById(numero).style.display = "block"
}

console.log(buscaDiv)
*/

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--
}

let media = soma / qtdNumeros;

console.log(media);
