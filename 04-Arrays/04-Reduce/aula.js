//REDUCE

// Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 12, 26, 2, 8, 90, 100, 11, 16, 4];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador;
}, 0)
//console.log(total)





// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Maria', idade: 50 },
    { nome: 'Paula', idade: 20 },
    { nome: 'Jô', idade: 15 },
    { nome: 'Guilherme', idade: 60 },
    { nome: 'Keffison', idade: 55 },
    { nome: 'Gleitom', idade: 66 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor,){
    if (acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
});

console.log(maisVelha);
