// Requisito 5
const botaoAdicionar = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
function criandoTarefa() {
  const lista = document.createElement('li');
  listaTarefa.appendChild(lista);
  lista.innerText = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', deixandoCinza);
  lista.addEventListener('dblclick', riscando);
}
botaoAdicionar.addEventListener('click', criandoTarefa);

// Requisito 7
const itemLista = document.getElementsByTagName('li');
function deixandoCinza(event) {
  for (let index = 0; index < itemLista.length; index += 1) {
    itemLista[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 9
function riscando(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}

// Requisito 10
const botaoApagar = document.getElementById('apaga-tudo');
function apagando() {
  const itens = document.getElementsByTagName('li');
  // const listaTarefa = document.getElementById('lista-tarefas');
  for (let index = itens.length - 1; index >= 0; index -= 1) {
    listaTarefa.removeChild(itens[index]);
  }
}
botaoApagar.addEventListener('click', apagando);

// Requisito 11
const botaoRemover = document.getElementById('remover-finalizados');
function removendo() {
  const finalizados = document.getElementsByClassName('completed');
  for (let index = finalizados.length - 1; index >= 0; index -= 1) {
    finalizados[index].remove();
  }
}
botaoRemover.addEventListener('click', removendo);

// Requisito 12
// Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
let botaoSalvar = document.getElementById('salvar-tarefas');
function salvar() {
  let itens = document.getElementsByTagName('li');
  // let finalizados = document.getElementsByClassName('completed');
  for (let index = 0; index < itens.length; index += 1) {
    if(itens[index].classList.contains('completed')) {
      localStorage.setItem('c'+index, itens[index].innerText);
    } else {
      localStorage.setItem(index, itens[index].innerText);
    }
  }
}
botaoSalvar.addEventListener('click', salvar);


let botaoHistorico = document.getElementById('recuperando');
function criandoTarefaAgain() {
  console.log(localStorage.length);
  for (let index = 0; index < localStorage.length; index += 1) {
    if (localStorage.getItem(index)) {
    let listaNova = document.createElement('li');
    listaTarefa.appendChild(listaNova);
    listaNova.innerText = localStorage.getItem(index);
    listaNova.addEventListener('click', deixandoCinza);
    listaNova.addEventListener('dblclick', riscando);
  } else {
    let listaNova = document.createElement('li');
    listaTarefa.appendChild(listaNova);
    listaNova.innerText = localStorage.getItem('c'+index);
    listaNova.classList.add('completed');
    listaNova.addEventListener('click', deixandoCinza);
    listaNova.addEventListener('dblclick', riscando);
  }
  }
}
botaoHistorico.addEventListener('click', criandoTarefaAgain);

// Requisito 13
// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas


// Requisito 14
// Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
