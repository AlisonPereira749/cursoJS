//Selecionar a div dos paragrafos
const divP = document.querySelector('.divP')

//Selecionar os paragrafos
const paragrafos = divP.querySelectorAll('p')

//Selecionar o estilo do corpo da página
const estiloBody = getComputedStyle(document.body);

//Selecionar a cor do body
const getBgColor = estiloBody.backgroundColor;


for (let p of paragrafos) {
    p.style.backgroundColor = getBgColor;
    p.style.color = '#fff'
    p.style.padding = '10px';
}
