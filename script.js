let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let inputArea = document.querySelector('#texto-tarefa');

//Cria lista de tarefas
function addTask() {
  let listItem = document.createElement('li');
  taskList.appendChild(listItem);
  listItem.innerHTML = inputArea.value;
  listItem.classList = 'list-item';
  inputArea.value = '';
  listItem.addEventListener('click', selectItem);
  listItem.addEventListener('click', changeItemColor);
}
addButton.addEventListener('click', addTask);

//Altera cor de fundo dos itens da lista
function changeItemColor() {
  this.style.backgroundColor = 'red';
  if (document.querySelector('.selected')) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
  }
  this.classList = 'selected';
}

function selectItem() {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
}

