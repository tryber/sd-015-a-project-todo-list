const accessButton = document.querySelector('#criar-tarefa');
const accessInput = document.querySelector('#texto-tarefa');
const accessDelete = document.querySelector('#apaga-tudo');

function completedTask(event) {
  if (event.target.classList.length == 1) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function paint(event) {
  event.target.style.backgroundColor = 'gray';
}

function addText() {
  const accessOl = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  createLi.innerText = accessInput.value;
  createLi.classList.add('list');
  accessOl.appendChild(createLi);
  accessInput.value = '';
  createLi.addEventListener('dblclick', completedTask);
  createLi.addEventListener('click', paint);
}

accessButton.addEventListener('click', addText);

function deleteList() {
  const accessOl = document.querySelector('#lista-tarefas');
  accessOl.innerText = '';
}

accessDelete.addEventListener('click', deleteList);
