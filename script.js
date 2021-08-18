const header = document.getElementsByTagName('header');
// const main = document.getElementsByTagName('main');
const sectionListControl = document.getElementById('task-list-control');
const sectionListContent = document.getElementById('task-list-content');
const sectionItemControl = document.getElementById('task-item-control');
const listTarefas = 'lista-tarefas';
const newSelector = (qttOfSelector, element, selector, selectorName) => {
  for (let index = 0; index < qttOfSelector; index += 1) {
    if (typeof (element.length) === 'undefined') {
      element.setAttribute(selector, selectorName);
    } else {
      element[index].setAttribute(selector, selectorName);
    }
  }
};
const createNewElement = (element, elementContent, location, qttofElements,
  selector, selectorName) => {
  for (let index = 0; index < qttofElements; index += 1) {
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    if (typeof (location.length) === 'undefined') {
      location.appendChild(newElement);
      newSelector(qttofElements, location.appendChild(newElement), selector, selectorName);
    } else {
      location[index].appendChild(newElement);
      newSelector(qttofElements, location[index].appendChild(newElement), selector, selectorName);
    }
  }
};

const newEvent = (location, event, func) => location.addEventListener(event, func);

const addNewTask = () => {
  const inputAddNewTask = document.getElementById('texto-tarefa');
  const newTaskValue = inputAddNewTask.value;
  const taskList = document.getElementById(listTarefas);
  createNewElement('li', newTaskValue, taskList, 1, 'class', 'task-item');
  inputAddNewTask.value = null;
};

const highLightItem = (event) => {
  if (event.target.classList.contains('task-item')) {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
};

const underScoreItem = (event) => {
  if (event.target.classList.contains('task-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
};
const clearList = () => {
  const itemList = document.getElementById(listTarefas);
  itemList.remove();
  createNewElement('ol', '', sectionListContent, 1, 'id', listTarefas);
};
const clearCompleted = () => {
  const completedItens = document.getElementsByClassName('completed');
  const list = document.querySelector('ol');
  // Percorrendo o array ao contrário
  for (let index = completedItens.length - 1; index >= 0; index -= 1) {
    list.removeChild(completedItens[index]);
  }
};

const saveTask = () => {
  const taskItens = document.getElementById(listTarefas);
  sessionStorage.setItem('itens', JSON.stringify(taskItens.innerHTML));
};
const restoreTask = () => {
  const ol = document.getElementById(listTarefas);
  const list = JSON.parse(sessionStorage.getItem('itens'));
  ol.innerHTML = list;
};

const moveTaskUp = () => {
  const taskItens = document.getElementsByClassName('task-item');
  const selectedItem = document.querySelector('.selected');
  const ol = document.getElementById(listTarefas);
  for (let index = 0; index < taskItens.length; index += 1) {
    const selectedTask = taskItens[index].classList;
    if (selectedTask.contains('selected') && index > 0) {
      ol.insertBefore(selectedItem, taskItens[index - 1]);
    }
  }
};
const moveTaskDown = () => {
  // const taskItens = document.getElementsByClassName('task-item');
  const selectedItem = document.querySelector('.selected');
  const ol = document.getElementById(listTarefas);
  // const selectedTask = event.target.classList;
  // console.log(selectedItem.nextSibling);
  if (selectedItem !== null) {
    const brother = selectedItem.nextSibling;
    if (brother !== null) {
      ol.insertBefore(brother, selectedItem);
    }
  }
  // for (let index = 0; index < taskItens.length; index += 1) {
  // }
};

// #REQ 1
createNewElement('h1', 'Minha Lista de Tarefas', header, 1);

// #REQ 2
createNewElement('p', 'Clique duas vezes em um item para marcá-lo como completo', header, 1, 'id',
  'funcionamento');

// #REQ 3
createNewElement('input', '', sectionListControl, 1, 'id', 'texto-tarefa');

// #REQ 4
createNewElement('ol', '', sectionListContent, 1, 'id', listTarefas);
// #REQ 5 e 6
createNewElement('button', 'Adicionar', sectionListControl, 1, 'id', 'criar-tarefa');
const buttonAddNewTask = document.getElementById('criar-tarefa');
newEvent(buttonAddNewTask, 'click', addNewTask);

// #REQ 7 e 8
const taskList = document.getElementById(listTarefas);
// highLightItem(taskList);
newEvent(taskList, 'click', highLightItem);

// #REQ 9
// underScoreItem(taskList);
newEvent(taskList, 'dblclick', underScoreItem);

// #REQ 10
createNewElement('button', 'Limpar Lista', sectionItemControl, 1, 'id', 'apaga-tudo');
const buttonClearList = document.getElementById('apaga-tudo');
newEvent(buttonClearList, 'click', clearList);

// #REQ 11
createNewElement('button', 'Limpar Finalizados', sectionItemControl, 1, 'id',
  'remover-finalizados');
const buttonClearCompleted = document.getElementById('remover-finalizados');
newEvent(buttonClearCompleted, 'click', clearCompleted);

// #REQ 12
createNewElement('button', 'Salvar Tarefas', sectionItemControl, 1, 'id', 'salvar-tarefas');
const buttonSaveTask = document.getElementById('salvar-tarefas');

newEvent(buttonSaveTask, 'click', saveTask);

window.onload = restoreTask;

// #REQ 13

createNewElement('button', 'mover para cima', sectionItemControl, 1, 'id', 'mover-cima');
createNewElement('button', 'mover para baixo', sectionItemControl, 1, 'id', 'mover-baixo');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
newEvent(buttonMoveUp, 'click', moveTaskUp);
newEvent(buttonMoveDown, 'click', moveTaskDown);
