const createButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const backColor = 'rgb(128, 128, 128)';

function checkStorage() {
  if (sessionStorage.length !== 0) {
    for (let i = 0; i < (sessionStorage.length - 1) / 2; i += 1) {
      const li = document.createElement('li');
      li.innerText = sessionStorage.getItem(i);
      li.className = sessionStorage.getItem(`classe${i}`);
      tasksList.appendChild(li);
    }
  }
  sessionStorage.clear();
}

checkStorage();

function addTask() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  tasksList.appendChild(newLi);
  input.value = '';
}

createButton.addEventListener('click', addTask);

function clearBackground() {
  const li = document.querySelectorAll('li');
  for (let elem = 0; elem < li.length; elem += 1) {
    li[elem].style.backgroundColor = '';
  }
}

function changeBackgroundColor(event) {
  clearBackground();
  const li = event;
  li.target.style.backgroundColor = backColor;
}

tasksList.addEventListener('click', changeBackgroundColor);

function strikeThrough(event) {
  const li = event;
  if (li.target.className !== 'completed') {
    li.target.className = 'completed';
  } else {
    li.target.className = '';
  }
}

tasksList.addEventListener('dblclick', strikeThrough);

const deleteButton = document.getElementById('apaga-tudo');

function clearAll() {
  tasksList.innerHTML = '';
}

deleteButton.addEventListener('click', clearAll);

const finishedButton = document.getElementById('remover-finalizados');

function removeCompleted() {
  const completed = document.getElementsByClassName('completed');
  const completedLength = completed.length;
  for (let i = completedLength - 1; i >= 0; i -= 1) {
    completed[i].remove();
  }
}

finishedButton.addEventListener('click', removeCompleted);

const saveButton = document.getElementById('salvar-tarefas');

function saveList() {
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    sessionStorage.setItem(index, li[index].innerText);
    sessionStorage.setItem(`classe${index}`, li[index].className);
  }
}

saveButton.addEventListener('click', saveList);

function checkClassAndChange(elemLi, elemP) {
  const li = elemLi;
  const prev = elemP;
  if (li.className === 'completed' && elemP.className !== 'completed') {
    li.className = '';
    prev.className = 'completed';
  }
}

function moveSelectedUp() {
  let change = true;
  const liList = document.getElementsByTagName('li');
  for (let i = 0; i < liList.length; i += 1) {
    const liStyle = getComputedStyle(liList[i]);
    const prevElem = liList[i].previousElementSibling;
    if (liStyle.backgroundColor === backColor && prevElem !== null && change) {
      const prevText = prevElem.innerText;
      prevElem.innerText = liList[i].innerText;
      liList[i].innerText = prevText;
      clearBackground();
      prevElem.style.backgroundColor = backColor;
      checkClassAndChange(liList[i], prevElem);
      change = false;
    }
  }
  change = true;
}

function moveSelectedDown() {
  const liList = document.getElementsByTagName('li');
  let change = true;
  for (let i = 0; i < liList.length; i += 1) {
    const liStyle = getComputedStyle(liList[i]);
    const prevElem = liList[i].nextElementSibling;
    if (liStyle.backgroundColor === backColor && prevElem !== null && change) {
      const prevText = prevElem.innerText;
      prevElem.innerText = liList[i].innerText;
      liList[i].innerText = prevText;
      clearBackground();
      prevElem.style.backgroundColor = backColor;
      checkClassAndChange(liList[i], prevElem);
      change = false;
    }
  }
  change = true;
}

const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
upButton.addEventListener('click', moveSelectedUp);
downButton.addEventListener('click', moveSelectedDown);

const removeButton = document.getElementById('remover-selecionado');

function removeSelected() {
  const li = document.getElementsByTagName('li');
  for (let i = 0; i < li.length; i += 1) {
    const liStyle = getComputedStyle(li[i]);
    if (liStyle.backgroundColor === backColor) {
      li[i].remove();
    }
  }
}

removeButton.addEventListener('click', removeSelected);
