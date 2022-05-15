//Criar uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";
//Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log (validaMarca.test("Marca: Nike"))
console.log (validaMarca.test("Marca: Olimpicos"))
console.log(validaMarca.test("Marca: Asics"))


