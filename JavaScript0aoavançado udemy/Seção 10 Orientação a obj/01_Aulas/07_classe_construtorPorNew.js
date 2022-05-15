/*
    *em muitas linguagens temos a possibilidade de instanciar um
    objeto com new, Js também;
*/

function Cachorro (raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function () {
        console.log("Auuuuuuuuuu")
    }
}

let husky = new Cachorro('Husky', 4, "Cinza")

husky.uivar()

console.log(husky.patas)
console.log(husky.cor)