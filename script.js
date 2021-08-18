const olLista = document.getElementById('lista-tarefas');
const btnCriarItem = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
olLista.innerHTML = localStorage.getItem('conteudo');
// add cor em um item clicado na lista e remove a cor dos outros itens
function addCor(event) {
  const itens = document.getElementsByTagName('li');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'rgb(250, 245, 245)';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// add e apaga linha do item li quando clicado
function addLinha(event) {
  if (event.target.className === '') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}
// add item da lista na tela e add dois ouvidores em casa li
function addLista() {
  const valorItem = textoTarefa.value;
  const item = document.createElement('li');
  item.innerHTML = valorItem;
  olLista.appendChild(item);
  item.addEventListener('click', addCor);
  item.addEventListener('dblclick', addLinha);
  textoTarefa.value = '';
}

btnCriarItem.addEventListener('click', addLista);
// apaga toda a lista
function apagaTudo() {
  olLista.innerHTML = ' ';
}
const btnApagaTudo = document.getElementById('apaga-tudo');
btnApagaTudo.addEventListener('click', apagaTudo);
// remove item finalizado
const btnRemoverFinalizados = document.getElementById('remover-finalizados');

function removerFinalizados() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].className === 'completed') {
      itens[i].remove();
    }
  }
}

btnRemoverFinalizados.addEventListener('click', removerFinalizados);
// remove item selecionado
const btnRemoverSelecionado = document.getElementById('remover-selecionado');

function removeSelecionado() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      itens[i].remove();
    }
  }
}
btnRemoverSelecionado.addEventListener('click', removeSelecionado);
// salva a lista
function salvarLista() {
  localStorage.setItem('conteudo', olLista.innerHTML);
}
const btnSalvarLista = document.getElementById('salvar-tarefas');
btnSalvarLista.addEventListener('click', salvarLista);
