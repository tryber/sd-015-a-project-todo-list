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
  listItem.addEventListener('click', changeItemColor);
}
addButton.addEventListener('click', addTask);

//Altera cor de fundo dos itens da lista
function changeItemColor() {
  let listItens = document.querySelectorAll('.list-item');
  for (let index of listItens) {
    this.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  console.log(listItens);
}

