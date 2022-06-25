let frutas = []
let laticinios = []
let doces = []
let congelados = []

window.alert("vamos as compras")

let compra = "s"

while (compra == "s") {
    let categoria = prompt("Qual a categoria do item? Frutas, laticinios, Doces ou congelados?")
    incluiItem(categoria)
}

while (compra == "n") {

    let excluir = prompt("Deseja excluir algum item da lista?s/n")

    if (excluir == "s") {
        let categoriaEx = prompt("Qual a categoria do item que deseja excluir? Frutas, laticinios, Doces ou congelados?")
        excluirItem(categoriaEx)
    } else {
        window.alert("Fim das Compras no mercado, veja a lista no console")
        console.log("Frutas:", frutas)
        console.log("Laticínios:", laticinios)
        console.log("Doces:", doces)
        console.log("Congelados:", congelados)
        break
    }
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

function excluirItem(categoriaEx) {

    if (categoriaEx == "frutas") {
        let fruEx = prompt("Digite a fruta que deseja excluir")
        let posiçãoIndice = frutas.indexOf(fruEx)
        frutas.splice(posiçãoIndice, 1)
    }

    if (categoriaEx == "laticinios") {
        let latEx = prompt("Digite o laticinios que deseja excluir")
        let posiçãoIndice = laticinios.indexOf(latEx)
        laticinios.splice(posiçãoIndice, 1)
    }

    if (categoriaEx == "doces") {
        let docEx = prompt("Digite o doces que deseja excluir")
        let posiçãoIndice = doces.indexOf(docEx)
        doces.splice(posiçãoIndice, 1)
    }

    if (categoriaEx == "congelados") {
        let congEx = prompt("Digite o congelados que deseja excluir")
        let posiçãoIndice = congelados.indexOf(congEx)
        congelados.splice(posiçãoIndice, 1)
    }

}










