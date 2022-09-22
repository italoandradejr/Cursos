let { writeFile } = require('fs')




writeFile("arquivo.txt", "Texto por Write file", (error) => {
    if (error) {
        throw error
    } else {
        console.log("Escreveu com sucesso")
    }
})