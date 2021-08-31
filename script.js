const taskList = document.querySelector('#lista-tarefas');
// Função que adiciona tarefa a lista
function adicionaTarefa() {
  const task = document.getElementById('texto-tarefa').value;
  const taskItem = document.createElement('li');
  taskItem.innerHTML = task;
  taskList.appendChild(taskItem);

  // Limpa o conteúdo
  const taskInput = document.getElementById('texto-tarefa');
  taskInput.value = '';
}

const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', adicionaTarefa);
