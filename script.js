const mainSection = document.getElementById('main-section');

function addInput() {
  const inputField = document.createElement('input');
  mainSection.appendChild(inputField);
  inputField.id = 'texto-tarefa';
}
addInput();

function createButtonAdd() {
  const buttonAdd = document.createElement('button');
  mainSection.appendChild(buttonAdd);
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
}
createButtonAdd();

function createOrderList() {
  const orderList = document.createElement('ol');
  mainSection.appendChild(orderList);
  orderList.id = 'lista-tarefas';
}
createOrderList();

const itensLista = document.getElementsByClassName('itens-lista-individuais');

function colorListItem(event) {
  const alvo2 = event.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].style.backgroundColor = 'transparent';
    alvo2.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function strikeItem(event) {
  const alvo3 = event.target;
  // if (!alvo3.classList.contains('completed')) {
  //   alvo3.classList.add('completed');
  // } else {
  //   alvo3.classList.remove('completed');
  // }
  alvo3.classList.toggle('completed');
}

function addTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const orderList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.className = 'itens-lista-individuais';
  listItem.innerText = inputField.value;
  inputField.value = '';
  listItem.addEventListener('click', colorListItem);
  listItem.addEventListener('dblclick', strikeItem);
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);

function newSectionFooter() {
  const sectionFooter = document.createElement('section');
  mainSection.appendChild(sectionFooter);
  sectionFooter.id = 'section-footer';
}
newSectionFooter();

const sectionFooter = document.getElementById('section-footer');

function createButtonClear() {
  const buttonClear = document.createElement('button');
  sectionFooter.appendChild(buttonClear);
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Apagar';
}
createButtonClear();

function clearAll() {
  const olListParent = document.querySelector('#lista-tarefas');
  while (olListParent.firstChild) {
    olListParent.removeChild(olListParent.firstChild);
  }
}

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', clearAll);
