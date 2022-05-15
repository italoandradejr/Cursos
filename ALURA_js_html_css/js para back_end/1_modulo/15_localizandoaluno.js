const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // includes retorna true ou false
       let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // indexOf retorna um número (posição no arrays)
        return listaDeNotasEAlunos[0][indice] + ' Sua média é ' 
        + listaDeNotasEAlunos[1][indice]
    }else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota ('Caio'))