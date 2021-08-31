const taskList = document.querySelector('#lista-tarefas');

function adicionaTarefa() {
  const task = document.getElementById('texto-tarefa').value;
  const taskItem = document.createElement('li');
  taskItem.innerHTML = task;
  taskList.appendChild(taskItem);
}

const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', adicionaTarefa);
