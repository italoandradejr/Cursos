let carro = {
    porta: 2,
    portaMalas: "200 L",
    motor: "2.0"
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro)

Object.assign(carro, adicionais);

console.log(carro)