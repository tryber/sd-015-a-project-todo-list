const adicionar = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

function inputText() {
  const li = document.createElement('li');
  li.innerText = text.value;
  list.appendChild(li);
  text.value = '';
}
adicionar.addEventListener('click', inputText);

function backPrint(event) {
  whiteLine();
  const evento = event.target;
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
}
list.addEventListener('click', backPrint);

function whiteLine() {
  const resetLine = document.querySelectorAll('li');
  for (let index = 0; index < resetLine.length; index += 1) {
    resetLine[index].style.backgroundColor = 'white';
  }
}

function lineDecor(event) {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}
list.addEventListener('dblclick', lineDecor);

const listRemove = document.getElementById('apaga-tudo');

function removeList() {
  const selectionOl = document.querySelector('ol');
  selectionOl.innerHTML = '';
}

listRemove.addEventListener('click', removeList);

const removeFin = document.getElementById('remover-finalizados');

function finsRemove() {
  const myClass = document.getElementsByClassName('completed');

  for (let index = myClass.length - 1; index >= 0; index -= 1) {
    myClass[index].remove();
  }
}

removeFin.addEventListener('click', finsRemove);

const saving = document.getElementById('salvar-tarefas');

function storeLocation() {
  const listAllInner = document.querySelector('ol').innerHTML;
  localStorage.setItem('safe', listAllInner);
}

saving.addEventListener('click', storeLocation);

function reload() {
  const listAll = document.querySelector('ol');
  listAll.innerHTML = localStorage.getItem('safe');
}
reload();

const upMove = document.getElementById('mover-cima');

function moveUp() {
  const listOrd = document.querySelector('ol');
  const listItens = document.querySelectorAll('li');
  for (let index = 1; index < listItens.length; index += 1) {
    if (listItens[index].style.backgroundColor === 'rgb(128, 128, 128)')
      listOrd.insertBefore(listItens[index], listItens[index - 1]);
  }
}

upMove.addEventListener('click', moveUp);

const downMove = document.getElementById('mover-baixo');

function moveDown() {
  const listOrd = document.querySelector('ol');
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].style.backgroundColor === 'rgb(128, 128, 128)')
      listOrd.insertBefore(listItens[index], listItens[index + 2]);
  }
}
downMove.addEventListener('click', moveDown);

const removeSel = document.getElementById('remover-selecionado');
function selRemover() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      list[index].remove();
    }
  }
}

removeSel.addEventListener('click', selRemover);
