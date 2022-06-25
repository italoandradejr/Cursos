import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./conta.js";
import { ContaSalario } from "./contaSalario.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/diretor.js";
import { SistemaAutenticacao } from "./funcionarios/sistemaAutenticacao.js";

//const cliente1 = new Cliente("Ricardo", 11122233309)
//const contaCorrenteRicardo = new ContaCorrente (cliente1, 1001)
//const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);
//const contaSalario = new ContaSalario (cliente1)

//contaSalario.depositar(100)
//contaSalario.sacar(10)

//console.log(contaPoupanca)

//console.log(contaCorrenteRicardo)

//console.log(contaSalario)

const diretor = new Diretor ("Rodrigo", 10000, 123456778980)
diretor.cadastrarSenha("123456789")

const gerente = new Gerente ("Ricardo", 5000, 78945612352)
gerente.cadastrarSenha("987654321")

const cliente = new Cliente ("Lais", 78912345674, "456")

const diretorEstaLogado = SistemaAutenticacao.login(gerente, "987654321")
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)





