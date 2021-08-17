// When clicking on the 'Criar Tarefa' button, a new list item is created at the end of the list and the input text is cleared.

const taskLi = document.getElementById('lista-tarefas');
const addTaskButton = document.getElementById('criar-tarefa');

function cleanInput() {
  document.getElementById('texto-tarefa').value = '';
}

function addTask() {
  const listItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa').value;

  listItem.innerHTML = inputText;
  taskLi.appendChild(listItem);

  cleanInput();
}

addTaskButton.addEventListener('click', addTask);

// Clicking on an item in the list changes its background color to grey. All other elements must have the initial background color.

const allListItens = document.getElementsByTagName('li');

function deleteGreyClass() {
  for (let i = 0; i < allListItens.length; i += 1) {
    allListItens[i].classList.remove('greyElement');
  }
}

function greyBackground(event) {
  deleteGreyClass();
  event.target.classList.add('greyElement');
}

taskLi.addEventListener('click', greyBackground);

// Double-clicking on an item causes it to be crossed out, indicating that it has been completed. It is possible to undo this action by double-clicking the item again.

function completedTask(evt) {
  const task = evt.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

taskLi.addEventListener('dblclick', completedTask);

// When clicking on the 'Limpar Lista' button all itens from the list are deleted.

function cleanTasks() {
  const listSize = document.querySelectorAll('li');
  for (let i = 0; i < listSize.length; i += 1) {
    taskLi.removeChild(listSize[i]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', cleanTasks);

// When clicking on the 'Limpar Completos' button all completed task itens are deleted from the list.

function cleanCompleted() {
  const listSize = document.querySelectorAll('li');
  for (let i = 0; i < listSize.length; i += 1) {
    if (listSize[i].classList.contains('completed')) {
      taskLi.removeChild(listSize[i]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', cleanCompleted);

// BONUS
// Clicking on the 'Salvar Lista' button adds all task itens and their class(es) to the local storage.

function saveList() {
  const liItens = taskLi.innerHTML;
  window.localStorage.setItem('savedTasks', liItens);
}

document.getElementById('salvar-tarefas').addEventListener('click', saveList);

function checkStorage() {
  const updateTasks = window.localStorage.getItem('savedTasks');
  taskLi.innerHTML = updateTasks;
}

checkStorage();

// When clicking on the 'arrow-up' button the selected item is moved up.

function moveUp() {
  const listSize = document.querySelectorAll('li');
  for (let i = 1; i < listSize.length; i += 1) {
    if (listSize[i].classList.contains('greyElement')) {
      const element = listSize[i].innerHTML;
      const previousElement = listSize[i].previousElementSibling.innerHTML;
      listSize[i].innerHTML = previousElement;
      listSize[i].classList.remove('greyElement');
      listSize[i - 1].innerHTML = element;
      listSize[i - 1].classList.add('greyElement');
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

// When clicking on the 'arrow-down' button the selected item is moved down.

function moveDown() {
  const listSize = document.querySelectorAll('li');
  for (let i = listSize.length - 2; i >= 0; i -= 1) {
    if (listSize[i].classList.contains('greyElement')) {
      const element = listSize[i].innerHTML;
      const nextElement = listSize[i].nextElementSibling.innerHTML;
      listSize[i].innerHTML = nextElement;
      listSize[i].classList.remove('greyElement');
      listSize[i + 1].innerHTML = element;
      listSize[i + 1].classList.add('greyElement');
    }
  }
}

document.getElementById('mover-baixo').addEventListener('click', moveDown);

// When clicking on the 'x' button the selected task item is deleted from the list.

function cleanSeleceted() {
  const listSize = document.querySelectorAll('li');
  for (let i = 0; i < listSize.length; i += 1) {
    if (listSize[i].classList.contains('greyElement')) {
      taskLi.removeChild(listSize[i]);
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', cleanSeleceted);
