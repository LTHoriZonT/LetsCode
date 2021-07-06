class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
};

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf) { //precisa passar os atributos da classe pai por parametros 
        super(nome, idade); //super e refente a classe pai
        this.rg = rg;
        this.cpf = cpf;
    }
};

const cidadao = new Cidadao("Lucas", 26, "000000", "1111111");
console.log(cidadao);