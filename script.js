// Declarando as Variaveis:
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaOrdenadaTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonApagaFinalizados = document.getElementById('remover-finalizados');
const buttonRemoverTarefa = document.getElementById('remover-selecionado');
const buttonSalvarTarefas = document.getElementById('salvar-tarefas');
const buttonMoverCima = document.getElementById('mover-cima');
const buttonMoverBaixo = document.getElementById('mover-baixo');
const arrayCompleted = Array.from(listaOrdenadaTarefas.children);

// Criando uma Lista Ordenada de Tarefas:
function adicionarTarefa() {
  let valueInput = input.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = valueInput;
  novaTarefa.className = 'itemLista';
  novaTarefa.addEventListener('click', marcaItem);
  novaTarefa.addEventListener('dblclick', riscaItem);
  listaOrdenadaTarefas.appendChild(novaTarefa);
  input.value = '';
}
buttonCriarTarefa.addEventListener('click', adicionarTarefa);

// Marcando Item:
function marcaItem(evento) {
  let tarefas = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < tarefas.length; index += 1) {
    let atualTarefa = tarefas[index];
    if (atualTarefa.classList.contains('selected')) {
      atualTarefa.classList.remove('selected');
    }
    evento.target.classList.add('selected');
  }
};

// Riscando Item:
function riscaItem(evento) {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  }
  else {
    evento.target.classList.add('completed');
  }
};

// Botão Apaga Tudo:
buttonApagaTudo.addEventListener('click',function(evento) {
  listaOrdenadaTarefas.innerHTML = '';
});

// Botão Apaga Finalizados:
buttonApagaFinalizados.addEventListener('click',function(evento) {
  let arrayCompleted = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < arrayCompleted.length; index += 1) {
    let itemAtual = arrayCompleted[index];
    if (itemAtual.classList.contains('completed')) {
      listaOrdenadaTarefas.removeChild(itemAtual);
    }
  }
});

// Botão Salvar Item:
function loadList() {
  listaOrdenadaTarefas.innerHTML = localStorage.getItem('arrayCompleted');
}
window.onload = loadList;

buttonSalvarTarefas.addEventListener('click',function(evento) {
  localStorage.setItem('arrayCompleted', listaOrdenadaTarefas.innerHTML);
})

// Botão Mover para Cima:
buttonMoverCima.addEventListener('click',function (evento) {
  let arrayCompleted = Array.from(listaOrdenadaTarefas.children);
  for (let index = 1; index < arrayCompleted.length; index += 1) {
    if (arrayCompleted[index].classList.contains('selected')) {
      listaOrdenadaTarefas.insertBefore(arrayCompleted[index], arrayCompleted[index - 1]);
    }
  }
});

// Botão Mover para Baixo:
buttonMoverBaixo.addEventListener('click',function (evento) {
  let arrayCompleted = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < arrayCompleted.length; index += 1) {
    if (arrayCompleted[index].classList.contains('selected')) {
      listaOrdenadaTarefas.insertBefore(arrayCompleted[index], arrayCompleted[index + 2]);
    }
  }
})

// Botão Remover Item:
buttonRemoverTarefa.addEventListener('click',function (evento) {
  let arrayCompleted = Array.from(listaOrdenadaTarefas.children);
  for (let index = 0; index < arrayCompleted.length; index += 1) {
    let itemAtual = arrayCompleted[index];
    if (itemAtual.classList.contains('selected')) {
      listaOrdenadaTarefas.removeChild(itemAtual);
    }
  }
});