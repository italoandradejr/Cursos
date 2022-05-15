/*
    *podemos definir um conjunto de caracteres para encontrar por regex;
    *Basta por entre[];
    *com um traçõ podemos definir um intervalo também;
*/

const reg1 = /[12345]/

console.log(reg1.test("temos o número 6"))
console.log(reg1.test("temos o número 2"))

const reg2 = /[0-9]/

console.log(reg1.test("temos o número 65"))
console.log(reg1.test("temos o número"))
