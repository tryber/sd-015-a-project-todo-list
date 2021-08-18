const listItens = document.getElementById('lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonList = document.querySelector('#criar-tarefa');
const inputList = document.querySelector('#texto-tarefa');
const arraylist = listItens.children;
const buttonSaveList = document.querySelector('#salvar-tarefas');
const buttonUpArrow = document.querySelector('#mover-cima');
const buttonDownArrow = document.querySelector('#mover-baixo');
const buttonRemove = document.querySelector('#remover-selecionado');

buttonList.addEventListener('click', createList);
function createList() {
  let list = document.createElement('li');
  list.innerHTML = inputList.value;

  document.querySelector('#lista-tarefas').appendChild(list);

  inputList.value = '';
}

function turnToGrey() {
  listItens.addEventListener('click', function (event) {
    for (let index = 0; index < arraylist.length; index += 1) {
      arraylist[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function stripeText() {
  listItens.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

buttonDelete.addEventListener('click', deleteAll);
function deleteAll() {
  let arraylistDelete = document.querySelectorAll('li');
  for (let index = 0; index < arraylistDelete.length; index += 1) {
    arraylistDelete[index].remove();
  }

  localStorage.clear();
}

buttonRemoveCompleted.addEventListener('click', deleteCompleted);
function deleteCompleted() {
  let listStripe = document.querySelectorAll('.completed');
  for (let index = 0; index < listStripe.length; index += 1) {
    listStripe[index].remove();
  }
}

buttonSaveList.addEventListener('click', saveList);

function saveList() {
  localStorage.clear();

  let listWillSave = document.querySelector('#lista-tarefas').children;

  for (let index = 0; index < listWillSave.length; index += 1) {
    localStorage.setItem('li' + [index], listWillSave[index].innerHTML);
    localStorage.setItem('class' + [index], listWillSave[index].className);
  }
}

function loadLists() {
  for (let index = 0; index < localStorage.length / 2; index += 1) {
    let reloadList = document.createElement('li');
    reloadList.innerHTML = localStorage.getItem('li' + index);
    reloadList.className = localStorage.getItem('class' + index);
    document.querySelector('#lista-tarefas').appendChild(reloadList);
  }
}

buttonUpArrow.addEventListener('click', upList);

function upList() {
  let listMoveUp = document.getElementById('lista-tarefas').children;

  for (let index = 0; index < listMoveUp.length; index += 1) {
    if (listMoveUp[index].classList.contains('selected') && index - 1 >= 0) {
      listMoveUp[index].parentNode.insertBefore(
        listMoveUp[index],
        listMoveUp[index].previousSibling
      );
    }
  }
}

buttonDownArrow.addEventListener('click', downList);
function downList() {
  let selectedToDown = document.querySelector('.selected');
  if (selectedToDown === null || selectedToDown.nextSibling === null) {
    return;
  }
  selectedToDown.nextSibling.after(selectedToDown);
}

buttonRemove.addEventListener('click', removeSelected);

function removeSelected() {
  const removeOne = document.querySelector('#lista-tarefas').children;

  for (let index = 0; index < removeOne.length; index += 1) {
    if (removeOne[index].classList.contains('selected')) {
      removeOne[index].remove();
    }
  }
}
stripeText();
deleteCompleted();
turnToGrey();
loadLists();
