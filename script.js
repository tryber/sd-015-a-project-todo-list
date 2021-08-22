const button = document.getElementById('criar-tarefa');

function addList() {
  const input = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').innerHTML += `<li class='list'>${input}</li>`;
  document.getElementById('texto-tarefa').value = '';
  document.getElementById('texto-tarefa').focus();
}

button.addEventListener('click', addList);

const ol = document.getElementById('lista-tarefas');

const body = document.querySelector('body');

body.addEventListener('click', listSelect);

function listSelect() {
  const selectList = document.querySelectorAll('.list');
   let list;
  for (list of selectList) {
    list.addEventListener('click', color);
  }
}

function color(e) {
  const selectList = document.querySelectorAll('.list');
   let list;
  for (list of selectList) {
    list.classList.remove('list-color');
  let li = e.target;

  li.classList.add('list-color');    
  }
}
