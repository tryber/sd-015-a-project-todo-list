function createTag(tagName) {
  const tag = document.createElement(`${tagName}`);
  return document.body.appendChild(tag);
}

const btnCreateItem = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

function createListItems() {
  const item = list.appendChild(createTag('li'));
  const itemText = document.querySelector('#texto-tarefa').value;
  item.innerText = itemText;
  document.getElementById('texto-tarefa').value = '';
  return item;
}

function removeSelected() {
  const completedItens = document.getElementsByClassName('selected');
  for (let index = 0; index < completedItens.length; index += 1) {
    completedItens[index] = completedItens[index].parentElement;
    list.removeChild(completedItens[index]);
  }
}

function removeCompleted() {
  const completedItens = document.querySelectorAll('.completed');

  for (let index = 0; index < completedItens.length; index += 1) {
    list.removeChild(completedItens[index]);
  }
}

function removeAll() {
  list.innerHTML = '';
}
/**
 * CONSULTEI O REPOSITÓRIO DO PEDRO GUARIZE COMO REFERÊNCIA PARA RESOLVER ESSA PARTE DE MOVER OS ITENS PARA CIMA OU PARA BAIXO.
 * https://github.com/tryber/sd-015-a-project-todo-list/pull/10/files?file-filters%5B%5D=.css&file-filters%5B%5D=.js
*/
function moveUp() {
  const itemToMove = document.querySelector('.selected');
  if (itemToMove !== null) {
    const previusItem = itemToMove.previousSibling;
    if (previusItem !== null) {
      list.insertBefore(itemToMove, previusItem);
    } else {
      alert('A primeira posição não sobe, ela ja esta em primeiro !!!');
    }
  }
}

function moveDown() {
  const itemToMove = document.querySelector('.selected');
  if (itemToMove !== null) {
    const nextItem = itemToMove.nextSibling;
    if (nextItem !== null) {
      list.insertBefore(nextItem, itemToMove);
    } else {
      alert('A ultima posição não Desce!');
    }
  }
}

function listItemsInteract(event) {
  const selectedItem = document.querySelectorAll('.selected');
  if (selectedItem[0] === event.target) {
    // SELECIONA O ELEMENTO ALVO QUE ORIGINOU A CHAMADA
    event.target.classList.toggle('selected');
  } else if (selectedItem[0] !== undefined) {
    selectedItem[0].className = '';
    event.target.classList.toggle('selected');
  } else {
    event.target.classList.toggle('selected');
  }
}

function listItemsCompleted(item) {
  const complete = item;
  complete.target.classList.toggle('completed');
}

list.addEventListener('click', listItemsInteract, false);
list.addEventListener('dblclick', listItemsCompleted, false);
btnCreateItem.addEventListener('click', createListItems);
btnRemoveAll.addEventListener('click', removeAll);
btnRemoveSelected.addEventListener('click', removeSelected);
btnRemoveCompleted.addEventListener('click', removeCompleted);
btnMoveDown.addEventListener('click', moveDown);
btnMoveUp.addEventListener('click', moveUp);
