const subt = (a,b) => a-b;
const aplicaOperacao = (a,b, operacao) => operacao(a,b);

let resultado = aplicaOperacao(4,2, subt);
console.log(resultado);

//-------------------------------------//
// a funcao somarX recebe um valor e retorna uma funcao, essa funcao retorna a soma de dois valores
const somarX = (x) => (y) => (x+y); 

const somar2 = somarX(2); //passando manualmente o valor da primeira funcao, logo ela recebe 2 e retorna Y = 2 + y
const somar3 = somarX(3);

console.log(somar3(5)); 
// passando manualmente o valor da segunda funcao, agora o resultado e igual a: somarX possui o valor 2 ou 3 e esta passando para a funcao Y que x e igual a 2 ou 3 
//enquanto que a funcao Y esta somando 2 ou 3 com 5, o resultado sera 7 ou 8