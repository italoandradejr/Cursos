import fetch from 'node-fetch'

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise.all(arrayUrls.map(async url => {
            const res = await fetch(url)
            return res.status
        }))
        return arrayStatus
    } catch(erro) {
        manejaErros(erro)
    } 
}

function geraArrayDeUrls(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

export default async function validaUrls(arrayLinks) {
    const links = geraArrayDeUrls(arrayLinks)
    const statusLinks = await checaStatus(links)

    const resultados = arrayLinks
        .map((Objeto, indice) => ({ ...Objeto, status: statusLinks[indice] }))

    return resultados;
}