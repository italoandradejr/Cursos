/*
    *normalmente os métodos interagem com os objetos;
    *Até mudando os valores de suas propriedades para corresponder a
    lógica do programa desenvolvido;
*/

const cachorro = {
    raca: 'SRD',
    uivar: function () {
        console.log("Auuuuuuuu")
    },
    rosnar: function () {
        console.log("Grrrrr")
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A Raça é " + this.raca
    }
}

console.log(cachorro.raca)

cachorro.setRaca("Pastor Alemão")

console.log(cachorro.raca)

console.log(cachorro.getRaca())