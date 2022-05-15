/*
    \d - qualquer dígito de caractere;
    \w - um caractere alfanumérico ('teste')
    \s - qualquer caractere de espaço em branco
    \D - caracteres que não são dígitos;
    \W - caractere não-alfanumérico;
    \S - caractere que não seja espaço em branco
    . - qualquer caractere, menos nova linha
*/

const pontRegex = /./

console.log('.')
console.log(pontRegex.test('asd'))
console.log(pontRegex.test(' '))
console.log(pontRegex.test("123"))
console.log(pontRegex.test("1213sad"))

const dRegex = /\d/; //[0-9]

console.log('d')
console.log(dRegex.test('asd'))
console.log(dRegex.test(' '))
console.log(dRegex.test("123"))
console.log(dRegex.test("1213sad"))


const dRegex2 = /\D/;

console.log('D')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test("123"))
console.log(dRegex2.test("1213sad"))

const sRegex = /\s/

console.log("s")
console.log(sRegex.test('asd'))
console.log(sRegex.test(' '))
console.log(sRegex.test("123"))
console.log(sRegex.test("1213sad"))


const wRegex = /\w/

console.log("w")
console.log(wRegex.test('asd'))
console.log(wRegex.test(' '))
console.log(wRegex.test("123"))
console.log(wRegex.test("1213sad"))