/* eslint-disable no-restricted-syntax */
const btnAdicionar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const btnApagar = document.getElementById('apaga-tudo');
const btnRemover = document.getElementById('remover-finalizados');

// Adiciona cor de fundo em apenas um elemento da lista
// Recebi suporte do Matheus Monteiro e do Diego Brito
function setBackgroundGray(evento) {
  const classLi = document.querySelector('.backgroundGray');
  if (classLi) {
    classLi.classList.remove('backgroundGray');
  }
  evento.target.classList.add('backgroundGray');
}

// Adiciona ou remove risco nos elementos da lista
function riskLi(evento) {
  let lineRisk = evento.target.classList;
  if (lineRisk.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

function adicionaTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const tarefaNova = document.createElement('li');
  tarefaNova.innerHTML = tarefa;

  lista.appendChild(tarefaNova);

  tarefaNova.addEventListener('click', setBackgroundGray);
  tarefaNova.addEventListener('dblclick', riskLi);

  document.getElementById('texto-tarefa').value = '';
}

// Remove todos os descendentes da tag 'ol'
// Feito conforme a dica do Augusto Vasques no StackOverflow
// https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript
function apagaTarefas() {
  lista.innerHTML = '';
}

// Remove os elementos com a classe 'completed', que representam os itens da lista já feitos
// Resolvido com ajuda do Augusto Alves, da turma 15 da Trybe, da tribo A.
function apagaConcluidas() {
  for (let i = 0; i < lista.children.length; i += 0) {
    if (lista.children[i].classList.contains('completed')) {
      lista.removeChild(lista.children[i]);
    } else {
      i += 1;
    }
  }
}

btnAdicionar.addEventListener('click', adicionaTarefa);

btnApagar.addEventListener('click', apagaTarefas);

btnRemover.addEventListener('click', apagaConcluidas)