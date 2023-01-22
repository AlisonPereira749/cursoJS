// For In - Lê os ídices ou chaves do objeto 

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Victor',
    idade: 30
};

//Lendo o valor da chave
for (let chave in pessoa) {
    console.log(chave)
}

//Lendo a chave e o valor
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}