const list = document.querySelector('#lista-tarefas');
const ListIntens = list.children;
function selectItem(event) {
  for (let i = 0; i < ListIntens.length; i += 1) {
    ListIntens[i].classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}

function completItem(event) {
  const evento = event.target;
  if (evento.className === 'item completed selected' || evento.className === 'item completed') {
    evento.classList.remove('completed');
  } else {
    evento.classList.add('completed');
  }
}

function inputButton() {
  function onClik() {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    const inputText = document.querySelector('#texto-tarefa');
    listItem.innerHTML = inputText.value;
    listItem.addEventListener('click', selectItem);
    listItem.addEventListener('dblclick', completItem);
    list.appendChild(listItem);
    inputText.value = '';
  }
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', onClik);
}
inputButton();

function deleteAll() {
  function onClick() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  const apagaTudo = document.querySelector('#apaga-tudo');
  apagaTudo.addEventListener('click', onClick);
}
deleteAll();

function deleteFinished() {
  function onClick() {
    const itens = document.getElementsByClassName('completed');
    for (let i = (itens.length - 1); i >= 0; i -= 1) {
      const child = itens[i];
      if (child.classList.contains('completed')) {
        list.removeChild(child);
      }
    }
  }
  const rmvFinished = document.querySelector('#remover-finalizados');
  rmvFinished.addEventListener('click', onClick);
}
deleteFinished();

function saveList() {
  function saves(num, item) {
    const listWord = 'list';
    const listNum = listWord + num;
    const objclasse = item.classList.contains('completed');
    const objvalor = item.innerHTML;
    const obj = { classe: objclasse, valor: objvalor };
    window.localStorage.setItem(listNum, JSON.stringify(obj));
  }
  for (let i = 0; i < list.children.length; i += 1) {
    saves(i, list.children[i]);
  }
}
const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', saveList);

function returnList(num) {
  const saved = JSON.parse(window.localStorage.getItem(num));
  return saved;
}
const listWord = 'list';
function loadReturn() {
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const listNum = listWord + i;
    if (returnList(listNum).classe) {
      const listItem = document.createElement('li');
      listItem.className = 'item completed';
      listItem.innerHTML = returnList(listNum).valor;
      listItem.addEventListener('click', selectItem);
      listItem.addEventListener('dblclick', completItem);
      list.appendChild(listItem);
    } else {
      const listItem = document.createElement('li');
      listItem.className = 'item';
      listItem.innerHTML = returnList(listNum).valor;
      listItem.addEventListener('click', selectItem);
      listItem.addEventListener('dblclick', completItem);
      list.appendChild(listItem);
    }
  }
}
window.onload = loadReturn;

function moveUP() {
  function onClick() {
    if (document.querySelectorAll('.selected').length !== 0) {
      const selected = document.querySelector('.selected');
      if (selected.previousElementSibling !== null) {
        const temp = selected.previousElementSibling.innerHTML;
        selected.previousElementSibling.innerHTML = selected.innerHTML;
        selected.innerHTML = temp;
        selected.classList.remove('selected');
        selected.previousSibling.classList.add('selected');
      }
    }
  }
  const upBt = document.querySelector('#mover-cima');
  upBt.addEventListener('click', onClick);
}
moveUP();

function moveDown() {
  function onClick() {
    if (document.querySelectorAll('.selected').length !== 0) {
      const selected = document.querySelector('.selected');
      if (selected.nextElementSibling !== null) {
        const temp = selected.nextElementSibling.innerHTML;
        selected.nextElementSibling.innerHTML = selected.innerHTML;
        selected.innerHTML = temp;
        selected.classList.remove('selected');
        selected.nextSibling.classList.add('selected');
      }
    }
  }
  const downBt = document.querySelector('#mover-baixo');
  downBt.addEventListener('click', onClick);
}
moveDown();

function deleteSelected() {
  function onClick() {
    const selected = document.querySelector('.selected');
    const parent = selected.parentElement;
    parent.removeChild(selected);
  }
  const rmvSelected = document.querySelector('#remover-selecionado');
  rmvSelected.addEventListener('click', onClick);
}
deleteSelected();
