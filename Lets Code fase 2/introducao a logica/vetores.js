let vetor1 = [10,20,30,40,50];
//vetor[2] = 50;
vetor1[2] = "texto";
console.log(vetor1[2]);
//----------------------------//

//Também é possível declarar o vetor vazio e ir adicionando pela posição os elementos:
//let vetor = [];
//vetor[0] = 'teste';
//vetor[1] = 'teste2';

//----------------------------//

let vetor = [];
for(let i = 0; i < 10; i++){
    vetor.push(i); //.push depois do vetor e um comando para adicionar elemento no array, o valor dentro do parentesis sera adicionado ao final do array
}
 
//Para remover do final:

let vetor = [10,20,30,40,50];
vetor.pop();

//Para adicionar ao começo:

let vetor = [10,20,30,40,50];
let novo_elemento = 0;

vetor.unshift(novo_elemento);
//Para remover do começo:

let vetor = [10,20,30,40,50];
vetor.shift();

//----------------------------//

let vetor2 = [10,20,30,40,50,60,70,80,90];

//for(let a = 0; a < vetor.length; a++){ <<<<<<<<<<<<<<<<<<<<<<<<<< percorrer vetor
//    console.log(vetor2[a]);
//}
//for (let number of vetor2){ // <<<<<<<<<<<<<<<<<<<<<<<<<<< percorrer vetor
//    console.log(number);
//}

for (let indice in vetor2){ // <<<<<<<<<<<<<<<<<<<<< percorre o vetor mas ele utiliza o valor de cada indice (utilizado para percorrer e selecionar a posicao de dois vetores)
    console.log(vetor2[indice]);
}
//matriz e um super vetor com vetores
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
//percorrendo uma matriz (primeiro selecionando a linha e depois os elementos dentro dessa linha)
for (let linhaDaMatriz of matriz){
    for (let elementoDaMatriz of linhaDaMatriz){
        console.log(elementoDaMatriz);
    }
}
