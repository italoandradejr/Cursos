// novo recurso do ES2015

const pessoa = {
    nome: 'Italo',
    idade: 30,
    endereco: {
        logradouro: "Rua Ernesto Bottoni",
        numero: 1088
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)