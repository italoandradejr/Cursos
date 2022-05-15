//Da seguinte fomra, podemos validar uma data de nascimento;

const validaData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validaData.test('26/06/1991'))
console.log(validaData.test("5/5/2021"))
console.log(validaData.test("08-08-2010"))
console.log(validaData.test("08/08/1910"))
