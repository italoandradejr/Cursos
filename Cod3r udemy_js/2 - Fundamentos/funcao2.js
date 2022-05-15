// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícido
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// para somente 1 (um) parâmetro
const imprimir2 = a => console.log(a)
imprimir2('legal!!!')
