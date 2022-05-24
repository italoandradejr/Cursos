import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//const novoUser = new User('Italo', "email@email.com", "2005-05-20")
//console.log(novoUser.exibirInfos())

//const novoAdmin = new Admin("italo", "ital@gmail.com", '2020-08-05')
//console.log(novoAdmin.nome)

//novoAdmin.nome = 'André'
//console.log(novoAdmin.nome)

const novoDocente = new Docente ("Guilherme", "gui@gmail.com", "2010-08-10")
console.log(novoDocente.exibirInfos())