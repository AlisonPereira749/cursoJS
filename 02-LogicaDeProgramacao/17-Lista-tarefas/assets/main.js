//Selecionar os itens HTML
const inputTarefa = document.querySelector('.inputTarefa')
const btn = document.querySelector('.btnAdd')
const lista = document.querySelector('.lista')

//Criar li
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//Capturar evento de tecla precionada
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value);
    }
})

//Função que limpa o input 
function limpaInput() {
    inputTarefa.value = ' ';
    inputTarefa.focus();
}

//Botão que remove tarefa
function btnRemoveTarefa(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Remover Tarefa';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

//Cria uma tarefa
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista.appendChild(li);
    limpaInput();
    btnRemoveTarefa(li);
    salvarTarefas()
}

//Capturar evento de click
btn.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
});

//Capturar evento de click no botão apagar
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
});

//Função para salvar as tarefas no navegador
function salvarTarefas() {
    const listaTarefas = lista.querySelectorAll('li')
    const liDeTarefas = []

    for (let tarefa of listaTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover Tarefa', ' ').trim();
        liDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(liDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

//Função que vai ler a tarefas salvas em JSON e restaurar elas 
function restaurarTarefas () {
    const tarefas = localStorage.getItem('tarefas');
    const liDeTarefas = JSON.parse(tarefas);

    for (let tarefa of liDeTarefas) {
        criaTarefa(tarefa);
    }
}

restaurarTarefas();