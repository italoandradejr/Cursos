async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    //console.log(conexaoConvertida)
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}


export const conectaApi = {
    listaVideos,
    criaVideo
}


// executar comanto no terminal toda vez q abrir o vs code ---> npx json-server --watch db.json