//Map - altera os valores do ARRAY

const numeros = [5, 50, 80, 12, 26, 2, 8, 90, 100, 11, 16, 4];
const nEmDobro = numeros.map(valor => valor * 2);
//console.log(nEmDobro)



// 1) para cada elemento retorne:
// 2) Retorne apenas uma string com o nome da pessoa
// 3) Remova apenas a chave "nome" do objeto
// 4) Adcione uma chave ID em cada objeto

const pessoas = [
    { nome: 'Maria', idade: 50 },
    { nome: 'Paula', idade: 20 },
    { nome: 'Jô', idade: 15 },
    { nome: 'Guilherme', idade: 60 },
    { nome: 'Keffison', idade: 55 },
    { nome: 'Gleitom', idade: 66 },
];

// 1)
const nomes = pessoas.map(obj => obj.nome);
// 2)
const idades = pessoas.map(obj => ({idade: obj.idade}));
// 3)
const comID = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
})

console.log(comID)