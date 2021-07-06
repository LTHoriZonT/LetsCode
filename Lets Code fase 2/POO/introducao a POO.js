const pessoa = { //objeto sem classe, utilizando quando nao for necessario reaproveita-lo no codigo
    nome: "Lucas",
    idade: 26,
}; // Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto

console.log(pessoa.nome);

const quadrado = {
    base: 10,
    altura: 20,

    calculaArea: function(){
        return this.base*this.altura
    }
};

console.log(quadrado.calculaArea());

const agenda = {
    contatos:[
    {nome : "contato1", telefone : "telefone1", email : "email1@teste.com"},
    {nome : "contato2", telefone : "telefone2", email : "email2@teste.com"},
    {nome : "contato3", telefone : "telefone3", email : "email3@teste.com"},
    {nome : "contato4", telefone : "telefone4", email : "email4@teste.com"},
    ], // atributo

    adicionar: function(contato){
        this.contatos.push(contato)
    } // metodo
};

console.log(agenda.contatos);