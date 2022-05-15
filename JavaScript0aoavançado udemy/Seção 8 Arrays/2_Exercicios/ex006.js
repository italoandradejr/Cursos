let elem1 = ["Italo", 30, true, false, 2021, "cachorro"]

let elem2 = [1991, false, "cachorro"]

function verificaElementos (arr) {

    if (arr.length >= 5) {
        console.log(`total de ${elem1.length}, muitos elementos`)
    } else {
        console.log(`total de ${elem2.length}, poucos elementos`)
    }
}

verificaElementos (elem1)
verificaElementos (elem2)