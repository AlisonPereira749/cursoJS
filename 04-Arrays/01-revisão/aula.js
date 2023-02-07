//Revisão de ARRAYS
//Podemos o usar o costrutor

const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[3] = 'Pedro'
console.log(nomes)

//splice
//nome.splice(indice, delete, elemento 1, elemento 2, elemento 3);
const tarefas = ['Trabalhar', 'Estudar', 'Comer', 'Dormir', 'Malhar']

removidos = tarefas.splice(3, 2)
console.log(tarefas, removidos)


//Concatenar ARRAYS
const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]

const ar3 = ar1.concat(ar2, 7, 8, 9)
const ex2 = [...ar1, ar2]

console.log(ar3)
console.log(ex2)