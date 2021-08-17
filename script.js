// Definição de constante utilizada várias vezes, ao longo do código.
const taskList = document.getElementById('lista-tarefas');

// Criando função que será alocada no botão "Adicionar Tarefa":
function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');

  addTaskBtn.addEventListener('click', function () {
    const inputValue = document.getElementById('texto-tarefa').value;
    const newLi = document.createElement('li');
    taskList.appendChild(newLi);
    const taskListLastElementChild = taskList.lastElementChild;
    taskListLastElementChild.innerHTML = inputValue;
    taskListLastElementChild.style.width = '80%';
    taskListLastElementChild.style.marginLeft = '10%';
    taskListLastElementChild.style.marginRight = '10%';
    document.getElementById('texto-tarefa').value = '';
  });
}

// Criando função que adicionará a classe "selected" quando determinado <li> for clicado.
// Além disso, o fundo do elemento clicado mudará  de cor.
// Por último, o elemento perderá a classe "selected" caso a pessoa clique sobre ele novamente.
function selectUnselectLi() {
  taskList.addEventListener('click', function (event) {
    const taskListArray = document.querySelector('#lista-tarefas').children;
    if (event.target.classList.contains('selected') === true) {
      event.target.classList.remove('selected');
      event.target.style.backgroundColor = 'blueviolet';
    } else {
      for (const li of taskListArray) {
        li.classList.remove('selected');
        li.style.backgroundColor = 'blueviolet';
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}

// Clicar duas vezes em determinado <li> faz com que ele seja riscado.
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function tickUntickLi() {
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed') === false) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

// Adicione um botão "salvar" que, quando clicado, salvará todos os itens da lista, mesmo se o website for fechado:
function saveTaskList() {
  const saveTaskListBtn = document.getElementById('salvar-tarefas');

  saveTaskListBtn.addEventListener('click', function () {
    const olContentToSave = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('savedTaskList', olContentToSave);
  });
}

function initialize() {
  if (localStorage.getItem('savedTaskList') !== null) {
    taskList.innerHTML = localStorage.getItem('savedTaskList');
  }
}

// Adicione um botão "remover-selecionado" que, quando clicado, remove o item selecionado:
function excludeSelected() {
  const deleteSelectedTaskBtn = document.getElementById('remover-selecionado');

  deleteSelectedTaskBtn.addEventListener('click', function () {
    const taskListArray = document.querySelector('#lista-tarefas').children;

    for (const li of taskListArray) {
      if (li.classList.contains('selected') === true) {
        taskList.removeChild(li);
      }
    }
  });
}

// Adicione um botão "remover-finalizados" que, quando clicado, deve apagar todos os itens já finalizados:
function deleteAllConcludedTasks() {
  const deleteConcludedTasksBtn = document.getElementById('remover-finalizados');

  deleteConcludedTasksBtn.addEventListener('click', function () {
    const completedTasksArray = document.getElementsByClassName('completed');

    while (completedTasksArray.length > 0) {
      completedTasksArray[0].parentNode.removeChild(completedTasksArray[0]);
    }
  });
}

// Adicione um botão "apaga-tudo" que, quando clicado, deve apagar todos os itens da lista:
function deleteAllTasks() {
  const deleteAllTasksBtn = document.getElementById('apaga-tudo');

  deleteAllTasksBtn.addEventListener('click', function () {
    taskList.innerHTML = '';
  });
}

// Adicione dois botões, um "mover-cima" e outro "mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas:
function moveTaskListItems() {
  const moveUpBtn = document.getElementById('mover-cima');

  moveUpBtn.addEventListener('click', function () {
    const selectedTaskListElement = document.querySelector('.selected');

    if (selectedTaskListElement !== null) {
      const selectedPreviousElement = selectedTaskListElement.previousElementSibling;

      if (selectedPreviousElement !== null) {
        // ref: https://devdocs.io/dom/node/insertbefore --> elementoPai.insertBefore(elementoQueDesejaMover, elementoQueEstaNaPosicaoDesejada)
        taskList.insertBefore(selectedTaskListElement, selectedPreviousElement); 
      }
    }
  });

  const moveDownBtn = document.getElementById('mover-baixo');

  moveDownBtn.addEventListener('click', function () {
    const selectedTaskListElement = document.querySelector('.selected');

    if (selectedTaskListElement !== null) {
      const selectedNextElement = selectedTaskListElement.nextElementSibling;

      if (selectedNextElement !== null) {
        taskList.insertBefore(selectedNextElement, selectedTaskListElement); 
      }
    }
  });
}

window.onload = function () {
  initialize();
  addTask();
  selectUnselectLi();
  tickUntickLi();
  saveTaskList();
  excludeSelected();
  deleteAllConcludedTasks();
  deleteAllTasks();
  moveTaskListItems();
};
