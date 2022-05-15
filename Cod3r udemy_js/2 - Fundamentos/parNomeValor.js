// par nome/valor
const saudacao = 'olá' //contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome//valor
const cliente = {
    nome: 'Italo',
    idade: 30,
    peso: 98,
    endereco: {
        logradouro: 'Rua Ernesto',
        numero: 1088,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)