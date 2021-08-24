const criarTarefa = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

// consultado o repositorio https://github.com/tryber/sd-015-a-project-todo-list/blob/arthur-teixeira-santos-todo-list-project/script.js
// Alterar a cor de fundo

function trocaCor(event) {
  if (document.querySelector('.selecionada')) {
    document.querySelector('.selecionada').classList.remove('selecionada');
  }
  event.target.classList.add('selecionada');
}

// Colocar como completa

function completar(event) {
  if (event.target.className.includes('completed')) {
    document.querySelector('.completed').classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Criar evento
function criTar(event) {
  event.preventDefault();
  const criarLi = document.createElement('li');
  criarLi.innerText = texto.value;
  listaTarefa.appendChild(criarLi);
  criarLi.addEventListener('click', trocaCor);
  criarLi.addEventListener('dblclick', completar);
  texto.value = '';
}

criarTarefa.addEventListener('click', criTar);
