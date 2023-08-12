async function listaVideos () {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    //console.log(conexaoConvertida)
    return conexaoConvertida
}


export const conectaApi = {
    listaVideos
}


// executar comanto no terminal toda vez q abrir o vs code ---> npx json-server --watch db.json