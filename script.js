// função para adicionar tarefas a lista
function addTaskList() {
  const textItem = document.getElementById('texto-tarefa').value;
  if (textItem !== '') {
    const tasks = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = textItem;
    listItem.className = 'list-itens';
    tasks.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  }
}

// Escutador de evento para o botão de adicionar elementos a lista.
const clickAddItem = document.getElementById('criar-tarefa');
clickAddItem.addEventListener('click', addTaskList);

// Função para selecionar tarefas na lista
function selectElement(clickEvent) {
  const taskList = document.querySelectorAll('.list-itens');
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
  if (itenSelection.className === 'list-itens completed') {
    itenSelection.classList.remove('completed');
  } else {
    itenSelection.classList.add('completed');
  }
}

// Escutador de evento para marcar tarefas concluídas
clickSelection.addEventListener('dblclick', markDone);

// Função para limpar a lista inteira
function clearList() {
  const list = document.querySelectorAll('.list-itens');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

// Escutador de evento para limpar a lista inteira
const clearListButton = document.getElementById('apaga-tudo');
clearListButton.addEventListener('click', clearList);

// Função para limpar tarefas concluídas
function clearDone() {
  const list = document.querySelectorAll('.completed');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

// Escutador de evento para limpar tarefas concluídas
const clearDoneButton = document.getElementById('remover-finalizados');
clearDoneButton.addEventListener('click', clearDone);
