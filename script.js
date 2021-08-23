const criarTarefa = document.getElementById('criar-tarefa');
let texto = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function criTar(event) {
  event.preventDefault();
  let criarLi = document.createElement('li');
  criarLi.innerText = texto.value;
  listaTarefa.appendChild(criarLi);
  texto.value = '';
}
criarTarefa.addEventListener('click', criTar);
