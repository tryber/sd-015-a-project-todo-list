const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearComplete = document.getElementById('remover-finalizados');
const buttonRemoveSelect = document.getElementById('remover-selecionado');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');

// Rquisit 13 - Changes position of the iten's list.
function moveUp() {
  const lineList = document.querySelectorAll('.lineList');
  for (let index = 0; index < lineList.length; index += 1) {
    if (lineList[index].classList.contains('selected')) {
      if (index === 0) {
        window.alert('Não pode mover o iten da lista');
      } else {
        const before = list.children[index - 1];
        const child = list.children[index];
        list.insertBefore(child, before);
      }
    }
  }
}
buttonUp.addEventListener('click', moveUp);

function moveDown() {
  const lineList = document.querySelectorAll('.lineList');
  for (let index = 0; index < lineList.length; index += 1) {
    if (lineList[index].classList.contains('selected')) {
      if (index === lineList.length - 1) {
        window.alert('Não pode mover o iten da lista');
      } else {
        const child = list.children[index + 1];
        const after = list.children[index];
        list.insertBefore(child, after);
        list.classList.remove('selected');
      }
    }
  }
}
buttonDown.addEventListener('click', moveDown);

// Requisit 14 - Remove just the iten with the class selected.
function removeSelected() {
  const listCompleted = document.querySelectorAll('.selected');
  if (document.getElementsByClassName('selected').length === 1) {
    listCompleted[0].remove();
  }
}
buttonRemoveSelect.addEventListener('click', removeSelected);

// Requisit 11 - Remove just itens with the class completed.
function clearCompleted() {
  const classCompleted = document.querySelectorAll('.completed');
  if (classCompleted.length > 0) {
    for (let index = classCompleted.length - 1; index >= 0; index -= 1) {
      list.removeChild(classCompleted[index]);
    }
  }
}
buttonClearComplete.addEventListener('click', clearCompleted);

// Requisit 10 - This function clear all items of the list.
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  window.localStorage.clear();
}
buttonClearAll.addEventListener('click', clearList);

// https://stackoverflow.com/questions/16681786/why-doesnt-arraylist-containsobject-class-work-for-finding-instances-types - The base of my function, I learned about the function contains when I use a 'event target' to find the class 'completed')
// Requisit 9 - When the user doble click on the item of the list, assign the class completed.
function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Requisit 7 and 8- When the user click on a item of the list this fuctions assign the class 'selected'. It's possible selected just one item on the list.
function selectList(event) {
  const lineListClass = document.querySelector('.selected');
  if (document.getElementsByClassName('selected').length === 0) {
    event.target.classList.add('selected');
  } else if (event.target.classList.contains('selected')) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
    lineListClass.classList.remove('selected');
  }
}

// Requisit 5 / 6 - This function add a iten on the list / The last iten created is inserted on the final of the list.

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

// Requisit 12 - Save the itens of the list on the Local storage, and bring then whem the itens reload the page.
const toDolist = JSON.parse(localStorage.getItem('list-toDo')) || [];
const toDoClass = JSON.parse(localStorage.getItem('list-class')) || [];
function mostraTarefas() {
  for (let index = 0; index < toDolist.length; index += 1) {
    const itemList = document.createElement('li');
    const itemText = document.createTextNode(toDolist[index]);
    itemList.classList.add('lineList');
    itemList.appendChild(itemText);
    list.appendChild(itemList);
    itemList.addEventListener('click', selectList);
    itemList.addEventListener('dblclick', lineThrough);
    if (toDoClass[index] === 1) {
      itemList.classList.add('completed');
    }
  }
}
window.localStorage.clear();
mostraTarefas();

function saveLocalStorage() {
  const textToDoList = document.querySelectorAll('.lineList');
  for (let index = 0; index < textToDoList.length; index += 1) {
    if (textToDoList[index].classList.contains('completed')) {
      toDolist.push(textToDoList[index].innerHTML);
      toDoClass.push(1);
    } else {
      toDolist.push(textToDoList[index].innerHTML);
      toDoClass.push(2);
    }
    localStorage.setItem('list-toDo', JSON.stringify(toDolist));
    localStorage.setItem('list-class', JSON.stringify(toDoClass));
  }
}

buttonSave.addEventListener('click', saveLocalStorage);

// The beginnig of the code ^.
