/*class Quadrado{
    constructor(lado, altura){
        let cor = undefined;
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
        this.setCor = (c) => {cor = c;}; //seter de cor, onde ele nao precisara retornar nada, apenas alterar diretamente o atributo cor (por isso nao possui return, get tem return pois vai PEGAR, set nao tem pois vai COLOCAR)
    }
};

const quadrado = new Quadrado(3, 4); // necessario sempre instanciar uma classe para poder usa-la, fazemos isso dessa forma
quadrado.setCor("red"); //objeto quadrado ja esta instanciado, assim sendo, basta invoca-lo normalmente.
console.log(quadrado.getCor()); */

class Quadrado{
    constructor(lado, altura){
        this._cor = undefined; //como se fosse uma propriedade privada, nao impede o acesso do usuario, mas e uma forma de deixa-lo mais escondido
        this.lado = lado;
        this.altura = altura;

    }

    get cor() { return this._cor; }  //geter de cor, onde ele so vai retornar o valor
    set cor(cor) {this._cor = cor; } //seter de cor, onde ele so vai alterar o valor, recebendo um parametro cor, e alterando o calor de _cor para cor recebida no parametro;
};

const quadrado = new Quadrado(3, 4);
quadrado.cor = "red";
console.log(quadrado.cor);