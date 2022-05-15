const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com",
    fones: ['11986697004', '11985587441'],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filho",
        dataNasc: "20/03/2014"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "28/04/2018"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente =>
    dependente.dataNasc === "28/04/2018")

console.log(filhaMaisNova[0].nome)

