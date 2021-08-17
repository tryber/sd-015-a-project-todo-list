const taskList = document.getElementById('lista-tarefas');

// Adiciona uma tarefa
function addNewTask() {
  const newTaskItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');
  newTaskItem.innerText = taskText.value;
  taskList.appendChild(newTaskItem);
  taskText.value = '';
}

const addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addNewTask);

// Apaga todos os itens da lista de tarefas
// Consulta: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const deleteTasksButton = document.getElementById('apaga-tudo');

function deleteTasks() {
  deleteTasksButton.addEventListener('click', () => {
    const getTasks = document.querySelectorAll('li');
    for (let i = 0; i < getTasks.length; i += 1) {
      getTasks[i].remove();
    }
  });
}

deleteTasks();

// Altera background-color do item selecionado
function taskRemoveBgColor() {
  const getTasks = document.querySelectorAll('li');
  for (let i = 0; i < getTasks.length; i += 1) {
    getTasks[i].style.backgroundColor = '';
  }
}

function taskChangeBgColor(task) {
  taskRemoveBgColor();
  const clickedTask = task.target;
  clickedTask.style.backgroundColor = 'rgb(128,128,128)';
}

taskList.addEventListener('click', taskChangeBgColor);

// Adiciona um risco ao elemento selecionado, indicando que a tarefa foi cumprida
// Um salve pro Pedro Guarize que me iluminou nessa aqui
function addCompletedTask(task) {
  const taskTarget = task.target;
  if (taskTarget.className !== 'completed') {
    taskTarget.className = 'completed';
    taskTarget.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    taskTarget.style.textDecoration = '';
    taskTarget.className = '';
  }
}

taskList.addEventListener('dblclick', addCompletedTask);

// Remover tarefas finalizadas
const deleteCompletedTasksButton = document.getElementById('remover-finalizados');

function deleteCompletedTasks() {
  deleteCompletedTasksButton.addEventListener('click', () => {
    const getTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < getTasks.length; i += 1) {
      getTasks[i].remove();
    }
  });
}

deleteCompletedTasks();

// BÔNUS
// Salva tarefas
// Consulta: https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/
const saveTasksButton = document.getElementById('salvar-tarefas');

function saveTasks() {
  saveTasksButton.addEventListener('click', () => {
    localStorage.setItem('task', taskList.innerHTML);
  });
}

saveTasks();

window.onload = function returnSavedTasks() {
  taskList.innerHTML = localStorage.getItem('task');
};

// Exclui o item selecionado
// Consulta: https://stackoverflow.com/a/19136877
const removeSelectedTaskButton = document.getElementById('remover-selecionado');

function removeSelected() {
  const getTasks = document.querySelector('li[style]');
  getTasks.remove();
}

removeSelectedTaskButton.addEventListener('click', removeSelected);

// Move o item selecionado para cima
// Consulta: https://stackoverflow.com/a/31046750, https://stackoverflow.com/a/34914096 e https://www.codegrepper.com/code-examples/javascript/javascript+move+list+items+up+and+down
const moveUpButton = document.getElementById('mover-cima');

function moveTaskUp() {
  const up = document.querySelector('li[style]');
  if (up.previousSibling) {
    up.parentNode.insertBefore(up, up.previousElementSibling);
  }
}

moveUpButton.addEventListener('click', moveTaskUp);

// Move o item selecionado para baixo
const moveDownButton = document.getElementById('mover-baixo');

function moveTaskDown() {
  const down = document.querySelector('li[style]');
  if (down.nextSibling) {
    down.parentNode.insertBefore(down.nextElementSibling, down);
  }
}

moveDownButton.addEventListener('click', moveTaskDown);
