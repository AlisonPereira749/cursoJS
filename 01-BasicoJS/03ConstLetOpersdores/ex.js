/*
Antonio Alison tem 19 anos, 55 kg
tem 1.78 de altura e seu IMC é de 17.35891932836763
*/

let nome = 'Antonio ';
let sobrenome = 'Alison';
const nomeCompleto = nome + sobrenome;
const idade = 19;
const peso = 55;
const altura = 1.78;
let imc = peso / (altura * altura)
let anoNacimento = 2022 - idade;

// Template strings
console.log(`${nomeCompleto} tem idade anos, ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nomeCompleto} nasceu em ${anoNacimento}`)