let tarefas = null;
const botaoTarefa = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const todo = document.getElementsByClassName('todo');
const apagaFeito = document.getElementById('remover-finalizados');
const removeSelecionado = document.getElementById('remover-selecionado');
const salve = document.getElementById('salvar-tarefas');
const subir = document.getElementById('mover-cima');
const descer = document.getElementById('mover-baixo');

function addLista() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  ol.appendChild(li);
  li.className = 'todo';
  todo[todo.length - 1].innerText = tarefas;
}

function armazenarTarefa() {
  const tarefa = document.getElementById('texto-tarefa');
  if (!tarefa.value) {
    console.log('valor invalido');
  } else {
    tarefas = tarefa.value;
    tarefa.value = '';
    addLista();
  }
}

function limpaBg() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].classList.contains('selected')) {
      lista[i].classList.remove('selected');
    }
  }
}

function changeBg(clicado) {
  limpaBg();
  const alvo = clicado;
  alvo.target.classList.add('selected');
}

function completo(clicado) {
  const compl = clicado;
  compl.target.classList.toggle('completed');
}

function deletaLista() {
  const elemento = todoList.children;
  for (let i = 0; i < elemento.length; i += 0) {
    todoList.removeChild(elemento[0]);
  }
}

function apagaFinalizado() {
  const remover = document.getElementsByClassName('completed');
  for (let i = 0; i < remover.length; i += 0) {
    todoList.removeChild(remover[0]);
  }
}

function remSelecionado() {
  const remover = document.getElementsByClassName('selected');
  for (let i = 0; i < remover.length; i += 0) {
    todoList.removeChild(remover[0]);
  }
}

// 12 feita com ideia do colega Marcelo Adriano
function salvar() {
  if (localStorage.length !== 0) {
    localStorage.clear();
  }
  for (let i = 0; i < todo.length; i += 1) {
    const separador = '- ';
    localStorage.setItem(i, (todo[i].innerText + separador + todo[i].className));
  }
}

function recarregar() {
  const texto = 0;
  const classe = 1;
  for (let index = 0; index < localStorage.length; index += 1) {
    const array = localStorage.getItem(index);
    const salves = array.split('- ');
    const li = document.createElement('li');
    todoList.appendChild(li);
    li.className = salves[classe];
    li.innerText = salves[texto];
  }
}

function up() {
  const select = document.getElementsByClassName('selected')[0];
  if (select !== todoList.firstElementChild && select !== undefined) {
    todoList.insertBefore(select, select.previousSibling);
  }
}
subir.addEventListener('click', up);
function down() {
  const select = document.getElementsByClassName('selected')[0];
  if (select !== todoList.lastElementChild && select !== undefined) {
    todoList.insertBefore(select, select.nextSibling.nextSibling);
  }
}

function carregadorDeFuncao() {
  descer.addEventListener('click', down);
  salve.addEventListener('click', salvar);
  removeSelecionado.addEventListener('click', remSelecionado);
  todoList.addEventListener('dblclick', completo);
  apagaFeito.addEventListener('click', apagaFinalizado);
  apagaTudo.addEventListener('click', deletaLista);
  todoList.addEventListener('click', changeBg);
  botaoTarefa.addEventListener('click', armazenarTarefa);
}
carregadorDeFuncao();
window.onload = recarregar;
