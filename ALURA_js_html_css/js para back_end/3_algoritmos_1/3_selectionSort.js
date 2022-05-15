const livros = require('./2_listaLivros')
const menorValor = require('./1_menorValor')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];

    console.log('posição atual', atual)

    console.log('Livro Atual', livros[atual])

    let livroMenorPreco = livros[menor];

    console.log('Livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)