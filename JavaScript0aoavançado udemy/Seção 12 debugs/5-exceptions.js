/*
    *Podemos criar erros no program, caso alguma condição não seja atendida;
    * Porém as exceptions abortam o programa, só geram o erro
*/

function saudacao (nome) {
    if(typeof nome != "string") {
        throw new Error ("o parâmetro nome precisa ser string")
    } else {
        console.log(`olá ${nome}`)
    }
}

saudacao("italo")
saudacao(30) // erro aparece somente no navegador

console.log("teste")