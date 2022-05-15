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

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += ` 
        ${info} ===> ${cliente[info]}`
    }
}

console.log(relatorio)