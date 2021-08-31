const accessOl = document.querySelector('#lista-tarefas');

// Add a line-through on the double-clicked object
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Independent function that serves to make all the objects in the list with a white background color
function clearCompletedTask() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    accessLi[i].style.backgroundColor = 'white';
  }
}

// Function that assigns gray color to selected list element, but first calls clearCompletedTask function
function selected(event) {
  clearCompletedTask();
  const way = event.target;
  way.style.backgroundColor = 'gray';
}

// Function that adds input text to "li"
function addText() {
  const accessInput = document.querySelector('#texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value; // Getting the input value
  createLi.classList.add('list');
  accessOl.appendChild(createLi);
  accessInput.value = ''; // Resetting the input
  createLi.addEventListener('dblclick', completedTask);
  createLi.addEventListener('click', selected);
}

const accessButton = document.querySelector('#criar-tarefa');
accessButton.addEventListener('click', addText);

// Function that deletes all objects from the list
function deleteList() {
  accessOl.innerText = '';
}

const accessDelete = document.querySelector('#apaga-tudo');
accessDelete.addEventListener('click', deleteList);

// Function that removes objects from the list that have a line-through
function removeFinished() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    const runList = accessLi[i];
    const styleList = window.getComputedStyle(accessLi[i]).getPropertyValue('text-decoration');
    if (styleList === 'line-through solid rgb(0, 0, 0)') {
      runList.remove();
    }
  }
}

const buttonFinished = document.querySelector('#remover-finalizados');
buttonFinished.addEventListener('click', removeFinished);

// Function that removes objects from the selected list
function removeSelected() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    const runList = accessLi[i];
    const styleList = runList.style.backgroundColor;
    if (styleList === 'gray') {
      runList.remove();
    }
  }
}

const buttonSelected = document.querySelector('#remover-selecionado');
buttonSelected.addEventListener('click', removeSelected);

function levelUp() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    const gray = accessLi[i];
    const element = gray.previousSibling;
    const styleList = gray.style.backgroundColor;
    if (styleList === 'gray' && element !== null) {
      accessOl.insertBefore(gray, element);
    }
  }
}

const buttonUp = document.querySelector('#mover-cima');
buttonUp.addEventListener('click', levelUp);

function levelDown() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    const gray = accessLi[i];
    const element = gray.nextSibling;
    const styleList = gray.style.backgroundColor;
    if (styleList === 'gray' && element !== null) {
      console.log(element);
      accessOl.insertBefore(element, gray);
    }
  }
}

const buttonDown = document.querySelector('#mover-baixo');
buttonDown.addEventListener('click', levelDown);

function pressEnter(event) {
  if (event.key === 'Enter') { // Taken by reference to the '.key' function of the site https://www.horadecodar.com.br/2020/12/10/acionar-um-button-com-o-enter-do-teclado-em-javascript/ (Obs: Does not fit as a project requirement)
    addText();
  }
}

document.addEventListener('keypress', pressEnter);

function clearKey(event) {
  if (event.ctrlKey && event.key === 'x') {
    deleteList();
  }
}

document.addEventListener('keyup', clearKey);

function move(event) {
  if (event.key === 'ArrowUp') {
    levelUp();
  }
  if (event.key === 'ArrowDown') {
    levelDown();
  }
}

document.addEventListener('keydown', move);
