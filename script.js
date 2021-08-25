//Add a line-through on the double-clicked object
function completedTask(event) {
  if (event.target.classList.length === 1) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
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
  event.target.style.backgroundColor = 'gray';
}


// Function that adds input text to "li"
function addText() {
  const accessInput = document.querySelector('#texto-tarefa');
  const accessOl = document.querySelector('#lista-tarefas');
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
  const accessOl = document.querySelector('#lista-tarefas');
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

function removeSelected() {
  const accessLi = document.querySelectorAll('.list');
  for (let i = 0; i < accessLi.length; i += 1) {
    const runList = accessLi[i];
    const styleList = runList.style.backgroundColor
    if (styleList === 'gray') {
      runList.remove();
    }
  }
}

const buttonSelected = document.querySelector('#remover-selecionado');
buttonSelected.addEventListener('click', removeSelected);
