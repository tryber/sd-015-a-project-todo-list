function addTaskList() {
  const textItem = document.getElementById('texto-tarefa').value;
  const tasks = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = textItem;
  tasks.appendChild(listItem);
  document.getElementById('texto-tarefa').value = '';
}

const clickAddItem = document.getElementById('criar-tarefa');
clickAddItem.addEventListener('click', addTaskList);
