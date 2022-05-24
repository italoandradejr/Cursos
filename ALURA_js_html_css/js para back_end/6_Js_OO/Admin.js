import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nasc, role = 'admin', ativo = true) {
        super(nome, email, nasc, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

//const novoAdmin = new Admin('Flavio', "flavio@gmail.com", "1991-05-25")
//console.log(novoAdmin.criarCurso('Node_Js', 20))