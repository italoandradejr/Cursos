function getInterioAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // random gera uma valor entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // != diferente
    opcao = getInterioAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a Próxima')