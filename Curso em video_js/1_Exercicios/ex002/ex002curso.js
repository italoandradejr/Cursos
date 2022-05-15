function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verificar os dados e tente novamente")

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "homem"

            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebemenino.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')

            }else {
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebemenina.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.png')

            }else {
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.img = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}