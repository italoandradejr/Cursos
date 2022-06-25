import { Funcionario } from "./funcionarios.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this._bonificacao = 1.1
    }
}