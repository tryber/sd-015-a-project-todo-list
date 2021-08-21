let button = document.getElementById('criar-tarefa');

function addList(e) {
   let input = document.getElementById('texto-tarefa').value;
   document.getElementById('lista-tarefas').innerHTML += `<li>${input}</li>`;
   document.getElementById('texto-tarefa').value = '';
   document.getElementById('texto-tarefa').focus();
}

button.addEventListener('click', addList)