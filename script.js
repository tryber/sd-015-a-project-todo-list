// Seletores
const listItens = 'list-itens';
const textTask = document.getElementById('texto-tarefa');
const tasks = document.getElementById('lista-tarefas');

// função para adicionar tarefas a lista
function addTaskList() {
  const textItem = textTask.value;
  if (textItem !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = textItem;
    listItem.className = listItens;
    tasks.appendChild(listItem);
    textTask.value = '';
  }
}

// Escutador de evento para o botão de adicionar elementos a lista.
const clickAddItem = document.getElementById('criar-tarefa');
clickAddItem.addEventListener('click', addTaskList);

// Função para selecionar tarefas na lista
function selectElement(clickEvent) {
  const taskList = document.querySelectorAll('.list-itens');
  const itenSelection = clickEvent.target;
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].id === 'selected') {
      taskList[i].removeAttribute('id');
    }
  }
  itenSelection.id = 'selected';
}

// Escutador de evento para selecionar um elemento da lista.
const clickSelection = tasks;
clickSelection.addEventListener('click', selectElement);

function markDone(clickEvent) {
  const itenSelection = clickEvent.target;
  if (itenSelection.className === 'list-itens completed') {
    itenSelection.classList.remove('completed');
  } else {
    itenSelection.classList.add('completed');
  }
}

// Escutador de evento para marcar tarefas concluídas
clickSelection.addEventListener('dblclick', markDone);

// Função para limpar a lista inteira
function clearList() {
  const list = document.querySelectorAll('.list-itens');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

// Escutador de evento para limpar a lista inteira
const clearListButton = document.getElementById('apaga-tudo');
clearListButton.addEventListener('click', clearList);

// Função para limpar tarefas concluídas
function clearDone() {
  const list = document.querySelectorAll('.completed');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

// Escutador de evento para limpar tarefas concluídas
const clearDoneButton = document.getElementById('remover-finalizados');
clearDoneButton.addEventListener('click', clearDone);

// Função para salvar a lista
function saveList() {
  const listItensSave = document.getElementsByClassName('list-itens');
  const save = {};
  const saveClass = {};
  for (let i = 0; i < listItensSave.length; i += 1) {
    save[`item${i}`] = listItensSave[i].innerText;
    saveClass[`itemC${i}`] = listItensSave[i].className;
  }
  localStorage.setItem('list', JSON.stringify(save));
  localStorage.setItem('listC', JSON.stringify(saveClass));
}

// Função para recuperar a lista salva
function getList() {
  const saveString = localStorage.getItem('list');
  const objSave = JSON.parse(saveString);
  const arrayList = Object.values(objSave);
  const saveClassString = localStorage.getItem('listC');
  const objSaveClass = JSON.parse(saveClassString);
  const arrayListC = Object.values(objSaveClass);
  for (let i = 0; i < arrayList.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.innerText = arrayList[i];
    listItem.className = arrayListC[i];
    tasks.appendChild(listItem);
    textTask.value = '';
  }
}

// Escutador de evento para o botão de salvar tarefas
const saveListButton = document.getElementById('salvar-tarefas');
saveListButton.addEventListener('click', saveList);

// Teste para saber se existe alguma lista salva no localstorage
if ('list' in localStorage) {
  getList();
}

// Mover tarefa para cima
function moveUp() {
  const changeTask = tasks.children;
  for (let i = 1; i < changeTask.length; i += 1) {
    if (changeTask[i].id === 'selected') {
      tasks.insertBefore(changeTask[i], changeTask[i - 1]);
    }
  }
}

// Escutador de evento para o botão de mover para cima
const moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);

// Mover tarefa para baixo
function moveDown() {
  const changeTask = document.querySelectorAll('li');
  for (let i = 0; i < changeTask.length - 1; i += 1) {
    if (changeTask[i].id === 'selected') {
      tasks.insertBefore(changeTask[i + 1], changeTask[i]);
    }
  }
}

// Escutador de evento para o botão de mover para baixo
const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);

// Função para remover tarefa selecionada
function removeSelected() {
  const selection = document.querySelector('#selected');
  if (selection.id === 'selected') {
    selection.remove();
  }
}

// Escutador de evento para o botão de remover selecionado
const removeSelButton = document.getElementById('remover-selecionado');
removeSelButton.addEventListener('click', removeSelected);
