//.map faz com que nao precisemos de um for para percorrer um vetor, o que torna o trabalho mais agil

const vetor = ["10", "20", "30"]; //vetor com strings
const stringToInt = (x) => parseInt(x); // funcao para receber um valor(no caso um vetor) e converter o valor recebido em inteiro
const vetor2 = vetor.map(stringToInt); //salvando o vetor com numeros em uma variavel e informando .map depois do vetor que ira receber um parametro (que no caso e uma funcao completa)
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x); //fazendo o quadrado do vetor
console.log(vetor3);

//O map exige que seja passado pelo menos um parâmetro para a função. Então para usar métodos de um tipo específico de dado também é necessário fazer a declaração de uma função. Exemplo:

//const vetor = ["a","b","c"];
//const toUpper = (str) => str.toUpperCase();
//const maiusculas = vetor.map(toUpper);

//No código acima tínhamos um vetor de caractéres que para passar para maiúsculo definimos a função toUpper, que recebe uma string e aplica o método toUpperCase.