/*Revisando Objetos

 const nomeVariavel = {
    chave: 'Valor,
    chave: 'Valor
}

*/

//Posso usar o construtor 
const pessoa = new Object();
pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Oliveira';

console.log(pessoa)

pessoa.usandoFunction = function() {
    console.log(`${this.nome} está no Objeto`)
}
pessoa.usandoFunction();