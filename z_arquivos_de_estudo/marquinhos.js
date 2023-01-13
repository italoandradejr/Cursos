
const xNumeros = [0, 1, 2, 3]
const numero = Math.floor(Math.random() * xNumeros.length)
const buscaDiv = document.getElementById(numero)


if (buscaDiv.style.display == "none") {
    document.getElementById(numero).style.display = "block"
}

console.log(buscaDiv)

