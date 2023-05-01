const clientes = require("./clientes.json")

function filtarApSemComplementos(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

const filtrador = filtarApSemComplementos(clientes)

console.log(filtrador)