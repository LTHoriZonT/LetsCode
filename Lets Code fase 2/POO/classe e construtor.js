class Pessoa { //funcao criadora de objetos
    constructor(nome, idade){
        this.nome = nome; //this. esta se referindo ao proprio objeto e nao a uma variavel em especifico
        this.idade = idade;
    }
};

const pessoa1 = new Pessoa("Carlos", 20);

console.log(pessoa1);

const pessoa2 = new Pessoa("Laura", 21);