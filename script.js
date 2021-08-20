const list = document.querySelector('#lista-tarefas');
function insertElement() {
  const item = document.getElementById('texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.innerHTML = item;
  list.appendChild(itemList);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', insertElement);
