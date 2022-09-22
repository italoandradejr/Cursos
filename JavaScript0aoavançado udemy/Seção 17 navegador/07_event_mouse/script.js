let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("mousedown", () => {
    console.log("apertou o Botão")
})

btn1.addEventListener("mouseup", () => {
    console.log("soltou o Botão")
})

btn2.addEventListener('dbclick', () => {
    console.log('Clicou duas Vezes')
})

btn2.addEventListener('contextmenu', (e) => { //contextmenu é as opções que aparece ao clicar com o botao direito
    e.preventDefault() // serveu para interromper o evento contextmenu
    console.log('Botão Direito')
})