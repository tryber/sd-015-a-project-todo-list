const buttonAdd = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');

// Cria tarefas

function addTask() {
  const item = document.createElement('li');
  item.innerText = inputItem.value;
  listTasks.appendChild(item);
  inputItem.value = '';
}
buttonAdd.addEventListener('click', addTask);

// Adiciona cor no item clicado

function paintTask({ target }) {
  for (let i = 0; i < listTasks.children.length; i += 1) {
    listTasks.children[i].style.backgroundColor = 'white';
    target.style.backgroundColor = 'rgb(188, 188, 188)';
  }
}
listTasks.addEventListener('click', paintTask);

// Adiciona taxado com o duplo click

function riskTask(event) {
  event.target.classList.toggle('completed');
}
listTasks.addEventListener('dblclick', riskTask);

// Limpar todas tarefas
const buttonDelete = document.getElementById('apaga-tudo');

function clearList() {
  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.lastChild);
  }
}
buttonDelete.addEventListener('click', clearList);

// Limpar tarefas completas
const btnRemoveTasksCompleted = document.getElementById('remover-finalizados');

function removeTasksCompleted() {
  for (let i = listTasks.children.length - 1; i >= 0; i -= 1) {
    if (listTasks.children[i].classList.contains('completed')) {
      listTasks.children[i].remove();
    }
  }
}
btnRemoveTasksCompleted.addEventListener('click', removeTasksCompleted);

// Salvar tarefas
const btnSave = document.getElementById('salvar-tarefas');

function saveTasks() {
  localStorage.setItem('tasksSaved', JSON.stringify(listTasks.innerHTML));
}
btnSave.addEventListener('click', saveTasks);

const savedList = JSON.parse(localStorage.getItem('tasksSaved'));

window.onload = function () {
  listTasks.innerHTML = savedList;
};
