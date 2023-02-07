//Retorne a soma do dobro de todos os pares 
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 12, 26, 2, 8, 90, 100, 11, 16, 4];

const numPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numPares)
