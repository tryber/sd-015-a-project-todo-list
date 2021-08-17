const btAdd = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const corDestaque = 'rgb(128, 128, 128)';
const btClear = document.querySelector('#apaga-tudo');
const btRemoverFinalizados = document.querySelector('#remover-finalizados');
const btRemoverSelecionado = document.querySelector('#remover-selecionado');
const btMoverCima = document.querySelector('#mover-cima');
const btMoverBaixo = document.querySelector('#mover-baixo');
const btSalvarTarefas = document.querySelector('#salvar-tarefas');

function addTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const tarefaAdicionada = document.createElement('li');
  tarefaAdicionada.innerHTML = input.value;
  input.value = '';
  listaTarefas.appendChild(tarefaAdicionada);
}

btAdd.addEventListener('click', addTarefa);

function selecTarefa(evento) {
  const tarefas = document.querySelectorAll('li');
  const auxEvento = evento;
  for (let i = 0; i < tarefas.length; i += 1) {
    const aux = tarefas[i];
    aux.style.backgroundColor = 'white';
  }
  auxEvento.target.style.backgroundColor = corDestaque;
}

listaTarefas.addEventListener('click', selecTarefa);

function riscarTarefa(evento) {
  const aux = evento;
  if (aux.target.className === 'completed') {
    aux.target.classList.remove('completed');
  } else {
    aux.target.className = 'completed';
  }
}

listaTarefas.addEventListener('dblclick', riscarTarefa);

function clear() {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    const aux = tarefas[i];
    aux.remove();
  }
}

btClear.addEventListener('click', clear);

function clearCompleted() {
  const tarefasFeitas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasFeitas.length; i += 1) {
    const aux = tarefasFeitas[i];
    aux.remove();
  }
}

btRemoverFinalizados.addEventListener('click', clearCompleted);

function apagarSelecionado() {
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    const aux = tarefas[i];
    if (aux.style.backgroundColor === corDestaque) {
      aux.remove();
    }
  }
}

btRemoverSelecionado.addEventListener('click', apagarSelecionado);

function moverCima() {
  const tarefas = document.querySelectorAll('li');
  for (let i = 1; i < tarefas.length; i += 1) {
    const selecionada = tarefas[i];
    const acima = tarefas[i - 1];
    const auxHtlm = acima.innerHTML;
    const auxColor = 'white';
    const auxClass = acima.className;
    if (selecionada.style.backgroundColor === corDestaque) {
      acima.innerHTML = selecionada.innerHTML;
      acima.style.backgroundColor = selecionada.style.backgroundColor;
      acima.className = selecionada.className;
      selecionada.innerHTML = auxHtlm;
      selecionada.style.backgroundColor = auxColor;
      selecionada.className = auxClass;
    }
  }
}

btMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  const tarefas = document.querySelectorAll('li');
  for (let i = tarefas.length - 2; i >= 0; i -= 1) {
    console.log(tarefas.length);
    const selecionada = tarefas[i];
    const aBaixo = tarefas[i + 1];
    const auxHtlm = aBaixo.innerHTML;
    const auxColor = 'white';
    const auxClass = aBaixo.className;
    if (selecionada.style.backgroundColor === corDestaque) {
      aBaixo.innerHTML = selecionada.innerHTML;
      aBaixo.style.backgroundColor = selecionada.style.backgroundColor;
      aBaixo.className = selecionada.className;
      selecionada.innerHTML = auxHtlm;
      selecionada.style.backgroundColor = auxColor;
      selecionada.className = auxClass;
    }
  }
}

btMoverBaixo.addEventListener('click', moverBaixo);

function salvarLista() {
  localStorage.setItem('lista', listaTarefas.innerHTML);
}

btSalvarTarefas.addEventListener('click', salvarLista);

window.onload = function abrirPagina() {
  listaTarefas.innerHTML = localStorage.getItem('lista');
  const tarefas = document.querySelectorAll('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].addEventListener('click', selecTarefa);
    tarefas[i].addEventListener('dblclick', riscarTarefa);
  }
};
