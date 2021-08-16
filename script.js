const taskInput = document.getElementById('texto-tarefa');
const taskButtonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const eraseAllButton = document.getElementById('apaga-tudo');
const removeDoneButton = document.getElementById('remover-finalizados');
const saveAllButton = document.getElementById('salvar-tarefas');
const selectedColor = 'rgb(128, 128, 128)';
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');
const selectedSelector = '[style="background-color: rgb(128, 128, 128);"]';

// Add task to list
taskButtonAdd.addEventListener('click', () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(taskItem);
});

function clearSelected() {
  const tasks = taskList.children;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = 'white';
  }
}

// Color clicked tasks
taskList.addEventListener('click', (task) => {
  clearSelected();
  const selectedTask = task;
  selectedTask.target.style.backgroundColor = selectedColor;
});

function checkForSelected(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'completed') {
      return true;
    }
  }
  return false;
}

// Cross tasks
taskList.addEventListener('dblclick', (task) => {
  const classes = task.target.classList;
  if (checkForSelected(classes)) {
    classes.remove('completed');
  } else {
    classes.add('completed');
  }
});

// Erase all
eraseAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

eraseAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Remove crossed out
removeDoneButton.addEventListener('click', () => {
  const tasks = taskList.children;
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].className === 'completed') {
      tasks[i].remove();
    }
  }
});

function getTaskObjectList() {
  const tasksElements = document.getElementsByTagName('li');
  const list = [];
  for (let i = 0; i < tasksElements.length; i += 1) {
    const styles = getComputedStyle(tasksElements[i]);
    const taskObj = {
      name: tasksElements[i].innerText,
      isDone: styles.textDecoration.includes('line-through'),
      isSelected: styles.backgroundColor.includes(selectedColor),
    };
    list.push(taskObj);
  }
  return list;
}

// Save tasks
saveAllButton.addEventListener('click', () => {
  const tasksObj = getTaskObjectList();
  const tasksObjArray = [];
  for (let i = 0; i < tasksObj.length; i += 1) {
    tasksObjArray.push(tasksObj[i]);
  }
  localStorage.tasksListObj = JSON.stringify(tasksObjArray);
});

// Load tasks from storage
function loadTasksFromStorage() {
  if (localStorage.tasksListObj !== undefined) {
    return JSON.parse(localStorage.getItem('tasksListObj'));
  }
  return {};
}

function createList() {
  const tasksObjArray = loadTasksFromStorage();
  for (let i = 0; i < tasksObjArray.length; i += 1) {
    const taskItem = document.createElement('li');
    taskItem.innerText = tasksObjArray[i].name;
    if (tasksObjArray[i].isSelected) {
      taskItem.style.backgroundColor = selectedColor;
    }
    if (tasksObjArray[i].isDone) {
      taskItem.classList.add('completed');
    }
    taskList.appendChild(taskItem);
  }
}

createList();

// Mover selecionado;
moveUpButton.addEventListener('click', () => {
  const tasks = taskList.children;
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].style.backgroundColor === selectedColor) {
      taskList.insertBefore(tasks[i], tasks[i - 1]);
    }
  }
});

moveDownButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length - 1; i += 1) {
    if (tasks[i].style.backgroundColor === selectedColor) {
      taskList.insertBefore(tasks[i + 1], tasks[i]);
    }
  }
});

// Remover selecionado
removeSelectedButton.addEventListener('click', () => {
  const selectedTask = document.querySelector(selectedSelector);
  selectedTask.remove();
});
