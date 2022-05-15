/*
    *depois da definição do padrão por meio da regex;
    * Utilizamos o método test() para verificar se o padrão é retornado
    * com isso vamos receber de resposta true or false;
*/

const reg1 = new RegExp('Bola')

console.log(reg1.test("Tem Bola?"))
console.log(reg1.test("Não tem!"))


console.log("-------------------------")

const reg2 = /Bola/

let text = "tem Bola na cesta"

console.log(reg2.test("tem Bola?"))
console.log(reg2.test("não tem!"))
console.log(reg2.test(text))

console.log(/quadrado/.test("onde tem um quadrado"))
console.log(/quadrado/.test("onde tem um fdgfdgrgrgargquadradorthrthregh45"))