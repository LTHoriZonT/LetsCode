//Operadores logicos
//
// --- comparacao ----
// > Maior
// >= Maior ou igual
// < Menor
// <= Menor ou igual
// == igual
// === igual em valor e tipo
// != Diferente
// !== Diferenter em valor ou tipo
//
// --- varitativo ---
//
// && significa E (ex: 2>0 && 1!==1 resultado falso) - so retorna verdadeiro se as duas condicoes forem verdadeiras
// || singifica OU (ex: 2>0 || 1!==1 resultado verdadeiro) apenas uma das condicoes deve ser verdadeira para o resultado ser verdadeiro
// ! significa NAO (ex: !(1===1) resultado falso) inverte o valor logico
// 
//-------------------------------//
let estaSol = true;

if(estaSol){
    console.log("vou pra praia");
}
else{
    console.log("vou pro campo");
}

//--------------------------------//

let numero1 = 1;

if(numero1 > 0){
    console.log("numero positivo");
}else if(numero1 == 0){
    console.log("o numero e zero")
}else{
    console.log("numero negativo");
}

//---------------------------------//

let numero = 3;
let paridade = numero % 2 == 0 ? "par" : "impar"; //% significa resto da divisao

console.log(paridade);

//--------------------------------//

let sinal = "vermelho";

switch(sinal){
    case "verde":
        console.log("Pode passar");
        break;
    case "amarelo":
        console.log("Prestes a fechas, cuidado...");
        break;
    case "vermelho":
        console.log("Fechado, nao passe");
        break;
    default: //quando a condicao nao for valida, ou nao estipulada usa-se default (sinal roxo por exemplo nao esta estipulado)
        console.log("Sinal invalido");
}

