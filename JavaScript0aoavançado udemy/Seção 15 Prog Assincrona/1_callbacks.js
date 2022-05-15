/*
    *Uma das vertentes a progrmação assíncrona é fazer que aconteçam depois
 de um tempo por meio de callbacks;

    * Callback é uma função que faz uma ação após algum acontecimento
 no código;

    *podemos realizar uma callback com a função setTimeout;

*/

console.log("1")


setTimeout(function() {
    console.log("pausa")
}, 2000); // tempo para execução do codigo me miliseguntos

console.log("2")
console.log("3")
console.log("4")
console.log("5")