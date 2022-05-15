const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com",
    fones: ['11986697004' , '11985587441']
}


cliente.fones.forEach(fone => console.log(fone))

console.log(cliente.fones[1])