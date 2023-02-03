//Parâmetros da função
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 5, 6, 8);

//Atribuição via desestruturação nos argumentos 
function func({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
func(obj);

//Operador de resto ...
function conta(operardor, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operardor === '+')  acumulador += numero;
        if (operardor === '-')  acumulador -= numero;
        if (operardor === '*')  acumulador *= numero;
        if (operardor === '/')  acumulador /= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50);