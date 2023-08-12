let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOdenarPorPreco.addEventListener('click', ordenarLivrosporPreco)

function ordenarLivrosporPreco () {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
}