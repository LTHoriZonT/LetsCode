// filtrando um vetor, dada uma condicao

const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x%2 === 0); // o filter precisa de um parametro, ele ira receber uma funcao, esta funcao (x) recebe um valor (no caso os valores do vetor) e retorna esses valores dividindo por 2
//se o resto for 0 entao sera par, se nao impar
console.log(pares); 