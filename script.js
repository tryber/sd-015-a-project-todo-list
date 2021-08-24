const textInput = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const clearFinish = document.querySelector('#remover-finalizados');
const salveList = document.querySelector('#salvar-tarefas');
const removeSelected = document.querySelector('#remover-selecionado');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  newTask.className = 'task';
  listTask.appendChild(newTask);
  textInput.value = '';
}

buttonCreateTask.addEventListener('click', createTask);

function changeColorTask(event) {
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
  }
  const task = event.target;
  task.classList.add('selected');
}

listTask.addEventListener('click', changeColorTask);

function riskTaskCompleted(event) {
  const task = event.target;
  const taskClasses = task.classList;

  if (taskClasses.length === 2) {
    taskClasses.add('completed');
  } else {
    taskClasses.remove('completed');
  }
}

listTask.addEventListener('dblclick', riskTaskCompleted);

function clearAllTask() {
  localStorage.removeItem('task');
  localStorage.removeItem('class');
  window.location.reload();
}

clearAll.addEventListener('click', clearAllTask);

function clearFinishTask() {
  const taskFinish = document.querySelectorAll('.completed');
  console.log(taskFinish);

  for (let i = 0; i < taskFinish.length; i += 1) {
    taskFinish[i].parentElement.removeChild(taskFinish[i]);
  }
}

clearFinish.addEventListener('click', clearFinishTask);

function initialRenderization() {
  if (localStorage.getItem('task') === null) {
    localStorage.setItem('task', JSON.stringify([]));
    localStorage.setItem('class', JSON.stringify([]));
  } else {
    const taskList = JSON.parse(localStorage.getItem('task'));
    const classList = JSON.parse(localStorage.getItem('class'));

    for (let i = 0; i < taskList.length; i += 1) {
      const newTask = document.createElement('li');
      newTask.innerHTML = taskList[i];
      newTask.classList = classList[i];
      listTask.appendChild(newTask);
    }
  }
}

window.onload = function start() {
  initialRenderization();
};

function addTaskToLocalStorage() {
  localStorage.clear();
  initialRenderization();
  const taskList = JSON.parse(localStorage.getItem('task'));
  const classTask = JSON.parse(localStorage.getItem('class'));
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    console.log(tasks[i].classList.value);
    const taskText = tasks[i].innerText;
    taskList.push(taskText);
    localStorage.setItem('task', JSON.stringify(taskList));

    const classText = tasks[i].classList.value;
    classTask.push(classText);
    localStorage.setItem('class', JSON.stringify(classTask));
  }
}

salveList.addEventListener('click', addTaskToLocalStorage);

function removeTaskSelected() {
  const taskSelected = document.querySelector('.selected');

  taskSelected.parentElement.removeChild(taskSelected);
}

removeSelected.addEventListener('click', removeTaskSelected);

function moveTaskUp() {
  const tasks = document.querySelectorAll('li');
  const taskSelected = document.querySelector('.selected');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === taskSelected && (i - 1) !== -1) {
      listTask.insertBefore(tasks[i], tasks[i - 1]);
    }
  }
}

moveUp.addEventListener('click', moveTaskUp);

function moveTaskDown() {
  const tasks = document.querySelectorAll('li');
  const taskSelected = document.querySelector('.selected');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === taskSelected && (i + 1) < tasks.length) {
      listTask.insertBefore(tasks[i + 1], tasks[i]);
    }
  }
}

moveDown.addEventListener('click', moveTaskDown);
