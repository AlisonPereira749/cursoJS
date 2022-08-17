/*Exercíco
Pedir um número na tela
-Mostrar a raiz quadrada
-Se é inteiro ou não
-Se é um número (NaN)
-Arredondar para baixo
-Arredondar para cima
-Colocar 2 casas decimais
*/

const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0.5}.</p>`;

texto.innerHTML += `<p>${numero} é interio: ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

