// Requisito 5 e 7
const button = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

button.addEventListener('click', function () {
  const li = document.createElement('li');
  li.className = 'lista';
  const text = taskText.value;
  li.innerText = text;
  // Requisito 7
  li.addEventListener ('click', function () {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  })
  ol.appendChild(li);
  taskText.value = '';
});




