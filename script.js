const ol = document.querySelector('ol');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const colorRgb = 'rgb(128, 128, 128)';

function lineThrough(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addGreyColor(e) {
  const event = e;
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = colorRgb;
}

function addListItem() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  ol.appendChild(newLi);
  input.value = '';
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', addGreyColor);
    li[index].addEventListener('dblclick', lineThrough);
  }
}

button.addEventListener('click', addListItem);

const eraseButton = document.getElementById('apaga-tudo');

function eraseTaskList() {
  ol.innerText = '';
}

function eraseOnlyDones() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}

const eraseDoneTasks = document.getElementById('remover-finalizados');
eraseDoneTasks.addEventListener('click', eraseOnlyDones);

eraseButton.addEventListener('click', eraseTaskList);

const arrayClasses = [];

function addClassToLocal() {
  const saveClass = document.querySelectorAll('li');
  for (let index = 0; index < saveClass.length; index += 1) {
    arrayClasses.push(saveClass[index].className);
  }
  localStorage.setItem('classes', JSON.stringify(arrayClasses));
}

const saveTasks = document.querySelector('#salvar-tarefas');
const saveLi = [];
function saveToLocal() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    saveLi.push(li[index].innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(saveLi));
  addClassToLocal();
}

saveTasks.addEventListener('click', saveToLocal);

window.onload = function initialState() {
  let savedLi;
  let savedLi2;
  if (localStorage.getItem('tasks') !== null && localStorage.getItem('classes') !== null) {
    savedLi = JSON.parse(localStorage.getItem('tasks'));
    savedLi2 = JSON.parse(localStorage.getItem('classes'));
    for (let index = 0; index < savedLi.length; index += 1) {
      const li = document.createElement('li');
      li.innerText = savedLi[index];
      li.className = savedLi2[index];
      li.addEventListener('click', addGreyColor);
      li.addEventListener('dblclick', lineThrough);
      ol.appendChild(li);
    }
  }
};

function switchIndex() {
  const lista = document.querySelectorAll('li');
  for (let index = 1; index < lista.length; index += 1) {
    if (lista[index].style.backgroundColor === colorRgb) {
      ol.insertBefore(lista[index], lista[index - 1]);
    }
  }
}

const upButton = document.querySelector('#mover-cima');
upButton.addEventListener('click', switchIndex);

const downButton = document.querySelector('#mover-baixo');
function switchIndex2() {
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].style.backgroundColor === colorRgb) {
      ol.insertBefore(lista[index], lista[index + 2]);
    }
  }
}

downButton.addEventListener('click', switchIndex2);

const removeDoneTask = document.querySelector('#remover-selecionado');
removeDoneTask.onclick = function onlyDoneTask() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].style.backgroundColor === colorRgb) {
      li[index].remove();
    }
  }
};
