let taskInput = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let tasks = document.getElementsByClassName('listItem');

addListeners('#criar-tarefa', 'click', createTask);
addListeners('#apaga-tudo', 'click', cleanList);
addListeners('#remover-finalizados', 'click', cleanSelected);

// Add Event Listeners
function addListeners(targetElement, targetEvent, targetFunction) {
  let elementArray = document.querySelectorAll(targetElement);
  for (let i = 0; i < elementArray.length; i += 1) {
    document
      .querySelectorAll(targetElement)
      [i].addEventListener(targetEvent, targetFunction);
  }
}

// Create Task
function createTask(task) {
  let newTask = document.createElement('li');
  newTask.className = 'listItem';
  newTask.innerText = taskInput.value;
  newTask.addEventListener('click', colorTask);
  newTask.addEventListener('dblclick', completeTask);
  taskList.appendChild(newTask);
  taskInput.value = '';
}

// Color Task
function colorTask(task) {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  task.target.classList.add('selected');
}

// Complete Task
function completeTask(task) {
  task.target.classList.toggle('completed');
}

// Clean List
function cleanList(button) {
  let tasks = document.querySelectorAll('.listItem');
  tasks.forEach((element) => {
    element.remove('li');
  });
}

// Clean Selected
function cleanSelected(button) {
  let tasks = document.querySelectorAll('.completed');
  tasks.forEach((element) => {
    element.remove('li');
  });
}
