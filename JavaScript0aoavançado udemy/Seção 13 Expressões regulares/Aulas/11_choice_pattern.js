// Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais;

const reg = /\w+: (Italo|João|Maria)/;

console.log(reg.test("Nome: Italo"))
console.log(reg.test("Nome: José"))
console.log(reg.test("Nome: Maria"))

