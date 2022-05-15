/* 
    *Podemos escrever um set que aceitam tudo, menos alguns caracteres com not;
    *lembrando que combinações serão aceitas, o negado é apenas se bate com set;
*/

const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("Aqui tem a"))


const notaz = /[^a-z]/

console.log(notaz.test("123 as"))
console.log(notaz.test("asdasfdfdhgrifghpaoh"))