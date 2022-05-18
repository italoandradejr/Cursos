const user = {
    nome: "Italo",
    email: "italo.jr@gmail.com",
    nasc: "1991/06/26",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

/*
user.exibirInfos()
const exibir = function () {
    console.log(this.nome)
}
const exibirNome = exibir.bind(user) // "método .bind" prender/liga a execução a um contexto específico
exibirNome()
exibir()
*/

const admin = {
    nome: "Mari",
    email: "mari@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado!")
    }
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()
