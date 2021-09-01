const taskList = document.querySelector('#lista-tarefas');

// Função limpar lista remove todos os itens
function limparLista() {
  const deleteTarget = document.querySelectorAll('li');
  for (let i = 0; i < deleteTarget.length; i += 1) {
    deleteTarget[i].remove();
  }
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', limparLista);

// Função remove apenas os concluídos
function limparCompletos() {
  const completeTarget = document.querySelectorAll('.completed');
  for (let i = 0; i < completeTarget.length; i += 1) {
    completeTarget[i].remove();
  }
}

const completeTasksBtn = document.getElementById('remover-finalizados');
completeTasksBtn.addEventListener('click', limparCompletos);

// Funções mudam a cor do item
function alteraCor(task) {
  const taskItemList = document.querySelectorAll('li');
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].style.removeProperty('background-color');
  }

  const taskGrey = task.target;
  taskGrey.style.backgroundColor = 'grey';
}

function alteraCorOnClick() {
  const newTaskItem = document.querySelectorAll('li');
  for (let i = 0; i < newTaskItem.length; i += 1) {
    newTaskItem[i].addEventListener('click', alteraCor);
  }
}

// Função faz item riscado quando completo
function riscaTarget(item) {
  const taskItem = item.target;
  if (taskItem.className === 'completed') {
    taskItem.classList.remove('completed');
  } else {
    taskItem.classList.add('completed');
  }
}

function riscaTargetOnClick() {
  const taskTarget = document.querySelectorAll('li');
  for (let i = 0; i < taskTarget.length; i += 1) {
    taskTarget[i].addEventListener('dblclick', riscaTarget);
  }
}

// Função adiciona tarefa
function adicionaTarefa() {
  const task = document.getElementById('texto-tarefa').value;
  const tasktask = document.createElement('li');
  tasktask.innerHTML = task;
  taskList.appendChild(tasktask);

  // Limpa o conteúdo
  const taskInput = document.getElementById('texto-tarefa');
  taskInput.value = '';
  alteraCorOnClick();
  riscaTargetOnClick();
}

const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', adicionaTarefa);

// Move o item selecionado para cima na lista.
function moveUp() {
  const taskItem = document.querySelectorAll('li');
  for (let i = 0; i < taskItem.length; i += 1) {
    if (taskItem[i].style.backgroundColor === 'grey' && (i - 1) !== -1) {
      taskList.insertBefore(taskItem[i],
        taskItem[i - 1]);
    }
  }
}

// Move o item selecionado para baixo na lista.
function moveDown() {
  const taskItem = document.querySelectorAll('li');
  for (let i = taskItem.length - 1; i >= 0; i -= 1) {
    if (taskItem[i].style.backgroundColor === 'grey'
      && (i + 1) !== taskItem.length) {
      taskList.insertBefore(taskItem[i + 1],
        taskItem[i]);
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);

// Função que remove o item selecionado na lista de tarefas.
function removeItemSelecionado() {
  const taskItem = document.querySelectorAll('li');
  for (let i = taskItem.length - 1; i >= 0; i -= 1) {
    if (taskItem[i].style.backgroundColor === 'grey') {
      (taskItem[i]).remove();
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', removeItemSelecionado);
