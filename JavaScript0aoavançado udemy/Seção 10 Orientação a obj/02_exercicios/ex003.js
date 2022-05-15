class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }
}

let endereco = new Endereco("Rua Ernesto Bottoni,1088", "Perus", "São Paulo", "SP")

console.log(endereco)

endereco.novaRua = "Aquario Marinho"

console.log(endereco)

endereco.novaCidade = "Uberlândia"

console.log(endereco)