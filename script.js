const taskList = document.getElementById('lista-tarefas');

// CREATE TASKS WHEN THE BUTTON IS CLICKED

function taskCreator() {
  const userInput = document.getElementById('texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerText = userInput.value;
  newTask.className = 'tarefa';
  taskList.appendChild(newTask);
  userInput.value = '';
}

function taskCreatorButton() {
  const newTaskButton = document.getElementById('criar-tarefa');
  newTaskButton.addEventListener('click', taskCreator);
}

taskCreatorButton();

// CHANGE ITEM BACKGROUND COLOR WHEN CLICKED

function selectTask(event) {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.classList.contains('selecionada')) {
      // event.target.classList.remove('selecionada');
    } else {
      const currentSelected = document.getElementsByClassName('selecionada')[0];
      if (currentSelected !== undefined) {
        currentSelected.classList.remove('selecionada');
      }
      event.target.classList.add('selecionada');
    }
  }
}

function selectTaskButton() {
  taskList.addEventListener('click', selectTask);
}

selectTaskButton();

// MARK ITEM AS COMPLETED

function completedTask(event) {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

function completedTaskButton() {
  taskList.addEventListener('dblclick', completedTask);
}

completedTaskButton();

// CLEAR ALL BUTTON

function clearList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function clearListButton() {
  const clearAllButton = document.getElementById('apaga-tudo');
  clearAllButton.addEventListener('click', clearList);
}

clearListButton();

// CLEAR COMPLETED BUTTON

function clearCompleted() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let index = completedTasks.length - 1; index >= 0; index -= 1) {
    completedTasks[index].parentNode.removeChild(completedTasks[index]);
  }
}

function clearCompletedButton() {
  const clearCompletedTasksButton = document.getElementById('remover-finalizados');
  clearCompletedTasksButton.addEventListener('click', clearCompleted);
}

clearCompletedButton();

// SAVE LIST BUTTON

function saveList() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function saveListButton() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', saveList);
}

saveListButton();

// RECOVER SAVED LIST

function recoverList() {
  taskList.innerHTML = localStorage.getItem('tasks');
}

recoverList();

// MOVE ITENS
// this block was inspired on Marcelo Adriano work, where I learned about .inserbefore() method

function moveItemUp() {
  const itemSelected = document.getElementsByClassName('selecionada')[0];
  const taskListChildrens = taskList.children;
  for (let index = 0; index < taskListChildrens.length; index += 1) {
    if (index !== 0 && taskListChildrens[index] === itemSelected) {
      taskList.insertBefore(itemSelected, taskListChildrens[index - 1]);
      break;
    }
  }
}

function moveItemUpButton() {
  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', moveItemUp);
}

moveItemUpButton();

function moveItemDown() {
  const itemSelected = document.getElementsByClassName('selecionada')[0];
  const taskListChildrens = taskList.children;
  for (let index = 0; index < taskListChildrens.length; index += 1) {
    if (index !== (taskListChildrens.length - 1) && taskListChildrens[index] === itemSelected) {
      taskList.insertBefore(itemSelected, taskListChildrens[index + 2]);
      break;
    }
  }
}

function moveItemDownButton() {
  const moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', moveItemDown);
}

moveItemDownButton();

// CLEAR SELECTEDS

function clearSelected() {
  const selectedTasks = document.getElementsByClassName('selecionada');
  for (let index = selectedTasks.length - 1; index >= 0; index -= 1) {
    selectedTasks[index].parentNode.removeChild(selectedTasks[index]);
  }
}

function clearSelectedButton() {
  const clearSelectedTasksButton = document.getElementById('remover-selecionado');
  clearSelectedTasksButton.addEventListener('click', clearSelected);
}

clearSelectedButton();
