import { Cliente } from "./Conta/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";



const cliente1 = new Cliente("Vitor", 4421557871);

const ContaCorrenteVitor = new ContaCorrente(5000, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);

console.log(contaSalario);
