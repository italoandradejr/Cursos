/*
    *Não podemos controlar os dados que o usuário enviar, então
para o bom funcionamento do software, devemos tratar eles;
*/

function checarNumero (num) {
    let number = Number(num)
    if (Number.isNaN(number)) {
        console.log("Por favor, passe somente números")
    } else {
        return number
    }
}

checarNumero(5)
checarNumero("teste")