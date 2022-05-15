/*
    * Propriedades únicas, que não podem ser alteradas e nem criadas
    duas vezes;
    *Podemos utilizar como uma constante, só que para propriedade
    de objeto;
*/

class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au au")
    }
}

cachorro.prototype.raca = 'SRD';

let patas = Symbol ();

cachorro.prototype[patas] = 4;

let labrador = new cachorro ('Labrador', 'Amarelo')


// acessando o Symbol

console.log(cachorro.prototype[patas])
console.log (labrador[patas])