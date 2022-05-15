//Criar uma regex que valide nome de usuários no sistema;
// Aceita letras de a-z, _e-, números de 0-9, mínimo de 3 caracteres e máximo de 16


const cadastroUser = /^(?=.{3,16}$)[a-z0-9-_]/


console.log(cadastroUser.test("italo_123"))
console.log(cadastroUser.test("Tais.123"))
console.log(cadastroUser.test("rt"))
console.log(cadastroUser.test("rennan_4585"))