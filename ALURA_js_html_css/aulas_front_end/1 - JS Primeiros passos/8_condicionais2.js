const listaDeDestinos = new Array(
    "Salvador",
    `São Paulo`,
    "Rio de Janeiro",
)

const idadeComprador = 19
const estaAcompanhada = true

console.log(listaDeDestinos)


if (idadeComprador >= 18) {
    console.log("Comprador maior de idade, VENDIDO!!!!")
    listaDeDestinos.splice(1, 1)

} else if (estaAcompanhada) {
    console.log("Comprador menor de idade acompanhado!")
    listaDeDestinos.splice(1, 1)

} else {
    console.log("Não é maior de idade e NÃO está acompanhado(a)")
}

console.log(listaDeDestinos)