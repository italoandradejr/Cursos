/*
    *Uma Promise pode falhar, podemos reter esse erro com um método
chamado catch;

    *Com ele podemos exibir  o erro no console, por exemplo, e fazer o
debug no código;

*/


let p = Promise.resolve (new Error ("Não deu certo"))

console.log('alalalalalalal')

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason))

