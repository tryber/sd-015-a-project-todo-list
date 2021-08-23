/* eslint-disable no-restricted-syntax */
const btnAdicionar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const btnApagar = document.getElementById('apaga-tudo');
const btnRemover = document.getElementById('remover-finalizados');
const btnSalvarDados = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');
const btnRemoverSelec = document.getElementById('remover-selecionado');

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
  const lineRisk = evento.target.classList;
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

// Adiciona os dados a serem salvos no localstorage
// Para essa função, eu olhei o commit do Italo Sérgio, da turma 15 da Trybe, para ter uma ideia de como fazer
function salvaDados() {
  let dadosSalvos = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('salvar', dadosSalvos);
}

// Função para manter os dados ao recarregar a página usando o localStorage
// Para essa função, eu olhei o commit do Italo Sérgio, da turma 15 da Trybe, para ter uma ideia de como fazer
function salvados() {
  lista.innerHTML = localStorage.getItem('salvar');
}

// Função para subir o elemento selecionado, desde que ele não esteja já no topo
// Função 'insertBefore' foi consultada no site do Mozilla
function subir() {
  for (let i = 0; i < lista.children.length; i += 1) {
    if (lista.children[i].classList.contains('backgroundGray') && i > 0) {
      lista.insertBefore(lista.children[i], lista.children[(i - 1)]);
    }
  }
}

// Função para descer o elemento selecionado, desde que ele não esteja já no fundo
// Função 'insertBefore' consultada no site do Mozilla, com modificação para que faça a troca inversa (pelo elemento posterior)
function descer() {
  for (let i = 0; i < lista.children.length; i += 1) {
    if (lista.children[i].classList.contains('backgroundGray') && i < (lista.children.length - 1)) {
      i += 1;
      lista.insertBefore(lista.children[i], lista.children[(i - 1)]);
    }
  }
}

// Função que remove elemento selecionado, caso tenha
function removerSelec() {
  for (let i = 0; i < lista.children.length; i += 1) {
    if (lista.children[i].classList.contains('backgroundGray')) {
      lista.removeChild(lista.children[i]);
    }
  }
}

btnAdicionar.addEventListener('click', adicionaTarefa);

btnApagar.addEventListener('click', apagaTarefas);

btnRemover.addEventListener('click', apagaConcluidas);

btnSalvarDados.addEventListener('click', salvaDados);

btnMoverCima.addEventListener('click', subir);

btnMoverBaixo.addEventListener('click', descer);

btnRemoverSelec.addEventListener('click', removerSelec);

window.onload = salvados;
