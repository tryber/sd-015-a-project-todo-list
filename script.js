// requisito 5, 7, 8 e 9
const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByClassName('tarefa');

function completeTarefa(event) {
  const dblclickedItem = event.target;

  if (dblclickedItem.className.includes(' completed')) {
    dblclickedItem.className = dblclickedItem.className.replace(' completed', '');
  } else {
    dblclickedItem.className += ' completed';
  }
}

function selectTarefa(event) {
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].className.includes(' selected')) {
      tarefas[i].className = tarefas[i].className.replace(' selected', '');
    }
  }

  const clickedItem = event.target;
  clickedItem.className += ' selected';
}

function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', selectTarefa);
  tarefa.addEventListener('dblclick', completeTarefa);

  listaTarefas.appendChild(tarefa);
  inputTextoTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', criaTarefa);

// requisito 10
const btnLimparLista = document.getElementById('apaga-tudo');

function limpaLista() {
  while (listaTarefas.childElementCount !== 0) {
    document.querySelector('.tarefa').remove();
  }
}
btnLimparLista.addEventListener('click', limpaLista);

// requisito 11
const btnLimparCompletos = document.getElementById('remover-finalizados');

function limpaCompletos() {
  const tarefasCompletas = document.getElementsByClassName('completed');
  while (tarefasCompletas.length !== 0) {
    document.querySelector('.completed').remove();
  }
}
btnLimparCompletos.addEventListener('click', limpaCompletos);

// requisito 12
const btnSalvarLista = document.getElementById('salvar-tarefas');

function salvaLista() {
  localStorage.clear();
  localStorage.setItem('lista', listaTarefas.innerHTML);
}
btnSalvarLista.addEventListener('click', salvaLista);

window.onload = function initPage() {
  listaTarefas.innerHTML = localStorage.getItem('lista');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].addEventListener('click', selectTarefa);
    tarefas[i].addEventListener('dblclick', completeTarefa);
  }
};

// requisito 13
const btnParaCima = document.getElementById('mover-cima');
function moveCima() {
  const selectedTarefa = document.querySelector('.selected');
  if (selectedTarefa === null || selectedTarefa.previousElementSibling === null) {
    return;
  }
  selectedTarefa.previousElementSibling.before(selectedTarefa);
}
btnParaCima.addEventListener('click', moveCima);

const btnParaBaixo = document.getElementById('mover-baixo');
function moveBaixo() {
  const selectedTarefa = document.querySelector('.selected');
  if (selectedTarefa === null || selectedTarefa.nextElementSibling === null) {
    return;
  }
  selectedTarefa.nextElementSibling.after(selectedTarefa);
}
btnParaBaixo.addEventListener('click', moveBaixo);

function unSelected() {
  const selectedTarefa = document.querySelector('.selected');
  selectedTarefa.className = selectedTarefa.className.replace(' selected', '');
}
document.querySelector('header').addEventListener('click', unSelected);

// requisito 14
const btnRemoveSelected = document.getElementById('remover-selecionado');

function removeSelected() {
  document.querySelector('.selected').remove();
}
btnRemoveSelected.addEventListener('click', removeSelected);
