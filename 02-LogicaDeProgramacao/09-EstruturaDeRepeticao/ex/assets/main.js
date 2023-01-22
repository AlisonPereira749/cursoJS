
const elementos = [
    {tag: 'p', texto: 'texto que vai ser exibido 1'},
    {tag: 'div', texto: 'texto que vai ser exibido 2'},
    {tag: 'section', texto: 'texto que vai ser exibido 3'},
    {tag: 'footer', texto: 'texto que vai ser exibido 4'}
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