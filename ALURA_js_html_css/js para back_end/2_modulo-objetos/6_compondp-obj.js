const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com",
    fones: ['11986697004' , '11985587441']
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "Filho",
    dataNasc: "20/03/2014"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)