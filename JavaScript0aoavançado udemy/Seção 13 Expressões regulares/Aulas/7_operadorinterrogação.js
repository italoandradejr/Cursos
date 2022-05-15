// faz com que o dígito anterior seja opcional

const padrao = /abacax?i/

console.log(padrao.test('abacaxi'))
console.log(padrao.test("abacai"))

const padrao2 = /\d+\w?/

console.log(padrao.test("123"))
console.log(padrao.test("123a"))
