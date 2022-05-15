let usuario = "Italo"
let idade  = 17
let cnh = true

if (idade >= 18 && cnh == true) {
    console.log (`Maior de idade e possui CNH !!!`)
} else if (idade >= 18 && cnh == false) {
    console.log (`Maior de idade, mas não possi CNH`)
} else {
    console.log (`Menor de idade e não é possivel que tenha CNH`)
}