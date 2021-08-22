const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearComplete = document.getElementById('remover-finalizados');
const buttonRemoveSelect = document.getElementById('remover-selecionado');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');

function insertList() {
  const tarefa = document.createElement('li');
  tarefa.classList.add('lineList');
  tarefa.innerText = input.value;
  list.appendChild(tarefa);
  tarefa.addEventListener('click', selectList);
  tarefa.addEventListener('dblclick', lineThrough);
  input.value = '';
}

buttonAdd.addEventListener('click', insertList);

function selectList(event) {
  const lineListClass = document.querySelector('.selected');
  if (document.getElementsByClassName('selected').length === 0) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
    lineListClass.classList.remove('selected');
  }
}
// https://stackoverflow.com/questions/16681786/why-doesnt-arraylist-containsobject-class-work-for-finding-instances-types
function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
buttonClearAll.addEventListener('click', clearList);

function clearCompleted() {
  const classCompleted = document.querySelectorAll('.completed');
  if (classCompleted.length > 0) {
    for (let index = classCompleted.length - 1; index >= 0; index -= 1) {
      list.removeChild(classCompleted[index]);
    }
  }
}
buttonClearComplete.addEventListener('click', clearCompleted);

function removeSelected() {
  const listCompleted = document.querySelectorAll('.selected');
  if (document.getElementsByClassName('selected').length === 1) {
    listCompleted[0].remove();
  }
}
buttonRemoveSelect.addEventListener('click', removeSelected);

const toDolist = JSON.parse(localStorage.getItem('list-toDo')) || [];
function saveLocalStorage() {
  const textToDoList = document.querySelectorAll('.lineList');
  for (let index = 0; index < textToDoList.length; index += 1) {
    toDolist.push(textToDoList[index].innerText);
  }
  localStorage.setItem('list-toDo', JSON.stringify(toDolist));
}

buttonSave.addEventListener('click', saveLocalStorage);
function mostraTarefas() {
  for (const item of toDolist) {
    const itemList = document.createElement('li');
    const itemText = document.createTextNode(item);
    itemList.classList.add('lineList');
    itemList.appendChild(itemText);
    list.appendChild(itemList);
    itemList.addEventListener('click', selectList);
    itemList.addEventListener('dblclick', lineThrough);
  }
}

mostraTarefas();
