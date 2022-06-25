
let nome = prompt("Qual é o seu nome?")
let idade = prompt("quantos anos você tem?")
let estudo = prompt("Qual linguagem de programação você está estudando?")

window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${estudo}!`)

let pergunta = prompt(`Você gosta de estudar ${estudo}? Responda com o 
    número 1 para SIM ou 2 para NÃO`)

if (pergunta == 1) {
    window.alert("Muito bom! Continue estudando e você terá muito sucesso.")
}

if (pergunta == 2) {
    window.alert("Ahh que pena... Já tentou aprender outras linguagens?")
}