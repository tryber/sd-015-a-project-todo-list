const input = document.getElementById('texto-tarefa');
const add = document.getElementById('criar-tarefa');
const List = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const deleteCompleteds = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const removeSelected = document.getElementById('remover-selecionado');
const CompletedItems = document.getElementsByClassName('completed');


function liColor(event) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function linethrough(event) {
  const Target = event.target;
  if (Target.className.includes('completed')) {
    Target.classList.remove('completed');
  } else {
    Target.classList.add('completed');
  }
}

function addItens() {
  const Li = document.createElement('li');
  Li.innerHTML = input.value;
  Li.addEventListener('click', liColor);
  Li.addEventListener('dblclick', linethrough);
  input.value = '';
  List.appendChild(Li);

  document.getElementById('lista-tarefas').appendChild(Li);
}

add.addEventListener('click', addItens);

function deleteItems() {
  while (List.firstChild) {
    List.removeChild(List.firstChild);
  }
}
deleteButton.addEventListener('click', deleteItems);

function deleteCompletedItems() {
  while (CompletedItems.length !== 0) {
    document.querySelector('.completed').remove();
  }
}
deleteCompleteds.addEventListener('click', deleteCompletedItems);

function SaveList() {
  localStorage.setItem('list', List.innerHTML);
}

saveListButton.addEventListener('click', SaveList);

function reloadList() {
  List.innerHTML = localStorage.getItem('list');
}

reloadList();

// referencia para exercicio 14 tirada de
// https://github.com/tryber/sd-015-a-project-todo-list/pull/1/files

function RemoveSelected() {
  List.removeChild(document.querySelector('.selected'));
}

removeSelected.addEventListener('click', RemoveSelected);
