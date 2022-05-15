let pri = 4
let divisao = 0

for (let i = 1; i <= pri; i = i + 1) {

    if (pri % i == 0) {
        divisao = divisao + 1
    }
}

if (divisao == 2){
    console.log(`O numero ${pri} é primo`)
} else {
    console.log(`O numero ${pri} NÃO primo`)
}