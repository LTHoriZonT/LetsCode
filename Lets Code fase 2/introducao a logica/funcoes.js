function escreva(texto){
    console.log(texto);
}

escreva("testando a funcao");
escreva("testando o teste");
//------------------------------//
function somar(a, b){
   return a + b;
    
}
let resultado = somar(1,3);

console.log(resultado);
//---------------------------------//

const somar1 = function(a,b){return a+b;} // ou const somar = (a,b) => a+b;

console.log(somar(1,3));

//-------------------------------//
// Definindo a função
function geradorNumerico(comeco, fim){
    for(let i = comeco; i <= fim; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico(10,20);

