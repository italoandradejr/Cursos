/*
    *O método exec nos retorna um objeto com algumas informções sobre a regex;
    *Senada for encontrado, retorna null;
*/

const digitos = /\d+/

console.log(digitos.test("tem números 100 aqui"))

console.log(digitos.test("tem números aqui"))