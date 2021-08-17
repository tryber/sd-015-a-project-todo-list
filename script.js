function selecionaTarefa(evento) {
  const itensLista = document.getElementsByClassName('item');
  const itemSelecionado = evento.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].style.backgroundColor = 'white';
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function tarefaCompleta(evento) {
  const itemCompleto = evento.target;
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  itemCompleto.classList.toggle('completed');
}
const lista = document.getElementById('lista-tarefas');

function criarTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'item';
  novaTarefa.innerHTML = tarefa;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', selecionaTarefa);
  novaTarefa.addEventListener('dblclick', tarefaCompleta);
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarTarefa);

function limpaTarefas() {
  lista.innerHTML = '';
}

const limpar = document.getElementById('apaga-tudo');
limpar.addEventListener('click', limpaTarefas);

function limparFinalizados() {
  // ref: http://devfuria.com.br/javascript/dom-remove-child/
  // ref: https://www.w3schools.com/jsref/prop_node_childnodes.asp
  for (let index = 0; index < lista.childNodes.length; index += 1) {
    const itensCompletos = lista.childNodes[index];
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    if (itensCompletos.classList.contains('completed')) {
      lista.removeChild(itensCompletos);
      index -= 1;
    }
  }
}

const remover = document.getElementById('remover-finalizados');
remover.addEventListener('click', limparFinalizados);
