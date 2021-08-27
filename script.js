function addNovaTarefa() {
    const listaTarefa = document.getElementById('lista-tarefas');
    const novaTarefa = document.createElement('li'); 
    const tarefa = document.getElementById('texto-tarefa');
    novaTarefa.innerText = tarefa.value;
    listaTarefa.appendChild(novaTarefa);
    tarefa.value = '';
}

const botaoTarefa = document.getElementById('criar-tarefa');
botaoTarefa.addEventListener('click', addNovaTarefa);