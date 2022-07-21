const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// FUNÇÕES DE SELECIONAR TAREFA(bgCinza) E COMPLETA-LA(riscar)
function selecionado(event) {
  const tarefa = document.getElementsByClassName('tarefa');

  for (let index = 0; index < tarefa.length; index += 1) {
    tarefa[index].classList.remove('selecionado');
    event.target.classList.add('selecionado');
  }
}

function riscado(event) {
  event.target.classList.toggle('completed');
}

// CRIAÇÃO DA MECANICA DE ADD TAREFAS COM O BOTAO E INPUT

function criarTarefa() {
  const tarefaCriada = document.createElement('li');
  tarefaCriada.className = 'tarefa';
  tarefaCriada.innerHTML = inputTarefa.value;
  listaTarefas.appendChild(tarefaCriada);
  inputTarefa.value = '';

  tarefaCriada.addEventListener('click', selecionado);
  tarefaCriada.addEventListener('dblclick', riscado);
}
const btnAddTarefa = document.getElementById('criar-tarefa');
btnAddTarefa.addEventListener('click', criarTarefa);

// FUNÇÕES PARA LIMPAR LISTA E TAREFAS COMPLETAS

function limparLista() {
  const deletaLista = document.getElementById('lista-tarefas');

  while (deletaLista.lastChild) {
    deletaLista.removeChild(deletaLista.lastChild);
  }
}
const btnlimparLista = document.getElementById('apaga-tudo');
btnlimparLista.addEventListener('click', limparLista);

function limparCompletos() {
  const deletaCompletos = document.getElementsByClassName('completed');

  while (deletaCompletos[0]) {
    deletaCompletos[0].remove();
  }
}
const btnLimparCompletos = document.getElementById('remover-finalizados');
btnLimparCompletos.addEventListener('click', limparCompletos);

// MECANICA PARA SALVAR A LISTA NO BROWSER E EXIBI-LA QUANDO QUANDO ELA FOR CARREGADA NAVAMENTE

function salvarLista() {
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas.innerHTML));
}
const btnSalvarLista = document.getElementById('salvar-tarefas');
btnSalvarLista.addEventListener('click', salvarLista);

const exibir = JSON.parse(localStorage.getItem('listaTarefas'));
window.onload = exibir;

listaTarefas.innerHTML = exibir;

// BOTÕES PARA MOVER AS TAREFAS

function moverCima() {
  const tarefa = document.getElementsByClassName('tarefa');
  for (let i = 1; i < tarefa.length; i += 1) {
    if (tarefa[i].className !== 'tarefa') {
      listaTarefas.insertBefore(tarefa[i], tarefa[i - 1]);
    }
  }
}
const botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  const tarefa = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefa.length - 1; i += 1) {
    if (tarefa[i].className !== 'tarefa') {
      listaTarefas.insertBefore(tarefa[i + 1], tarefa[i]);
    }
  }
}
const botaoMoverBaixo = document.getElementById('mover-baixo');
botaoMoverBaixo.addEventListener('click', moverBaixo);

// FUNÇÃO EXCLUIR SELECIONADO

function removerSelecionado() {
  const tarefa = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefa.length; i += 1) {
    if (tarefa[i].className === 'tarefa selecionado') {
      tarefa[i].remove();
    }
  }
}
const botaoRmvSelecionado = document.getElementById('remover-selecionado');
botaoRmvSelecionado.addEventListener('click', removerSelecionado);
