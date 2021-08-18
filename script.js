//  declarations
const key = 'assignment';
const btnAddToList = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemoveFinishedTask = document.getElementById('remover-finalizados');
const btnSaveSession = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');
let isSelected = false;

//  Functions
function addToList() {
  const li = document.createElement('li');

  if (!inputValue.value) { // if the value is empty send an alert and exit the function
    alert('Escreva algo!');
    return;
  }

  li.textContent = inputValue.value;
  list.appendChild(li);
  inputValue.value = '';
}

function cleanSelected() {
  const listChild = list.children;
  for (const value of listChild) {
    if (value.classList.contains('selected')) {
      value.classList.remove('selected');
    }
  }
}

function selectListElement(event) {
  if (!isSelected) {
    event.target.classList.toggle('selected');
    isSelected = true;
  } /* else if (isSelected && event.target.classList.contains('selected')) {
    event.target.classList.toggle('selected');
    isSelected = false;
  } */ else {
    cleanSelected();
    event.target.classList.toggle('selected');
    //isSelected = false;
  }
}

function checkAssignment(event) {
  event.target.classList.toggle('completed');
}

function clearAllListItems() {
  list.textContent = '';
}

function removeFinished() {
  const completed = document.querySelectorAll('.completed');
  if (completed.length === 0) { return; }
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}

function saveSession() {
  localStorage.setItem(key, list.innerHTML);
}

function verifySavedSession() {
  if (localStorage.length === 0) { return; }
  list.innerHTML = localStorage.getItem(key);
}

function moveUp() {
  const selectedElement = document.querySelector('.selected');
  let auxClass = '';
  let auxText = '';
  if (!list.hasChildNodes()) { return; }
  if (!selectedElement) { return; }
  if (!selectedElement.previousElementSibling) { return; }
  auxClass = selectedElement.previousElementSibling.className;
  auxText = selectedElement.previousElementSibling.textContent;
  selectedElement.previousElementSibling.className = selectedElement.className;
  selectedElement.previousElementSibling.textContent = selectedElement.textContent;
  selectedElement.className = auxClass;
  selectedElement.textContent = auxText;
}

function moveDown() {
  const selectedElement = document.querySelector('.selected');
  let auxClass = '';
  let auxText = '';
  if (!list.hasChildNodes()) { return; }
  if (!selectedElement) { return; }
  if (!selectedElement.nextElementSibling) { return; }
  auxClass = selectedElement.nextElementSibling.className;
  auxText = selectedElement.nextElementSibling.textContent;
  selectedElement.nextElementSibling.className = selectedElement.className;
  selectedElement.nextElementSibling.textContent = selectedElement.textContent;
  selectedElement.className = auxClass;
  selectedElement.textContent = auxText;
}

function removeSelectedElement() {
  const element = document.querySelector('.selected');
  element.remove();
}

//  events
window.addEventListener('load', verifySavedSession);
btnAddToList.addEventListener('click', addToList);
list.addEventListener('click', selectListElement);
list.addEventListener('dblclick', checkAssignment);
btnClearList.addEventListener('click', clearAllListItems);
btnRemoveFinishedTask.addEventListener('click', removeFinished);
btnSaveSession.addEventListener('click', saveSession);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);
btnRemoveSelected.addEventListener('click', removeSelectedElement);
