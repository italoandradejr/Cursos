// Da Segunte forma, podemos validar um e-mail;

const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("italojr@gmail.com"))

console.log(validaEmail.test("italo@gmail"))

console.log(validaEmail.test("gmail.com"))

console.log(validaEmail.test("italojr@gmail.com.br"))

