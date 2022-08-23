//Arrays básico

let dados = ['e-mail', 'senha', 'telefone']

dados[dados.length] = 'Nome' //Forma de adcionar menos prática

dados.push('Sobrenome') //Adciona no fim
dados.unshift('Endereço') //Adciona no inicio

dados.pop() //Remove do fim (os dados removidos podem se armazenados em uma variavel)
dados.shift() //Remove do inicio

console.log(dados)