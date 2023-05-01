const dados = require("./cliente.json")

//console.log(dados)
//console.log(typeof dados)
//console.log(dados.email)

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
//console.log(typeof clienteEmString)

const objetoCliente = JSON.parse(clienteEmString)

console.log(objetoCliente)