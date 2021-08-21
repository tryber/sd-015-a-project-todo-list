const buttonClick = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const buttonDeleteEverything = document.getElementById('apaga-tudo');

/* Função para criar os elementos */
function createListItems() {
  const createItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa').value;

  toDoList.appendChild(createItem);
  createItem.innerText = inputText;
}

/* Função para limpar o input */
function clear() {
  document.getElementById('texto-tarefa').value = '';
}

/* Função para reset */
function reset() {
  const elementList = document.querySelectorAll('li');
  for (let index = 0; index < elementList.length; index += 1) {
    document.querySelectorAll('li')[index].style.backgroundColor = '';
  }
}

/* Função para alterar o backgrounColor do item da lista */
function changeColor(event) {
  reset();
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

/* Função para riscar a linha */
function taskCompleted(event) {
  reset();
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}

/* Função para apagar tudo a partir do botão Apagar Tudo */
function deleteEverything() {
  window.location.reload();
}

buttonClick.addEventListener('click', createListItems);
buttonClick.addEventListener('click', clear);
toDoList.addEventListener('click', changeColor);
toDoList.addEventListener('dblclick', taskCompleted);
buttonDeleteEverything.addEventListener('click', deleteEverything);
