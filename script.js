function click() {
  const lisTarefa = document.querySelectorAll('.tarefas');

  function limpLis() {
    lisTarefa.forEach((e) => {
      e.classList.remove('selected');
    });
  }

  lisTarefa.forEach((e) => {
    e.addEventListener('click', () => {
      limpLis();
      e.classList.add('selected');
    });
  });
}

function line() {
  const lis = document.querySelectorAll('.tarefas');

  lis.forEach((e) => {
    // e.addEventListener('click', () => {
    e.classList.toggle('completed');
    //   });
  });
}

function addItem() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    const value = document.getElementById('texto-tarefa');
    document.getElementById('lista-tarefas').appendChild(li);
    li.className = 'tarefas';
    li.innerHTML = value.value;

    value.value = '';
    click();

    li.addEventListener('dblclick', line);
  });
}

addItem();
