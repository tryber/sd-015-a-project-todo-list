// Requisitos 1 e 2 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag(1) e Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"(2).
const callScript = document.getElementById('script');
const callParent = callScript.parentNode;

function addHeaderAndParagraph() {
  const newHeader = document.createElement('header');
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  newHeader.innerHTML = 'Minha Lista de Tarefas';
  callParent.insertBefore(newHeader, callScript);
  callParent.insertBefore(newParagraph, callScript);
}
addHeaderAndParagraph();

// Requisito 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.
function createInput() {
  const newInput = document.createElement('input');
  newInput.id = 'texto-tarefa';
  newInput.type = 'text';
  newInput.min = '1';
  callParent.insertBefore(newInput, callScript);
}
createInput();

// Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function addOl() {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  callParent.insertBefore(newOl, callScript);
}
addOl();

const callOl = document.getElementById('lista-tarefas');
const callParentOl = callOl.parentNode;

// Requisito 5 - Adicione um botão com id="criar-tarefa" ...(continua na linha 53)
function addButton() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerHTML = 'Adicionar Tarefa';
  callParentOl.insertBefore(newButton, callOl);
}
addButton();

// Requisito 7 e 8 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)(7) e Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo(8).
function selectTask(event) {
  const callTask = document.querySelectorAll('.task');
  for (let i = 0; i < callTask.length; i += 1) {
    callTask[i].classList.remove('backgroundRgb');
    event.target.classList.add('backgroundRgb');
  }
}

// Continuação Requisito 5, 6 e 9 - ...ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo(5) e Ordene os itens da lista de tarefas por ordem de criação(6). E Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item(9).
function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addTask() {
  const callInput = document.getElementById('texto-tarefa');
  if (callInput.value.length === 0) {
    alert('Erro: Texto vazio');
  } else {
    const newLi = document.createElement('li');
    newLi.className = 'task';
    newLi.innerHTML = callInput.value;
    callOl.appendChild(newLi);
    callInput.value = '';
    newLi.addEventListener('click', selectTask);
    newLi.addEventListener('dblclick', completeTask);
  }
}

const callButton = document.querySelector('#criar-tarefa');
callButton.addEventListener('click', addTask);

// Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
const getOl = document.querySelector('#lista-tarefas');

function removeAllTasks() {
  const size = getOl.childNodes.length;
  for (let i = 0; i < size; i += 1) {
    getOl.childNodes[0].remove();
  }
}

function deleteAllTasks() {
  const createButtonDeleteAll = document.createElement('button');
  createButtonDeleteAll.id = 'apaga-tudo';
  createButtonDeleteAll.innerHTML = 'Limpar Lista';
  callParent.insertBefore(createButtonDeleteAll, callScript);
  createButtonDeleteAll.addEventListener('click', removeAllTasks);
}
deleteAllTasks();

// Requisito 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
function deleteCompletedTasks() {
  const callLiCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < callLiCompleted.length; i += 1) {
    callLiCompleted[i].remove();
  }
}

function removeCompletedTasks() {
  const createButtonRemoveCompletedTasks = document.createElement('button');
  createButtonRemoveCompletedTasks.id = 'remover-finalizados';
  createButtonRemoveCompletedTasks.innerHTML = 'Limpar Tarefas Finalizadas';
  callParent.insertBefore(createButtonRemoveCompletedTasks, callScript);
  createButtonRemoveCompletedTasks.addEventListener('click', deleteCompletedTasks);
}
removeCompletedTasks();

// Requisito 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
function saveTasks() {
  localStorage.setItem('tasks', (getOl.innerHTML));
}

function buttonToSaveTasks() {
  const createButtonToSaveTasks = document.createElement('button');
  createButtonToSaveTasks.id = 'salvar-tarefas';
  createButtonToSaveTasks.innerHTML = 'Salvar Lista';
  callParent.insertBefore(createButtonToSaveTasks, callScript);
  createButtonToSaveTasks.addEventListener('click', saveTasks);
}
buttonToSaveTasks();

function load() {
  getOl.innerHTML = localStorage.getItem('tasks');
  const childrenOfgetBackOl = getOl.children;
  for (let i = 0; i < childrenOfgetBackOl.length; i += 1) {
    childrenOfgetBackOl[i].addEventListener('click', selectTask);
    childrenOfgetBackOl[i].addEventListener('dblclick', completeTask);
  }
}

window.onload = load;

// Requisito 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
function moveUp() {
  const selectedTask = document.querySelector('.backgroundRgb');
  if (selectedTask !== null) {
    const previousSelectedTask = selectedTask.previousSibling;
    if (previousSelectedTask !== null) {
      getOl.insertBefore(selectedTask, previousSelectedTask);
    }
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.backgroundRgb');
  if (selectedTask !== null) {
    const nextSelectedTask = selectedTask.nextSibling;
    if (nextSelectedTask !== null) {
      getOl.insertBefore(nextSelectedTask, selectedTask);
    }
  }
}

function createButtonsMove() {
  const createButtonUp = document.createElement('button');
  const createButtonDown = document.createElement('button');
  createButtonUp.innerHTML = 'Mover Para Cima';
  createButtonDown.innerHTML = 'Mover Para Baixo';
  createButtonUp.id = 'mover-cima';
  createButtonDown.id = 'mover-baixo';
  callParent.insertBefore(createButtonUp, callScript);
  callParent.insertBefore(createButtonDown, callScript);
  createButtonUp.addEventListener('click', moveUp);
  createButtonDown.addEventListener('click', moveDown);
}
createButtonsMove();

// Requisito 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
function removeSelected() {
  for (let i = 0; i < getOl.childNodes.length; i += 1) {
    if (getOl.childNodes[i].classList.contains('backgroundRgb')) {
      getOl.childNodes[i].remove();
    }
  }
}

function buttonToRemoveSelected() {
  const createButtonToRemoveSelected = document.createElement('button');
  createButtonToRemoveSelected.id = 'remover-selecionado';
  createButtonToRemoveSelected.innerHTML = 'Remover Item Selecionado';
  callParent.insertBefore(createButtonToRemoveSelected, callScript);
  createButtonToRemoveSelected.addEventListener('click', removeSelected);
}
buttonToRemoveSelected();
