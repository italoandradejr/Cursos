// Da seguinte forma, podemos validar um domínio;

const validaDominio = /[?www.]\w+\.com.br|.com/


console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.horadecodar.com.br"))
console.log(validaDominio.test("www.google"))
console.log(validaDominio.test("www.google"))
console.log(validaDominio.test("google.com"))

