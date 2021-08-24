const criarTarefa = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const remover = document.getElementById('apaga-tudo');
const removerFin = document.getElementById('remover-finalizados');
// consultado o repositorio https://github.com/tryber/sd-015-a-project-todo-list/blob/arthur-teixeira-santos-todo-list-project/script.js
// Alterar a cor de fundo

function trocaCor(event) {
  if (document.querySelector('.selecionada')) {
    document.querySelector('.selecionada').classList.remove('selecionada');
  }
  event.target.classList.add('selecionada');
}

// Colocar como completa

function completar(event) {
  if (event.target.className.includes('completed')) {
    document.querySelector('.completed').classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Criar evento
function criTar(event) {
  event.preventDefault();
  const criarLi = document.createElement('li');
  criarLi.innerText = texto.value;
  criarLi.classList.add('tarefas')
  listaTarefa.appendChild(criarLi);
  criarLi.addEventListener('click', trocaCor);
  criarLi.addEventListener('dblclick', completar);
  texto.value = '';
}

criarTarefa.addEventListener('click', criTar);

// Apagar elemento
// Feito conforme a dica do Augusto Vasques no StackOverflow
// https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript
function apagarLi() {
  listaTarefa.innerHTML = '';
}

remover.addEventListener('click', apagarLi);

// Remover finalizados
// consultado o repositorio https://github.com/tryber/sd-015-a-project-todo-list/blob/leandro-basilio-todo-list-project/script.js
function revFin() {
  for (let index = 0; index < listaTarefa.children.length; index += 0) {
    if (listaTarefa.children[index].classList.contains('completed')) {
      listaTarefa.removeChild(listaTarefa.children[index]);
    } else {
      index += 1;
    }
  }
}

removerFin.addEventListener('click', revFin)