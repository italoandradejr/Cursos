// criar uma regex que só aciete strings terminadas com ID

const validaStrings = /\d+ID\b/

console.log(validaStrings.test("456654ID"))
console.log(validaStrings.test("valida"))
console.log(validaStrings.test("1234"))