const taskList = document.querySelector('#lista-tarefas');

// Funções que mudam a cor do item
function alteraCor(task) {
  const taskItemList = document.querySelectorAll('li');
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].style.removeProperty('background-color');
  }

  const taskGrey = task.target;
  taskGrey.style.backgroundColor = 'rgb(128, 128, 128)';
}

function alteraCorOnClick() {
  const newTaskItem = document.querySelectorAll('li');
  for (let i = 0; i < newTaskItem.length; i += 1) {
    newTaskItem[i].addEventListener('dblclick', alteraCor);
  }
}

// Função que faz o item ser riscado quando completo
function riscaTarget(item) {
  const taskItem = item.target;
  if (taskItem.className === 'completed') {
    taskItem.removeAtributte('class');
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

// Função que adiciona tarefa a lista
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
