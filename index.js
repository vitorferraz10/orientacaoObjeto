import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Vitor", 4421557871);

const cliente2 = new Cliente("Maria", 4421515155);

const ContaCorrenteVitor = new ContaCorrente(cliente1,1001);

ContaCorrenteVitor.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);



// ContaCorrenteVitor.transferir(valor, conta2);

console.log(cliente1); 


