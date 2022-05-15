const clientes = [
    {
        nome: "italo",
        cpf: "36519550874",
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
    },

    {
        nome: "Juliana",
        cpf: "36518541425",
        dependentes: [
            {
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "30/08/2020"
            }
        ],
    }
]


let listaDependentes = []

for (let i = 0; i < clientes.length; i++) {
    listaDependentes.push(...clientes[i].dependentes)
}
//const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)