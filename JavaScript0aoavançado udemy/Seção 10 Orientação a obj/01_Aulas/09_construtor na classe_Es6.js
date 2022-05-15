/*
    *com a versão de ES6, uma possibilidade de criar uma classe
    (objeto), com construtor foi adicionada;
    *entáo não precisamos mais criar por meio de uma função;
*/

class Cachorro {
    constructor (raca, patas, cor) {
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let labrador = new Cachorro ("Labrador", 4, "Caramelo")

console.log(labrador)