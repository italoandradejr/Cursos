let nome = "italo"
let idade = 30

// 1° if
if (nome != undefined) {
    console.log("Nome está definido")
} else if(nome == "italo" && nome.length > 5){ // length verifica o tamanho/quantidade de caracteres de uma string
    console.log("O nome é Italo")
} else {
    console.log("não é italo!")
}

// 2° else if

if (nome != undefined && nome == "joaquim") {
    console.log("Nome está definido")
} else if(nome == "italo" && nome.length >= 5){ // length verifica o tamanho/quantidade de caracteres de uma string
    console.log("O nome é Italo")
} else {
    console.log("não é italo!")
}

// 3° else

if (nome != undefined && nome == "joaquim") {
    console.log("Nome está definido")
} else if(nome == "italo" && nome.length >= 5 && idade == 50){ // length verifica o tamanho/quantidade de caracteres de uma string
    console.log("O nome é Italo")
} else {
    console.log("não é italo!")
}

// não necessariamente é obrigatorio "fechar" com else

if (1 > 2) {
    console.log('teste')
} else if (1 == 1) {
    console.log('testanto')
}
