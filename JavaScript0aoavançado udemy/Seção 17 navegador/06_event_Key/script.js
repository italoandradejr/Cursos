window.addEventListener("keydown", function(e){
    if(e.key == 'q') {
        console.log('apertou a letra q')
    } else if(e.key == 'Enter') {
        console.log("apertou enter")
    }
})

window.addEventListener("keyup", function(e) {
    if(e.key = "Enter") {
        console.log("Soltou o enter")
    }
})