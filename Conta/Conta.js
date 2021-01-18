export class Conta {
    
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Voce não deveria instanciar um objeto do tipo conta Diretamente, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
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

    //Método abstrato
    sacar(valor) {
        throw new Error ("O método Sacar da conta é abstrato");
        
    }


    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
    }
        return 0;

    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        if(this._tipo == "salario"){
            return;
        }

        const valoSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}