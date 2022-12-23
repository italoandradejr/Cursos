function extraiLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status
        })
    )
    return arrStatus;
}

export default async function listaValidade(listaDeLinks) {
    const links = extraiLinks(listaDeLinks)
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status [indice]
    }))
    
    return status
}
