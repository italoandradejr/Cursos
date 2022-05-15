/*
    * O bloco try catch, vai tentar executar um código, caso não consiga,
ele pode retornar o erro que esse código gerou;
    * Muito útil para debug
*/

//let b = 2  erro aparece somente no navegador

try {

    let a = 2 + b

} catch (e) {

    console.log(e)

}

console.log("teste")