const taskList = document.querySelector('#lista-tarefas');

// Funções que mudam a cor do item
function alteraCor(task) {
  const taskItemList = document.querySelectorAll('li');
  for (let i = 0; i < taskItemList.length; i += 1) {
    taskItemList[i].style.removeProperty('background-color');
  }

  const taskGrey = task.target;
  taskGrey.style.backgroundColor = 'rgb(128, 128, 128)';
  taskGrey.style.color = 'white';
}

function alteraCorOnClick() {
  const newTaskItem = document.querySelectorAll('li');
  for (let i = 0; i < newTaskItem.length; i += 1) {
    newTaskItem[i].addEventListener('click', alteraCor);
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
}

const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', adicionaTarefa);
