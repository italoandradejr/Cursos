/*
uma forma de uma função receber indefinidos parâmetros
o operador rest vai virar uma array
o parâmetro é definido por:...nome
*/

let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumero(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumero(num,num1,num2)
console.log('pausa')
imprimirNumero(num2,num3)
console.log("pausa")
imprimirNumero(2,6,7,8,9,5,3,2,5,6,2,4,5)