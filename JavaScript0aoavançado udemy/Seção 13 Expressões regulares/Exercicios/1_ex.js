// criar uma regex que aceite só letras maiúsculas;

const validarMaiuscula = /[A-Z]/

console.log(validarMaiuscula.test("testanto"))
console.log(validarMaiuscula.test('TESTANTO'))
console.log(validarMaiuscula.test('1234'))