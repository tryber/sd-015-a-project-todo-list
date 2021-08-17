function tiraClass() {
  const selec = document.querySelectorAll('li');
  for (let index = 0; index < selec.length; index += 1) {
    if (selec[index].classList.contains('selected')) { selec[index].classList.remove('selected'); }
  }
}

function mudaCor(evento) {
  tiraClass();
  evento.target.classList.add('selected');
}

function adicionaTarefa() {
  const criaLi = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const lista = document.createElement('li');
  lista.addEventListener('click', mudaCor);
  criaLi.appendChild(lista);
  lista.innerText = getInput.value;
  getInput.value = '';
}

function tarefaLista() {
  const botão = document.querySelector('#criar-tarefa');
  botão.addEventListener('click', adicionaTarefa);
}
tarefaLista();

function risca() {
  const liste = document.querySelector('ol');
  liste.addEventListener('dblclick', (evento) => {
    evento.target.classList.toggle('completed');
  });
}
risca();

function limpaTarefa() {
  const getList = document.querySelector('ol');
  let ultimaLi = getList.lastElementChild;
  while (ultimaLi) {
    getList.removeChild(ultimaLi);
    ultimaLi = getList.lastElementChild;
  }
}
// codigo aprendido em: www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript

function getBotaoTarefa() {
  const botaoTarefa = document.getElementById('apaga-tudo');
  botaoTarefa.addEventListener('click', limpaTarefa);
}
getBotaoTarefa();

function limpaRiscado() {
  const tarefasCompletas = document.getElementsByClassName('completed');
  const list = document.querySelector('ol');
  for (let index = tarefasCompletas.length - 1; index >= 0; index -= 1) {
    list.removeChild(tarefasCompletas[index]);
  }
}
function getBotaoRiscado() {
  const botaoRiscado = document.getElementById('remover-finalizados');
  botaoRiscado.addEventListener('click', limpaRiscado);
}
getBotaoRiscado();
