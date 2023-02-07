//FILTER - VAI FILTRAR
//MAP - MODIFICAR
//REDUCE - VAI REDUZIR

//EX - Vamos pegar os números maiores que 10
const numeros = [5, 50, 80, 12, 26, 2, 8, 90, 100, 11, 16, 4];

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados)

//Retorne as pessoas que tem o nome com 6 letras ou mais
//Retorne as pessoas que tem mais de 50 anos ou mais 
//Retorne as pessoas cujo nome termina com a letra (a)
const pessoas = [
    { nome: 'Maria', idade: 50 },
    { nome: 'Paula', idade: 20 },
    { nome: 'Jô', idade: 15 },
    { nome: 'Guilherme', idade: 60 },
    { nome: 'Keffison', idade: 55 },
    { nome: 'Gleitom', idade: 66 },
];

const pNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pMaisVelhas = pessoas.filter(obj => obj.idade > 50);

const nomeTerminaA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a')
})

console.log(pNomeGrande)
console.log(pMaisVelhas)
console.log(nomeTerminaA)