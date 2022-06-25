let continuar = "s"

while (continuar == "s") {
	let operacao = prompt("Qual operação gostaria de fazer").toLowerCase()
	if (operacao == "soma") {
    let x = parseInt(prompt (`Digite o primeiro valores para realizar a ${operacao}`))
    let y = parseInt(prompt (`Digite o segundo valores para realizar a ${operacao}`))
   console.log(`a soma de ${x} + ${y} é: ${soma(x,y)}`)
  
} else if (operacao == "subtração") {
    let x = parseInt(prompt (`Digite o primeiro valores para realizar a ${operacao}`))
    let y = parseInt(prompt (`Digite o segundo valores para realizar a ${operacao}`))
    console.log(`a Subtração de ${x} - ${y} é: ${subtracao(x,y)}`)
  
} else if (operacao == "divisão") {
    let x = parseInt(prompt (`Digite o primeiro valores para realizar a ${operacao}`))
    let y = parseInt(prompt (`Digite o segundo valores para realizar a ${operacao}`))
    console.log(`a Divisão de ${x} / ${y} é: ${divisao(x,y)}`)

} else if (operacao == "multiplicação") {
    let x = parseInt(prompt (`Digite o primeiro valores para realizar a ${operacao}`))
    let y = parseInt(prompt (`Digite o segundo valores para realizar a ${operacao}`))
    console.log(`a Multiplicação de ${x} * ${y} é: ${multiplicacao(x,y)}`)
} else {
	window.alert ("Não é uma operação valida")
}
 let continuar = prompt("Deseja continuar? S/N").toLowerCase()
 if (continuar == "n") break
}


function soma (x,y) {
  return x + y
} 

function subtracao (x,y) {
  return x - y
} 

function divisao (x,y) {
  return x / y
} 

function multiplicacao (x,y) {
  return x * y
} 