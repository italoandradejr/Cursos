let numeroSecreto = Math.floor(Math.random() * (10 - 0))

console.log(numeroSecreto)

let numeroEscolhido = prompt("Escolha um número de 0 a 10")

for (i = 1; i <= 3; i++) {
    if (numeroEscolhido == numeroSecreto) {
        window.alert(`você acertou o número secreto ${numeroSecreto}`)
        window.alert("fim de jogo, Você Ganhou")
        break

    } else {
        if (i == 3) {
            window.alert(`fim de jogo, Você Perdeu, o número secreto era ${numeroSecreto}`)
            break
        }
        window.alert(`você errou o número secreto, ${i} tentativa de 3`)
        numeroEscolhido = prompt("Escolha um número de 0 a 10")
    }
}



