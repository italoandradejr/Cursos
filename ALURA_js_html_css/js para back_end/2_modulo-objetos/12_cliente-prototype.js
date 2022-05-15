function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const italo = new Cliente("Italo","36519558714","italo.jr34@gmail.com", 100)

console.log(italo)