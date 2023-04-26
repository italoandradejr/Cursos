const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1199886655", "11223322442"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(`pagamento realizado, Novo saldo de: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25)