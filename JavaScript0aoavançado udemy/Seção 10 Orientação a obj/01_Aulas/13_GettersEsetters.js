/*
    * get: serve para resgatar o valor de uma propriedade;
    * set: serve para alterar o valor de uma propriedade;
*/

class cachorro {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir () {
        console.log("Au au")
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }

}

let pastor = new cachorro ('Pastor Alemão', "Sem cor");

console.log (pastor)

pastor.setCor = "Marrom";

console.log (pastor.getCor)