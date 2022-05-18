
/*function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}
*/

//const novoUser = new User('Italo', 'ita@gmail.com')
//console.log(novoUser.exibirInfos())

/*
function Admin(role) {
    User.call(this, "Italo", "italo@gmail.com")
    this.role = role || "Estudante"
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')

console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/

const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    
    exibirInfo: function (nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
//console.log(novoUser.exibirInfo("italo"))
//console.log(user.isPrototypeOf(novoUser))

novoUser.init('Italo', 'italo@gmail.com')
console.log(novoUser.exibirInfo())