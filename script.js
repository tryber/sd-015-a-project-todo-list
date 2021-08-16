const taskList = document.getElementById('lista-tarefas');

function selectTask(event) {
  const taskElement = event.target;
  const selectedTask = document.getElementsByClassName('tarefa selected')[0];
  if (taskElement !== selectedTask && selectedTask !== undefined) {
    selectedTask.classList.remove('selected');
  }
  taskElement.classList.add('selected');
}

function completTask(event) {
  const elementTask = event.target;
  const classCompleted = elementTask.classList.contains('completed');
  if (!classCompleted) {
    elementTask.classList.add('completed');
  } else {
    elementTask.classList.remove('completed');
  }
}

function listElementConfig(task) {
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completTask);
}

function loadTaskList() {
  if (localStorage.getItem('taskList') !== undefined) {
    const text = localStorage.getItem('taskList');
    taskList.innerHTML = text;
    const listChildren = taskList.children;
    for (let index = 0; index < listChildren.length; index += 1) {
      listChildren[index].classList.remove('selected');
      listElementConfig(listChildren[index]);
    }
  }
}

loadTaskList();

// Função para incluir tarefas na lista
function createTask() {
  const button = document.getElementById('criar-tarefa');
  const textInput = document.getElementById('texto-tarefa');
  button.addEventListener('click', () => {
    if (textInput.value !== '') {
      const task = document.createElement('li');
      task.innerHTML = textInput.value;
      task.className = 'tarefa';
      listElementConfig(task);
      taskList.append(task);
      textInput.value = '';
    } else {
      alert('Campo "Tarefa" não preenchido!');
    }
  });
}
createTask();

function deleteButton() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', () => {
    console.log('ok');
    taskList.innerHTML = '';
  });
}

deleteButton();

function deleteCompleted() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', () => {
    const tasks = taskList.children;
    for (let index = tasks.length - 1; index >= 0; index -= 1) {
      if (tasks[index].classList.contains('completed')) {
        taskList.removeChild(tasks[index]);
      }
    }
  });
}

deleteCompleted();

function saveList() {
  const button = document.getElementById('salvar-tarefas');
  button.addEventListener('click', () => {
    localStorage.setItem('taskList', taskList.innerHTML);
  });
}

saveList();

function moveUp() {
  const button = document.getElementById('mover-cima');
  button.addEventListener('click', () => {
    const task = document.querySelector('.selected');
    if (task !== null) {
      const previuosTask = task.previousElementSibling;
      if (previuosTask !== null) {
        previuosTask.insertAdjacentElement('beforebegin', task);
      }
    }
  });
}

function moveDown() {
  const button = document.getElementById('mover-baixo');
  button.addEventListener('click', () => {
    const task = document.querySelector('.selected');
    if (task !== null) {
      const nextTask = task.nextElementSibling;
      if (task !== null && nextTask !== null) {
        nextTask.insertAdjacentElement('afterend', task);
      }
    }
  });
}

moveUp();
moveDown();

function deleteSelected() {
  const button = document.getElementById('remover-selecionado');
  button.addEventListener('click', () => {
    const task = document.querySelector('.selected');
    if (task !== null) {
      taskList.removeChild(task);
    }
  });
}

deleteSelected();
