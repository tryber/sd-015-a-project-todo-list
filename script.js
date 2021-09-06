const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// FUNÇÕES DE SELECIONAR TAREFA(bgCinza) E COMPLETA-LA(riscar)
// essas funções vem antes de criar as tarefas por causa do lint, elas funcionam graças ao principio de hoisting
function bgCinza(event) {
  const tarefa = document.getElementsByClassName('tarefa');

  for (let index = 0; index < tarefa.length; index += 1) {
    tarefa[index].classList.remove('bgCinza');
    event.target.classList.add('bgCinza');
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

  // chama a função bgCinza logo depois de criar a tarefa, antes disso a tarefa não existe portanto se eu chamar depois, ela não vai funcionar, não tem como atribuir algo, a alguma coisa que não existe
  tarefaCriada.addEventListener('click', bgCinza);
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
  // console.log(deletaCompletos);
  // aqui preciso pedir para o while excluir o indice 0 pois, se eu pedir pra ele excluir os elementos que contém a classe completed, quando a lista estiver vazia, ela ainda existirá, e da erro de lista indefinida
  while (deletaCompletos[0]) {
    // console.log(deletaCompletos[0]);
    deletaCompletos[0].remove();
  }
  // condição para excluir apenas um elemento riscado por click
  // for (let index = 0; index < deletaCompletos.length; index += 1) {
  //   deletaCompletos[index].remove(deletaCompletos[index]);
  // }
}
const btnLimparCompletos = document.getElementById('remover-finalizados');
btnLimparCompletos.addEventListener('click', limparCompletos);

// MECANICA PARA SALVAR A LISTA NO BROWSER E EXIBI-LA QUANDO QUANDO ELA FOR CARREGADA NAVAMENTE

function salvarLista() {
  // listaTarefas = ol no html
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas.innerHTML)); // add o conteudo da ol (no caso as li) no browser -> chave = listaTarefas / valor = json.stringify
  // console.log(listaTarefas.innerHTML);
}
const btnSalvarLista = document.getElementById('salvar-tarefas');
btnSalvarLista.addEventListener('click', salvarLista);

const exibir = JSON.parse(localStorage.getItem('listaTarefas')); // pego o conteudo q está no local storage, e coloco na variavel exibir
window.onload = exibir; // variavel exibir é carregada na pagina

// listaTarefas = ol no html
listaTarefas.innerHTML = exibir; // e coloco o conteudo do local storage no conteudo da ol

// BOTÕES PARA MOVER AS TAREFAS

function moverCima() {
  const tarefa = document.getElementsByClassName('tarefa');
  for (let i = 1; i < tarefa.length; i += 1) {
    if (tarefa[i].className === 'tarefa bgCinza') {
      listaTarefas.insertBefore(tarefa[i], tarefa[i - 1]);
    }
  }
}
const botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  const tarefa = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefa.length - 1; i += 1) {
    if (tarefa[i].className === 'tarefa bgCinza') {
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
    if (tarefa[i].className === 'tarefa bgCinza') {
      tarefa[i].remove();
    }
  }
}
const botaoRmvSelecionado = document.getElementById('remover-selecionado');
botaoRmvSelecionado.addEventListener('click', removerSelecionado);
