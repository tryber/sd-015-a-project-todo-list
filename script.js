let btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);
let newTarefaText = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');


function criarTarefa() {
  let textoTarefa = newTarefaText.value
  if (textoTarefa) {
    let liTarefasList = document.createElement('li'); //lista tarefas
    liTarefasList.id = "listaTarefas"
    liTarefasList.innerText = textoTarefa;
    listaTarefas.appendChild(liTarefasList);
    console.log(newTarefaText);
    newTarefaText.value = "";
    liTarefasList.addEventListener('click', colorirLista);
    liTarefasList.addEventListener('dblclick', riscarElemento); 
  }
  else {
    alert('Não é possível acrescentar tarefas em branco');
  }
}

function colorirLista(evento) {
  const colorir = evento.target;
  qualcor(colorir);
}

function qualcor(colorir) {
  let tarefas = document.querySelectorAll('#listaTarefas');
  for (let index = 0; index < tarefas.length; index+=1) {
    tarefas[index].style.backgroundColor = 'transparent';
    colorir.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function riscarElemento(evento) {
  const teste = evento.target;
  teste.classList.toggle('completed');
}