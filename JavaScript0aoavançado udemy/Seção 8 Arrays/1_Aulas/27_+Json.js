/*
Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato
Apenas aspas duplas
Não aceita comentários
-----------------------------------------------
podemos converter o Json para uma string de forma fácil
Ou também uma string para JSON
*/

let pessoa = {
    "nome": "Italo",
    "idade": 30,
    "profissão": "Programador",
    "hobbies": ["video game", "leitura", "academia"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJson = JSON.parse(pessoaTexto)

console.log(pessoaJson)
console.log(pessoaJson.hobbies[0])




