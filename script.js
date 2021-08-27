function addNovaTarefa() {
    const listaTarefa = document.getElementById('lista-tarefas');
    const novaTarefa = document.createElement('li'); 
    const tarefa = document.getElementById('texto-tarefa');
    novaTarefa.innerText = tarefa.value;
    listaTarefa.appendChild(novaTarefa);
    tarefa.value = '';
}

const listaTarefa = document.getElementById('lista-tarefas');
const botaoTarefa = document.getElementById('criar-tarefa');
botaoTarefa.addEventListener('click', addNovaTarefa);

function alteraCor(tarefas) {
    const clickTarefa = tarefas.target;
    clickTarefa.style.backgroundColor = 'rgb(128,128,128)';
}

listaTarefa.addEventListener('click', alteraCor);