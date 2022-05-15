function TipoDeDado(dado) {

    if (dado === Number) {
        console.log(`Esse tipo de dado é: ${typeof (dado)}`)

    } else if (dado === Boolean) {
        console.log(`Esse tipo de dado é: ${typeof (dado)}`)

    } else (dado === String) 
        console.log(`Esse tipo de dado é: ${typeof (dado)}`)
    
}

TipoDeDado("Italo")
TipoDeDado (30)
TipoDeDado (false)