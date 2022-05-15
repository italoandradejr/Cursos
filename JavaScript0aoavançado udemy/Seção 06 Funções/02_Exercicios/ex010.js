function regressivoNumero(num) {
    for (let i = num; i >= 0; i = i - 1) { // i = i - 1 é a mesma coisa q i--
        if (i % 2 == 0) {
            console.log(`Contagem regressiva dos números pares: ${i}`)
        } 
    }
}

regressivoNumero(50)