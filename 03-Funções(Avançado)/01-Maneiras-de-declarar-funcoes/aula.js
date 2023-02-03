// Ás varias maneiras de declarar uma função

//Declaração de função normal 
function funcaoNormal () {
    console.log('Oie');
}
funcaoNormal();


// First-class obejects (Objetos de primeira classe)
const emFormaDeDado = function() {
    console.log('Sou um dado!')
}
emFormaDeDado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(emFormaDeDado)

// Arrow function 
const funcaoAroow = () => {
    console.log('Sou uma arrow functio')
}
funcaoAroow();

//Dentro de um objeto 
const obj = {
    emFormaDeObj() {
        console.log('Função em forma de objeto')
    }
}
obj.emFormaDeObj();