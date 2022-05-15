const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com"
}

cliente.fone = "11986697006";

console.log(cliente)

cliente.fone = "11975626262";

console.log(cliente)

delete cliente.cpf

console.log(cliente)