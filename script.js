document.body.style.backgroundColor = '#f0f0f0';

const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
const body = document.querySelector('body');
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragraph.id = 'funcionamento';

header.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
const main = document.createElement('main');
body.appendChild(main);
main.appendChild(input);

const taskButton = document.createElement('button');
taskButton.id = 'criar-tarefa';
taskButton.innerText = 'Adicionar';
main.appendChild(taskButton);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

function addListItem() {
  const lineTaskList = document.createElement('li');
  lineTaskList.innerText = input.value;
  taskList.appendChild(lineTaskList);
  input.value = '';
}
taskButton.addEventListener('click', addListItem);


function resetColor() {
  const liTarget = document.querySelectorAll('li');
  for (let index = 0; index < liTarget.length; index += 1) {
    liTarget[index].style.backgroundColor = '';
  }
}

const taskListTarget = document.querySelector('ol');
function paintLine(event) {
  resetColor();
  const evento = event.target;
  evento.style.background = 'grey';
}
taskListTarget.addEventListener('click', paintLine);

function riskLine(event) {
  const evento = event.target;
  if (evento.className !== 'completed') {
    evento.className += 'completed';
  } else {
    evento.className = '';
  }
}
taskListTarget.addEventListener('dblclick', riskLine);

const resetListButton = document.createElement('button');
resetListButton.innerText = 'Reset';
resetListButton.id = 'apaga-tudo';
main.appendChild(resetListButton);

const lista = document.querySelector('ol');

resetListButton.addEventListener('click', () => {
  lista.innerHTML = '';
});


const clearCompleted = document.createElement('button');
clearCompleted.innerText = 'Apagar';
clearCompleted.id = 'remover-finalizados';
main.appendChild(clearCompleted);

clearCompleted.addEventListener('click', () => {
  const elementCompleted = document.getElementsByClassName('completed');
  for (let index = elementCompleted.length - 1; index >= 0; index -= 1) {
    elementCompleted[index].remove();
  }
});
const strButton = document.createElement('button');
strButton.id = 'salvar-tarefas';
strButton.innerText = 'Salvar';
main.appendChild(strButton);

function saveStr() {
  const locStr = document.querySelector('ol').innerHTML;
  localStorage.setItem('saveUserList', locStr);
}
strButton.addEventListener('click', saveStr);

function saveReload() {
  const saveReloading = document.getElementById('lista-tarefas');
  saveReloading.innerHTML = localStorage.getItem('saveUserList');
}
saveReload();

const upButton = document.createElement('button');
const downButton = document.createElement('button');
upButton.id = 'mover-cima';
downButton.id = 'mover-baixo';
upButton.innerText = '↑';
downButton.innerText = '↓';
main.appendChild(upButton);
main.appendChild(downButton);

function moveUp() {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 1; index < selectedItem.length; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'grey' && index - 1 !== -1) {
      selectedItem[index].parentNode.insertBefore(selectedItem[index], selectedItem[index - 1]);
    }
  }
}
upButton.addEventListener('click', moveUp);

function moveDown() {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 0; index < selectedItem.length; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'grey' && index + 1 !== selectedItem.length) {
      selectedItem[index].parentNode.insertBefore(selectedItem[index + 1], selectedItem[index]);
    }
  }
}
downButton.addEventListener('click', moveDown);

const removeButton = document.createElement('button');
removeButton.id = 'remover-selecionado';
removeButton.innerText = 'Remover';
main.appendChild(removeButton);

removeButton.addEventListener('click', () => {
  const selectedColor = document.querySelectorAll('li');
  for (let index = 0; index < selectedColor.length; index += 1) {
    if (selectedColor[index].style.backgroundColor === 'grey') {
      selectedColor[index].remove();
    }
  }
});