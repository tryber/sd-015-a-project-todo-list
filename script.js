// função para adicionar tarefas a lista
function addTaskList() {
  const textItem = document.getElementById('texto-tarefa').value;
  if (textItem !== '') {
    const tasks = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = textItem;
    listItem.className = 'listItens';
    tasks.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  }
}

// Escutador de evento para o botão de adicionar elementos a lista.
const clickAddItem = document.getElementById('criar-tarefa');
clickAddItem.addEventListener('click', addTaskList);

// Função para selecionar tarefas na lista
function selectElement(clickEvent) {
  const taskList = document.querySelectorAll('.listItens');
  const itenSelection = clickEvent.target;
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].id === 'selected') {
      taskList[i].removeAttribute('id');
    }
  }
  itenSelection.id = 'selected';
}

// Escutador de evento para selecionar um elemento da lista.
const clickSelection = document.getElementById('lista-tarefas');
clickSelection.addEventListener('click', selectElement);

function markDone(clickEvent) {
  const itenSelection = clickEvent.target;
  if (itenSelection.className === 'listItens completed') {
    itenSelection.classList.remove('completed');
  } else {
    itenSelection.classList.add('completed');
  }
}

clickSelection.addEventListener('dblclick', markDone);
