const button = document.getElementById('criar-tarefa');

function addList() {
  const input = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').innerHTML += `<li class='list'>${input}</li>`;
  document.getElementById('texto-tarefa').value = '';
  document.getElementById('texto-tarefa').focus();
}

button.addEventListener('click', addList);

const ol = document.getElementById('lista-tarefas');

function color(e) {
  let li = e.target;
  li.style.backgroundColor = 'rgb(128, 128, 128)';
}
function listSelect() {
  const selectList = document.querySelectorAll('.list');
let list;  
for (list of selectList) {
  list.addEventListener('click', color);
}
}

const body = document.querySelector('body');

body.addEventListener('click', listSelect)