// pra add cor ao novo item clicado e tirando do anterior.
// array.forEach(function (element){}) ~ for (let element of array) {}

function setBackgroundColor(event) {
  document.querySelectorAll('.selected').forEach((li) => {
    li.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

// add risco e remover risco de item completo.

function setCompleted(event) {
  const li = event.target;
  if (li.classList.contains('completed')) {
    li.classList.remove('completed');
  } else {
    li.classList.add('completed');
  }
}

document.getElementById('criar-tarefa').addEventListener('click', (event) => {
  event.preventDefault();
  const usersText = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.textContent = usersText;
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
  li.addEventListener('click', setBackgroundColor);
  li.addEventListener('dblclick', setCompleted);
});
