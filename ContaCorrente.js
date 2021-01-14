import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    agencia;
    _cliente; 
    
    set cliente(novoValor){
        if(novoValor instanceof cliente){
        this._cliente = novoValor;
    } 
}

    get cliente(){
    return this.cliente;
}

    _saldo = 0;

    get _saldo(){
        return this.saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }


    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this.saldo += valor;
    }

    transferir(valor, conta) {
        const valoSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}


