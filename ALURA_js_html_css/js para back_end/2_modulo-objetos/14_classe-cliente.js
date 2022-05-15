class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}


const italo = new Cliente("Italo", "italo.jr12@gmao.com", "11122233344", 100)

console.log(italo)

italo.exibirSaldo()

italo.depositar(148)

italo.exibirSaldo()


