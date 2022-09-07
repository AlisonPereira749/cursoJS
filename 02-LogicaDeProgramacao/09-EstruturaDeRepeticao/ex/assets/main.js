
const elementos = [
    {tag: 'p', texto: 'texto que vai ser exibido'},
    {tag: 'div', texto: 'texto que vai ser exibido'},
    {tag: 'section', texto: 'texto que vai ser exibido'},
    {tag: 'footer', texto: 'texto que vai ser exibido'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerText = texto;
    div.appendChild(criarTag);
    console.log();
}

container.appendChild(div)