const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com",
    fones: ['11986697004', '11985587441'],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "Filho",
            dataNasc: "20/03/2014"
        },

        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "28/04/2018"
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)


