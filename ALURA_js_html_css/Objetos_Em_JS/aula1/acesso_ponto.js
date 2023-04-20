const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678998",
    email: "andre@gmail.com",
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)