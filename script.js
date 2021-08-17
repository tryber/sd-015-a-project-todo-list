const list = document.getElementById('lista-tarefas');

function selectItem(event) {
  const listItens = document.getElementsByClassName('list-item');

  for (let i = 0; i < listItens.length; i += 1) {
    const item = listItens[i];
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    }
  }

  const listItem = event.target;
  listItem.classList.add('selected');
}

function completeItem(event) {
  const listItem = event.target;
  listItem.classList.toggle('completed');
}

function addListItemListener() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = 0; i < listItens.length; i += 1) {
    const item = listItens[i];
    item.addEventListener('click', selectItem);
    item.addEventListener('dblclick', completeItem);
  }
}

function createListItem(value) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerHTML = value;
  list.appendChild(listItem);
  addListItemListener();
}

function addTask() {
  const input = document.getElementById('texto-tarefa');
  const inputText = input.value;
  createListItem(inputText);
  input.value = '';
}

function cleanList() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = listItens.length - 1; i >= 0; i -= 1) {
    const item = listItens[i];
    list.removeChild(item);
  }
}

function cleanCompletedItens() {
  const listItens = document.getElementsByClassName('list-item');
  for (let i = listItens.length - 1; i >= 0; i -= 1) {
    const item = listItens[i];
    if (item.classList.contains('completed')) {
      list.removeChild(item);
    }
  }
}

function saveTasks() {
  const listContent = list.innerHTML;
  localStorage.setItem('listContent', listContent);
}

function removeSelectedItem() {
  const listItem = document.querySelector('.selected');
  list.removeChild(listItem);
}

function upItem() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null && selectedItem.previousElementSibling) {
    const newElement = document.createElement('li');
    newElement.innerText = selectedItem.innerHTML;
    newElement.className = selectedItem.classList;
    list.insertBefore(newElement, selectedItem.previousElementSibling);
    const oldItem = document.querySelectorAll('.selected')[1];
    oldItem.parentNode.removeChild(oldItem);
    addListItemListener();
  }
}

function downItem() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null && selectedItem.nextElementSibling) {
    const newElement = document.createElement('li');
    newElement.innerText = selectedItem.innerHTML;
    newElement.className = selectedItem.classList;
    list.insertBefore(
      newElement,
      selectedItem.nextElementSibling.nextElementSibling,
    );
    const oldItem = document.querySelectorAll('.selected')[0];
    oldItem.parentNode.removeChild(oldItem);
    addListItemListener();
  }
}

function pageInit() {
  list.innerHTML = localStorage.getItem('listContent');
  addListItemListener();
}

function buttonsListener() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addTask);

  const cleanButton = document.getElementById('apaga-tudo');
  cleanButton.addEventListener('click', cleanList);

  const completedCleanButton = document.getElementById('remover-finalizados');
  completedCleanButton.addEventListener('click', cleanCompletedItens);

  const saveListButton = document.getElementById('salvar-tarefas');
  saveListButton.addEventListener('click', saveTasks);

  const removeItemButton = document.getElementById('remover-selecionado');
  removeItemButton.addEventListener('click', removeSelectedItem);
}

const upButton = document.getElementById('mover-cima');
upButton.addEventListener('click', upItem);

const downButton = document.getElementById('mover-baixo');
downButton.addEventListener('click', downItem);

pageInit();
buttonsListener();
