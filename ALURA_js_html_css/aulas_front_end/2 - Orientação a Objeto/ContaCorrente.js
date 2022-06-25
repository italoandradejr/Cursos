import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescrevendo o comportamente de sacar
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
}

