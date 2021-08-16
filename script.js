const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');
const deleteButton = document.getElementById('apaga-tudo');
const completedRemoveButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const removeSelectedButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

// Loads saved tasks
function loadList() {
  list.innerHTML = localStorage.getItem('tasks');
}

window.onload = loadList;

// Creates task
function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  list.appendChild(newTask);
  inputTask.value = '';
}

createTaskButton.addEventListener('click', createTask);

// Changes task background-color
function removeBackgroundColor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function taskBackgroundColor(event) {
  removeBackgroundColor();
  const clickedTask = event.target;
  clickedTask.style.backgroundColor = 'rgb(128, 128, 128)';
  clickedTask.style.color = 'rgb(44, 182, 125)';
}

list.addEventListener('click', taskBackgroundColor);

// Line-through elements (completed)
function lineThrough(event) {
  const lineElement = event.target;
  if (lineElement.className === 'completed') {
    lineElement.removeAttribute('class');
  } else {
    lineElement.className = 'completed';
  }
}

list.addEventListener('dblclick', lineThrough);

// Deletes all tasks
function deleteItems() {
  const listItems = document.getElementsByTagName('li');
  if (listItems.length !== 0) {
    for (let i = listItems.length - 1; i >= 0; i -= 1) {
      const item = listItems[i];
      item.remove();
    }
  }
}

deleteButton.addEventListener('click', deleteItems);

// Deletes completed tasks
function deleteCompleted() {
  const completedElements = document.getElementsByClassName('completed');
  if (completedElements.length !== 0) {
    for (let i = completedElements.length - 1; i >= 0; i -= 1) {
      const completedItem = completedElements[i];
      completedItem.remove();
    }
  }
}

completedRemoveButton.addEventListener('click', deleteCompleted);

// Saving tasks to local storage
function saveList() {
  localStorage.setItem('tasks', list.innerHTML);
  alert('Tarefas salvas!');
}

saveButton.addEventListener('click', saveList);

// Removes selected item
function removeSelected() {
  const selected = document.querySelector('li[style]');
  selected.remove();
}

removeSelectedButton.addEventListener('click', removeSelected);

// Move selected up
function moveUp() {
  const upTask = document.querySelector('li[style]');
  if (upTask !== null) {
    const previousTask = upTask.previousSibling;
    if (previousTask !== null) {
      list.insertBefore(upTask, previousTask);
    }
  }
}

moveUpButton.addEventListener('click', moveUp);

// Move selected down
function moveDown() {
  const downTask = document.querySelector('li[style]');
  if (downTask !== null) {
    const nextTask = downTask.nextSibling;
    if (nextTask !== null) {
      list.insertBefore(nextTask, downTask);
    }
  }
}

moveDownButton.addEventListener('click', moveDown);
