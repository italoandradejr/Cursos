"use strict"

import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nasc, role = "Admin", ativo = true) {
        super(nome, email, nasc, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}

//const novoDocente = new Docente('Jú', "ju@gmail.com", "1980-05-20")

//console.log(novoDocente)
//console.log(novoDocente.exibirInfos())
//console.log(novoDocente.aprovaEstudante('Italo', 'Js'))
