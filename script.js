const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const removerSelecionado = document.getElementById('remover-selecionado');

function checkElement(element, stringToCompare) {
  const typeOfTheElement = element.tagName;
  return (typeOfTheElement === stringToCompare);
}

function backgroundChange(event) {
  const olElement = event.target;
  const oldSelected = document.querySelector('.selected');
  if (olElement.classList.contains('selected')) {
    return;
  }
  if (checkElement(olElement, 'LI')) {
    if (oldSelected) {
      oldSelected.classList.remove('selected');
      oldSelected.style.backgroundColor = '';
    }
    olElement.classList.add('selected');
  }
}

function completedTalk(event) {
  const liElement = event.target;
  if (liElement.style.textDecoration.length > 1) {
    liElement.style.textDecoration = '';
    liElement.classList.remove('completed');
    return;
  }
  liElement.style.textDecoration = 'line-through';
  liElement.classList.add('completed');
}

function addOldToDo(stringStorage, classStorage) {
  const newItem = document.createElement('li');
  newItem.textContent = stringStorage;
  newItem.className = classStorage;
  listaTarefa.appendChild(newItem);
  newItem.addEventListener('click', backgroundChange);
  newItem.addEventListener('dblclick', completedTalk);
}

const storageElemento = JSON.parse(window.localStorage.getItem('list'));
const storageElementClass = JSON.parse(window.localStorage.getItem('classes'));

if (storageElemento) {
  storageElemento.forEach((element, index) => addOldToDo(element, storageElementClass[index]));
}
function addNewToDo() {
  const newListItemInput = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  newItem.textContent = newListItemInput.value;
  newListItemInput.value = '';
  listaTarefa.appendChild(newItem);
  newItem.addEventListener('click', backgroundChange);
  newItem.addEventListener('dblclick', completedTalk);
}
criarTarefa.addEventListener('click', addNewToDo);

function limpaOl() {
  while (listaTarefa.lastElementChild) {
    listaTarefa.lastElementChild.remove();
  }
  window.localStorage.clear();
}

apagaTudo.addEventListener('click', limpaOl);

function limpaFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length) {
    finalizados[0].remove();
  }
}

removerFinalizados.addEventListener('click', limpaFinalizados);

// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// guia que usei para fazer o local storage

function salvaTarefa() {
  const listOfToDo = [];
  const listOfClasses = [];
  const htmlCollection = document.querySelectorAll('.completed');
  for (let index = 0; index < htmlCollection.length; index += 1) {
    listOfToDo.push(htmlCollection[index].textContent);
    listOfClasses.push(htmlCollection[index].className);
  }
  console.log(listOfToDo);

  window.localStorage.setItem('list', JSON.stringify(listOfToDo));
  window.localStorage.setItem('classes', JSON.stringify(listOfClasses));
}

salvarTarefas.addEventListener('click', salvaTarefa);

function moveCima() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const elementoDeCima = selected.previousSibling;
  if (elementoDeCima) {
    elementoDeCima.before(selected);
  }
}

function moveBaixo() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const elementoDeBaixo = selected.nextSibling;
  if (elementoDeBaixo) {
    elementoDeBaixo.after(selected);
  }
}

function removeSelecionado() {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.remove();
  }
}

moverCima.addEventListener('click', moveCima);

moverBaixo.addEventListener('click', moveBaixo);

removerSelecionado.addEventListener('click', removeSelecionado);
