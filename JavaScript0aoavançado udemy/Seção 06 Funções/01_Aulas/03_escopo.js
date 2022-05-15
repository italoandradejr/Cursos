let y = 10

function imprimir () {
    let y = 150

    console.log(y)
}

imprimir() // a variável declarada dentro de uma função não fica disponivel no escopo global

console.log(y) // escopo global