const getTarefas = document.getElementById('texto-tarefa');
const getListaTarefas = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const pageColor = document.getElementsByTagName('body')[0].style.backgroundColor;
const buttonRemoveAll = document.querySelector('#apaga-tudo');
const buttonRemoveTodoDone = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
const buttonMoveUp = document.querySelector('#mover-cima');
const buttonMoveDown = document.querySelector('#mover-baixo');

window.onload = createList();
async function createList() {  
  const list = await JSON.parse(localStorage.getItem('todoList'));

  if (list.length > 0) {
    list.forEach((el) => {
      const [text, className] = el.split('|');
      const todo = document.createElement('li');
      todo.innerText = text;
      todo.className = className;
      getListaTarefas.appendChild(todo);
      todo.addEventListener('click', checkBGColor, false);
      todo.addEventListener('click', addBGGrey, false);
      todo.addEventListener('dblclick', addOrRemoveClass, false);   
    });
  }
}

function moveElementUp() {
  const target = document.querySelector('.selected');
  const prevTask = target.closest('li').previousSibling;

  if(typeof(prevTask) !== 'undefined' && prevTask !== null){
    getListaTarefas.insertBefore(target, prevTask);
  }
}
buttonMoveUp.addEventListener('click', moveElementUp);

function moveElementDown() {
  const target = document.querySelector('.selected');
  const nextTarget = target.closest('li').nextSibling;
  
  if(typeof(nextTarget) !== 'undefined' && nextTarget !== null){
    getListaTarefas.insertBefore(nextTarget, target);
  }
}
buttonMoveDown.addEventListener('click', moveElementDown);

function removeTodoDone() {
  const allTasks = document.querySelectorAll('.completed');
  allTasks.forEach((el) => el.remove());  
}
buttonRemoveTodoDone.addEventListener('click', removeTodoDone);

function removeSelected() {
  const allTasks = document.querySelectorAll('.selected');
  allTasks.forEach((el) => el.remove());  
}
buttonRemoveSelected.addEventListener('click', removeSelected);

function removeAll() {
  const allTasks = document.querySelectorAll('.todo');
  allTasks.forEach((el) => el.remove());
  localStorage.removeItem('todo');
}
buttonRemoveAll.addEventListener('click', removeAll);

function saveToStorage() {
  const allTasks = document.querySelectorAll('.todo');
  const todoList = [];
  allTasks.forEach((el) => {
    todoList.push(`${el.innerText}|${el.classList}`)
  });
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
buttonSaveTasks.addEventListener('click', saveToStorage);

// new code uphere


function checkList(compara) {
  let ulList = document.getElementsByTagName('li');
  for (let checkList = 0; checkList < ulList.length; checkList += 1) {
    if(ulList[checkList].innerText === compara) {
      return true;
    }       
  }
}
function checkBGColor() {
  let liList = document.getElementsByTagName('li');
  for (let checkList = 0; checkList < liList.length; checkList += 1) {
    const className = liList[checkList].className
    liList[checkList].classList.remove('selected');
  }   
}
function addBGGrey(event) {
  event.target.classList.add('selected');
}

function addOrRemoveClass(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addList(todoValue) {
  let getTarefasValue = document.getElementById('texto-tarefa').value;
  if(checkList(getTarefasValue) === true) {
    alert("List cannot have double items");
    // new else if above
  } else if (getTarefasValue === '') {
    alert("List cannot be empty");
  } else {
    let li = document.createElement('li');
    li.innerText = getTarefasValue !== '' ? getTarefasValue : todoValue;
    li.className = 'todo';
    li.addEventListener('click', checkBGColor, false);
    li.addEventListener('click', addBGGrey, false);
    li.addEventListener('dblclick', addOrRemoveClass, false);

    document.querySelector('ol').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = '';
}
getButton.addEventListener('click', addList);

