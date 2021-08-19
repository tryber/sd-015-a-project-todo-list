
const addBtn = document.getElementById('criar-tarefa'); // Botão de Criar tarefa
const ol = document.getElementById('lista-tarefas'); // Lista ordenada
const clearBtn = document.getElementById('apaga-tudo'); // Botão de CLEAR
const textInput = document.getElementById('texto-tarefa'); // Campo de input
const completedBtn = document.getElementById('remover-finalizados'); // Botão de CLear Completed
const selectedTaskBtn = document.getElementById('remover-selecionado'); // Botão de Clear selected
const saveBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');

function createTaskList () {
  const li = document.createElement('li');
  li.innerText = textInput.value;
  ol.appendChild(li);
  textInput.value = '';
}
addBtn.addEventListener('click', createTaskList);

function changeBackgroundColor (event) {
  const selected = event.target;
  const oldSelected = document.querySelector('.selected');
    if(selected.classList.contains('selected')) {
    return;
    }
    if (selected.tagName === 'li') {
    selected.style.changeBackgroundColor = 'rgb(128,128,128)';
    }
    if (oldSelected) {
    oldSelected.classList.remove('selected');
    oldSelected.style.changeBackgroundColor = '';
    }
  selected.classList.add('selected');
}
ol.addEventListener('click', changeBackgroundColor);

function itenCompleted (event) {
  const completed = event.target;
  if (completed.style.textDecoration !== '') {
    completed.style.textDecoration = '';
    completed.classList.remove('completed');
    return;
  }
  completed.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  completed.classList.add('completed');

}
ol.addEventListener('dblclick', itenCompleted);

function clearList () {
  ol.textContent = '';
}
clearBtn.addEventListener('click', clearList);

function clearCompletedItems (event) {
  const completedItems = document.getElementsByClassName('completed');
  while(completedItems.length) {
    completedItems[0].remove();
  }
}
completedBtn.addEventListener('click', clearCompletedItems);

function removerSelectedtask () {
  const selectedTask = document.getElementsByClassName('selected');
  while (selectedTask.length) {
    selectedTask[0].remove();
  }
}
selectedTaskBtn.addEventListener('click', removerSelectedtask);


function moveUp() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const elementoDeCima = selected.previousSibling;
  if (elementoDeCima) {
    elementoDeCima.before(selected);
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const elementoDeBaixo = selected.nextSibling;
  if (elementoDeBaixo) {
    elementoDeBaixo.after(selected);
  }
}
upBtn.addEventListener('click', moveUp);
downBtn.addEventListener('click', moveDown);

function saveTasks () {
  const fatherList = document.getElementById('lista-tarefas');
  const childList = document.querySelectorAll('li');
  console.log(fatherList.innerHTML);
  console.log(childList.classList);
  window.localStorage.setItem('list', JSON.stringify(fatherList.innerHTML));
  window.localStorage.setItem('class', JSON.stringify(childList.className))
}

saveBtn.addEventListener('click', saveTasks);

window.onload = function () {
  const oldList = window.localStorage.getItem('list');
  const oldListClass = window.localStorage.getItem('class');
  console.log(oldList);
  console.log(oldListClass);
  ol.innerHTML = JSON.parse(oldList);
  
  
}
