//Funções no JavaScript
//Estrututa básica
//OBS - Depois do (return) nada será executado
/**
     function (parametros) {
     código a ser executado
    }
 */

function resultado(dias, meses) {
    const divisao = dias / meses
    return divisao
}

console.log(resultado(90, 3))

//Função anônima
//A function fica dentro de uma variavel
//Precisa ser finalizada com (;)
const raiz = function(r){
    return r ** 0.5;
};

console.log(raiz(9))

//arrow function
const soma = n => n + 5;
console.log(soma(5))