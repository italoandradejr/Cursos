let qualArea = prompt("qual área gostaria de seguir: (1) Front-End ou eguir para a área de (2) Back-End")
console.log(qualArea)

if (qualArea == 1) {
    window.alert(`Você escolheu Front-End`)
    let frontEnd = prompt("Gostaria de aprender (1) React ou aprender (2) Vue")
    if (frontEnd == 1) {
        window.alert(`Você escolheu React`)
        x = "React"
        qualcarreira(x)
    } else if (frontEnd == 2) {
        window.alert(`Você escolheu Vue`)
        y = "Vue"
        qualcarreira(y)
    }

} else if (qualArea == 2) {
    window.alert(`Você escolheu Back-End`)
    let backEnd = prompt("Gostaria de aprender (1)C# ou aprender (2)Java")
    if (backEnd == 1) {
        window.alert(`Você escolheu C#`)
        z = "C#"
        qualcarreira(z)
    } else if (backEnd == 2) {
        window.alert(`Você escolheu Java`)
        i = "Java"
        qualcarreira(i)
    }
}

function qualcarreira(xy) {
    let carreira = prompt("se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack")
    window.alert(`Você seguira na área ${carreira} estudando a linguagem ${xy}`)
}


let qualTecnologias = parseInt(prompt ("Em quantas tecnologias gostaria de se especializar (digite um número)"))

for (i = 0; i < qualTecnologias; i++) {
    let tec = prompt ("digite as Tecnologia escolhida e veja no console")
    console.log(tec)
}