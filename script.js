function listatarefas() {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criarTarefa = document.querySelector('#criar-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');

  criarTarefa.addEventListener('click', () => {
    const lista = document.createElement('li');
    listaTarefas.appendChild(lista);
    lista.innerHTML = textoTarefa.value;
    textoTarefa.value = '';

    backTarefas(lista);

    duploClick(lista);
  });
}

listatarefas();

function backTarefas(elementoLi) {
  elementoLi.addEventListener('click', addBack);
}

function addBack(event) {
  let listaDeTarefas = document.querySelectorAll('li');
  for (let i = 0; i < listaDeTarefas.length; i += 1) {
    listaDeTarefas[i].classList.remove('alterBack');
  }
  event.target.classList.add('alterBack');
}
function duploClick(elementoLi) {
  elementoLi.addEventListener('dblclick', addDlclick);
}

function addDlclick(event) {
  event.target.classList.toggle('completed');
}
