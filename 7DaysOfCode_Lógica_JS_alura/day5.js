let frutas = []
let laticinios = []
let doces = []
let congelados = []

window.alert ("vamos as compras")

let compra = "s"

while (compra == "s") {
    let categoria = prompt("Qual a categoria do item? Frutas, laticinios, Doces ou congelados?")
    incluiItem(categoria)
}

if (compra == "n") {
    window.alert("Fim das Compras no mercado, veja a lista no console")
    console.log("Frutas:", frutas)
    console.log("Laticínios:", laticinios)
    console.log("Doces:", doces)
    console.log("Congelados:", congelados)
}

function incluiItem(categoria) {
    if (categoria == "frutas") {
        let itemFru = prompt("Digite a fruta escolhido")
        frutas.push(itemFru)
        compra = prompt("Deseja inserir mais algum item? s/n")
    }

    if (categoria == "laticinios") {
        let itemLat = prompt("Digite o laticínio escolhido")
        laticinios.push(itemLat)
        compra = prompt("Deseja inserir mais algum item? s/n")
    }

    if (categoria == "doces") {
        let itemDoc = prompt("Digite o Doce escolhido")
        doces.push(itemDoc)
        compra = prompt("Deseja inserir mais algum item? s/n")
    }

    if (categoria == "congelados") {
        let itemCon = prompt("Digite o Congelado escolhido")
        congelados.push(itemCon)
        compra = prompt("Deseja inserir mais algum item? s/n")
    }
}










