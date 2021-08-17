const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const btnApgTudo = document.getElementById('apaga-tudo');
const btnApgFinish = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnMoveCima = document.getElementById('mover-cima');
const btnMoveBaixo = document.getElementById('mover-baixo');
const btnMRemoveSelected = document.getElementById('remover-selecionado');

btnMoveCima.addEventListener('click', () => {
  const listSelected = document.querySelector('.selected');
  if (ol.firstElementChild) {
    const moveUp = listSelected.previousSibling;
    if (moveUp) {
      moveUp.before(listSelected);
    }
  }
});

btnMoveBaixo.addEventListener('click', () => {
  const listSelected = document.querySelector('.selected');
  if (ol.firstElementChild) {
    const moveDown = listSelected.nextSibling;
    if (moveDown) {
      moveDown.after(listSelected);
    }
  }
});

btnApgFinish.addEventListener('click', () => {
  const listCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < listCompleted.length; index += 1) {
    listCompleted[index].remove();
  }
});

btnMRemoveSelected.addEventListener('click', () => {
  const listSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < listSelected.length; index += 1) {
    listSelected[index].remove();
  }
  if (ol.firstElementChild) {
    ol.firstElementChild.classList.add('selected');
  }
});

btnApgTudo.addEventListener('click', () => {
  while (ol.firstChild) {
    ol.removeChild(ol.lastChild);
  }
});

function addList(inputValue = input.value, style = '', classN = 'list') {
  const li = document.createElement('li');
  li.innerHTML = inputValue;
  li.style.textDecoration = style;
  li.className = classN;
  ol.appendChild(li);
  const list = document.querySelectorAll('.list');
  if (list.length === 1 && classN === 'list') {
    li.className = 'list selected';
  }
  input.value = '';
}

function addListAux() {
  addList();
}

button.addEventListener('click', addListAux);

function selectColor(event) {
  const list = document.querySelectorAll('.list');
  const selectCor = 'rgb(128, 128, 128)';
  const color = event.target;
  for (let index = 0; index < list.length; index += 1) {
    list[index].style.background = 'white';
  }
  color.style.backgroundColor = selectCor;
}

function selectTarefa(event) {
  const listSelected = document.querySelector('.selected');
  listSelected.classList.remove('selected');
  event.target.classList.add('selected');

  selectColor(event);
}

ol.addEventListener('click', selectTarefa);

ol.addEventListener('dblclick', (event) => {
  const decoration = 'line-through solid rgb(0, 0, 0)';
  const mudaText = event.target;
  if (event.target.style.textDecoration === decoration) {
    mudaText.style.textDecoration = 'none';
    mudaText.classList.remove('completed');
  } else {
    mudaText.style.textDecoration = decoration;
    mudaText.classList.add('completed');
  }
});

function salvarTarefa() {
  const recuperaDados = document.querySelectorAll('.list');
  for (let index = 0; index < recuperaDados.length; index += 1) {
    const dados = {
      name: recuperaDados[index].innerHTML,
      style: recuperaDados[index].style.textDecoration,
      class: recuperaDados[index].className,
    };
    localStorage.setItem(index, JSON.stringify(dados));
  }
}

btnSalvar.addEventListener('click', salvarTarefa);

window.onload = function inicial() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const dados = JSON.parse(localStorage.getItem(index));
    addList(dados.name, dados.style, dados.class);
  }
};
