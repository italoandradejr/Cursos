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

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const italo = new ClientePoupanca("Italo", "italo@gmail.com", "22255554444", 100, 200)

console.log(italo)

italo.depositarPoupanca(287)
italo.depositar(15)

console.log(italo)