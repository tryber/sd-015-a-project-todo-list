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

const botaoApagaTarefas = document.getElementById('apaga-tudo');

function apagaTarefas() {
    botaoApagaTarefas.addEventListener('click', () => {
        const allTarefas = document.querySelectorAll('li');
        for (var i = 0; i < allTarefas.length; i += 1) {
            allTarefas[i].remove();
        }
    })
}

apagaTarefas();

const botaoApagarTarefasFeitas = document.getElementById('remover-finalizados');

function apagarTarefasFeitas() {
    botaoApagarTarefasFeitas.addEventListener('click', () => {
        const allTarefas = document.querySelectorAll('.completed');
        for (var i = 0; i < allTarefas.length; i += 1) {
            allTarefas[i].remove();
        }
    });
}

apagarTarefasFeitas();