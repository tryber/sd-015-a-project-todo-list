let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

button.addEventListener('click', function(){
  let listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  list.appendChild(listItem);
  input.value = '';
})