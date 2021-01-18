import {Funcionario} from "./Funcionario.js"

export class Diretor extends Funcionario{
    constructor(){
        super(nome, salario, cpf)

        this._bonificacao = 1.5;
    }
}