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

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nasc() {
        return this.#nasc
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error("Formado inválido")
        }
        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nasc}, ${this.role}, ${this.ativo}`
    }
}

//const novoUser = new User('Italo', 'italo@gmail.com', '1991-06-26')
