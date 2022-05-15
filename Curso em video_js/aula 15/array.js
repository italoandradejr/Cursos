let num = [5, 8, 2, 9, 3]

num.push(1) //acrescenta um dado na última posição da variável

num.sort() // colocar os vetor em ordem crescente

console.log(num)

console.log(num.length) // verifica quantos elementos a variável possui

console.log(num[0]) // exibe a posição do vetor

console.log("----------separador-----------")


let valores = [4, 5, 2, 8, 9, 6]

for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("----------separador2-----------")

for (let pos2 in valores) { // outra forma de escrever
    console.log(valores[pos2])
}

console.log("----------separador3-----------")

let num2 = [5, 8, 2, 9, 3]

let pos = num2.indexOf(9) // indica qual posição a valor está
console.log(pos)