//Criar uma regex que valide endereços de IP (ex: 123.444.0.1)

const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIp.test("123.0.0.1"))
console.log(validaIp.test ("12325510"))
console.log(validaIp.test ("8.8.8.8"))
console.log(validaIp.test ("192.168.0.62"))