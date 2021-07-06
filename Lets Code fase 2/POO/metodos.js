class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) {throw "informe um numero!"}; // isNaN confere se a informacao passada nao e um numero. throw forca um erro a ser exibido

        this.base = base;
        this.altura = altura;
        this.cor = undefined; // atributo opcional do construtor. Mesmo indefinido ele existe, voce pode decidir se passa essa informacao para a classe ou nao
    }

    calculaArea(){
        return this.base*this.altura;
    }

    duplicaBase(){
        this.base = 2* this.base;
    }

    imprimir(){
        return `<div style="width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}"></div>`;
    }
};

const quadrado = new Quadrado(11, 12);
quadrado.duplicaBase();

console.log(quadrado.calculaArea());