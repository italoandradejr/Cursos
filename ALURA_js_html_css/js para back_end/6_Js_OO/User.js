export default class User {
    #nome
    #email
    #nasc
    #role
    #ativo
    constructor(nome, email, nasc, role, ativo = true) {
        this.#nome = nome // # torna o dado privado fora do construtor
        this.#email = email
        this.#nasc = nasc
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }
}

//const novoUser = new User('Italo', 'italo@gmail.com', '1991-06-26')
