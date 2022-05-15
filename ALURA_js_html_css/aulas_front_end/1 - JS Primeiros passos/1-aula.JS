const meuNumero = 10

const primeiroNumero = 2
const segundoNumero = 10

const operacaoMatematica = primeiroNumero * segundoNumero

console.log(operacaoMatematica)

console.log("-------------------------------------------------")

function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calculaProximasIdades(idades) {
    for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 1;
    }
    console.log(idades);
}

function calculaIdadesDaqui5Anos(idades) {
     for (let i = 0; i < idades.length; i++) {
        idades[i] += 5;
    }
    console.log(idades);
}

const idadeStefany = 21;
const idadesAmigos = [idadeStefany, 20, 23, 18, 7];

calculaProximaIdade(idadeStefany);

calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);