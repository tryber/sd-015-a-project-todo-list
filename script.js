const taskButton = document.getElementById('criar-tarefa');
const cleanButton = document.getElementById('apaga-tudo');
const cleanFinished = document.getElementById('remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const ol = document.querySelector('#lista-tarefas');

function makeSelected(event) {
  const addSelectedClass = event.target;
  const selectedItemList = document.querySelector('.selected');
  addSelectedClass.classList.add('selected');
  addSelectedClass.style.backgroundColor = 'rgb(128,128,128)';

  if (selectedItemList) {
    selectedItemList.classList.remove('selected');
    selectedItemList.style.backgroundColor = '';
  }
}

function completedTask(event) {
  const cutItemList = event.target;

  if (!cutItemList.classList.contains('completed')) {
    cutItemList.classList.add('completed');
  } else {
    cutItemList.classList.remove('completed');
  }
}

function addToList() {
  const getInput = document.querySelector('#texto-tarefa');
  const newItemList = document.createElement('li');
  newItemList.innerHTML = getInput.value;
  newItemList.classList.add('list-item');
  document.querySelector('#lista-tarefas').appendChild(newItemList);
  newItemList.addEventListener('click', makeSelected);
  newItemList.addEventListener('dblclick', completedTask);
  document.getElementById('texto-tarefa').value = '';
}

taskButton.addEventListener('click', addToList);

function deleteButton() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].remove();
  }
}
cleanButton.addEventListener('click', deleteButton);

function finishedButton() {
  const verifyItemList = document.querySelectorAll('li');

  for (let index = 0; index < verifyItemList.length; index += 1) {
    if (verifyItemList[index].classList.contains('completed')) {
      verifyItemList[index].remove();
    }
  }
}
cleanFinished.addEventListener('click', finishedButton);

function saveTasksButton() {
  localStorage.setItem('savedTasks', ol.innerHTML);
}
saveButton.addEventListener('click', saveTasksButton);

function loadTasks() {
  ol.innerHTML = localStorage.getItem('savedTasks');
}

window.onload = () => loadTasks();