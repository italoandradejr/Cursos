const cliente = {
    nome: "italo",
    idade: 30,
    cpf: "36519550874",
    email: "italoandradejr@gmail.com"
}

const chaves = ["nome" , "idade" , "cpf" , "email"]

//console.log (cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))