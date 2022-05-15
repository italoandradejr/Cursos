// inserir o número de ocorrência entre {}

const cep = /\d{5}-\d{3}/

console.log(cep.test("08117-500"))
console.log(cep.test("asd"))
console.log(cep.test("811-500"))


const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(48)9999-9999"))