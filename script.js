const listaTarefa = document.getElementById('lista-tarefas');

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

function marcar(tarefa) {
    desmarcar();
    const clickTarefa = tarefa.target;
    clickTarefa.style.backgroundColor = 'rgb(128,128,128)';
}

function desmarcar() { 
    const desTarefa = document.querySelectorAll('li');
    for (var i = 0; i < desTarefa.length; i += 1) {
        desTarefa[i].style.backgroundColor = '';
    }
}

listaTarefa.addEventListener('click', marcar);

function tarefaConcluida(tarefa) {
    const tarefaSelec = tarefa.target;
    if (tarefaSelec.className !== 'completed') {
        tarefaSelec.className = 'completed';
        tarefaSelec.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    } else {
        tarefaSelec.style.textDecoration = '';
        tarefaSelec.className = '';
    }
}

listaTarefa.addEventListener('dblclick', tarefaConcluida);