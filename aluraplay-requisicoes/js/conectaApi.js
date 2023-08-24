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

    if(!conexao.ok) {
        throw new Error ("Não foi possível enviar o video")
    }
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo (termoDeBusca) {
    const conexao = await fetch(`http://localhost:300/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}


// executar comanto no terminal toda vez q abrir o vs code ---> npx json-server --watch db.json