const listaTarefas = 'lista-tarefas';
const selectedColor = 'rgb(128, 128, 128)';

function selectTask(event) {
  const eventObj = event;
  const todoList = document.getElementsByTagName('li');
  for (let index = 0; index < todoList.length; index += 1) {
    if (todoList[index].style.backgroundColor === selectedColor) {
      todoList[index].style.backgroundColor = '';
    }
  }
  eventObj.target.style.backgroundColor = selectedColor;
}

function riskTask(event) {
  const eventObj = event;
  if (eventObj.target.className !== 'completed') {
    eventObj.target.className = 'completed';
  } else {
    eventObj.target.className = '';
  }
}

function addTasks() {
  const button = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const todoList = document.getElementById(listaTarefas);
  button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.addEventListener('click', selectTask);
    newItem.addEventListener('dblclick', riskTask);
    newItem.innerHTML = inputText.value;
    inputText.value = '';
    todoList.appendChild(newItem);
  });
}

function removeAll() {
  const button = document.getElementById('apaga-tudo');
  button.addEventListener('click', () => {
    document.getElementById(listaTarefas).innerHTML = '';
  });
}

function removeFinished() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', () => {
    const listaCompleta = document.getElementsByClassName('completed');
    if (listaCompleta.length > 0) {
      const listSize = listaCompleta.length;
      for (let index = 0; index < listSize; index += 1) {
        listaCompleta[0].remove();
      }
    }
  });
}

function saveList() {
  const saveBttn = document.getElementById('salvar-tarefas');
  saveBttn.addEventListener('click', () => {
    const listaAtual = document.getElementById(listaTarefas);
    localStorage.setItem('lista', listaAtual.innerHTML);
  });
}

function getSavedList() {
  if (localStorage.getItem('lista') !== null) {
    const savedString = localStorage.getItem('lista');
    const dummyDOM = document.createElement('html');
    dummyDOM.innerHTML = savedString;
    const savedItens = dummyDOM.getElementsByTagName('li');
    const numberOfItens = savedItens.length;
    const todoList = document.getElementById(listaTarefas);
    for (let index = 0; index < numberOfItens; index += 1) {
      savedItens[0].addEventListener('click', selectTask);
      savedItens[0].addEventListener('dblclick', riskTask);
      todoList.appendChild(savedItens[0]);
    }
  }
}

// busca qual das li está selecionada. se nao tiver nenhuma selecionada retorna -1;
function getSelectedPosition() {
  const listItems = document.getElementsByTagName('li');
  let atualPosition = -1;
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].style.backgroundColor === selectedColor) {
      atualPosition = index;
      break;
    }
  }
  return atualPosition;
}

function moveUp() {
  const selectedIndex = getSelectedPosition();
  const listOfItens = document.getElementsByTagName('li');
  if (selectedIndex > 0) {
    const selectedItem = listOfItens[selectedIndex];
    const aboveItem = listOfItens[selectedIndex - 1];
    const auxInner = aboveItem.innerHTML;
    const auxBg = aboveItem.style.backgroundColor;
    const auxClass = aboveItem.className;
    aboveItem.innerHTML = selectedItem.innerHTML;
    aboveItem.style.backgroundColor = selectedItem.style.backgroundColor;
    aboveItem.className = selectedItem.className;
    selectedItem.innerHTML = auxInner;
    selectedItem.style.backgroundColor = auxBg;
    selectedItem.className = auxClass;
  }
}

function moveDwn() {
  const selectedIndex = getSelectedPosition();
  const listOfItens = document.getElementsByTagName('li');
  if (selectedIndex >= 0 && selectedIndex < listOfItens.length - 1) {
    const selectedItem = listOfItens[selectedIndex];
    const aboveItem = listOfItens[selectedIndex + 1];
    const auxInner = aboveItem.innerHTML;
    const auxBg = aboveItem.style.backgroundColor;
    const auxClass = aboveItem.className;
    aboveItem.innerHTML = selectedItem.innerHTML;
    aboveItem.style.backgroundColor = selectedItem.style.backgroundColor;
    aboveItem.className = selectedItem.className;
    selectedItem.innerHTML = auxInner;
    selectedItem.style.backgroundColor = auxBg;
    selectedItem.className = auxClass;
  }
}

function moveItem() {
  const bttnUp = document.getElementById('mover-cima');
  const bttnDown = document.getElementById('mover-baixo');
  bttnUp.addEventListener('click', moveUp);
  bttnDown.addEventListener('click', moveDwn);
}

function removeSelected() {
  document.getElementById('remover-selecionado').addEventListener('click', () => {
    const selectedIndex = getSelectedPosition();
    const listOfItens = document.getElementsByTagName('li');
    if (selectedIndex > 0) {
      listOfItens[selectedIndex].remove();
    }
  });
}

addTasks();
removeAll();
removeFinished();
getSavedList();
saveList();
moveItem();
removeSelected();
