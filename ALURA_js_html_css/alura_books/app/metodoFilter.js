const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtarPorDisponibilidade() : filtrarPorCategoria(categoria)
    // livro.categoria ===> trás a informação do elemento categoria de livros do arquivo requisicao.txt
    exibirOsLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDiponiveisNaTela(valorTotal)
    } 
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDiponiveisNaTela(valorTotal) {
       elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
       <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
     </div>` 
}