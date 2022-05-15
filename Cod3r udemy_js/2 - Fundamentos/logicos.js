function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || = "ou"
    const comprarTv50 = trabalho1 && trabalho2 // && = "e"
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)  // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // != "diferente"
    const materSaudavel = !comprarSorvete // operador binário

    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel }
}

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))