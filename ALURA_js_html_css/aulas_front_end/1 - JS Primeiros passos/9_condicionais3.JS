const listaDeDestinos = new Array(
    "Salvador",
    `São Paulo`,
    "Rio de Janeiro",
)

const idadeComprador = 18
const estaAcompanhada = false
const temPassagemComprada = true

console.log(listaDeDestinos)


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade ou esta acompanhado, VENDIDO!!!!")
    listaDeDestinos.splice(2, 1)

} else {
    console.log("Não é maior de idade ou NÃO está acompanhado(a)")
}

console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem")
} else {
    console.log("você não pode embarcar")
}



console.log(listaDeDestinos)