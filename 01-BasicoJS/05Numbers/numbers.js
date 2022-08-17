let num1 = 10.581615448494;
let num2 = 15;

//Converte de número para STRING sem alterar a variavel
console.log(num1.toString() + num2)

//Aredondamento de números - tira as casas decimais
console.log(num1.toFixed(2));

//Verificar se um número é inteiro
console.log(Number.isInteger(num2))

//Verificar se a conta está errada (NaN)
let temp = num2 * 'Olá';
console.log(Number.isNaN(temp))