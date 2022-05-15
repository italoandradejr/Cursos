class Livro {
    constructor (nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} 
        e tem ${this.paginas} páginas`)
    }
}

const NodeJs = new Livro ("Primeiros passos com NodeJs", 
"casa do código",195)

NodeJs.anunciarTitulo()
NodeJs.descreverTitulo()

class LivroColecao extends Livro {
    constructor (nome, nomeColecao)  {
        super (nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção
        ${this.nomeColecao}`)
    }
}

const logicaDeProgramacao = new LivroColecao("Lógica de Programação",
"comece a Programar")

logicaDeProgramacao.descreverColecao()