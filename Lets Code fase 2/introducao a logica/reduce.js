const vetor = [1,2,3,4,5,6];

const soma = vetor.reduce((estado, item) => estado+item); //o reduce precisa de dois parametros, o estado sera o acumulador, onde ficara a soma dos elementos, item sera cada elemento do vetor.
//enquanto houverem elementos no vetor, o estado sera atualizado. Ex: somou o primeiro elemento com o segundo? atualiza o estado!, ainda tem elementos? continua. 
//Somou o resultado do primeiro e segundo elemento com o terceiro elemento ? atualiza o estado, ainda tem elementos? continua.. e assim por diante
//para multiplicacao: vetor.reduce((estado, item) => estado*item, 1); esse 1 sou eu passando manualmente o estado do elemento ou seja o estado comecara em 1 (pois nao pode multiplicar por 0)
console.log(soma);

const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somaColuma = (estado, item) => {
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[4]+item[5]] // estados sao a separacao das somas, e itens as colunas
};

const vetor2 = matriz.reduce(somaColuma, [0,0,0]);
console.log(vetor2);

const rockets = [
    {country: "Russia", launches: 32 },
    {country: "US", launches: 23 },
    {country: "China", launches: 16 },
    {country: "Europe", launches: 7 },
    {country: "India", launches: 4 },
    {country: "Japan", launches: 3 },
]

const totalLaunches = rockets.reduce( ( valorPrevio, elemento) => valorPrevio + elemento.launches, 0) // valor previo setado para 0 (0 + 32 + 23 + 16 + 7 + 4 + 3 = 85)

console.log(totalLaunches);