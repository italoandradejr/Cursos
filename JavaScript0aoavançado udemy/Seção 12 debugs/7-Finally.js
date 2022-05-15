/*
    * Finally é executado independente do resultado do try/catch
    * E pode existir com try e catch ou apenas try
*/

let b = 2

try {

    let a = 2 + b

} catch (e) {

    console.log(e)

} finally {
    console.log ('Executou')
}

