/*class Quadrado{
    constructor(base, altura){
 
        this.base = base;
        this.altura = altura;
        let cor = "blue"; //atributo privado
    }
};

const quadrado = new Quadrado(3, 4);
quadrado.cor = "Red"; //criando um novo campo e salvando com valor red para assim ele ser visivel
console.log(quadrado.cor); */

//------------------------------//

/*function criaQuadrado (base, altura){

    let cor = "blue"; //atributo privado
s 
    return { //objeto
        base,
        altura,

        getCor: function(){ // criando um metodo dentro do objeto getColor para retornar o atributo privado
            return cor;
        }
    };
}

const quadrado = criaQuadrado(3, 4);
console.log(quadrado.getCor()); */

class Quadrado{
    constructor(lado, altura){
        let cor = "blue";
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
};

const quadrado = new Quadrado(3, 4); // necessario sempre instanciar uma classe para poder usa-la, fazemos isso dessa forma
console.log(quadrado.getCor());