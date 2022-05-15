
const listaDeDestinos = new Array (
    "Salvador",
    `São Paulo`,
    "Rio de Janeiro",
)

const idadeComprador = 17

console.log(listaDeDestinos)


if(idadeComprador >= 18) {
    console.log("Comprador maior de idade, VENDIDO!!!!")
    listaDeDestinos.splice(1,1)
} else {
    console.log("Não é maior de idade e NÃO posso vender")
}


console.log(listaDeDestinos)

