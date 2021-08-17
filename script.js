const createTodoList = document.getElementById('criar-tarefa');
const clearTasks = document.getElementById('apaga-tudo');
const todoList = document.getElementById('lista-tarefas');
const clearCompletedTasks = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removeSelectedTask = document.getElementById('remover-selecionado')

let todoItems = document.getElementsByClassName('todo-item');
let todo = document.getElementById('texto-tarefa');

createTodoList.addEventListener('click', function() {
  createListItem(todo.value);
  todo.value = '';
})

function createListItem(input) {
  let li = document.createElement('li');
  li.className = 'todo-item';
  li.textContent = input;
  li.addEventListener('click', selectionHandler);
  li.addEventListener('dblclick', completeTasks);
  document.getElementById('lista-tarefas').appendChild(li);
}

function selectionHandler() {
  if (this.classList.contains('selected')) {
    // this.classList.remove('selected');
    this.style.backgroundColor = null;
  } else {
    for (let i = 0; i < todoItems.length; i += 1) {
      if (todoItems[i].classList.contains('selected')) {
        todoItems[i].classList.remove('selected');
        todoItems[i].style.backgroundColor = null;
      }
    }
    this.classList.add('selected');
  }
}

function completeTasks() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
    this.style.textDecoration = null;
  } else {
    this.classList.add('completed');
  }
}


clearTasks.addEventListener('click', function() {
  for (let i = todoItems.length - 1; i >= 0; i -= 1) {
    todoList.removeChild(todoItems[i]);
    localStorage.clear();
  }
})

clearCompletedTasks.addEventListener('click', function() {
  for (let i = todoItems.length - 1; i >= 0; i -= 1) {
    if (todoItems[i].classList.contains('completed')) {
      todoList.removeChild(todoItems[i]);
      saveTask();
    }
  }
})

saveTasks.addEventListener('click', saveTask)

function saveTask() {
  let taskList = [];
  let tasks = document.getElementsByClassName('todo-item');
  // elemento tem que ser o menor elemento da familia
  for (let i = 0; i < tasks.length; i += 1) {
    taskList.push(`${tasks[i].textContent}§§§${tasks[i].classList}§§§`);
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

window.onload = function() {
  if (localStorage.getItem('taskList')) {
    const taskList = localStorage.getItem('taskList');
    const stringSplit = taskList.split('§§§');
    const tasks = JSON.parse(stringSplit);
    for (let i = 0; i < tasks.length; i += 1) {
      createListItem(tasks[i].split(',')[0]);
      todoItems[i].className = tasks[i].split(',')[1];
    }
  }
}

moveUp.addEventListener('click', function() {
  let selected = document.querySelector('.selected');
  if (selected && selected.previousElementSibling) {
    selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    saveTask();
  }
})
moveDown.addEventListener('click', function() {
  let selected = document.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    saveTask();
  }
})

removeSelectedTask.addEventListener('click', function() {
  for (let i = todoItems.length - 1; i >= 0; i -= 1) {
    if (todoItems[i].classList.contains('selected')) {
      todoList.removeChild(todoItems[i]);
      saveTask();
    }
  }
})