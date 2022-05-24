import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Italo', "email@email.com", "2005-05-20")


console.log(novoUser.exibirInfos())