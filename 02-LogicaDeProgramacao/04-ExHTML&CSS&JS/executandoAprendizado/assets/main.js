/**
 * CALCULAR IMC
Menos do que 18,5	Abaixo do peso
Entre 18,5 e 24,9	Peso normal
Entre 25 e 29,9	    Sobrepeso
Entre 30 e 34,9	    Obesidade grau 1
Entre 35 e 39,9	    Obesidade grau 2
Mais do que 40	    Obesidade grau 3

Passo a passo
1 - Prevenir comportamento padrão do formulário
2 - Criar função para setar o resultado 
3 - Formula imc = peso / (altura * altura)
*/

let form = document.querySelector("#form")
let peso = document.querySelector("#ipeso").value
let altura = document.querySelector("#ialtura").value

form.addEventListener('submit', function(event){
    event.preventDefault();
    setResultado('Olá mundo')
});

function setResultado (msg) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
}
