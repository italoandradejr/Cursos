const livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function () {
        console.log("A alura indica o livro" + this.nome + "!")
    }
}

livro.anunciar ()


