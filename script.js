document.getElementById('criar-tarefa').addEventListener('click', function (event) {
  event.preventDefault();
  const usersText = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.textContent = usersText;
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
  li.addEventListener('click', function (event2) {
  event2.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
});