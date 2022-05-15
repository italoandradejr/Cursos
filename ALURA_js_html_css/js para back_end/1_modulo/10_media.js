const notas = [10, 7, 8, 5, 10]

notas.push(7)

console.log(notas)

let media = (notas[0] + notas[1] +notas[2] +notas[3] +notas[4] +notas[5]) / notas.length

console.log(media)
//-------------------------------------------------------------------------------------------

notas.pop() // tira o último elemento da lista

console.log(notas)

media = (notas[0] + notas[1] +notas[2] +notas[3] +notas[4]) / notas.length

console.log(`A média é: ${media}`)