const section = document.getElementById('section');
function adicionarInput() {
  const campoInput = document.createElement('input');
  section.appendChild(campoInput);
  campoInput.id = 'texto-tarefa';
}
adicionarInput();

function adicionarBotao() {
  const botaoAdicionar = document.createElement('button');
  section.appendChild(botaoAdicionar);
  botaoAdicionar.id = 'criar-tarefa';
  botaoAdicionar.innerText = 'Adicionar';
}
adicionarBotao();

function adicionarLista() {
  const campoLista = document.createElement('ol');
  section.appendChild(campoLista);
  campoLista.id = 'lista-tarefas';
}
adicionarLista();

const itemLista = document.getElementsByTagName('li');
function colorir(event) {
  for (let index = 0; index < itemLista.length; index += 1) {
    itemLista[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscar(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}

const clique = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa');
function adicionarTarefa() {
  const lista = document.createElement('li');
  listaTarefas.appendChild(lista);
  lista.innerText = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', colorir);
  lista.addEventListener('dblclick', riscar);
}
clique.addEventListener('click', adicionarTarefa);
