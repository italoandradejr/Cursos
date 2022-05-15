/*
* Sempre que adicionamos uma prpriedade a um objeto, é criada uma
idêntica no prototype;
*Podemos substituir a do prototype;

*/

class Cachorro {
    constructor (raca, patas, cor) {
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
    latir() {
        console.log ("Au au")
    }

}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4

let labrador = new Cachorro ("labrador" , 4, 'Amarelo')

console.log (labrador.patas)
labrador.latir()

console.log (Cachorro.prototype.raca)
console.log (labrador.raca)